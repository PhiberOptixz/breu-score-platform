// import React from "react";

// const SignIn = () => {
//   return <div>SignIn</div>;
// };

// export default SignIn;

import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import BreuSelect from "../../common/selectSingleValue";
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Container from "@mui/material/Container";
import Select from "@mui/material/Select";
import Header from "../../common/header";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import TextFieldGroup from "../../common/TextFieldGroup";
import ButtonField from "../../common/button";

const theme = createTheme();

const Responsive = styled("BreuSelect")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    marginLeft: "0%",
    width: "15%",
  },
}));

const Believability = () => {
  return (
    <>
      <Header />
      <Grid container className="believabilityContainer">
        <Grid
          item
          className="believabilityLeftGrid"
          sx={{ marginTop: "2%" }}
          xs={12}
          md={6}
        >
          <p style={{ marginLeft: "8%" }} className="selectPara">
            Role
          </p>
          <BreuSelect
            align="center"
            label="Choose your current role"
            name="selectBatch"
            sx={{
              marginLeft: "8%",
              width: "80%",
              marginTop: "1%",
              backgroundColor: "#FFF",
            }}
            className="believabilityBreuSelect"
            values={[
              { name: "1" },
              { name: "2" },
              { name: "3" },
              { name: "4" },
            ]}
          />

          <p style={{ marginLeft: "8%" }} className="selectPara">
            Exprience
          </p>
          <BreuSelect
            align="center"
            label="Total years of exprience"
            name="selectBatch"
            sx={{
              marginLeft: "8%",
              width: "80%",
              marginTop: "1%",
              backgroundColor: "#FFF",
            }}
            className="believabilityBreuSelect"
            values={[
              { name: "1" },
              { name: "2" },
              { name: "3" },
              { name: "4" },
            ]}
          />

          <p style={{ marginLeft: "8%" }} className="selectPara">
            Overall Exprience
          </p>
          <BreuSelect
            align="center"
            label="Total overall years of exprience"
            name="selectBatch"
            sx={{
              marginLeft: "8%",
              width: "80%",
              marginTop: "1%",
              backgroundColor: "#FFF",
            }}
            className="believabilityBreuSelect"
            values={[
              { name: "1" },
              { name: "2" },
              { name: "3" },
              { name: "4" },
            ]}
          />

          <p style={{ marginLeft: "8%" }} className="selectPara">
            Programming Language
          </p>
          <BreuSelect
            align="center"
            label="Most preferable programming lang."
            name="selectBatch"
            sx={{
              marginLeft: "8%",
              width: "80%",
              marginTop: "1%",
              backgroundColor: "#FFF",
            }}
            className="believabilityBreuSelect"
            values={[
              { name: "1" },
              { name: "2" },
              { name: "3" },
              { name: "4" },
            ]}
          />

          <p style={{ marginLeft: "8%" }} className="selectPara">
            Proficiency
          </p>
          <BreuSelect
            align="center"
            label="Framework Proficiency"
            name="selectBatch"
            sx={{
              marginLeft: "8%",
              width: "80%",
              marginTop: "1%",
              backgroundColor: "#FFF",
            }}
            className="believabilityBreuSelect"
            values={[
              { name: "1" },
              { name: "2" },
              { name: "3" },
              { name: "4" },
            ]}
          />

          <p style={{ marginLeft: "8%" }} className="selectPara">
            Choose your education
          </p>
          <BreuSelect
            align="center"
            label="Choose your education"
            name="selectBatch"
            sx={{
              marginLeft: "8%",
              width: "80%",
              marginTop: "1%",
              backgroundColor: "#FFF",
            }}
            className="believabilityBreuSelect"
            values={[
              { name: "1" },
              { name: "2" },
              { name: "3" },
              { name: "4" },
            ]}
          />

          <p style={{ marginLeft: "8%" }} className="selectPara">
            Domain
          </p>
          <BreuSelect
            align="center"
            label="Choose your strongest Domain"
            name="selectBatch"
            sx={{
              marginLeft: "8%",
              width: "80%",
              marginTop: "1%",
              backgroundColor: "#FFF",
            }}
            className="believabilityBreuSelect"
            values={[
              { name: "1" },
              { name: "2" },
              { name: "3" },
              { name: "4" },
            ]}
          />
        </Grid>

        <Grid item xs={12} md={6} sx={{ marginTop: "4%" }}>
          <h2 style={{ paddingLeft: "6%" }}>Others-Provide Links</h2>


          <p
            style={{ marginLeft: "8%", marginTop:"4%"}}
            className="selectPara"
          >
            GitHub
          </p>

          <TextFieldGroup
            placeholder="https://www.github.com"
            type="text"
            name="firstName"
            sx={{
              marginLeft: "8%",
              width: "80%",
              marginTop: "1%",
              backgroundColor: "#FFF",
            }}
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            // value={formik.values.firstName}
            // errors={
            //   formik.touched.firstName && formik.errors.firstName
            //     ? formik.errors.firstName
            //     : null
            // }
          />

          <p
            style={{ marginLeft: "8%" }}
            className="selectPara"
          >
            Satck Overflow
          </p>

          <TextFieldGroup
            placeholder="https://www.stackoverflow.com"
            type="text"
            name="firstName"
            sx={{
              marginLeft: "8%",
              width: "80%",
              marginTop: "1%",
              backgroundColor: "#FFF",
            }}
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            // value={formik.values.firstName}
            // errors={
            //   formik.touched.firstName && formik.errors.firstName
            //     ? formik.errors.firstName
            //     : null
            // }
          />

          <p
            style={{ marginLeft: "8%" }}
            className="selectPara"
          >
            Kaggle
          </p>

          <TextFieldGroup
            placeholder="https://www.kaggle.com"
            type="text"
            name="firstName"
            sx={{
              marginLeft: "8%",
              width: "80%",
              marginTop: "1%",
              backgroundColor: "#FFF",
            }}
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            // value={formik.values.firstName}
            // errors={
            //   formik.touched.firstName && formik.errors.firstName
            //     ? formik.errors.firstName
            //     : null
            // }
          />

          <p
            style={{ marginLeft: "8%" }}
            className="selectPara"
          >
            LinkedIn
          </p>

          <TextFieldGroup
            placeholder="https://www.linkedin.com"
            type="text"
            name="firstName"
            sx={{
              marginLeft: "8%",
              width: "80%",
              marginTop: "1%",
              backgroundColor: "#FFF",
            }}
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            // value={formik.values.firstName}
            // errors={
            //   formik.touched.firstName && formik.errors.firstName
            //     ? formik.errors.firstName
            //     : null
            // }
          />

<p
            style={{ marginLeft: "8%"}}
            className="selectPara"
          >
            Patents
          </p>

          <TextFieldGroup
            placeholder="https://www.patents.com"
            type="text"
            name="firstName"
            sx={{
              marginLeft: "8%",
              width: "80%",
              marginTop: "1%",
              backgroundColor: "#FFF",
            }}
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            // value={formik.values.firstName}
            // errors={
            //   formik.touched.firstName && formik.errors.firstName
            //     ? formik.errors.firstName
            //     : null
            // }
          />
          <Grid container sx={{marginTop:"4%"}}>
            <Grid item xs={6} md={6} align="center" >
              <ButtonField 
                buttonStyle="submit"
                type="submit"
                name="submit"
                color="primary"
                variant="contained"
                sx={{
                  width: "60%",
                  backgroundColor:"#0a71b9"
                }}
              />
            </Grid>
            <Grid item xs={6} md={6}>
              <ButtonField
                buttonStyle="submit"
                type="submit"
                name="Next"
                color="primary"
                variant="contained"
                sx={{
                  width: "60%",
                  backgroundColor:"#5a5a5c"
                }}
                // onClick={submitForm}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default Believability;
