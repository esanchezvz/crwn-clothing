import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import HomePage from './pages/home/home-page.component';
import ShopPage from './pages/shop/shop-page.component';
import Header from './components/header/header.component';

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </React.Fragment>
  );
};

export default App;
