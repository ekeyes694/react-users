import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import App from '../components/App';

export default (
   <Router history={hashHistory}>
        path="/" component={App} />
    </Router>
)