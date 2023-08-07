import { Grid } from "@mui/material";
import TextFieldGroup from "../../common/TextFieldGroup";

const BelieveabilityScore = ({ formik, disabled, weightages }) => {
  return (
    <>
      <Grid item xs={12} md={12}>
        <h1>Believeability </h1>
      </Grid>
      <Grid item xs={12} md={3}>
        <TextFieldGroup
          labelShink={true}
          variant="outlined"
          label="Qualification Weightage"
          name="qualification"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={true}
          value={weightages?.qualification}
          errors={
            formik.touched.qualification && formik.errors.qualification
              ? formik.errors.qualification
              : null
          }
        />
      </Grid>

      <Grid item xs={12} md={3}>
        <TextFieldGroup
          labelShink={true}
          variant="outlined"
          label="Qualification Score"
          name="qualificationScore"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={disabled}
          value={formik.values.qualificationScore}
          errors={
            formik.touched.qualificationScore &&
            formik.errors.qualificationScore
              ? formik.errors.qualificationScore
              : null
          }
        />
      </Grid>

      <Grid item xs={12} md={3}>
        <TextFieldGroup
          labelShink={true}
          variant="outlined"
          label="Professional Experience Weightage"
          name="professionalExperience"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={true}
          value={weightages?.professionalExperience}
          errors={
            formik.touched.professionalExperience &&
            formik.errors.professionalExperience
              ? formik.errors.professionalExperience
              : null
          }
        />
      </Grid>

      <Grid item xs={12} md={3}>
        <TextFieldGroup
          labelShink={true}
          variant="outlined"
          label="Professional Experience Score"
          name="professionalExperienceScore"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={disabled}
          value={formik.values.professionalExperienceScore}
          errors={
            formik.touched.professionalExperienceScore &&
            formik.errors.professionalExperienceScore
              ? formik.errors.professionalExperienceScore
              : null
          }
        />
      </Grid>

      <Grid item xs={12} md={3}>
        <TextFieldGroup
          labelShink={true}
          variant="outlined"
          label="Social Score Weightage"
          name="socialScore"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={true}
          value={weightages?.socialScore}
          errors={
            formik.touched.socialScore && formik.errors.socialScore
              ? formik.errors.socialScore
              : null
          }
        />
      </Grid>

      <Grid item xs={12} md={3}>
        <TextFieldGroup
          labelShink={true}
          variant="outlined"
          label="Social Score"
          name="socialScoreScore"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={disabled}
          value={formik.values.socialScoreScore}
          errors={
            formik.touched.socialScoreScore && formik.errors.socialScoreScore
              ? formik.errors.socialScoreScore
              : null
          }
        />
      </Grid>

      <Grid item xs={12} md={3}>
        <TextFieldGroup
          labelShink={true}
          variant="outlined"
          label="Patents Weightage"
          name="patents"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={true}
          value={weightages?.patents}
          errors={
            formik.touched.patents && formik.errors.patents
              ? formik.errors.patents
              : null
          }
        />
      </Grid>

      <Grid item xs={12} md={3}>
        <TextFieldGroup
          labelShink={true}
          variant="outlined"
          label="Patents Score"
          name="patentsScore"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={disabled}
          value={formik.values.patentsScore}
          errors={
            formik.touched.patentsScore && formik.errors.patentsScore
              ? formik.errors.patentsScore
              : null
          }
        />
      </Grid>

      <Grid item xs={12} md={3}>
        <TextFieldGroup
          labelShink={true}
          variant="outlined"
          label="Blog Weightage"
          name="blog"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={true}
          value={weightages?.blog}
          errors={
            formik.touched.blog && formik.errors.blog
              ? formik.errors.blog
              : null
          }
        />
      </Grid>

      <Grid item xs={12} md={3}>
        <TextFieldGroup
          labelShink={true}
          variant="outlined"
          label="Blog Score"
          name="blogScore"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={disabled}
          value={formik.values.blogScore}
          errors={
            formik.touched.blogScore && formik.errors.blogScore
              ? formik.errors.blogScore
              : null
          }
        />
      </Grid>

      <Grid item xs={12} md={3}>
        <TextFieldGroup
          variant="outlined"
          labelShink={true}
          label="Paper Presentation Weightage"
          name="whitepaperConferencePresentation"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={true}
          value={weightages?.whitepaperConferencePresentation}
          errors={
            formik.touched.whitepaperConferencePresentation &&
            formik.errors.whitepaperConferencePresentation
              ? formik.errors.whitepaperConferencePresentation
              : null
          }
        />
      </Grid>

      <Grid item xs={12} md={3}>
        <TextFieldGroup
          variant="outlined"
          labelShink={true}
          label="Paper Presentation Score"
          name="whitepaperConferencePresentationScore"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={disabled}
          value={formik.values.whitepaperConferencePresentationScore}
          errors={
            formik.touched.whitepaperConferencePresentationScore &&
            formik.errors.whitepaperConferencePresentationScore
              ? formik.errors.whitepaperConferencePresentationScore
              : null
          }
        />
      </Grid>
    </>
  );
};

export default BelieveabilityScore;
