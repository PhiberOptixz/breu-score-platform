import { Grid } from "@mui/material";
import TextFieldGroup from "../../common/TextFieldGroup";

const ReliabilityScore = ({ formik, disabled, weightages }) => {
  const baseScoreChange = (e) => {
    const parameter = e.target.name?.replace("Basescore", "");
    formik.setFieldValue(e.target.name, e.target.value);
    const score =
      (weightages?.[parameter] / 100) * parseInt(e.target.value / 5);
    console.log(e.target.name, e.target.value, weightages?.[parameter], score);
  };
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

      {/* <Grid item xs={12} md={3}>
        <TextFieldGroup
          labelShink={true}
          variant="outlined"
          label="Design Basescore"
          name="designBasescore"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={disabled}
          value={formik.values.designBasescore}
          errors={
            formik.touched.designBasescore && formik.errors.designBasescore
              ? formik.errors.designBasescore
              : null
          }
        />
      </Grid>

      <Grid item xs={12} md={3}>
        <TextFieldGroup
          labelShink={true}
          variant="outlined"
          label="Design percent"
          name="designpercent"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={disabled}
          value={formik.values.designpercent}
          errors={
            formik.touched.designpercent && formik.errors.designpercent
              ? formik.errors.designpercent
              : null
          }
        />
      </Grid> */}

      <Grid item xs={12} md={3}>
        <TextFieldGroup
          labelShink={true}
          variant="outlined"
          label="Design Score"
          name="designScore"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={disabled}
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

      {/* <Grid item xs={12} md={3}>
        <TextFieldGroup
          labelShink={true}
          variant="outlined"
          label="Framework Basescore"
          name="frameworkBasescore"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={disabled}
          value={formik.values.frameworkBasescore}
          errors={
            formik.touched.frameworkBasescore &&
            formik.errors.frameworkBasescore
              ? formik.errors.frameworkBasescore
              : null
          }
        />
      </Grid>

      <Grid item xs={12} md={3}>
        <TextFieldGroup
          labelShink={true}
          variant="outlined"
          label="Framework percent"
          name="frameworkpercent"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={disabled}
          value={formik.values.frameworkpercent}
          errors={
            formik.touched.frameworkpercent && formik.errors.frameworkpercent
              ? formik.errors.frameworkpercent
              : null
          }
        />
      </Grid> */}

      <Grid item xs={12} md={3}>
        <TextFieldGroup
          labelShink={true}
          variant="outlined"
          label="Framework Score"
          name="frameworkScore"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={disabled}
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

      {/* <Grid item xs={12} md={3}>
        <TextFieldGroup
          labelShink={true}
          variant="outlined"
          label="Coding Basescore"
          name="codingBasescore"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={disabled}
          value={formik.values.codingBasescore}
          errors={
            formik.touched.codingBasescore && formik.errors.codingBasescore
              ? formik.errors.codingBasescore
              : null
          }
        />
      </Grid>

      <Grid item xs={12} md={3}>
        <TextFieldGroup
          labelShink={true}
          variant="outlined"
          label="Coding percent"
          name="codingpercent"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={disabled}
          value={formik.values.codingpercent}
          errors={
            formik.touched.codingpercent && formik.errors.codingpercent
              ? formik.errors.codingpercent
              : null
          }
        />
      </Grid> */}

      <Grid item xs={12} md={3}>
        <TextFieldGroup
          labelShink={true}
          variant="outlined"
          label="Coding Score"
          name="codingScore"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={disabled}
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

      {/* <Grid item xs={12} md={3}>
        <TextFieldGroup
          labelShink={true}
          variant="outlined"
          label="Debugging Basescore"
          name="debuggingBasescore"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={disabled}
          value={formik.values.debuggingBasescore}
          errors={
            formik.touched.debuggingBasescore &&
            formik.errors.debuggingBasescore
              ? formik.errors.debuggingBasescore
              : null
          }
        />
      </Grid>

      <Grid item xs={12} md={3}>
        <TextFieldGroup
          labelShink={true}
          variant="outlined"
          label="Debugging percent"
          name="debuggingpercent"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={disabled}
          value={formik.values.debuggingpercent}
          errors={
            formik.touched.debuggingpercent && formik.errors.debuggingpercent
              ? formik.errors.debuggingpercent
              : null
          }
        />
      </Grid> */}

      <Grid item xs={12} md={3}>
        <TextFieldGroup
          labelShink={true}
          variant="outlined"
          label="Debugging Score"
          name="debuggingScore"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={disabled}
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

      {/* <Grid item xs={12} md={3}>
        <TextFieldGroup
          labelShink={true}
          variant="outlined"
          label="Architecture Basescore"
          name="architectureBasescore"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={disabled}
          value={formik.values.architectureBasescore}
          errors={
            formik.touched.architectureBasescore &&
            formik.errors.architectureBasescore
              ? formik.errors.architectureBasescore
              : null
          }
        />
      </Grid>

      <Grid item xs={12} md={3}>
        <TextFieldGroup
          labelShink={true}
          variant="outlined"
          label="Architecture percent "
          name="architecturepercent"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={disabled}
          value={formik.values.architecturepercent}
          errors={
            formik.touched.architecturepercent &&
            formik.errors.architecturepercent
              ? formik.errors.architecturepercent
              : null
          }
        />
      </Grid> */}

      <Grid item xs={12} md={3}>
        <TextFieldGroup
          labelShink={true}
          variant="outlined"
          label="Architecture Score "
          name="architectureScore"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={disabled}
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
      {/* 
      <Grid item xs={12} md={3}>
        <TextFieldGroup
          variant="outlined"
          labelShink={true}
          label="Implementation Basescore"
          name="implementationBasescore"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={disabled}
          value={formik.values.implementationBasescore}
          errors={
            formik.touched.implementationBasescore &&
            formik.errors.implementationBasescore
              ? formik.errors.implementationBasescore
              : null
          }
        />
      </Grid>

      <Grid item xs={12} md={3}>
        <TextFieldGroup
          variant="outlined"
          labelShink={true}
          label="Implementation percent"
          name="implementationpercent"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={disabled}
          value={formik.values.implementationpercent}
          errors={
            formik.touched.implementationpercent &&
            formik.errors.implementationpercent
              ? formik.errors.implementationpercent
              : null
          }
        />
      </Grid> */}

      <Grid item xs={12} md={3}>
        <TextFieldGroup
          variant="outlined"
          labelShink={true}
          label="Implementation Score"
          name="implementationScore"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={disabled}
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
