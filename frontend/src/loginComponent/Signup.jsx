import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { LoadingButton } from "@mui/lab";

//redux-toolkit
import { useDispatch, useSelector } from "react-redux";
import { sign_up } from "../Redux-toolkit/Features/signUp";
import { useEffect, useState } from "react";
import { Stack } from "@mui/material";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Acharya Manish
      </Link>{" "}
      Ltd.
      {new Date().getFullYear()}. All Rights Reserved.
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  //img upload
  const [img, setImg] = useState(null);
  // const [img_url, setImg_url] = useState(null);

  const formData = new FormData();
  formData.append("file", img);
  formData.append("upload_preset", "E-commerce_user");
  // formData.append("cloud_name", "dru5tgtf6");

  //
  const { loading, auth } = useSelector((state) => state.signUp);

  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = data.get("firstName") + " " + data.get("lastName");
    const email = data.get("email");
    const password = data.get("password");

    //img
    fetch("https://api.cloudinary.com/v1_1/dru5tgtf6/image/upload", {
      method: "post",
      body: formData,
    })
      .then((res) => res.json())
      .then((url) => {
        console.log(url);
        console.log(`${url.url}`);
        const A_img = url.url;
        //

        //

        //
        // console.log(`img_url${img_url}`);
        dispatch(sign_up({ name, email, password, A_img }));
      })
      .catch((err) => {
        console.error(err);
      });
    console.log({
      name: data.get("firstName") + " " + data.get("lastName"),
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  //
  useEffect(() => {
    dispatch({
      type: "is_Auth",
      payload: auth,
    });
  }, [dispatch, auth]);

  return (
    <div className="bg-gray-50 m-4 rounded-md  p-5 px-10">
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <Button variant="contained" component="label">
                      User Profile
                      <input
                        hidden
                        accept="image/*"
                        // multiple
                        type="file"
                        onChange={(e) => setImg(e.target.files[0])}
                        // value={img}
                      />
                    </Button>
                  </Stack>
                </Grid>
                {/* <div className="p-5">
                  <label className="font-bold"> Image of Product</label>
                  <input
                    type="file"
                    className=" bg-gray-50 ml-2"
                    onChange={(e) => setImg(e.target.files[0])}
                    // value={img}
                  />
                </div> */}
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox value="allowExtraEmails" color="primary" />
                    }
                    label="I want to receive inspiration, marketing promotions and updates via email."
                  />
                </Grid>
              </Grid>
              {loading ? (
                <LoadingButton
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  loading
                  // variant="outlined"
                >
                  Sign In
                </LoadingButton>
              ) : (
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign Up
                </Button>
              )}

              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link to={"/SignIn"}>Already have an account? Sign in</Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 5 }} />
        </Container>
      </ThemeProvider>
    </div>
  );
}
