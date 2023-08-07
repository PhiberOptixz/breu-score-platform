import { Grid } from "@mui/material";
import TextFieldGroup from "../../common/TextFieldGroup";

const EIScore = ({ formik, disabled, weightages }) => {
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

      {/* <Grid item xs={12} md={3}>
        <TextFieldGroup
          labelShink={true}
          variant="outlined"
          label="Team Work Basescore"
          name="teamworkBasescore"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={disabled}
          value={formik.values.teamworkBasescore}
          errors={
            formik.touched.teamworkBasescore && formik.errors.teamworkBasescore
              ? formik.errors.teamworkBasescore
              : null
          }
        />
      </Grid>

      <Grid item xs={12} md={3}>
        <TextFieldGroup
          labelShink={true}
          variant="outlined"
          label="Team Work percent"
          name="teamworkpercent"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={disabled}
          value={formik.values.teamworkpercent}
          errors={
            formik.touched.teamworkpercent && formik.errors.teamworkpercent
              ? formik.errors.teamworkpercent
              : null
          }
        />
      </Grid> */}

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

      {/* <Grid item xs={12} md={3}>
        <TextFieldGroup
          labelShink={true}
          variant="outlined"
          label="Complexity Handling Basescore"
          name="complexityhandlingBasescore"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={disabled}
          value={formik.values.complexityhandlingBasescore}
          errors={
            formik.touched.complexityhandlingBasescore &&
            formik.errors.complexityhandlingBasescore
              ? formik.errors.complexityhandlingBasescore
              : null
          }
        />
      </Grid>

      <Grid item xs={12} md={3}>
        <TextFieldGroup
          labelShink={true}
          variant="outlined"
          label="Complexity Handling percent"
          name="complexityhandlingpercent"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={disabled}
          value={formik.values.complexityhandlingpercent}
          errors={
            formik.touched.complexityhandlingpercent &&
            formik.errors.complexityhandlingpercent
              ? formik.errors.complexityhandlingpercent
              : null
          }
        />
      </Grid> */}

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

      {/* <Grid item xs={12} md={3}>
        <TextFieldGroup
          labelShink={true}
          variant="outlined"
          label="Conflict Resolution Basescore"
          name="conflictresolutionBasescore"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={disabled}
          value={formik.values.conflictresolutionBasescore}
          errors={
            formik.touched.conflictresolutionBasescore &&
            formik.errors.conflictresolutionBasescore
              ? formik.errors.conflictresolutionBasescore
              : null
          }
        />
      </Grid>

      <Grid item xs={12} md={3}>
        <TextFieldGroup
          labelShink={true}
          variant="outlined"
          label="Conflict Resolution percent"
          name="conflictresolutionpercent"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={disabled}
          value={formik.values.conflictresolutionpercent}
          errors={
            formik.touched.conflictresolutionpercent &&
            formik.errors.conflictresolutionpercent
              ? formik.errors.conflictresolutionpercent
              : null
          }
        />
      </Grid> */}

      <Grid item xs={12} md={3}>
        <TextFieldGroup
          labelShink={true}
          variant="outlined"
          label="Conflict Resolution Score"
          name="conflictresolutionScore"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={disabled}
          value={formik.values.conflictresolutionScore}
          errors={
            formik.touched.conflictresolutionScore &&
            formik.errors.conflictresolutionScore
              ? formik.errors.conflictresolutionScore
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

      {/* <Grid item xs={12} md={3}>
        <TextFieldGroup
          labelShink={true}
          variant="outlined"
          label="Initiative Basescore"
          name="initiativeBasescore"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={disabled}
          value={formik.values.initiativeBasescore}
          errors={
            formik.touched.initiativeBasescore &&
            formik.errors.initiativeBasescore
              ? formik.errors.initiativeBasescore
              : null
          }
        />
      </Grid>

      <Grid item xs={12} md={3}>
        <TextFieldGroup
          labelShink={true}
          variant="outlined"
          label="Initiative percent"
          name="initiativepercent"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={disabled}
          value={formik.values.initiativepercent}
          errors={
            formik.touched.initiativepercent && formik.errors.initiativepercent
              ? formik.errors.initiativepercent
              : null
          }
        />
      </Grid> */}

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

      {/* <Grid item xs={12} md={3}>
        <TextFieldGroup
          labelShink={true}
          variant="outlined"
          label="Cultural Fit Basescore"
          name="culturalFitBasescore"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={disabled}
          value={formik.values.culturalFitBasescore}
          errors={
            formik.touched.culturalFitBasescore &&
            formik.errors.culturalFitBasescore
              ? formik.errors.culturalFitBasescore
              : null
          }
        />
      </Grid>

      <Grid item xs={12} md={3}>
        <TextFieldGroup
          labelShink={true}
          variant="outlined"
          label="Cultural Fit percent"
          name="culturalFitpercent"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={disabled}
          value={formik.values.culturalFitpercent}
          errors={
            formik.touched.culturalFitpercent &&
            formik.errors.culturalFitpercent
              ? formik.errors.culturalFitpercent
              : null
          }
        />
      </Grid> */}

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

      {/* <Grid item xs={12} md={3}>
  <TextFieldGroup
    labelShink={true}
    variant="outlined"
    label="Presentation"
    name="epresentation"
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}disabled={disabled}
    value={formik.values.epresentation}
    errors={
      formik.touched.epresentation && formik.errors.epresentation
        ? formik.errors.debepresentationugging
        : null
    }
  />
</Grid> */}

      {/* <Grid item xs={12} md={3}>
  <TextFieldGroup
    labelShink={true}
    variant="outlined"
    label="Presentation percent"
    name="epresentationpercent"
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}disabled={disabled}
    value={formik.values.epresentationpercent}
    errors={
      formik.touched.epresentationpercent &&
      formik.errors.epresentationpercent
        ? formik.errors.debepresentationuggingpercent
        : null
    }
  />
</Grid> */}

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

      {/* <Grid item xs={12} md={3}>
        <TextFieldGroup
          variant="outlined"
          labelShink={true}
          label="Communication Basescore"
          name="communicationBasescore"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={disabled}
          value={formik.values.communicationBasescore}
          errors={
            formik.touched.communicationBasescore &&
            formik.errors.communicationBasescore
              ? formik.errors.communicationBasescore
              : null
          }
        />
      </Grid>

      <Grid item xs={12} md={3}>
        <TextFieldGroup
          variant="outlined"
          labelShink={true}
          label="Communication percent"
          name="communicationpercent"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={disabled}
          value={formik.values.communicationpercent}
          errors={
            formik.touched.communicationpercent &&
            formik.errors.communicationpercent
              ? formik.errors.communicationpercent
              : null
          }
        />
      </Grid> */}

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

      {/* <Grid item xs={12} md={3}>
        <TextFieldGroup
          labelShink={true}
          variant="outlined"
          label="Ownership Basescore"
          name="ownershipBasescore"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={disabled}
          value={formik.values.ownershipBasescore}
          errors={
            formik.touched.ownershipBasescore &&
            formik.errors.ownershipBasescore
              ? formik.errors.ownershipBasescore
              : null
          }
        />
      </Grid>

      <Grid item xs={12} md={3}>
        <TextFieldGroup
          labelShink={true}
          variant="outlined"
          label="Ownership percent "
          name="ownershippercent"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={disabled}
          value={formik.values.ownershippercent}
          errors={
            formik.touched.ownershippercent && formik.errors.ownershippercent
              ? formik.errors.ownershippercent
              : null
          }
        />
      </Grid> */}

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

      {/* <Grid item xs={12} md={3}>
        <TextFieldGroup
          variant="outlined"
          labelShink={true}
          label="Empathy Basescore"
          name="empathyBasescore"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={disabled}
          value={formik.values.empathyBasescore}
          errors={
            formik.touched.empathyBasescore && formik.errors.empathyBasescore
              ? formik.errors.empathyBasescore
              : null
          }
        />
      </Grid>

      <Grid item xs={12} md={3}>
        <TextFieldGroup
          variant="outlined"
          labelShink={true}
          label="Empathy percent"
          name="empathypercent"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={disabled}
          value={formik.values.empathypercent}
          errors={
            formik.touched.empathypercent && formik.errors.empathypercent
              ? formik.errors.empathypercent
              : null
          }
        />
      </Grid> */}

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

      {/* <Grid item xs={12} md={3}>
        <TextFieldGroup
          variant="outlined"
          labelShink={true}
          label="Openness Basescore"
          name="opennessBasescore"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={disabled}
          value={formik.values.opennessBasescore}
          errors={
            formik.touched.opennessBasescore && formik.errors.opennessBasescore
              ? formik.errors.opennessBasescore
              : null
          }
        />
      </Grid>

      <Grid item xs={12} md={3}>
        <TextFieldGroup
          variant="outlined"
          labelShink={true}
          label="Openness percent"
          name="opennesspercent"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={disabled}
          value={formik.values.opennesspercent}
          errors={
            formik.touched.opennesspercent && formik.errors.opennesspercent
              ? formik.errors.opennesspercent
              : null
          }
        />
      </Grid> */}

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
