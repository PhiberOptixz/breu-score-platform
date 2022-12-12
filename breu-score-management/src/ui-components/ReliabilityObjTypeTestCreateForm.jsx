/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { ReliabilityObjTypeTest } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function ReliabilityObjTypeTestCreateForm(props) {
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
    question_1: undefined,
    question_2: undefined,
    question_3: undefined,
    question_4: undefined,
    question_5: undefined,
    question_6: undefined,
    question_7: undefined,
    question_8: undefined,
    question_9: undefined,
    question_10: undefined,
  };
  const [question_1, setQuestion_1] = React.useState(initialValues.question_1);
  const [question_2, setQuestion_2] = React.useState(initialValues.question_2);
  const [question_3, setQuestion_3] = React.useState(initialValues.question_3);
  const [question_4, setQuestion_4] = React.useState(initialValues.question_4);
  const [question_5, setQuestion_5] = React.useState(initialValues.question_5);
  const [question_6, setQuestion_6] = React.useState(initialValues.question_6);
  const [question_7, setQuestion_7] = React.useState(initialValues.question_7);
  const [question_8, setQuestion_8] = React.useState(initialValues.question_8);
  const [question_9, setQuestion_9] = React.useState(initialValues.question_9);
  const [question_10, setQuestion_10] = React.useState(
    initialValues.question_10
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setQuestion_1(initialValues.question_1);
    setQuestion_2(initialValues.question_2);
    setQuestion_3(initialValues.question_3);
    setQuestion_4(initialValues.question_4);
    setQuestion_5(initialValues.question_5);
    setQuestion_6(initialValues.question_6);
    setQuestion_7(initialValues.question_7);
    setQuestion_8(initialValues.question_8);
    setQuestion_9(initialValues.question_9);
    setQuestion_10(initialValues.question_10);
    setErrors({});
  };
  const validations = {
    question_1: [],
    question_2: [],
    question_3: [],
    question_4: [],
    question_5: [],
    question_6: [],
    question_7: [],
    question_8: [],
    question_9: [],
    question_10: [],
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
          question_3,
          question_4,
          question_5,
          question_6,
          question_7,
          question_8,
          question_9,
          question_10,
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
          await DataStore.save(new ReliabilityObjTypeTest(modelFields));
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
      {...getOverrideProps(overrides, "ReliabilityObjTypeTestCreateForm")}
    >
      <TextField
        label="Question 1"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              question_1: value,
              question_2,
              question_3,
              question_4,
              question_5,
              question_6,
              question_7,
              question_8,
              question_9,
              question_10,
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
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              question_1,
              question_2: value,
              question_3,
              question_4,
              question_5,
              question_6,
              question_7,
              question_8,
              question_9,
              question_10,
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
      <TextField
        label="Question 3"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              question_1,
              question_2,
              question_3: value,
              question_4,
              question_5,
              question_6,
              question_7,
              question_8,
              question_9,
              question_10,
            };
            const result = onChange(modelFields);
            value = result?.question_3 ?? value;
          }
          if (errors.question_3?.hasError) {
            runValidationTasks("question_3", value);
          }
          setQuestion_3(value);
        }}
        onBlur={() => runValidationTasks("question_3", question_3)}
        errorMessage={errors.question_3?.errorMessage}
        hasError={errors.question_3?.hasError}
        {...getOverrideProps(overrides, "question_3")}
      ></TextField>
      <TextField
        label="Question 4"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              question_1,
              question_2,
              question_3,
              question_4: value,
              question_5,
              question_6,
              question_7,
              question_8,
              question_9,
              question_10,
            };
            const result = onChange(modelFields);
            value = result?.question_4 ?? value;
          }
          if (errors.question_4?.hasError) {
            runValidationTasks("question_4", value);
          }
          setQuestion_4(value);
        }}
        onBlur={() => runValidationTasks("question_4", question_4)}
        errorMessage={errors.question_4?.errorMessage}
        hasError={errors.question_4?.hasError}
        {...getOverrideProps(overrides, "question_4")}
      ></TextField>
      <TextField
        label="Question 5"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              question_1,
              question_2,
              question_3,
              question_4,
              question_5: value,
              question_6,
              question_7,
              question_8,
              question_9,
              question_10,
            };
            const result = onChange(modelFields);
            value = result?.question_5 ?? value;
          }
          if (errors.question_5?.hasError) {
            runValidationTasks("question_5", value);
          }
          setQuestion_5(value);
        }}
        onBlur={() => runValidationTasks("question_5", question_5)}
        errorMessage={errors.question_5?.errorMessage}
        hasError={errors.question_5?.hasError}
        {...getOverrideProps(overrides, "question_5")}
      ></TextField>
      <TextField
        label="Question 6"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              question_1,
              question_2,
              question_3,
              question_4,
              question_5,
              question_6: value,
              question_7,
              question_8,
              question_9,
              question_10,
            };
            const result = onChange(modelFields);
            value = result?.question_6 ?? value;
          }
          if (errors.question_6?.hasError) {
            runValidationTasks("question_6", value);
          }
          setQuestion_6(value);
        }}
        onBlur={() => runValidationTasks("question_6", question_6)}
        errorMessage={errors.question_6?.errorMessage}
        hasError={errors.question_6?.hasError}
        {...getOverrideProps(overrides, "question_6")}
      ></TextField>
      <TextField
        label="Question 7"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              question_1,
              question_2,
              question_3,
              question_4,
              question_5,
              question_6,
              question_7: value,
              question_8,
              question_9,
              question_10,
            };
            const result = onChange(modelFields);
            value = result?.question_7 ?? value;
          }
          if (errors.question_7?.hasError) {
            runValidationTasks("question_7", value);
          }
          setQuestion_7(value);
        }}
        onBlur={() => runValidationTasks("question_7", question_7)}
        errorMessage={errors.question_7?.errorMessage}
        hasError={errors.question_7?.hasError}
        {...getOverrideProps(overrides, "question_7")}
      ></TextField>
      <TextField
        label="Question 8"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              question_1,
              question_2,
              question_3,
              question_4,
              question_5,
              question_6,
              question_7,
              question_8: value,
              question_9,
              question_10,
            };
            const result = onChange(modelFields);
            value = result?.question_8 ?? value;
          }
          if (errors.question_8?.hasError) {
            runValidationTasks("question_8", value);
          }
          setQuestion_8(value);
        }}
        onBlur={() => runValidationTasks("question_8", question_8)}
        errorMessage={errors.question_8?.errorMessage}
        hasError={errors.question_8?.hasError}
        {...getOverrideProps(overrides, "question_8")}
      ></TextField>
      <TextField
        label="Question 9"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              question_1,
              question_2,
              question_3,
              question_4,
              question_5,
              question_6,
              question_7,
              question_8,
              question_9: value,
              question_10,
            };
            const result = onChange(modelFields);
            value = result?.question_9 ?? value;
          }
          if (errors.question_9?.hasError) {
            runValidationTasks("question_9", value);
          }
          setQuestion_9(value);
        }}
        onBlur={() => runValidationTasks("question_9", question_9)}
        errorMessage={errors.question_9?.errorMessage}
        hasError={errors.question_9?.hasError}
        {...getOverrideProps(overrides, "question_9")}
      ></TextField>
      <TextField
        label="Question 10"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              question_1,
              question_2,
              question_3,
              question_4,
              question_5,
              question_6,
              question_7,
              question_8,
              question_9,
              question_10: value,
            };
            const result = onChange(modelFields);
            value = result?.question_10 ?? value;
          }
          if (errors.question_10?.hasError) {
            runValidationTasks("question_10", value);
          }
          setQuestion_10(value);
        }}
        onBlur={() => runValidationTasks("question_10", question_10)}
        errorMessage={errors.question_10?.errorMessage}
        hasError={errors.question_10?.hasError}
        {...getOverrideProps(overrides, "question_10")}
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
