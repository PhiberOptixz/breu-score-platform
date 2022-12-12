/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { CandidateProfile } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function CandidateProfileCreateForm(props) {
  const {
    clearOnSuccess = true,
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
    name: undefined,
    profile_pic: undefined,
    ReliabilityVideoTest: {},
    ReliabilityObjTypeTest: {},
    CandidateReliabilityScore: {},
    CandidateScore: {},
    CandidateBelievability: {},
    candidateProfileReliabilityVideoTestId: undefined,
    candidateProfileReliabilityObjTypeTestId: undefined,
    candidateProfileCandidateReliabilityScoreId: undefined,
    candidateProfileCandidateScoreId: undefined,
    candidateProfileCandidateBelievabilityId: undefined,
  };
  const [name, setName] = React.useState(initialValues.name);
  const [profile_pic, setProfile_pic] = React.useState(
    initialValues.profile_pic
  );
  const [ReliabilityVideoTest, setReliabilityVideoTest] = React.useState(
    initialValues.ReliabilityVideoTest
  );
  const [ReliabilityObjTypeTest, setReliabilityObjTypeTest] = React.useState(
    initialValues.ReliabilityObjTypeTest
  );
  const [CandidateReliabilityScore, setCandidateReliabilityScore] =
    React.useState(initialValues.CandidateReliabilityScore);
  const [CandidateScore, setCandidateScore] = React.useState(
    initialValues.CandidateScore
  );
  const [CandidateBelievability, setCandidateBelievability] = React.useState(
    initialValues.CandidateBelievability
  );
  const [
    candidateProfileReliabilityVideoTestId,
    setCandidateProfileReliabilityVideoTestId,
  ] = React.useState(initialValues.candidateProfileReliabilityVideoTestId);
  const [
    candidateProfileReliabilityObjTypeTestId,
    setCandidateProfileReliabilityObjTypeTestId,
  ] = React.useState(initialValues.candidateProfileReliabilityObjTypeTestId);
  const [
    candidateProfileCandidateReliabilityScoreId,
    setCandidateProfileCandidateReliabilityScoreId,
  ] = React.useState(initialValues.candidateProfileCandidateReliabilityScoreId);
  const [
    candidateProfileCandidateScoreId,
    setCandidateProfileCandidateScoreId,
  ] = React.useState(initialValues.candidateProfileCandidateScoreId);
  const [
    candidateProfileCandidateBelievabilityId,
    setCandidateProfileCandidateBelievabilityId,
  ] = React.useState(initialValues.candidateProfileCandidateBelievabilityId);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.name);
    setProfile_pic(initialValues.profile_pic);
    setReliabilityVideoTest(initialValues.ReliabilityVideoTest);
    setReliabilityObjTypeTest(initialValues.ReliabilityObjTypeTest);
    setCandidateReliabilityScore(initialValues.CandidateReliabilityScore);
    setCandidateScore(initialValues.CandidateScore);
    setCandidateBelievability(initialValues.CandidateBelievability);
    setCandidateProfileReliabilityVideoTestId(
      initialValues.candidateProfileReliabilityVideoTestId
    );
    setCandidateProfileReliabilityObjTypeTestId(
      initialValues.candidateProfileReliabilityObjTypeTestId
    );
    setCandidateProfileCandidateReliabilityScoreId(
      initialValues.candidateProfileCandidateReliabilityScoreId
    );
    setCandidateProfileCandidateScoreId(
      initialValues.candidateProfileCandidateScoreId
    );
    setCandidateProfileCandidateBelievabilityId(
      initialValues.candidateProfileCandidateBelievabilityId
    );
    setErrors({});
  };
  const validations = {
    name: [{ type: "Required" }],
    profile_pic: [],
    ReliabilityVideoTest: [],
    ReliabilityObjTypeTest: [],
    CandidateReliabilityScore: [],
    CandidateScore: [],
    CandidateBelievability: [],
    candidateProfileReliabilityVideoTestId: [],
    candidateProfileReliabilityObjTypeTestId: [],
    candidateProfileCandidateReliabilityScoreId: [],
    candidateProfileCandidateScoreId: [],
    candidateProfileCandidateBelievabilityId: [],
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
          name,
          profile_pic,
          ReliabilityVideoTest,
          ReliabilityObjTypeTest,
          CandidateReliabilityScore,
          CandidateScore,
          CandidateBelievability,
          candidateProfileReliabilityVideoTestId,
          candidateProfileReliabilityObjTypeTestId,
          candidateProfileCandidateReliabilityScoreId,
          candidateProfileCandidateScoreId,
          candidateProfileCandidateBelievabilityId,
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
          await DataStore.save(new CandidateProfile(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...rest}
      {...getOverrideProps(overrides, "CandidateProfileCreateForm")}
    >
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              profile_pic,
              ReliabilityVideoTest,
              ReliabilityObjTypeTest,
              CandidateReliabilityScore,
              CandidateScore,
              CandidateBelievability,
              candidateProfileReliabilityVideoTestId,
              candidateProfileReliabilityObjTypeTestId,
              candidateProfileCandidateReliabilityScoreId,
              candidateProfileCandidateScoreId,
              candidateProfileCandidateBelievabilityId,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Profile pic"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              profile_pic: value,
              ReliabilityVideoTest,
              ReliabilityObjTypeTest,
              CandidateReliabilityScore,
              CandidateScore,
              CandidateBelievability,
              candidateProfileReliabilityVideoTestId,
              candidateProfileReliabilityObjTypeTestId,
              candidateProfileCandidateReliabilityScoreId,
              candidateProfileCandidateScoreId,
              candidateProfileCandidateBelievabilityId,
            };
            const result = onChange(modelFields);
            value = result?.profile_pic ?? value;
          }
          if (errors.profile_pic?.hasError) {
            runValidationTasks("profile_pic", value);
          }
          setProfile_pic(value);
        }}
        onBlur={() => runValidationTasks("profile_pic", profile_pic)}
        errorMessage={errors.profile_pic?.errorMessage}
        hasError={errors.profile_pic?.hasError}
        {...getOverrideProps(overrides, "profile_pic")}
      ></TextField>
      <SelectField
        label="Reliability video test"
        placeholder="Please select an option"
        isDisabled={false}
        value={ReliabilityVideoTest}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              profile_pic,
              ReliabilityVideoTest: value,
              ReliabilityObjTypeTest,
              CandidateReliabilityScore,
              CandidateScore,
              CandidateBelievability,
              candidateProfileReliabilityVideoTestId,
              candidateProfileReliabilityObjTypeTestId,
              candidateProfileCandidateReliabilityScoreId,
              candidateProfileCandidateScoreId,
              candidateProfileCandidateBelievabilityId,
            };
            const result = onChange(modelFields);
            value = result?.ReliabilityVideoTest ?? value;
          }
          if (errors.ReliabilityVideoTest?.hasError) {
            runValidationTasks("ReliabilityVideoTest", value);
          }
          setReliabilityVideoTest(value);
        }}
        onBlur={() =>
          runValidationTasks("ReliabilityVideoTest", ReliabilityVideoTest)
        }
        errorMessage={errors.ReliabilityVideoTest?.errorMessage}
        hasError={errors.ReliabilityVideoTest?.hasError}
        {...getOverrideProps(overrides, "ReliabilityVideoTest")}
      ></SelectField>
      <SelectField
        label="Reliability obj type test"
        placeholder="Please select an option"
        isDisabled={false}
        value={ReliabilityObjTypeTest}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              profile_pic,
              ReliabilityVideoTest,
              ReliabilityObjTypeTest: value,
              CandidateReliabilityScore,
              CandidateScore,
              CandidateBelievability,
              candidateProfileReliabilityVideoTestId,
              candidateProfileReliabilityObjTypeTestId,
              candidateProfileCandidateReliabilityScoreId,
              candidateProfileCandidateScoreId,
              candidateProfileCandidateBelievabilityId,
            };
            const result = onChange(modelFields);
            value = result?.ReliabilityObjTypeTest ?? value;
          }
          if (errors.ReliabilityObjTypeTest?.hasError) {
            runValidationTasks("ReliabilityObjTypeTest", value);
          }
          setReliabilityObjTypeTest(value);
        }}
        onBlur={() =>
          runValidationTasks("ReliabilityObjTypeTest", ReliabilityObjTypeTest)
        }
        errorMessage={errors.ReliabilityObjTypeTest?.errorMessage}
        hasError={errors.ReliabilityObjTypeTest?.hasError}
        {...getOverrideProps(overrides, "ReliabilityObjTypeTest")}
      ></SelectField>
      <SelectField
        label="Candidate reliability score"
        placeholder="Please select an option"
        isDisabled={false}
        value={CandidateReliabilityScore}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              profile_pic,
              ReliabilityVideoTest,
              ReliabilityObjTypeTest,
              CandidateReliabilityScore: value,
              CandidateScore,
              CandidateBelievability,
              candidateProfileReliabilityVideoTestId,
              candidateProfileReliabilityObjTypeTestId,
              candidateProfileCandidateReliabilityScoreId,
              candidateProfileCandidateScoreId,
              candidateProfileCandidateBelievabilityId,
            };
            const result = onChange(modelFields);
            value = result?.CandidateReliabilityScore ?? value;
          }
          if (errors.CandidateReliabilityScore?.hasError) {
            runValidationTasks("CandidateReliabilityScore", value);
          }
          setCandidateReliabilityScore(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "CandidateReliabilityScore",
            CandidateReliabilityScore
          )
        }
        errorMessage={errors.CandidateReliabilityScore?.errorMessage}
        hasError={errors.CandidateReliabilityScore?.hasError}
        {...getOverrideProps(overrides, "CandidateReliabilityScore")}
      ></SelectField>
      <SelectField
        label="Candidate score"
        placeholder="Please select an option"
        isDisabled={false}
        value={CandidateScore}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              profile_pic,
              ReliabilityVideoTest,
              ReliabilityObjTypeTest,
              CandidateReliabilityScore,
              CandidateScore: value,
              CandidateBelievability,
              candidateProfileReliabilityVideoTestId,
              candidateProfileReliabilityObjTypeTestId,
              candidateProfileCandidateReliabilityScoreId,
              candidateProfileCandidateScoreId,
              candidateProfileCandidateBelievabilityId,
            };
            const result = onChange(modelFields);
            value = result?.CandidateScore ?? value;
          }
          if (errors.CandidateScore?.hasError) {
            runValidationTasks("CandidateScore", value);
          }
          setCandidateScore(value);
        }}
        onBlur={() => runValidationTasks("CandidateScore", CandidateScore)}
        errorMessage={errors.CandidateScore?.errorMessage}
        hasError={errors.CandidateScore?.hasError}
        {...getOverrideProps(overrides, "CandidateScore")}
      ></SelectField>
      <SelectField
        label="Candidate believability"
        placeholder="Please select an option"
        isDisabled={false}
        value={CandidateBelievability}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              profile_pic,
              ReliabilityVideoTest,
              ReliabilityObjTypeTest,
              CandidateReliabilityScore,
              CandidateScore,
              CandidateBelievability: value,
              candidateProfileReliabilityVideoTestId,
              candidateProfileReliabilityObjTypeTestId,
              candidateProfileCandidateReliabilityScoreId,
              candidateProfileCandidateScoreId,
              candidateProfileCandidateBelievabilityId,
            };
            const result = onChange(modelFields);
            value = result?.CandidateBelievability ?? value;
          }
          if (errors.CandidateBelievability?.hasError) {
            runValidationTasks("CandidateBelievability", value);
          }
          setCandidateBelievability(value);
        }}
        onBlur={() =>
          runValidationTasks("CandidateBelievability", CandidateBelievability)
        }
        errorMessage={errors.CandidateBelievability?.errorMessage}
        hasError={errors.CandidateBelievability?.hasError}
        {...getOverrideProps(overrides, "CandidateBelievability")}
      ></SelectField>
      <TextField
        label="Candidate profile reliability video test id"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              profile_pic,
              ReliabilityVideoTest,
              ReliabilityObjTypeTest,
              CandidateReliabilityScore,
              CandidateScore,
              CandidateBelievability,
              candidateProfileReliabilityVideoTestId: value,
              candidateProfileReliabilityObjTypeTestId,
              candidateProfileCandidateReliabilityScoreId,
              candidateProfileCandidateScoreId,
              candidateProfileCandidateBelievabilityId,
            };
            const result = onChange(modelFields);
            value = result?.candidateProfileReliabilityVideoTestId ?? value;
          }
          if (errors.candidateProfileReliabilityVideoTestId?.hasError) {
            runValidationTasks("candidateProfileReliabilityVideoTestId", value);
          }
          setCandidateProfileReliabilityVideoTestId(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "candidateProfileReliabilityVideoTestId",
            candidateProfileReliabilityVideoTestId
          )
        }
        errorMessage={
          errors.candidateProfileReliabilityVideoTestId?.errorMessage
        }
        hasError={errors.candidateProfileReliabilityVideoTestId?.hasError}
        {...getOverrideProps(
          overrides,
          "candidateProfileReliabilityVideoTestId"
        )}
      ></TextField>
      <TextField
        label="Candidate profile reliability obj type test id"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              profile_pic,
              ReliabilityVideoTest,
              ReliabilityObjTypeTest,
              CandidateReliabilityScore,
              CandidateScore,
              CandidateBelievability,
              candidateProfileReliabilityVideoTestId,
              candidateProfileReliabilityObjTypeTestId: value,
              candidateProfileCandidateReliabilityScoreId,
              candidateProfileCandidateScoreId,
              candidateProfileCandidateBelievabilityId,
            };
            const result = onChange(modelFields);
            value = result?.candidateProfileReliabilityObjTypeTestId ?? value;
          }
          if (errors.candidateProfileReliabilityObjTypeTestId?.hasError) {
            runValidationTasks(
              "candidateProfileReliabilityObjTypeTestId",
              value
            );
          }
          setCandidateProfileReliabilityObjTypeTestId(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "candidateProfileReliabilityObjTypeTestId",
            candidateProfileReliabilityObjTypeTestId
          )
        }
        errorMessage={
          errors.candidateProfileReliabilityObjTypeTestId?.errorMessage
        }
        hasError={errors.candidateProfileReliabilityObjTypeTestId?.hasError}
        {...getOverrideProps(
          overrides,
          "candidateProfileReliabilityObjTypeTestId"
        )}
      ></TextField>
      <TextField
        label="Candidate profile candidate reliability score id"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              profile_pic,
              ReliabilityVideoTest,
              ReliabilityObjTypeTest,
              CandidateReliabilityScore,
              CandidateScore,
              CandidateBelievability,
              candidateProfileReliabilityVideoTestId,
              candidateProfileReliabilityObjTypeTestId,
              candidateProfileCandidateReliabilityScoreId: value,
              candidateProfileCandidateScoreId,
              candidateProfileCandidateBelievabilityId,
            };
            const result = onChange(modelFields);
            value =
              result?.candidateProfileCandidateReliabilityScoreId ?? value;
          }
          if (errors.candidateProfileCandidateReliabilityScoreId?.hasError) {
            runValidationTasks(
              "candidateProfileCandidateReliabilityScoreId",
              value
            );
          }
          setCandidateProfileCandidateReliabilityScoreId(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "candidateProfileCandidateReliabilityScoreId",
            candidateProfileCandidateReliabilityScoreId
          )
        }
        errorMessage={
          errors.candidateProfileCandidateReliabilityScoreId?.errorMessage
        }
        hasError={errors.candidateProfileCandidateReliabilityScoreId?.hasError}
        {...getOverrideProps(
          overrides,
          "candidateProfileCandidateReliabilityScoreId"
        )}
      ></TextField>
      <TextField
        label="Candidate profile candidate score id"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              profile_pic,
              ReliabilityVideoTest,
              ReliabilityObjTypeTest,
              CandidateReliabilityScore,
              CandidateScore,
              CandidateBelievability,
              candidateProfileReliabilityVideoTestId,
              candidateProfileReliabilityObjTypeTestId,
              candidateProfileCandidateReliabilityScoreId,
              candidateProfileCandidateScoreId: value,
              candidateProfileCandidateBelievabilityId,
            };
            const result = onChange(modelFields);
            value = result?.candidateProfileCandidateScoreId ?? value;
          }
          if (errors.candidateProfileCandidateScoreId?.hasError) {
            runValidationTasks("candidateProfileCandidateScoreId", value);
          }
          setCandidateProfileCandidateScoreId(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "candidateProfileCandidateScoreId",
            candidateProfileCandidateScoreId
          )
        }
        errorMessage={errors.candidateProfileCandidateScoreId?.errorMessage}
        hasError={errors.candidateProfileCandidateScoreId?.hasError}
        {...getOverrideProps(overrides, "candidateProfileCandidateScoreId")}
      ></TextField>
      <TextField
        label="Candidate profile candidate believability id"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              profile_pic,
              ReliabilityVideoTest,
              ReliabilityObjTypeTest,
              CandidateReliabilityScore,
              CandidateScore,
              CandidateBelievability,
              candidateProfileReliabilityVideoTestId,
              candidateProfileReliabilityObjTypeTestId,
              candidateProfileCandidateReliabilityScoreId,
              candidateProfileCandidateScoreId,
              candidateProfileCandidateBelievabilityId: value,
            };
            const result = onChange(modelFields);
            value = result?.candidateProfileCandidateBelievabilityId ?? value;
          }
          if (errors.candidateProfileCandidateBelievabilityId?.hasError) {
            runValidationTasks(
              "candidateProfileCandidateBelievabilityId",
              value
            );
          }
          setCandidateProfileCandidateBelievabilityId(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "candidateProfileCandidateBelievabilityId",
            candidateProfileCandidateBelievabilityId
          )
        }
        errorMessage={
          errors.candidateProfileCandidateBelievabilityId?.errorMessage
        }
        hasError={errors.candidateProfileCandidateBelievabilityId?.hasError}
        {...getOverrideProps(
          overrides,
          "candidateProfileCandidateBelievabilityId"
        )}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={resetStateValues}
          {...getOverrideProps(overrides, "ClearButton")}
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
