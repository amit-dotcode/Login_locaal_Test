import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useAuth from './Auth';

const ProtectedRoutes = ({auth}) => {

    // const auth = useAuth();
    return auth ? <Outlet /> : <Navigate to="/" />;
}

export default ProtectedRoutes;
