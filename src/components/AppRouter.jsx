import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../router";
import {AuthContext} from "../context";

const AppRouter = () => {
    const {user} = useContext(AuthContext);
    if(user.isAuth){
        return (
            <div className='content'>
                <Routes>
                    {privateRoutes.map(route =>
                        <Route
                            path={route.path}
                            element={route.component}
                            exact={route.exact}
                            key={route.path}>
                        </Route>
                    )}
                </Routes>
            </div>
        );
    }else{
        return (
            <div className='content'>
                <Routes>
                    {publicRoutes.map(route =>
                        <Route
                            path={route.path}
                            element={route.component}
                            exact={route.exact}
                            key={route.path}>
                        </Route>
                    )}
                </Routes>
            </div>
        );
    }
};

export default AppRouter;