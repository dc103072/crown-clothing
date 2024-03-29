import React, {useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
//import { auth, createUserProfileDocument  } from './firebase/firebase.utilis';
//import { setCurrentUser } from './redux/user/user.actions';
import {selectCurrentUser} from './redux/user/user.selectors';
import {createStructuredSelector } from 'reselect';
import CheckoutPage from './pages/checkout/checkout.component';
//import { selectCollectionsForPreview } from './redux/shop/shop.selectors';
import { checkUserSession } from './redux/user/user.actions';


//class App extends React.Component {
const App = ({checkUserSession, currentUser}) => {
  useEffect(() => {
    checkUserSession()
  }, [checkUserSession]);
  //componentDidMount() {
  //const {setCurrentUser } = this.props;
  //const { checkUserSession } = this.props;
  //checkUserSession();

/*
  this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
   if (userAuth) {
    const userRef = await createUserProfileDocument(userAuth);
    userRef.onSnapshot(snapShot => {
      setCurrentUser({
   
          id: snapShot.id,
          ...snapShot.data()
        })
  
    });
   }
    setCurrentUser(userAuth);
    //addCollectionAndDocuments('collections', collectionsArray.map(({title, items}) => ({ title, items})));
    });
  */
   // }
/*
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
*/

//  render() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route exact path='/signin' render={() => currentUser ? (<Redirect to='/' />) : 
        (<SignInAndSignUpPage/>)
      }
      />
      </Switch>
    </div>
  );
  }



const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  //setCurrentUser: user => dispatch(setCurrentUser(user))
  checkUserSession: () => dispatch(checkUserSession())
});

//export default App;
export default connect(mapStateToProps,mapDispatchToProps)(App);
