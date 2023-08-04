import React from 'react'
import { useLocation, Navigate } from "react-router-dom";
import useAuth from '../hooks/useAuth';

const ProtectedRoute = ({ allowedRoles, children }) => {

    const { auth } = useAuth();
    const location = useLocation();

    //console.log("Verifying Auth", JSON.stringify(auth));

    return ( 
        auth?.roles?.find(role => allowedRoles?.includes(role))
        ? children
        : auth?.accessToken //changed from user to accessToken to persist login after refresh
            ? <Navigate to="/unauthorized" state={{ from: location }} replace />
            : <Navigate to="/" state={{ from: location }} replace />
    );
}

export default ProtectedRoute

