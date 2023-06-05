import './styles/App.css';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import Header from './components/Header/Header.jsx';
import { useContext, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { AuthContext } from './context';
import { useFetching } from './components/hooks/useFetching';
import jwtDecode from 'jwt-decode';
import Footer from './components/Footer/Footer.jsx';
import AppRouter from './components/AppRouter.jsx';

const App = observer(() => {
  const { user } = useContext(AuthContext);

  const [fetchCheck, isCheckLoading] = useFetching(async () => {
    /*Здесь должен быть запрос на авторизацию пользователя, но у https://fakestoreapi.com его нет.... +_+  */
    /*Рефреш токена в https://fakestoreapi.com тоже нет.... +_+ */
    /* Поэтому делаем только проверку на наличие токена. Времени работы токена на ресурсе тоже не предусмотренно,
     * поэтому установлено ограничение работы токена в 1 час.
     * */
    let token = localStorage.getItem('token');
    const now = new Date().getTime();
    const timeCreateToken = jwtDecode(token).iat * 1000;
    const timeDiff = now - timeCreateToken;
    // Если разница во времени больше заданного интервала (например, 1 час), то токен считается недействительным
    const maxAllowedTimeDiffMs = 3600 * 1000; // 1 час
    if (timeDiff > maxAllowedTimeDiffMs) {
      localStorage.removeItem('token');
      console.log('Токен устарел и был удален');
      user.setIsAuth(false);
    } else {
      console.log('Токен еще действителен');
      user.setUser(jwtDecode(token));
      user.setIsAuth(true);
    }
  });

  useEffect(
    () => {
      if (localStorage.getItem('token')) {
        fetchCheck().then((r) => {});
      } else {
        user.setIsAuth(false);
      }
    }, // eslint-disable-next-line
    []
  );

  if (isCheckLoading) {
    return <div>ЗАГРУЗКА.................</div>;
  }

  return (
    <BrowserRouter>
      {isCheckLoading && <div>ЗАГРУЗКА.................</div>}
      {user.isAuth !== null && (
        <div className="main">
          <Header />
          <AppRouter />
          <Footer />
        </div>
      )}
    </BrowserRouter>
  );
});

export default App;
