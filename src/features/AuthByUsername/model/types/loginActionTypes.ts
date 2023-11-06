export const SET_USER_NAME = 'SET_USER_NAME';
export const SET_USER_PASSWORD = 'SET_USER_PASSWORD';
export const LOGIN_BY_USER_NAME_REQUEST = 'LOGIN_BY_USER_NAME_REQUEST';
export const LOGIN_BY_USER_NAME_SUCCESS = 'LOGIN_BY_USER_NAME_SUCCESS';
export const LOGIN_BY_USER_NAME_FAILURE = 'LOGIN_BY_USER_NAME_FAILURE';

interface SetUsernameAction {
  type: typeof SET_USER_NAME;
  payload: string;
}

interface SetUserPasswordAction {
  type: typeof SET_USER_PASSWORD;
  payload: string;
}

interface LoginByUsernameRequestAction {
  type: typeof LOGIN_BY_USER_NAME_REQUEST;
}

interface LoginByUsernameSuccessAction {
  type: typeof LOGIN_BY_USER_NAME_SUCCESS;
}

interface LoginByUsernameFailureAction {
  type: typeof LOGIN_BY_USER_NAME_FAILURE;
  payload: string;
}

export type AuthByUsernameActionTypes =
  | SetUsernameAction
  | SetUserPasswordAction
  | LoginByUsernameRequestAction
  | LoginByUsernameSuccessAction
  | LoginByUsernameFailureAction;
