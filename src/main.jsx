import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store.js';

import CartProvider from './contexts/cart.context.jsx';

import './index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <CartProvider>
                    <App />
                </CartProvider>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
