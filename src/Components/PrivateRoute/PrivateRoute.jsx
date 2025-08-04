import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { Navigate, useLocation } from "react-router";



const PrivateRoute = ({ children }) => {

    const location = useLocation();
    const {user, loading} = useContext(AuthContext);

    if(loading){
        return <span className="loading loading-bars loading-xl"></span>
    }

    if(user){
        return children;
    }

  return <Navigate to={'/login'} state={{from: location}} replace></Navigate>
 
};

export default PrivateRoute;