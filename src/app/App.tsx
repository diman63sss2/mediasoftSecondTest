import React from "react";
import './styles/index.scss';
import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "app/providers/router";
import { Navbar } from "widgets/Navbar";


const App = () => {
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={classNames('app', {special: true}, [theme])}>
      <Navbar/>
      <button onClick={toggleTheme}>
        TOGGLE THEME.
      </button>
      <AppRouter/>
    </div>
  );
};

export default App;