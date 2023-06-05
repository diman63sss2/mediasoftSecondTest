import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CART_ROUTE, MAIN_ROUTE } from '../../untils/const';
import logo from '../../images/logo.svg';
import cartImg from '../../images/cart.svg';
import cl from './Header.module.css';
import Modal from '../UI/Modal/Modal.jsx';
import LoginForm from '../Forms/LoginForm/LoginForm.jsx';
import { observer } from 'mobx-react-lite';
import { AuthContext } from '../../context';

const Header = observer(() => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [signVisible, setSignVisible] = useState(false);
  const [registerVisible, setRegisterVisible] = useState(false);

  const LogOut = () => {
    user.setIsAuth(false);
    user.setUser({});
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <header className={cl.header}>
      <div className="container">
        <div className={cl.header_container}>
          <Link to={MAIN_ROUTE} className={cl.logo}>
            <img src={logo} alt="Крутой логотип для хорошей компании" />
          </Link>
          {user.isAuth ? (
            <div className={cl.authorize}>
              <Link to={CART_ROUTE} className={cl.cart}>
                <img src={cartImg} alt="cart" />
                {user.numberProducts !== 0 && (
                  <div className={cl.num}>{user.numberProducts}</div>
                )}
              </Link>
              <div onClick={() => LogOut()} className={cl.sign}>
                Log out
              </div>
            </div>
          ) : (
            <div className={cl.authorize}>
              <div onClick={() => setSignVisible(true)} className={cl.sign}>
                sign in
              </div>
              <div
                onClick={() => setRegisterVisible(true)}
                className={cl.register}
              >
                sign up
              </div>
              <Modal visible={signVisible} setVisible={setSignVisible}>
                <LoginForm setSignVisible={setSignVisible} />
              </Modal>
              <Modal visible={registerVisible} setVisible={setRegisterVisible}>
                sign up - not realized(
              </Modal>
            </div>
          )}
        </div>
      </div>
    </header>
  );
});

export default Header;
