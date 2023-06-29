import React, { Suspense } from "react";
import './index.scss';
import { Link, Route, Routes } from "react-router-dom";
import { CartPageAsync } from "./pages/CartPage/CartPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";

const App = () => {
  return (
    <div className="app">
      <Link to={'/'}>
        Главная
      </Link>
      <Link to={'/cart'}>
        Корзина
      </Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            <Route path={'/cart'} element={<CartPageAsync/>}/>
            <Route path={'/'}  element={<MainPageAsync/>}/>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;