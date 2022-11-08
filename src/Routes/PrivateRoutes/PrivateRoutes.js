import React from 'react';

const PrivateRoutes = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <h1>...</h1>
    }

    if (user) {
        return children;
    }
    return <Navigate  to="/login"  state={{ from: location }} replace></Navigate>
};

export default PrivateRoutes;