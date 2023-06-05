import { $host } from './index';
import jwtDecode from 'jwt-decode';

export const login = async (body) => {
  const axiosAPI = $host;
  const { data } = await axiosAPI.post('/auth/login', JSON.stringify(body), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  localStorage.setItem('token', data.token);
  return jwtDecode(data.token);
};
