import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import HomePage from './pages/home/home-page.component';
import ShopPage from './pages/shop/shop-page.component';
import Header from './components/header/header.component';
import SginInPage from './pages/sign-in/sign-in.component-page';
import { auth } from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(this.state.currentUser);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/sign-in' component={SginInPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
