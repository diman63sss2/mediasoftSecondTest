import React, { Suspense } from "react";
import './styles/index.scss';
import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "app/providers/router";
import { Navbar } from "widgets/Navbar";




const App = () => {
  const {theme} = useTheme();

  return (
    <div className={classNames('app', {special: true}, [theme])}>
      <Suspense fallback="">
        <Navbar/>
        <AppRouter/>
      </Suspense>
    </div>
  );
};

export default App;