import { INIT_AUTH_DATA, UserActionTypes } from '../types/userActionTypes';

export const initAuthData = (): UserActionTypes => ({
    type: INIT_AUTH_DATA,
});
