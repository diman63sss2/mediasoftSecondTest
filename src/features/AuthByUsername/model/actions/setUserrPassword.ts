import { AuthByUsernameActionTypes, SET_USER_PASSWORD } from '../../model/types/loginActionTypes';

export const setUserPassword = (password: string): AuthByUsernameActionTypes => ({
    type: SET_USER_PASSWORD,
    payload: password,
});
