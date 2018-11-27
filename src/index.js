import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
const host = window.location.hostname
const uri = `ws://${host}:8081`
const ring = new Audio('https://androidhost.org/get/UmQzv')
ring.volume = 0.5


ReactDOM.render(<App uri={uri} ring={ring} />, document.getElementById('root'))


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
