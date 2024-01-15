import React from 'react';
import {createRoot} from 'react-dom/client';

import App from './App';
import './styles/common.scss'

const root = createRoot(document.getElementById('root'));

root.render(
    <App />
);