import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.scss'
import './shared/config/i18n/i18n';
import {HashRouter as BrowserRouter} from "react-router-dom";
import ThemeProvider from "./shared/lib/context/ThemeProvider";
import {Provider} from "react-redux";
import {setupStore} from "./store/store";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const store = setupStore();

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <ThemeProvider>
                    <App/>
                </ThemeProvider>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);

