import { useDebugValue} from "react";
import { useStateAuthContext } from "../Contexts/ContextAuthProvider";

const useAuth = () => {
  const { auth } = useStateAuthContext();
  useDebugValue(auth, (auth) => (auth.username ? "Logged In" : "Logged Out"));
  return useStateAuthContext();
};

export default useAuth;
