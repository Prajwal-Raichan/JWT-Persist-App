import axios from "../Api/axios";
import useAuth from "./useAuth";
import useLogout from "./useLogout";


const useRefreshToken = () => {
  const { setAuth} = useAuth();
  const logout=useLogout();

  const refresh = async () => {
    try {
      const response = await axios.get("/refresh", {
        withCredentials: true,
      });

      setAuth((prev) => {
        console.log("OLD TOKEN: " + JSON.stringify(prev.accessToken));
        console.log("FRESH TOKEN: " + response.data.accessToken);
        return {
          ...prev,
          roles: response.data.roles,
          accessToken: response.data.accessToken,
        };
      });

      return response.data.accessToken;
    } catch (error) {
      if (error.response && error.response.status === 403) {
        // Unauthorized, token expired
        console.log("Refresh token expired. Performing logout.");
        await logout(); 
      }
      throw error;
    }
  };

  return refresh;
};

export default useRefreshToken;




{/*
const useRefreshToken = () => {
  const { setAuth } = useAuth();

  const refresh = async () => {
    const response = await axios.get("/refresh", {
      withCredentials: true,
    });
    setAuth((prev) => {
      console.log("OLD TOKEN: "+JSON.stringify(prev.accessToken));
      console.log("FRESH TOKEN: "+response.data.accessToken);
      return { ...prev, 
        roles: response.data.roles,
        accessToken: response.data.accessToken };
    });
    return response.data.accessToken;
  };
  return refresh;
};

export default useRefreshToken;
*/}


