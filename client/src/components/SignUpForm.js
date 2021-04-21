import { Box, TextField, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

import { useStyles } from './Util';

const SignUpForm = () => {
  const classes = useStyles();
  return (
    <>
      <Box marginTop={2} className={classes.label} autoComplete="off">
        <TextField
          id="outlined-basic"
          fullWidth={true}
          label="Name"
          required={true}
          variant="outlined"
        />
      </Box>
      <Box marginTop={2} className={classes.label} autoComplete="off">
        <TextField
          id="outlined-basic"
          fullWidth={true}
          label="Email"
          required={true}
          variant="outlined"
        />
      </Box>
      <Box marginTop={2} className={classes.label} autoComplete="off">
        <TextField
          id="outlined-basic"
          fullWidth={true}
          label="Password"
          required={true}
          variant="outlined"
        />
      </Box>
      <Box marginTop={2} className={classes.label} autoComplete="off">
        <TextField
          id="outlined-basic"
          fullWidth={true}
          label="Confirm Password"
          required={true}
          variant="outlined"
        />
      </Box>
      <Box align="center" paddingTop={2}>
        <Button
          href="/dashboard"
          variant="contained"
          size="large"
          fullWidth={true}
          style={{
            background: '#ffae00',
            borderRadius: '50px',
          }}
        >
          Sign Up
        </Button>
      </Box>
    </>
  );
};

export default SignUpForm;
