import { createSelector } from 'reselect';
import { RootState } from 'app/providers/StoreProvider';

const selectGetLoginUsername = (state: RootState) => state.authByUsernameReducer.username;

export const getLoginUsername = createSelector(
    selectGetLoginUsername,
    (username) => username,
);

const selectGetLoginPassword = (state: RootState) => state.authByUsernameReducer.password;

export const getLoginPassword = createSelector(
    selectGetLoginPassword,
    (password) => password,
);

const selectGetLoginIsLoading = (state: RootState) => state.authByUsernameReducer.isLoading;

export const getLoginIsLoading = createSelector(
    selectGetLoginIsLoading,
    (isLoading) => isLoading,
);

const selectGetLoginError = (state: RootState) => state.authByUsernameReducer.error;

export const getLoginError = createSelector(
    selectGetLoginError,
    (error) => error,
);
