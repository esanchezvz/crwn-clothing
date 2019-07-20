import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import HomePage from './pages/home/home-page.component';
import ShopPage from './pages/shop/shop-page.component';
import Header from './components/header/header.component';
import SginInPage from './pages/sign-in/sign-in.component-page';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          this.setState(
            {
              currentUser: { id: snapshot.id, ...snapshot.data() }
            },
            () => console.log(this.state)
          );
        });
      }

      this.setState({
        currentUser: userAuth
      });
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
