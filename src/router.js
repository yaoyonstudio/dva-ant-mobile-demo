import React from 'react';
import { Router, Route, Switch } from 'dva/router';
// import IndexPage from './routes/IndexPage';
import HomePage from './routes/Home/HomePage';
import RegisterPage from './routes/Register/RegisterPage';
import PostsPage from './routes/Posts/PostsPage';
import DetailPage from './routes/Posts/DetailPage';
import TestPage from './routes/TestPage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/register" exact component={RegisterPage} />
        <Route path="/posts" exact component={PostsPage} />
        <Route path="/post" component={DetailPage} />
        <Route path="/test" exact component={TestPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
