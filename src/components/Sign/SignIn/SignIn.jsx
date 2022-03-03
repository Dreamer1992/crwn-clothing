import React, { Component } from 'react';
import { connect } from 'react-redux';
import { auth } from '../../../firebase/config';
import { Button, Input } from '../../UI';

import { googleSignInStart } from '../../../redux/user/userActions';

import './SignIn.styles.scss';

class SignIn extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (err) {
      console.error(err);
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    const { googleSignInStart } = this.props;

    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with you email and password</span>

        <form onSubmit={this.handleSubmit}>
          <Input
            type="email"
            name="email"
            label="email"
            value={this.state.email}
            handleChange={this.handleChange}
          />

          <Input
            type="password"
            name="password"
            label="password"
            value={this.state.password}
            handleChange={this.handleChange}
          />

          <div className="buttons">
            <Button type="submit">Sign in</Button>
            <Button type="button" onClick={googleSignInStart} isGoogleSignIn>
              Sign in with Google
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
});

export default connect(null, mapDispatchToProps)(SignIn);
