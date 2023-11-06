import { AuthByUsernameActionTypes, SET_USER_NAME } from '../../model/types/loginActionTypes';

export const setUsername = (username: string): AuthByUsernameActionTypes => ({
    type: SET_USER_NAME,
    payload: username,
});
