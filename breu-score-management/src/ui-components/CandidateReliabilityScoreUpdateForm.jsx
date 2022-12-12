/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { CandidateReliabilityScore } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function CandidateReliabilityScoreUpdateForm(props) {
  const {
    id,
    candidateReliabilityScore,
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
    test_score: undefined,
    video_score_1: undefined,
    video_score_2: undefined,
  };
  const [test_score, setTest_score] = React.useState(initialValues.test_score);
  const [video_score_1, setVideo_score_1] = React.useState(
    initialValues.video_score_1
  );
  const [video_score_2, setVideo_score_2] = React.useState(
    initialValues.video_score_2
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = {
      ...initialValues,
      ...candidateReliabilityScoreRecord,
    };
    setTest_score(cleanValues.test_score);
    setVideo_score_1(cleanValues.video_score_1);
    setVideo_score_2(cleanValues.video_score_2);
    setErrors({});
  };
  const [candidateReliabilityScoreRecord, setCandidateReliabilityScoreRecord] =
    React.useState(candidateReliabilityScore);
  React.useEffect(() => {
    const queryData = async () => {
      const record = id
        ? await DataStore.query(CandidateReliabilityScore, id)
        : candidateReliabilityScore;
      setCandidateReliabilityScoreRecord(record);
    };
    queryData();
  }, [id, candidateReliabilityScore]);
  React.useEffect(resetStateValues, [candidateReliabilityScoreRecord]);
  const validations = {
    test_score: [],
    video_score_1: [],
    video_score_2: [],
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
          test_score,
          video_score_1,
          video_score_2,
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
            CandidateReliabilityScore.copyOf(
              candidateReliabilityScoreRecord,
              (updated) => {
                Object.assign(updated, modelFields);
              }
            )
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
      {...getOverrideProps(overrides, "CandidateReliabilityScoreUpdateForm")}
    >
      <TextField
        label="Test score"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        defaultValue={test_score}
        onChange={(e) => {
          let value = Number(e.target.value);
          if (isNaN(value)) {
            setErrors((errors) => ({
              ...errors,
              test_score: "Value must be a valid number",
            }));
            return;
          }
          if (onChange) {
            const modelFields = {
              test_score: value,
              video_score_1,
              video_score_2,
            };
            const result = onChange(modelFields);
            value = result?.test_score ?? value;
          }
          if (errors.test_score?.hasError) {
            runValidationTasks("test_score", value);
          }
          setTest_score(value);
        }}
        onBlur={() => runValidationTasks("test_score", test_score)}
        errorMessage={errors.test_score?.errorMessage}
        hasError={errors.test_score?.hasError}
        {...getOverrideProps(overrides, "test_score")}
      ></TextField>
      <TextField
        label="Video score 1"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        defaultValue={video_score_1}
        onChange={(e) => {
          let value = Number(e.target.value);
          if (isNaN(value)) {
            setErrors((errors) => ({
              ...errors,
              video_score_1: "Value must be a valid number",
            }));
            return;
          }
          if (onChange) {
            const modelFields = {
              test_score,
              video_score_1: value,
              video_score_2,
            };
            const result = onChange(modelFields);
            value = result?.video_score_1 ?? value;
          }
          if (errors.video_score_1?.hasError) {
            runValidationTasks("video_score_1", value);
          }
          setVideo_score_1(value);
        }}
        onBlur={() => runValidationTasks("video_score_1", video_score_1)}
        errorMessage={errors.video_score_1?.errorMessage}
        hasError={errors.video_score_1?.hasError}
        {...getOverrideProps(overrides, "video_score_1")}
      ></TextField>
      <TextField
        label="Video score 2"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        defaultValue={video_score_2}
        onChange={(e) => {
          let value = Number(e.target.value);
          if (isNaN(value)) {
            setErrors((errors) => ({
              ...errors,
              video_score_2: "Value must be a valid number",
            }));
            return;
          }
          if (onChange) {
            const modelFields = {
              test_score,
              video_score_1,
              video_score_2: value,
            };
            const result = onChange(modelFields);
            value = result?.video_score_2 ?? value;
          }
          if (errors.video_score_2?.hasError) {
            runValidationTasks("video_score_2", value);
          }
          setVideo_score_2(value);
        }}
        onBlur={() => runValidationTasks("video_score_2", video_score_2)}
        errorMessage={errors.video_score_2?.errorMessage}
        hasError={errors.video_score_2?.hasError}
        {...getOverrideProps(overrides, "video_score_2")}
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
