import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import SignPage from './pages/SignPage/SignPage';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';

import { auth, createUserProfileDocument } from './firebase/config';

import { setCurrentUser } from './redux/user/userActions';
import { selectCurrentUser } from './redux/user/userSelectors';

import './App.css';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    // this.unsubscribeFromAuth = auth.onAuthStateChanged(
    //   async (userAuth) => {
    //     if (userAuth) {
    //       const userRef = await createUserProfileDocument(userAuth);

    //       userRef.onSnapshot((snapShot) => {
    //         setCurrentUser({
    //           id: snapShot.id,
    //           ...snapShot.data(),
    //         });
    //       });
    //     }

    //     setCurrentUser(userAuth);
    //   },
    //   (error) => console.log(error)
    // );
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/sign-in"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignPage />
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
