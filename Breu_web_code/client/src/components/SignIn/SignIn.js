import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useFormik } from "formik";
import * as Yup from "yup";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextFieldGroup from "../../common/TextFieldGroup";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { candidateSignIn } from "../../features/authSlice";

const theme = createTheme();

const SignIn = () => {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { isAuthenticated, user } = auth;

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().trim().required("Username / Email is required field"),
      password: Yup.string().required("Password is required field"),
    }),
    onSubmit: async (values) => {
      dispatch(candidateSignIn(values));
    },
  });

  useEffect(() => {
    if (isAuthenticated) {
      if (!auth?.user?.completedBelievability) {
        navigate("/believability");
      } else {
        navigate("/reliability");
      }
    }
  }, [auth]);

  return (
    <Grid container className="signInContainer">
      <Grid item xs={12} md={6}></Grid>
      <Grid item xs={12} md={6}>
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 15,
                padding: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                background: "white",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                {/* <LockOutlinedIcon /> */}
              </Avatar>

              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <Box sx={{ mt: 1 }}>
                <form
                  onSubmit={formik.handleSubmit}
                  noValidate
                  autoComplete="off"
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={12}>
                      <TextFieldGroup
                        placeholder="Email"
                        type="text"
                        name="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        errors={
                          formik.touched.email && formik.errors.email
                            ? formik.errors.email
                            : null
                        }
                      />
                    </Grid>

                    <Grid item xs={12} sm={12}>
                      <TextFieldGroup
                        placeholder="Password"
                        type={showPassword ? "text" : "password"}
                        name="password"
                        passwordControl={() => setShowPassword(!showPassword)}
                        showPassword={showPassword}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                        errors={
                          formik.touched.password && formik.errors.password
                            ? formik.errors.password
                            : null
                        }
                      />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                      >
                        Sign In
                      </Button>
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid item xs></Grid>
                    <Grid item>
                      <Link to="/sign-up">
                        {"Don't have an account? Sign Up"}
                      </Link>
                    </Grid>
                  </Grid>
                </form>
              </Box>
            </Box>
            {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
          </Container>
        </ThemeProvider>
      </Grid>
    </Grid>
  );
};
export default SignIn;
