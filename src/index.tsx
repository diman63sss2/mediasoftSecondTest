import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from 'app/providers/StoreProvider/config/store';
import { ErrorBoundary } from 'app/providers/ErrorBoundery';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import 'app/styles/index.scss';
import 'shared/config/i18n/i18n';
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from 'app/providers/StoreProvider/ui/StoreProvider';
import App from './app/App';

render(
    <BrowserRouter>
        <StoreProvider>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </StoreProvider>
    </BrowserRouter>,
    document.getElementById('root'),
);
