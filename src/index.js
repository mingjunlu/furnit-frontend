import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';
import 'normalize.css/normalize.css';
import './assets/styles/custom-reset.css';
import './assets/styles/index.css';
import Router from './Router';

WebFont.load({
    google: {
        families: [
            'Poppins:400,300',
            'Playfair Display:400',
        ],
    },
});

ReactDOM.render(<Router />, document.getElementById('root'));
