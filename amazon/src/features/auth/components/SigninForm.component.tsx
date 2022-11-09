import { FC, FormEvent } from "react";
import {
  Box,
  Grid,
  TextField,
  InputLabel,
  Typography,
  Button,
  Divider,
} from "@mui/material";

import { Link } from "react-router-dom";
import useInput from "../../../hooks/use-input";
import { validateEmail } from "../../../shared/utils/validation/email";
import { validatePasswordLength } from "../../../shared/utils/validation/length";

const SigninFormComponent: FC = () => {
  const {
    text: email,
    showDisplayError: emailHasError,
    textChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    clearHandler: emailClearHandler,
  } = useInput(validateEmail);

  const {
    text: password,
    showDisplayError: passwordHasError,
    textChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    clearHandler: passwordClearHandler,
  } = useInput(validatePasswordLength);

  const clearForm = () => {
    emailClearHandler();
    passwordClearHandler();
  };

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (emailHasError || passwordHasError) return;

    if (email.length === 0 || password.length === 0) return;

    console.log(email, password);
    clearForm();
  };

  return (
    <Box
      sx={{
        border: 1,
        padding: 1,
        borderColor: "#cccccc",
        width: "350px",
        marginTop: 2,
      }}
    >
      <form onSubmit={onSubmitHandler}>
        <Grid container direction="column" justifyContent="flex-start">
          <Typography
            variant="h4"
            component="h1"
            textAlign="center"
            color="dodgerblue"
          >
            Sign In
          </Typography>

          <InputLabel
            sx={{ fontWeight: 500, marginTop: 1, color: "#000000" }}
            htmlFor="email"
          >
            Your email :
          </InputLabel>
          <TextField
            value={email}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            error={emailHasError}
            helperText={emailHasError ? "Enter your email" : ""}
            type="email"
            name="email"
            id="email"
            variant="outlined"
            size="small"
          ></TextField>

          <InputLabel
            sx={{ fontWeight: 500, marginTop: 1, color: "#000000" }}
            htmlFor="password"
          >
            Your password :
          </InputLabel>
          <TextField
            value={password}
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
            error={passwordHasError}
            helperText={passwordHasError ? "Minimun 6 characters required" : ""}
            type="password"
            name="password"
            id="password"
            variant="outlined"
            size="small"
          ></TextField>

          <Button
            variant="contained"
            style={{
              marginTop: "16px",
              height: "31px",
              backgroundColor: "#f0c14b",
              color: "black",
              borderColor: "#a88734 #9c7e31 #846a29",
              textTransform: "none",
            }}
            type="submit"
          >
            Sign In
          </Button>
        </Grid>
      </form>

      <Divider sx={{ marginTop: "36px", marginBottom: "36px" }} />

      <div>
        <small>
          Don't have an account?{"  "}
          <Link
            to="/register"
            style={{ textDecoration: "none", color: "#0000ee" }}
          >
            Register
          </Link>
        </small>
      </div>
    </Box>
  );
};

export default SigninFormComponent;
