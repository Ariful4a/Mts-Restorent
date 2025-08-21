import { Navigate, useLocation } from "react-router";
import useAdmin from "../../hooks/useAdmin";
import useAuth from "../../hooks/useAuth";


const AdminRoute = () => {
   const location = useLocation();
    const {user, loading} = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();

    if(loading || isAdminLoading){
        return <span className="loading loading-bars loading-xl"></span>
    }

    if(user && isAdmin){
        return children;
    }

  return <Navigate to={'/login'} state={{from: location}} replace></Navigate>
};


export default AdminRoute;

