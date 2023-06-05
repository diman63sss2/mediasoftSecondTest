import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App.jsx';
import UserStore from "./store/UserStore";
import {AuthContext} from './context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AuthContext.Provider value={{
        user: new UserStore()
    }}>
        <App />
    </AuthContext.Provider>
);

