import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';
import 'normalize.css/normalize.css';
import './assets/styles/custom-reset.css';
import './assets/styles/index.css';
import App from './components/App';

WebFont.load({
    google: {
        families: [
            'Poppins:400,300',
            'Playfair Display:400',
        ],
    },
});

ReactDOM.render(<App />, document.getElementById('root'));
