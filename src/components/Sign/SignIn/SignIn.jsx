import React from 'react';
import Button from '../../UI/Button/Button';
import Input from '../../UI/Input/Input';
import { signInWithGoogle } from '../../../firebase/config';
import './SignIn.styles.scss';

class SignIn extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({ email: '', password: '' });
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
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
            <Button onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
