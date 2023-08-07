import { Grid } from "@mui/material";
import TextFieldGroup from "../../common/TextFieldGroup";
import { useEffect } from "react";

const BelieveabilityScore = ({ formik, disabled, weightages }) => {
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

      {/* <Grid item xs={12} md={3}>
        <TextFieldGroup
          labelShink={true}
          variant="outlined"
          label="Qualification Basescore"
          name="qualificationBasescore"
          onChange={(e) => baseScoreChange(e)}
          onBlur={formik.handleBlur}
          disabled={disabled}
          value={formik.values.qualificationBasescore}
          errors={
            formik.touched.qualificationBasescore &&
            formik.errors.qualificationBasescore
              ? formik.errors.qualificationBasescore
              : null
          }
        />
      </Grid>

      <Grid item xs={12} md={3}>
        <TextFieldGroup
          labelShink={true}
          variant="outlined"
          label="Qualification percent"
          name="qualificationpercent"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={disabled}
          value={formik.values.qualificationpercent}
          errors={
            formik.touched.qualificationpercent &&
            formik.errors.qualificationpercent
              ? formik.errors.qualificationpercent
              : null
          }
        />
      </Grid> */}

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

      {/* <Grid item xs={12} md={3}>
        <TextFieldGroup
          labelShink={true}
          variant="outlined"
          label="Professional Experience Basescore"
          name="professionalExperienceBasescore"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={disabled}
          value={formik.values.professionalExperienceBasescore}
          errors={
            formik.touched.professionalExperienceBasescore &&
            formik.errors.professionalExperienceBasescore
              ? formik.errors.professionalExperienceBasescore
              : null
          }
        />
      </Grid>

      <Grid item xs={12} md={3}>
        <TextFieldGroup
          labelShink={true}
          variant="outlined"
          label="Professional Experience percent"
          name="professionalExperiencepercent"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={disabled}
          value={formik.values.professionalExperiencepercent}
          errors={
            formik.touched.professionalExperiencepercent &&
            formik.errors.professionalExperiencepercent
              ? formik.errors.professionalExperiencepercent
              : null
          }
        />
      </Grid> */}

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
          name="socialscore"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={true}
          value={weightages?.socialScore}
          errors={
            formik.touched.socialscore && formik.errors.socialscore
              ? formik.errors.socialscore
              : null
          }
        />
      </Grid>

      {/* <Grid item xs={12} md={3}>
        <TextFieldGroup
          labelShink={true}
          variant="outlined"
          label="Social Score Basescore"
          name="socialscoreBasescore"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={disabled}
          value={formik.values.socialscoreBasescore}
          errors={
            formik.touched.socialscoreBasescore &&
            formik.errors.socialscoreBasescore
              ? formik.errors.socialscoreBasescore
              : null
          }
        />
      </Grid>

      <Grid item xs={12} md={3}>
        <TextFieldGroup
          labelShink={true}
          variant="outlined"
          label="Social Score percent"
          name="socialscorepercent"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={disabled}
          value={formik.values.socialscorepercent}
          errors={
            formik.touched.socialscorepercent &&
            formik.errors.socialscorepercent
              ? formik.errors.socialscorepercent
              : null
          }
        />
      </Grid> */}

      <Grid item xs={12} md={3}>
        <TextFieldGroup
          labelShink={true}
          variant="outlined"
          label="Social Score"
          name="socialscoreScore"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={disabled}
          value={formik.values.socialscoreScore}
          errors={
            formik.touched.socialscoreScore && formik.errors.socialscoreScore
              ? formik.errors.socialscoreScore
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

      {/* <Grid item xs={12} md={3}>
        <TextFieldGroup
          labelShink={true}
          variant="outlined"
          label="Patents Basescore"
          name="patentsBasescore"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={disabled}
          value={formik.values.patentsBasescore}
          errors={
            formik.touched.patentsBasescore && formik.errors.patentsBasescore
              ? formik.errors.patentsBasescore
              : null
          }
        />
      </Grid>

      <Grid item xs={12} md={3}>
        <TextFieldGroup
          labelShink={true}
          variant="outlined"
          label="Patents percent"
          name="patentspercent"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={disabled}
          value={formik.values.patentspercent}
          errors={
            formik.touched.patentspercent && formik.errors.patentspercent
              ? formik.errors.patentspercent
              : null
          }
        />
      </Grid> */}

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

      {/* <Grid item xs={12} md={3}>
        <TextFieldGroup
          labelShink={true}
          variant="outlined"
          label="Blog Basescore"
          name="blogBasescore"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={disabled}
          value={formik.values.blogBasescore}
          errors={
            formik.touched.blogBasescore && formik.errors.blogBasescore
              ? formik.errors.blogBasescore
              : null
          }
        />
      </Grid>

      <Grid item xs={12} md={3}>
        <TextFieldGroup
          labelShink={true}
          variant="outlined"
          label="Blogpercent"
          name="blogpercent"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={disabled}
          value={formik.values.blogpercent}
          errors={
            formik.touched.blogpercent && formik.errors.blogpercent
              ? formik.errors.blogpercent
              : null
          }
        />
      </Grid> */}

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
          label="Presentation Weightage"
          name="presentation"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={true}
          value={weightages?.whitepaperConferencePresentation}
          errors={
            formik.touched.presentation && formik.errors.presentation
              ? formik.errors.presentation
              : null
          }
        />
      </Grid>

      {/* <Grid item xs={12} md={3}>
        <TextFieldGroup
          variant="outlined"
          labelShink={true}
          label="Presentation Basescore"
          name="presentationBasescore"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={disabled}
          value={formik.values.presentationBasescore}
          errors={
            formik.touched.presentationBasescore &&
            formik.errors.presentationBasescore
              ? formik.errors.presentationBasescore
              : null
          }
        />
      </Grid>

      <Grid item xs={12} md={3}>
        <TextFieldGroup
          variant="outlined"
          labelShink={true}
          label="Presentation percent"
          name="presentationpercent"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={disabled}
          value={formik.values.presentationpercent}
          errors={
            formik.touched.presentationpercent &&
            formik.errors.presentationpercent
              ? formik.errors.presentationpercent
              : null
          }
        />
      </Grid> */}

      <Grid item xs={12} md={3}>
        <TextFieldGroup
          variant="outlined"
          labelShink={true}
          label="Presentation Score"
          name="presentationScore"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={disabled}
          value={formik.values.presentationScore}
          errors={
            formik.touched.presentationScore && formik.errors.presentationScore
              ? formik.errors.presentationScore
              : null
          }
        />
      </Grid>
    </>
  );
};

export default BelieveabilityScore;
