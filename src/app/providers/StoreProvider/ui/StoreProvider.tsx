import { ReactNode } from 'react';
import { applyMiddleware, createStore } from 'redux';
import { rootReducer, RootState } from 'app/providers/StoreProvider';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

interface StoreProviderProps {
  children?: ReactNode;
  initialState?: DeepPartial<StateSchema>;
}

export const StoreProvider = (props: StoreProviderProps) => {
    const {
        children,
        initialState,
    } = props;

    const verifiedInitialState: RootState | undefined = initialState as RootState | undefined;

    const store = createStore(
        rootReducer,
        verifiedInitialState,
        applyMiddleware(thunk),
    );

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
