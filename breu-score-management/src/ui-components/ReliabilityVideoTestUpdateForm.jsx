/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { ReliabilityVideoTest } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function ReliabilityVideoTestUpdateForm(props) {
  const {
    id,
    reliabilityVideoTest,
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
    question_1: undefined,
    question_2: undefined,
  };
  const [question_1, setQuestion_1] = React.useState(initialValues.question_1);
  const [question_2, setQuestion_2] = React.useState(initialValues.question_2);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = { ...initialValues, ...reliabilityVideoTestRecord };
    setQuestion_1(cleanValues.question_1);
    setQuestion_2(cleanValues.question_2);
    setErrors({});
  };
  const [reliabilityVideoTestRecord, setReliabilityVideoTestRecord] =
    React.useState(reliabilityVideoTest);
  React.useEffect(() => {
    const queryData = async () => {
      const record = id
        ? await DataStore.query(ReliabilityVideoTest, id)
        : reliabilityVideoTest;
      setReliabilityVideoTestRecord(record);
    };
    queryData();
  }, [id, reliabilityVideoTest]);
  React.useEffect(resetStateValues, [reliabilityVideoTestRecord]);
  const validations = {
    question_1: [],
    question_2: [],
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
          question_1,
          question_2,
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
            ReliabilityVideoTest.copyOf(
              reliabilityVideoTestRecord,
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
      {...getOverrideProps(overrides, "ReliabilityVideoTestUpdateForm")}
    >
      <TextField
        label="Question 1"
        isRequired={false}
        isReadOnly={false}
        defaultValue={question_1}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              question_1: value,
              question_2,
            };
            const result = onChange(modelFields);
            value = result?.question_1 ?? value;
          }
          if (errors.question_1?.hasError) {
            runValidationTasks("question_1", value);
          }
          setQuestion_1(value);
        }}
        onBlur={() => runValidationTasks("question_1", question_1)}
        errorMessage={errors.question_1?.errorMessage}
        hasError={errors.question_1?.hasError}
        {...getOverrideProps(overrides, "question_1")}
      ></TextField>
      <TextField
        label="Question 2"
        isRequired={false}
        isReadOnly={false}
        defaultValue={question_2}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              question_1,
              question_2: value,
            };
            const result = onChange(modelFields);
            value = result?.question_2 ?? value;
          }
          if (errors.question_2?.hasError) {
            runValidationTasks("question_2", value);
          }
          setQuestion_2(value);
        }}
        onBlur={() => runValidationTasks("question_2", question_2)}
        errorMessage={errors.question_2?.errorMessage}
        hasError={errors.question_2?.hasError}
        {...getOverrideProps(overrides, "question_2")}
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
