import { USER_LOGOUT, UserActionTypes } from '../types/userActionTypes';

export const userLogout = (): UserActionTypes => ({
    type: USER_LOGOUT,
});
