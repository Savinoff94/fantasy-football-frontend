import './SignOut.css'
import {connect} from 'react-redux';
import { logOut } from '../redux/actions';
import React from 'react';
import SignIn from './SignIn';


class SignOut extends React.Component {
  render(){
    this.props.logOut();
  return(
    <><SignIn/></>
  )
  }
}

const mapStateToProps = (state) => {
    return null
}

const mapDispatchToProps = (dispatch) => {
return {
    logOut: () => dispatch(logOut())
}
}
  
export default connect(mapStateToProps,mapDispatchToProps)(SignOut)
