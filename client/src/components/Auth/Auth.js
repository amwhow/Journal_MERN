import React, { useState } from "react";
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";
import { GoogleLogin } from "react-google-login";
import { useDispatch } from "react-redux";

import { useHistory } from "react-router-dom";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Input from "./Input";
import Icon from "./icon"
import useStyles from "./styles";

const Auth = () => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const [signedUp, setSignedUp] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  // toggle function, set showPassword to true if it was false and vice versa
  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleSubmit = () => {
    return 0;
  };

  const handleChange = () => {
    return 0;
  };

  const switchMode = () => {
    setSignedUp((prevSignedUp) => !prevSignedUp);
    setShowPassword(false);
  };

  const googleSuccess = async (res) => {
    // the ?. operator will not trigger an error if we can't access the object key after the dot
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch({ type: 'AUTH', data: { result, token }});
      history.push("/");
    } catch(error) {
      console.log(error)
    }
  }
  const googleFailure = (error) => {
    console.log(error);
    console.log("Unable to sign in with google.")
  }

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">{signedUp ? "Sign Up" : "Sign In"}</Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {signedUp && (
              <>
                <Input
                  name="firstName"
                  label="First Name"
                  handleChange={handleChange}
                  half
                />
                <Input
                  name="lastName"
                  label="Last Name"
                  handleChange={handleChange}
                  half
                />
              </>
            )}
            <Input
              name="email"
              label="Email"
              handleChange={handleChange}
              half
              type="email"
            />
            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              half
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />
            {signedUp && (
              <Input
                name="confirmPassword"
                label="Repeat Password"
                handleChange={handleChange}
              />
            )}
          </Grid>
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {signedUp ? "Sign up" : "Sign in"}
          </Button>
          {/* the google login component */}
          <GoogleLogin
            clientId="379906890546-q93h7e3dg2d7ucrbaiea9u5qrff71k0d.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button
                className={classes.googleButton}
                color="primary"
                fullWidth
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                startIcon={<Icon />}
                variant="contained"
              >
                Sign in with Google
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy="single_host_origin"
          />
          <Grid container justify="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                {signedUp
                  ? "Already have an account? Sign in here"
                  : "Don't have an account yet? Sign up here"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
