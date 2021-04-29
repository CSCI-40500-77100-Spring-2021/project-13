import { Box, TextField, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

import { useStyles } from './Util';

const SignInForm = () => {
  const classes = useStyles();
  return (
    <>
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
      <Box align="center" paddingTop={2}>
        <Button
          href="/dashboard"
          variant="contained"
          size="large"
          fullWidth={true}
          style={{
            background: '#22c1c3',
            borderRadius: '50px',
          }}
        >
          Sign In
        </Button>
      </Box>
    </>
  );
};

export default SignInForm;
