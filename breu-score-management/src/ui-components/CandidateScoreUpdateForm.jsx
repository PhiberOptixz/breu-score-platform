/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { CandidateScore } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function CandidateScoreUpdateForm(props) {
  const {
    id,
    candidateScore,
    onSuccess,
    onError,
    onSubmit,
    onCancel,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    final_score: undefined,
    believability: undefined,
    reliability: undefined,
    emotional: undefined,
    undesirability: undefined,
  };
  const [final_score, setFinal_score] = React.useState(
    initialValues.final_score
  );
  const [believability, setBelievability] = React.useState(
    initialValues.believability
  );
  const [reliability, setReliability] = React.useState(
    initialValues.reliability
  );
  const [emotional, setEmotional] = React.useState(initialValues.emotional);
  const [undesirability, setUndesirability] = React.useState(
    initialValues.undesirability
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = { ...initialValues, ...candidateScoreRecord };
    setFinal_score(cleanValues.final_score);
    setBelievability(cleanValues.believability);
    setReliability(cleanValues.reliability);
    setEmotional(cleanValues.emotional);
    setUndesirability(cleanValues.undesirability);
    setErrors({});
  };
  const [candidateScoreRecord, setCandidateScoreRecord] =
    React.useState(candidateScore);
  React.useEffect(() => {
    const queryData = async () => {
      const record = id
        ? await DataStore.query(CandidateScore, id)
        : candidateScore;
      setCandidateScoreRecord(record);
    };
    queryData();
  }, [id, candidateScore]);
  React.useEffect(resetStateValues, [candidateScoreRecord]);
  const validations = {
    final_score: [],
    believability: [],
    reliability: [],
    emotional: [],
    undesirability: [],
  };
  const runValidationTasks = async (fieldName, value) => {
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          final_score,
          believability,
          reliability,
          emotional,
          undesirability,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          await DataStore.save(
            CandidateScore.copyOf(candidateScoreRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...rest}
      {...getOverrideProps(overrides, "CandidateScoreUpdateForm")}
    >
      <TextField
        label="Final score"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        defaultValue={final_score}
        onChange={(e) => {
          let value = Number(e.target.value);
          if (isNaN(value)) {
            setErrors((errors) => ({
              ...errors,
              final_score: "Value must be a valid number",
            }));
            return;
          }
          if (onChange) {
            const modelFields = {
              final_score: value,
              believability,
              reliability,
              emotional,
              undesirability,
            };
            const result = onChange(modelFields);
            value = result?.final_score ?? value;
          }
          if (errors.final_score?.hasError) {
            runValidationTasks("final_score", value);
          }
          setFinal_score(value);
        }}
        onBlur={() => runValidationTasks("final_score", final_score)}
        errorMessage={errors.final_score?.errorMessage}
        hasError={errors.final_score?.hasError}
        {...getOverrideProps(overrides, "final_score")}
      ></TextField>
      <TextField
        label="Believability"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        defaultValue={believability}
        onChange={(e) => {
          let value = Number(e.target.value);
          if (isNaN(value)) {
            setErrors((errors) => ({
              ...errors,
              believability: "Value must be a valid number",
            }));
            return;
          }
          if (onChange) {
            const modelFields = {
              final_score,
              believability: value,
              reliability,
              emotional,
              undesirability,
            };
            const result = onChange(modelFields);
            value = result?.believability ?? value;
          }
          if (errors.believability?.hasError) {
            runValidationTasks("believability", value);
          }
          setBelievability(value);
        }}
        onBlur={() => runValidationTasks("believability", believability)}
        errorMessage={errors.believability?.errorMessage}
        hasError={errors.believability?.hasError}
        {...getOverrideProps(overrides, "believability")}
      ></TextField>
      <TextField
        label="Reliability"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        defaultValue={reliability}
        onChange={(e) => {
          let value = Number(e.target.value);
          if (isNaN(value)) {
            setErrors((errors) => ({
              ...errors,
              reliability: "Value must be a valid number",
            }));
            return;
          }
          if (onChange) {
            const modelFields = {
              final_score,
              believability,
              reliability: value,
              emotional,
              undesirability,
            };
            const result = onChange(modelFields);
            value = result?.reliability ?? value;
          }
          if (errors.reliability?.hasError) {
            runValidationTasks("reliability", value);
          }
          setReliability(value);
        }}
        onBlur={() => runValidationTasks("reliability", reliability)}
        errorMessage={errors.reliability?.errorMessage}
        hasError={errors.reliability?.hasError}
        {...getOverrideProps(overrides, "reliability")}
      ></TextField>
      <TextField
        label="Emotional"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        defaultValue={emotional}
        onChange={(e) => {
          let value = Number(e.target.value);
          if (isNaN(value)) {
            setErrors((errors) => ({
              ...errors,
              emotional: "Value must be a valid number",
            }));
            return;
          }
          if (onChange) {
            const modelFields = {
              final_score,
              believability,
              reliability,
              emotional: value,
              undesirability,
            };
            const result = onChange(modelFields);
            value = result?.emotional ?? value;
          }
          if (errors.emotional?.hasError) {
            runValidationTasks("emotional", value);
          }
          setEmotional(value);
        }}
        onBlur={() => runValidationTasks("emotional", emotional)}
        errorMessage={errors.emotional?.errorMessage}
        hasError={errors.emotional?.hasError}
        {...getOverrideProps(overrides, "emotional")}
      ></TextField>
      <TextField
        label="Undesirability"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        defaultValue={undesirability}
        onChange={(e) => {
          let value = Number(e.target.value);
          if (isNaN(value)) {
            setErrors((errors) => ({
              ...errors,
              undesirability: "Value must be a valid number",
            }));
            return;
          }
          if (onChange) {
            const modelFields = {
              final_score,
              believability,
              reliability,
              emotional,
              undesirability: value,
            };
            const result = onChange(modelFields);
            value = result?.undesirability ?? value;
          }
          if (errors.undesirability?.hasError) {
            runValidationTasks("undesirability", value);
          }
          setUndesirability(value);
        }}
        onBlur={() => runValidationTasks("undesirability", undesirability)}
        errorMessage={errors.undesirability?.errorMessage}
        hasError={errors.undesirability?.hasError}
        {...getOverrideProps(overrides, "undesirability")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={resetStateValues}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Cancel"
            type="button"
            onClick={() => {
              onCancel && onCancel();
            }}
            {...getOverrideProps(overrides, "CancelButton")}
          ></Button>
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
