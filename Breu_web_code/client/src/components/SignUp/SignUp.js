import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import { Link, useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useFormik } from "formik";
import * as Yup from "yup";
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import { registerCandidate } from "../../features/authSlice";
import TextFieldGroup from "../../common/TextFieldGroup";

const theme = createTheme();

const SignUp = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const phoneRegExp =
    "^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$";
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      phoneNumber: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .trim()
        .required("First Name is a required field")
        .min(3, "Name must be at least 3 characters"),
      lastName: Yup.string().trim().required("Last Name is a required field"),
      email: Yup.string()
        .trim()
        .email("Email is not valid")
        .required("Email is required field"),
      password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        // .matches(
        //   "(?=.*[a-z])",
        //   "Password must contain at least 1 Lower Case character"
        // )
        // .matches(
        //   "(?=.*[A-Z])",
        //   "Password must contain at least 1 Upper Case character"
        // )
        // .matches("(?=.*[0-9])", "Password must contain at least 1 Number")
        // .matches(
        //   "(?=.*[!@#$%^&*])",
        //   "Password must contain at least 1 special character"
        // )
        .required("Password is required field"),
      phoneNumber: Yup.string()
        // .min(10, 'Name must be at least 6 characters')
        .length(10, "Phone Number must have 10 numbers")
        .matches(phoneRegExp, "Phone number is not valid")
        .required("Phone number is required field"),
    }),
    onSubmit: async (values) => {
      const data = {
        values,
        navigate,
      };
      dispatch(registerCandidate(data));
    },
  });

  return (
    <Grid container className="signInContainer">
      <Grid item xs={12} md={6}></Grid>
      <Grid item xs={12} md={6}>
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
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
                Sign up
              </Typography>
              <Box sx={{ mt: 3 }}>
                <form
                  onSubmit={formik.handleSubmit}
                  noValidate
                  autoComplete="off"
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={12}>
                      <TextFieldGroup
                        placeholder="First Name"
                        type="text"
                        name="firstName"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.firstName}
                        errors={
                          formik.touched.firstName && formik.errors.firstName
                            ? formik.errors.firstName
                            : null
                        }
                      />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <TextFieldGroup
                        placeholder="Last Name"
                        type="text"
                        name="lastName"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.lastName}
                        errors={
                          formik.touched.lastName && formik.errors.lastName
                            ? formik.errors.lastName
                            : null
                        }
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextFieldGroup
                        placeholder="Phone Number"
                        type="text"
                        name="phoneNumber"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.phoneNumber}
                        errors={
                          formik.touched.phoneNumber &&
                          formik.errors.phoneNumber
                            ? formik.errors.phoneNumber
                            : null
                        }
                      />
                    </Grid>
                    <Grid item xs={12}>
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
                    <Grid item xs={12}>
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
                  </Grid>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Sign Up
                  </Button>
                  <Grid container>
                    <Grid item md={3} xs={12}>
                      <Link to="/" variant="body2">
                        Home
                      </Link>
                    </Grid>
                    <Grid item md={9} xs={12}>
                      <Link to="/sign-in" variant="body2">
                        Already have an account? Sign in
                      </Link>
                    </Grid>
                  </Grid>
                </form>
              </Box>
            </Box>
            {/* <Copyright sx={{ mt: 5 }} /> */}
          </Container>
        </ThemeProvider>
      </Grid>
    </Grid>
  );
};

export default SignUp;
