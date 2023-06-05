import React, { useContext, useState } from 'react';
import cl from './LoginForm.module.css';
import { useFetching } from '../../hooks/useFetching';
import Input from '../../UI/Input/Input.jsx';
import { login } from '../../../http/userAPI';
import { useSelector, useDispatch } from 'react-redux';
import { setIsAuth, setUser } from '../../../store/userActions';

const LoginForm = ({ setSignVisible }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  /* username: hopkins
   *  password: William56$hj
   * */
  const [fetchLogin, isLoginLoading] = useFetching(async (formData) => {
    const response = await login(formData);
    setSignVisible(false);
    dispatch(setUser(response));
    dispatch(setIsAuth(true));
    console.log(response);
  });

  const [formData, setFormData] = useState({
    username: 'hopkins',
    password: 'William56$hj',
  });

  const singIn = async (e) => {
    e.preventDefault();
    console.log('Validation');
    if (formData.username && formData.password) {
      await fetchLogin(formData);
    }
  };

  return (
    <form>
      <div className={cl.header}>
        <span className={cl.title}>Авторизация</span>
      </div>
      <div className={cl.body}>
        <Input
          onChange={(e) =>
            setFormData({ ...formData, username: e.target.value })
          }
          type="login"
          value={formData.username}
          id={'authenticationLogin'}
          title="Login"
        />
        <Input
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          type="password"
          value={formData.password}
          id={'authenticationPassword'}
          title="Password"
          autoComplete="on"
        />
        <button className={cl.button} onClick={(e) => singIn(e)}>
          Login
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
