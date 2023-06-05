import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../router';
import { useSelector } from 'react-redux';

const AppRouter = () => {
  const user = useSelector((state) => state.user);
  if (user.isAuth) {
    return (
      <div className="content">
        <Routes>
          {privateRoutes.map((route) => (
            <Route
              path={route.path}
              element={route.component}
              exact={route.exact}
              key={route.path}
            ></Route>
          ))}
        </Routes>
      </div>
    );
  } else {
    return (
      <div className="content">
        <Routes>
          {publicRoutes.map((route) => (
            <Route
              path={route.path}
              element={route.component}
              exact={route.exact}
              key={route.path}
            ></Route>
          ))}
        </Routes>
      </div>
    );
  }
};

export default AppRouter;
