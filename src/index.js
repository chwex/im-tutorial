import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import LoginComponent from './login/login';
import SignupComponent from './signup/signup';
import DashboardComponent from './dashboard/dashboard';

const firebase = require("firebase");
require("firebase/firestore");

firebase.initializeApp({
    apiKey: "AIzaSyAKN0MxdXZ51lPq4XFi2Kx_H_PpIsdharI",
    authDomain: "im-tutorial-61f38.firebaseapp.com",
    databaseURL: "https://im-tutorial-61f38.firebaseio.com",
    projectId: "im-tutorial-61f38",
    storageBucket: "im-tutorial-61f38.appspot.com",
    messagingSenderId: "178285969307",
    appId: "1:178285969307:web:49e344b4e468bf56b96b3e"
});

const routing = (
    <Router>
        <div id="routing-container">
            <Route path='/login' component={LoginComponent} ></Route>
            <Route path='/signup' component={SignupComponent} ></Route>
            <Route path='/dashboard' component={DashboardComponent} ></Route>
        </div>
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
