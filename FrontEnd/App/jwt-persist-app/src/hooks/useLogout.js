import useAuth from "./useAuth";
import axios from "../Api/axios";
import {useStateAuthContext} from '../Contexts/ContextAuthProvider'

const useLogout = () => {
    
    const { setAuth } = useAuth();
    const {setIsAuthorized, setUserRole } = useStateAuthContext();

    const logout = async () => {
        setAuth({});
        setIsAuthorized(false);
        setUserRole("");
        localStorage.removeItem("accessToken");
        localStorage.removeItem('persist');
        localStorage.clear();
            document.cookie = "jwtRefToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        try {
            const response = await axios('/logout', {
                withCredentials: true
            });
            console.log(response.data);
            console.log("Logged Out");
        } catch (err) {
            console.error(err);
        }
    }

    return logout;
}

export default useLogout