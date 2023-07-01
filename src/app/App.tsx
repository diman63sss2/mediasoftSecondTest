import React, {Suspense} from "react";
import './styles/index.scss';
import { Link, Route, Routes } from "react-router-dom";
import { MainPage } from "pages/MainPage";
import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { CartPage } from "pages/CartPage";


const App = () => {
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={classNames('app', {special: true}, [theme])}>
      <button onClick={toggleTheme}>
        TOGGLE THEME.
      </button>
      <Link to={'/'}>
        Главная
      </Link>
      <Link to={'/cart'}>
        Корзина
      </Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            <Route path={'/cart'} element={<CartPage/>}/>
            <Route path={'/'}  element={<MainPage/>}/>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;