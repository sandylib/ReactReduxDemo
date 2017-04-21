import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import UsersAllSettedPage from './components/users/UsersAllSettedPage';//UsersAllUnSettedPage
import UsersAllUnSettedPage from './components/users/UsersAllUnSettedPage';//

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="setted" component={UsersAllSettedPage} />  
    <Route path="unsetted" component={UsersAllUnSettedPage} />  
  </Route>
);
