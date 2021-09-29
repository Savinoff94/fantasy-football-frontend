import './SignIn.css';
import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import { loadUser } from '../redux/actions';
import {connect} from 'react-redux';


class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password:''
    }
  }
  onEmailChange = (e) => {
    this.setState({email:e.target.value})
  }
  onPasswordChange = (e) => {
    this.setState({password:e.target.value})
  }
  onSubmitSignIn = () => {
    fetch('http://localhost:4000/signin', {
      method:'POST',
      headers: {
        'Content-type':'application/json'
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    })
    .then(response => response.json())
    .then(userdata=>{
      console.log(userdata);
      this.props.loadUser(userdata);
      this.props.history.push('/');
    })
    .catch(e => {
      console.log(e);
    })
  }
  render() {
    return(
    <>
      <div id='containerForm'>
        <h2>Sign In</h2>
        <div id='formItem'>
          <label htmlFor="email">Email</label>
          <input type="email"
                name="email" id="email"
                onChange={this.onEmailChange} />
        </div>
        <div id='formItem'>
          <label htmlFor="password">Password</label>
          <input type="password"
                name="password" id="password"
                onChange={this.onPasswordChange} />
        </div>
        <div id='formItemButton'>
          <button onClick={this.onSubmitSignIn}>Sign In</button>
        </div>
      </div>
    </>
  )
  }
}
const mapStateToProps = (state) => {
    return null
}

const mapDispatchToProps = (dispatch) => {
return {
  loadUser: (data) => dispatch(loadUser(data))
}
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(SignIn));
