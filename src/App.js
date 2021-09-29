import React from 'react';
import {Switch, Route,Link} from 'react-router-dom';
import {connect} from 'react-redux';

import Main from './components/Main';
import Register from './components/Register';
import SignIn from './components/SignIn';
import SignOut from './components/SignOut';
import withAuth from './components/withAuth';
import './App.css';


class App extends React.Component {
  render(){

    return (
      <>
      <nav>
      <Link to='/' style={{margin:'5px'}}>Main</Link>
      <Link to='/register' style={{margin:'5px'}}>Register</Link>
      <Link to='/signin' style={{margin:'5px'}}>Sign in</Link>
      <Link to='/signout' style={{margin:'5px'}}>Sign Out</Link>
      </nav>
      <Switch>
        <Route path='/' component={withAuth(Main,this.props.token)} exact />
        <Route path='/register' render={() => <Register/>}/>
        <Route path='/signin' render={() => <SignIn/>}/>
        <Route path='/signout' render={() => <SignOut/>}/>
      </Switch>
      </>

    );
  }
  
}

const mapStateToProps = (state) => {
  return {
      token:state.token
  }
}


export default connect(mapStateToProps)(App);
