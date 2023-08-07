import { Grid } from "@mui/material";
import TextFieldGroup from "../../common/TextFieldGroup";

const ReliabilityScore = ({ formik, disabled, weightages }) => {
  return (
    <>
      <Grid item xs={12} md={12}>
        <h1>Reliability</h1>
      </Grid>
      <Grid item xs={12} md={3}>
        <TextFieldGroup
          labelShink={true}
          variant="outlined"
          label="Design"
          name="design"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={true}
          value={weightages?.design}
          errors={
            formik.touched.design && formik.errors.design
              ? formik.errors.design
              : null
          }
        />
      </Grid>

      <Grid item xs={12} md={3}>
        <TextFieldGroup
          labelShink={true}
          variant="outlined"
          label="Design Score"
          name="designScore"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={true}
          value={formik.values.designScore}
          errors={
            formik.touched.designScore && formik.errors.designScore
              ? formik.errors.designScore
              : null
          }
        />
      </Grid>

      <Grid item xs={12} md={3}>
        <TextFieldGroup
          labelShink={true}
          variant="outlined"
          label="Framework"
          name="framework"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={true}
          value={weightages?.framework}
          errors={
            formik.touched.framework && formik.errors.framework
              ? formik.errors.framework
              : null
          }
        />
      </Grid>

      <Grid item xs={12} md={3}>
        <TextFieldGroup
          labelShink={true}
          variant="outlined"
          label="Framework Score"
          name="frameworkScore"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={true}
          value={formik.values.frameworkScore}
          errors={
            formik.touched.frameworkScore && formik.errors.frameworkScore
              ? formik.errors.frameworkScore
              : null
          }
        />
      </Grid>

      <Grid item xs={12} md={3}>
        <TextFieldGroup
          labelShink={true}
          variant="outlined"
          label="Coding"
          name="coding"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={true}
          value={weightages?.coding}
          errors={
            formik.touched.coding && formik.errors.coding
              ? formik.errors.coding
              : null
          }
        />
      </Grid>

      <Grid item xs={12} md={3}>
        <TextFieldGroup
          labelShink={true}
          variant="outlined"
          label="Coding Score"
          name="codingScore"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={true}
          value={formik.values.codingScore}
          errors={
            formik.touched.codingScore && formik.errors.codingScore
              ? formik.errors.codingScore
              : null
          }
        />
      </Grid>

      <Grid item xs={12} md={3}>
        <TextFieldGroup
          labelShink={true}
          variant="outlined"
          label="Debugging"
          name="debugging"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={true}
          value={weightages?.debugging}
          errors={
            formik.touched.debugging && formik.errors.debugging
              ? formik.errors.debugging
              : null
          }
        />
      </Grid>

      <Grid item xs={12} md={3}>
        <TextFieldGroup
          labelShink={true}
          variant="outlined"
          label="Debugging Score"
          name="debuggingScore"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={true}
          value={formik.values.debuggingScore}
          errors={
            formik.touched.debuggingScore && formik.errors.debuggingScore
              ? formik.errors.debuggingScore
              : null
          }
        />
      </Grid>

      <Grid item xs={12} md={3}>
        <TextFieldGroup
          labelShink={true}
          variant="outlined"
          label="Architecture "
          name="architecture"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={true}
          value={weightages?.architecture}
          errors={
            formik.touched.architecture && formik.errors.architecture
              ? formik.errors.architecture
              : null
          }
        />
      </Grid>

      <Grid item xs={12} md={3}>
        <TextFieldGroup
          labelShink={true}
          variant="outlined"
          label="Architecture Score "
          name="architectureScore"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={true}
          value={formik.values.architectureScore}
          errors={
            formik.touched.architectureScore && formik.errors.architectureScore
              ? formik.errors.architectureScore
              : null
          }
        />
      </Grid>

      <Grid item xs={12} md={3}>
        <TextFieldGroup
          variant="outlined"
          labelShink={true}
          label="Implementation"
          name="implementation"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={true}
          value={weightages?.implementation}
          errors={
            formik.touched.implementation && formik.errors.implementation
              ? formik.errors.implementation
              : null
          }
        />
      </Grid>

      <Grid item xs={12} md={3}>
        <TextFieldGroup
          variant="outlined"
          labelShink={true}
          label="Implementation Score"
          name="implementationScore"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={true}
          value={formik.values.implementationScore}
          errors={
            formik.touched.implementationScore &&
            formik.errors.implementationScore
              ? formik.errors.implementationScore
              : null
          }
        />
      </Grid>
    </>
  );
};

export default ReliabilityScore;
