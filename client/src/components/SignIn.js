import { useState } from 'react';
import { Box, TextField, Button, CircularProgress } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { useHistory } from 'react-router-dom';

import { useStyles } from './Util';
import { useAuth } from '../AuthContext';

const SignIn = () => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [signInError, setSignInError] = useState('');
  const [emailStatus, setEmailStatus] = useState(false);
  const [passwordStatus, setPasswordStatus] = useState(false);
  const { signIn } = useAuth();
  const history = useHistory();

  const validateEmail = (event) => {
    setEmail(event.target.value);
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(event.target.value)) {
      setEmailError('Email is invalid!');
      setEmailStatus(false);
    } else {
      setEmailError('');
      setEmailStatus(true);
    }
  };

  const validatePassword = (event) => {
    setPassword(event.target.value);
    if (event.target.value.length < 6) {
      setPasswordError('Password length needs to be >= 6!');
      setPasswordStatus(false);
    } else {
      setPasswordError('');
      setPasswordStatus(true);
    }
  };

  const handleSignIn = async (event) => {
    event.preventDefault();
    try {
      setSignInError('');
      await signIn(email, password);
      history.push('/dashboard');
    } catch {
      setSignInError('Double check your email or password!');
    }
  };

  return (
    <form onSubmit={handleSignIn} noValidate>
      <Box marginTop={1}>
        {signInError && (
          <Alert
            severity="error"
            style={{
              borderRadius: '50px',
            }}
          >
            {signInError}
          </Alert>
        )}

        {emailError && (
          <Alert
            severity="warning"
            style={{
              marginTop: '8px',
              borderRadius: '50px',
              opacity: '0.8',
            }}
          >
            {emailError}
          </Alert>
        )}

        {passwordError && (
          <Alert
            severity="warning"
            style={{
              marginTop: '8px',
              borderRadius: '50px',
              opacity: '0.8',
            }}
          >
            {passwordError}
          </Alert>
        )}
      </Box>
      <Box marginTop={2} className={classes.label} autoComplete="off">
        <TextField
          type="email"
          id="email"
          fullWidth
          label="Email"
          required
          variant="outlined"
          value={email}
          onChange={validateEmail}
        />
      </Box>
      <Box marginTop={2} className={classes.label} autoComplete="off">
        <TextField
          type="password"
          id="password"
          fullWidth
          label="Password"
          required
          variant="outlined"
          value={password}
          onChange={validatePassword}
        />
      </Box>
      <Box align="center" paddingTop={2}>
        <Button
          type="submit"
          style={{
            background: '#22c1c3',
            borderRadius: '50px',
          }}
          variant="contained"
          size="large"
          fullWidth
          disabled={!emailStatus || !passwordStatus}
        >
          Sign In
        </Button>
      </Box>
    </form>
  );
};

export default SignIn;
