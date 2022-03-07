import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Button, Input } from '../../UI';

import {
  googleSignInStart,
  emailSignInStart,
} from '../../../redux/user/userActions';

import './SignIn.styles.scss';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: '',
  });

  const { email, password } = userCredentials;

  const handleSubmit = async (e) => {
    e.preventDefault();
    emailSignInStart(email, password);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with you email and password</span>

      <form onSubmit={handleSubmit}>
        <Input
          type="email"
          name="email"
          label="email"
          value={email}
          handleChange={handleChange}
        />

        <Input
          type="password"
          name="password"
          label="password"
          value={password}
          handleChange={handleChange}
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
};

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
