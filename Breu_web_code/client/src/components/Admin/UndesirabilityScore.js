import { Grid } from "@mui/material";
import TextFieldGroup from "../../common/TextFieldGroup";

const UndesirabilityScore = ({ formik, disabled, weightages }) => {
  return (
    <>
      <Grid item xs={12} md={12}>
        <h1>Undesirable</h1>
      </Grid>
      <Grid item xs={12} md={3}>
        <TextFieldGroup
          variant="outlined"
          labelShink={true}
          label="Plagiarism"
          name="plagiarism"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={true}
          value={weightages?.plagiarism}
          errors={
            formik.touched.plagiarism && formik.errors.plagiarism
              ? formik.errors.plagiarism
              : null
          }
        />
      </Grid>

      <Grid item xs={12} md={3}>
        <TextFieldGroup
          variant="outlined"
          labelShink={true}
          label="Plagiarism Score"
          name="plagiarismScore"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={disabled}
          value={formik.values.plagiarismScore}
          errors={
            formik.touched.plagiarismScore && formik.errors.plagiarismScore
              ? formik.errors.plagiarismScore
              : null
          }
        />
      </Grid>

      <Grid item xs={12} md={3}>
        <TextFieldGroup
          variant="outlined"
          labelShink={true}
          label="Trust Issues"
          name="trustissues"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={true}
          value={weightages?.trustIssues}
          errors={
            formik.touched.trustissues && formik.errors.trustissues
              ? formik.errors.trustissues
              : null
          }
        />
      </Grid>

      <Grid item xs={12} md={3}>
        <TextFieldGroup
          variant="outlined"
          labelShink={true}
          label="Trust Issues Score"
          name="trustissuesScore"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={disabled}
          value={formik.values.trustissuesScore}
          errors={
            formik.touched.trustissuesScore && formik.errors.trustissuesScore
              ? formik.errors.trustissuesScore
              : null
          }
        />
      </Grid>

      <Grid item xs={12} md={3}>
        <TextFieldGroup
          variant="outlined"
          labelShink={true}
          label="Fake Information"
          name="fakeinformation"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={true}
          value={weightages?.fakeInformation}
          errors={
            formik.touched.fakeinformation && formik.errors.fakeinformation
              ? formik.errors.fakeinformation
              : null
          }
        />
      </Grid>

      <Grid item xs={12} md={3}>
        <TextFieldGroup
          variant="outlined"
          labelShink={true}
          label="Fake Information Score"
          name="fakeinformationScore"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={disabled}
          value={formik.values.fakeinformationScore}
          errors={
            formik.touched.fakeinformationScore &&
            formik.errors.fakeinformationScore
              ? formik.errors.fakeinformationScore
              : null
          }
        />
      </Grid>
    </>
  );
};

export default UndesirabilityScore;
