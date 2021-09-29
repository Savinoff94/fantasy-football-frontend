import React from 'react';
import {Link} from 'react-router-dom';
import './Register.css'
import {connect} from 'react-redux';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: ''
    }
  }

  onNameChange = (e) => {
    this.setState({name:e.target.value})
  }
  onEmailChange = (e) => {
    this.setState({email:e.target.value})
  }
  onPasswordChange = (e) => {
    this.setState({password:e.target.value})
  }
  onSubmitSignIn =() => {
    console.log('onSubmitSignIn');
    fetch('http://localhost:4000/register',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify ({
        email:this.state.email,
        password:this.state.password,
        name:this.state.name
      })
    })
    .then(response => response.json())
    .then(user => {
      console.log('user',user);
    })
    .catch(e => {
      console.log(e);
    })
  }
  render() {
    return (
      <>
      <div id='containerForm'>
        <div id='subContainer'>
        <h2>Register</h2>
        <div id='formItem'>
          <label htmlFor="name">Name</label>
          <input type="text"
                name="name" id="name"
                onChange={this.onNameChange} />
        </div>
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
          <input type="submit"
                onClick={this.onSubmitSignIn}
                value="Register"/>
        </div>
        </div>
      </div>
      </>
    )
  }
}

export default connect()(Register)
