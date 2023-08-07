import { Grid } from "@mui/material";
import TextFieldGroup from "../../common/TextFieldGroup";

const EIScore = ({ formik, disabled, weightages }) => {
  return (
    <>
      <Grid item xs={12} md={12}>
        <h1>EI</h1>
      </Grid>
      <Grid item xs={12} md={3}>
        <TextFieldGroup
          labelShink={true}
          variant="outlined"
          label="Team Work"
          name="teamwork"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={true}
          value={weightages?.teamWork}
          errors={
            formik.touched.teamwork && formik.errors.teamwork
              ? formik.errors.teamwork
              : null
          }
        />
      </Grid>

      <Grid item xs={12} md={3}>
        <TextFieldGroup
          labelShink={true}
          variant="outlined"
          label="Team Work Score"
          name="teamworkScore"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={disabled}
          value={formik.values.teamworkScore}
          errors={
            formik.touched.teamworkScore && formik.errors.teamworkScore
              ? formik.errors.teamworkScore
              : null
          }
        />
      </Grid>

      <Grid item xs={12} md={3}>
        <TextFieldGroup
          labelShink={true}
          variant="outlined"
          label="Complexity Handling"
          name="complexityhandling"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={true}
          value={weightages?.complexityHandling}
          errors={
            formik.touched.complexityhandling &&
            formik.errors.complexityhandling
              ? formik.errors.complexityhandling
              : null
          }
        />
      </Grid>

      <Grid item xs={12} md={3}>
        <TextFieldGroup
          labelShink={true}
          variant="outlined"
          label="Complexity Handling Score"
          name="complexityhandlingScore"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={disabled}
          value={formik.values.complexityhandlingScore}
          errors={
            formik.touched.complexityhandlingScore &&
            formik.errors.complexityhandlingScore
              ? formik.errors.complexityhandlingScore
              : null
          }
        />
      </Grid>

      <Grid item xs={12} md={3}>
        <TextFieldGroup
          labelShink={true}
          variant="outlined"
          label="Conflict Resolution"
          name="conflictresolution"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={true}
          value={weightages?.conflictResolution}
          errors={
            formik.touched.conflictresolution &&
            formik.errors.conflictresolution
              ? formik.errors.conflictresolution
              : null
          }
        />
      </Grid>

      <Grid item xs={12} md={3}>
        <TextFieldGroup
          labelShink={true}
          variant="outlined"
          label="Conflict Resolution Score"
          name="conflictResolutionScore"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={disabled}
          value={formik.values.conflictResolutionScore}
          errors={
            formik.touched.conflictResolutionScore &&
            formik.errors.conflictResolutionScore
              ? formik.errors.conflictResolutionScore
              : null
          }
        />
      </Grid>

      <Grid item xs={12} md={3}>
        <TextFieldGroup
          labelShink={true}
          variant="outlined"
          label="Initiative "
          name="initiative"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={true}
          value={weightages?.initiative}
          errors={
            formik.touched.initiative && formik.errors.initiative
              ? formik.errors.initiative
              : null
          }
        />
      </Grid>

      <Grid item xs={12} md={3}>
        <TextFieldGroup
          labelShink={true}
          variant="outlined"
          label="Initiative Score"
          name="initiativeScore"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={disabled}
          value={formik.values.initiativeScore}
          errors={
            formik.touched.initiativeScore && formik.errors.initiativeScore
              ? formik.errors.initiativeScore
              : null
          }
        />
      </Grid>

      <Grid item xs={12} md={3}>
        <TextFieldGroup
          labelShink={true}
          variant="outlined"
          label="Cultural Fit"
          name="culturalFit"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={true}
          value={weightages?.culturalFit}
          errors={
            formik.touched.culturalFit && formik.errors.culturalFit
              ? formik.errors.culturalFit
              : null
          }
        />
      </Grid>

      <Grid item xs={12} md={3}>
        <TextFieldGroup
          labelShink={true}
          variant="outlined"
          label="Cultural Fit Score"
          name="culturalFitScore"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={disabled}
          value={formik.values.culturalFitScore}
          errors={
            formik.touched.culturalFitScore && formik.errors.culturalFitScore
              ? formik.errors.culturalFitScore
              : null
          }
        />
      </Grid>

      <Grid item xs={12} md={3}>
        <TextFieldGroup
          labelShink={true}
          variant="outlined"
          label="Presentation Weightage"
          name="presentation"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={true}
          value={weightages?.presentation}
          errors={
            formik.touched.epresentation && formik.errors.epresentation
              ? formik.errors.presentation
              : null
          }
        />
      </Grid>

      <Grid item xs={12} md={3}>
        <TextFieldGroup
          labelShink={true}
          variant="outlined"
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

      <Grid item xs={12} md={3}>
        <TextFieldGroup
          variant="outlined"
          labelShink={true}
          label="Communication"
          name="communication"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={true}
          value={weightages?.communication}
          errors={
            formik.touched.communication && formik.errors.communication
              ? formik.errors.communication
              : null
          }
        />
      </Grid>

      <Grid item xs={12} md={3}>
        <TextFieldGroup
          variant="outlined"
          labelShink={true}
          label="Communication Score"
          name="communicationScore"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={disabled}
          value={formik.values.communicationScore}
          errors={
            formik.touched.communicationScore &&
            formik.errors.communicationScore
              ? formik.errors.communicationScore
              : null
          }
        />
      </Grid>

      <Grid item xs={12} md={3}>
        <TextFieldGroup
          labelShink={true}
          variant="outlined"
          label="Ownership "
          name="ownership"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={true}
          value={weightages?.ownership}
          errors={
            formik.touched.ownership && formik.errors.ownership
              ? formik.errors.ownership
              : null
          }
        />
      </Grid>

      <Grid item xs={12} md={3}>
        <TextFieldGroup
          labelShink={true}
          variant="outlined"
          label="Ownership Score "
          name="ownershipScore"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={disabled}
          value={formik.values.ownershipScore}
          errors={
            formik.touched.ownershipScore && formik.errors.ownershipScore
              ? formik.errors.ownershipScore
              : null
          }
        />
      </Grid>

      <Grid item xs={12} md={3}>
        <TextFieldGroup
          variant="outlined"
          labelShink={true}
          label="Empathy"
          name="empathy"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={true}
          value={weightages?.empathy}
          errors={
            formik.touched.empathy && formik.errors.empathy
              ? formik.errors.empathy
              : null
          }
        />
      </Grid>

      <Grid item xs={12} md={3}>
        <TextFieldGroup
          variant="outlined"
          labelShink={true}
          label="Empathy Score"
          name="empathyScore"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={disabled}
          value={formik.values.empathyScore}
          errors={
            formik.touched.empathyScore && formik.errors.empathyScore
              ? formik.errors.empathyScore
              : null
          }
        />
      </Grid>

      <Grid item xs={12} md={3}>
        <TextFieldGroup
          variant="outlined"
          labelShink={true}
          label="Openness"
          name="openness"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={true}
          value={weightages?.openness}
          errors={
            formik.touched.openness && formik.errors.openness
              ? formik.errors.openness
              : null
          }
        />
      </Grid>

      <Grid item xs={12} md={3}>
        <TextFieldGroup
          variant="outlined"
          labelShink={true}
          label="Openness Score"
          name="opennessScore"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={disabled}
          value={formik.values.opennessScore}
          errors={
            formik.touched.opennessScore && formik.errors.opennessScore
              ? formik.errors.opennessScore
              : null
          }
        />
      </Grid>
    </>
  );
};

export default EIScore;
