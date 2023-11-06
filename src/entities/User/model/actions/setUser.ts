import { User } from '../../model/types/user';
import { SET_USER, UserActionTypes } from '../types/userActionTypes';

export const setUser = (user: User): UserActionTypes => ({
    type: SET_USER,
    payload: user,
});
