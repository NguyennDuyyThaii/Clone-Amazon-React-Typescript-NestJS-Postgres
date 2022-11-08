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

const RegistrationFormComponent: FC = () => {
  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("click");
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
            Register
          </Typography>

          <InputLabel
            sx={{ fontWeight: 500, marginTop: 1, color: "#000000" }}
            htmlFor="name"
          >
            Your name :
          </InputLabel>
          <TextField
            type="text"
            name="name"
            id="name"
            variant="outlined"
            size="small"
          ></TextField>

          <InputLabel
            sx={{ fontWeight: 500, marginTop: 1, color: "#000000" }}
            htmlFor="email"
          >
            Your email :
          </InputLabel>
          <TextField
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
            type="password"
            name="password"
            id="password"
            variant="outlined"
            size="small"
          ></TextField>

          <InputLabel
            sx={{ fontWeight: 500, marginTop: 1, color: "#000000" }}
            htmlFor="confirmPassword"
          >
            Confirm your password :
          </InputLabel>
          <TextField
            type="password"
            name="confirmPassword"
            id="confirmPassword"
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
            Register
          </Button>
        </Grid>
      </form>

      <Divider sx={{ marginTop: "36px", marginBottom: "36px" }} />

      <div>
        <small>
          Already have an account?{"  "} 
          <Link
            to="/signin"
            style={{ textDecoration: "none", color: "#0000ee" }}
          >Sign In</Link>
        </small>
      </div>
    </Box>
  );
};

export default RegistrationFormComponent;
