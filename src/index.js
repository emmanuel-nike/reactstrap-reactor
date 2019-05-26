import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';

WebFont.load({
  google: {
    families: ['Inconsolata:300,400,700', 'monospace']
  }
});

ReactDOM.render(<App />, document.getElementById('root'));
