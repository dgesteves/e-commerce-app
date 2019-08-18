import React, {useEffect} from 'react';
import {Switch, Route} from 'react-router-dom';
import {useDispatch} from 'react-redux';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage
  from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {setCurrentUser} from './store/actions/user/user-action';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(
        async userAuth => {
          if (userAuth) {
            const userRef = await createUserProfileDocument(userAuth);

            userRef.onSnapshot(snapshot => {
              dispatch(setCurrentUser({
                id: snapshot.id,
                ...snapshot.data(),
              }));
            });
          } else {
            dispatch(setCurrentUser(userAuth));
          }
        });
  }, [dispatch]);

  return (
      <div>
        <Header />
        <Switch>
          <Route
              exact
              path='/'
              component={HomePage}
          />
          <Route
              path='/shop'
              component={ShopPage}
          />
          <Route
              path='/signin'
              component={SignInAndSignUpPage}
          />
        </Switch>
      </div>
  );
}

export default App;
