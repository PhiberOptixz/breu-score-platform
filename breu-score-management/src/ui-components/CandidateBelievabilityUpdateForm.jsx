/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { CandidateBelievability } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function CandidateBelievabilityUpdateForm(props) {
  const {
    id,
    candidateBelievability,
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
    role: undefined,
    total_years_of_exp: undefined,
    prefered_programming_lang: undefined,
    framework_proficiency: undefined,
    education: undefined,
    domain: undefined,
    github: undefined,
    stackoverflow: undefined,
    linkedin: undefined,
    blogs: undefined,
  };
  const [role, setRole] = React.useState(initialValues.role);
  const [total_years_of_exp, setTotal_years_of_exp] = React.useState(
    initialValues.total_years_of_exp
  );
  const [prefered_programming_lang, setPrefered_programming_lang] =
    React.useState(initialValues.prefered_programming_lang);
  const [framework_proficiency, setFramework_proficiency] = React.useState(
    initialValues.framework_proficiency
  );
  const [education, setEducation] = React.useState(initialValues.education);
  const [domain, setDomain] = React.useState(initialValues.domain);
  const [github, setGithub] = React.useState(initialValues.github);
  const [stackoverflow, setStackoverflow] = React.useState(
    initialValues.stackoverflow
  );
  const [linkedin, setLinkedin] = React.useState(initialValues.linkedin);
  const [blogs, setBlogs] = React.useState(initialValues.blogs);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = { ...initialValues, ...candidateBelievabilityRecord };
    setRole(cleanValues.role);
    setTotal_years_of_exp(cleanValues.total_years_of_exp);
    setPrefered_programming_lang(cleanValues.prefered_programming_lang);
    setFramework_proficiency(cleanValues.framework_proficiency);
    setEducation(cleanValues.education);
    setDomain(cleanValues.domain);
    setGithub(cleanValues.github);
    setStackoverflow(cleanValues.stackoverflow);
    setLinkedin(cleanValues.linkedin);
    setBlogs(cleanValues.blogs);
    setErrors({});
  };
  const [candidateBelievabilityRecord, setCandidateBelievabilityRecord] =
    React.useState(candidateBelievability);
  React.useEffect(() => {
    const queryData = async () => {
      const record = id
        ? await DataStore.query(CandidateBelievability, id)
        : candidateBelievability;
      setCandidateBelievabilityRecord(record);
    };
    queryData();
  }, [id, candidateBelievability]);
  React.useEffect(resetStateValues, [candidateBelievabilityRecord]);
  const validations = {
    role: [{ type: "Required" }],
    total_years_of_exp: [{ type: "Required" }],
    prefered_programming_lang: [{ type: "Required" }],
    framework_proficiency: [{ type: "Required" }],
    education: [{ type: "Required" }],
    domain: [{ type: "Required" }],
    github: [],
    stackoverflow: [],
    linkedin: [],
    blogs: [],
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
          role,
          total_years_of_exp,
          prefered_programming_lang,
          framework_proficiency,
          education,
          domain,
          github,
          stackoverflow,
          linkedin,
          blogs,
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
            CandidateBelievability.copyOf(
              candidateBelievabilityRecord,
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
      {...getOverrideProps(overrides, "CandidateBelievabilityUpdateForm")}
    >
      <TextField
        label="Role"
        isRequired={true}
        isReadOnly={false}
        defaultValue={role}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              role: value,
              total_years_of_exp,
              prefered_programming_lang,
              framework_proficiency,
              education,
              domain,
              github,
              stackoverflow,
              linkedin,
              blogs,
            };
            const result = onChange(modelFields);
            value = result?.role ?? value;
          }
          if (errors.role?.hasError) {
            runValidationTasks("role", value);
          }
          setRole(value);
        }}
        onBlur={() => runValidationTasks("role", role)}
        errorMessage={errors.role?.errorMessage}
        hasError={errors.role?.hasError}
        {...getOverrideProps(overrides, "role")}
      ></TextField>
      <TextField
        label="Total years of exp"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        defaultValue={total_years_of_exp}
        onChange={(e) => {
          let value = parseInt(e.target.value);
          if (isNaN(value)) {
            setErrors((errors) => ({
              ...errors,
              total_years_of_exp: "Value must be a valid number",
            }));
            return;
          }
          if (onChange) {
            const modelFields = {
              role,
              total_years_of_exp: value,
              prefered_programming_lang,
              framework_proficiency,
              education,
              domain,
              github,
              stackoverflow,
              linkedin,
              blogs,
            };
            const result = onChange(modelFields);
            value = result?.total_years_of_exp ?? value;
          }
          if (errors.total_years_of_exp?.hasError) {
            runValidationTasks("total_years_of_exp", value);
          }
          setTotal_years_of_exp(value);
        }}
        onBlur={() =>
          runValidationTasks("total_years_of_exp", total_years_of_exp)
        }
        errorMessage={errors.total_years_of_exp?.errorMessage}
        hasError={errors.total_years_of_exp?.hasError}
        {...getOverrideProps(overrides, "total_years_of_exp")}
      ></TextField>
      <TextField
        label="Prefered programming lang"
        isRequired={true}
        isReadOnly={false}
        defaultValue={prefered_programming_lang}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              role,
              total_years_of_exp,
              prefered_programming_lang: value,
              framework_proficiency,
              education,
              domain,
              github,
              stackoverflow,
              linkedin,
              blogs,
            };
            const result = onChange(modelFields);
            value = result?.prefered_programming_lang ?? value;
          }
          if (errors.prefered_programming_lang?.hasError) {
            runValidationTasks("prefered_programming_lang", value);
          }
          setPrefered_programming_lang(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "prefered_programming_lang",
            prefered_programming_lang
          )
        }
        errorMessage={errors.prefered_programming_lang?.errorMessage}
        hasError={errors.prefered_programming_lang?.hasError}
        {...getOverrideProps(overrides, "prefered_programming_lang")}
      ></TextField>
      <TextField
        label="Framework proficiency"
        isRequired={true}
        isReadOnly={false}
        defaultValue={framework_proficiency}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              role,
              total_years_of_exp,
              prefered_programming_lang,
              framework_proficiency: value,
              education,
              domain,
              github,
              stackoverflow,
              linkedin,
              blogs,
            };
            const result = onChange(modelFields);
            value = result?.framework_proficiency ?? value;
          }
          if (errors.framework_proficiency?.hasError) {
            runValidationTasks("framework_proficiency", value);
          }
          setFramework_proficiency(value);
        }}
        onBlur={() =>
          runValidationTasks("framework_proficiency", framework_proficiency)
        }
        errorMessage={errors.framework_proficiency?.errorMessage}
        hasError={errors.framework_proficiency?.hasError}
        {...getOverrideProps(overrides, "framework_proficiency")}
      ></TextField>
      <TextField
        label="Education"
        isRequired={true}
        isReadOnly={false}
        defaultValue={education}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              role,
              total_years_of_exp,
              prefered_programming_lang,
              framework_proficiency,
              education: value,
              domain,
              github,
              stackoverflow,
              linkedin,
              blogs,
            };
            const result = onChange(modelFields);
            value = result?.education ?? value;
          }
          if (errors.education?.hasError) {
            runValidationTasks("education", value);
          }
          setEducation(value);
        }}
        onBlur={() => runValidationTasks("education", education)}
        errorMessage={errors.education?.errorMessage}
        hasError={errors.education?.hasError}
        {...getOverrideProps(overrides, "education")}
      ></TextField>
      <TextField
        label="Domain"
        isRequired={true}
        isReadOnly={false}
        defaultValue={domain}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              role,
              total_years_of_exp,
              prefered_programming_lang,
              framework_proficiency,
              education,
              domain: value,
              github,
              stackoverflow,
              linkedin,
              blogs,
            };
            const result = onChange(modelFields);
            value = result?.domain ?? value;
          }
          if (errors.domain?.hasError) {
            runValidationTasks("domain", value);
          }
          setDomain(value);
        }}
        onBlur={() => runValidationTasks("domain", domain)}
        errorMessage={errors.domain?.errorMessage}
        hasError={errors.domain?.hasError}
        {...getOverrideProps(overrides, "domain")}
      ></TextField>
      <TextField
        label="Github"
        isRequired={false}
        isReadOnly={false}
        defaultValue={github}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              role,
              total_years_of_exp,
              prefered_programming_lang,
              framework_proficiency,
              education,
              domain,
              github: value,
              stackoverflow,
              linkedin,
              blogs,
            };
            const result = onChange(modelFields);
            value = result?.github ?? value;
          }
          if (errors.github?.hasError) {
            runValidationTasks("github", value);
          }
          setGithub(value);
        }}
        onBlur={() => runValidationTasks("github", github)}
        errorMessage={errors.github?.errorMessage}
        hasError={errors.github?.hasError}
        {...getOverrideProps(overrides, "github")}
      ></TextField>
      <TextField
        label="Stackoverflow"
        isRequired={false}
        isReadOnly={false}
        defaultValue={stackoverflow}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              role,
              total_years_of_exp,
              prefered_programming_lang,
              framework_proficiency,
              education,
              domain,
              github,
              stackoverflow: value,
              linkedin,
              blogs,
            };
            const result = onChange(modelFields);
            value = result?.stackoverflow ?? value;
          }
          if (errors.stackoverflow?.hasError) {
            runValidationTasks("stackoverflow", value);
          }
          setStackoverflow(value);
        }}
        onBlur={() => runValidationTasks("stackoverflow", stackoverflow)}
        errorMessage={errors.stackoverflow?.errorMessage}
        hasError={errors.stackoverflow?.hasError}
        {...getOverrideProps(overrides, "stackoverflow")}
      ></TextField>
      <TextField
        label="Linkedin"
        isRequired={false}
        isReadOnly={false}
        defaultValue={linkedin}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              role,
              total_years_of_exp,
              prefered_programming_lang,
              framework_proficiency,
              education,
              domain,
              github,
              stackoverflow,
              linkedin: value,
              blogs,
            };
            const result = onChange(modelFields);
            value = result?.linkedin ?? value;
          }
          if (errors.linkedin?.hasError) {
            runValidationTasks("linkedin", value);
          }
          setLinkedin(value);
        }}
        onBlur={() => runValidationTasks("linkedin", linkedin)}
        errorMessage={errors.linkedin?.errorMessage}
        hasError={errors.linkedin?.hasError}
        {...getOverrideProps(overrides, "linkedin")}
      ></TextField>
      <TextField
        label="Blogs"
        isRequired={false}
        isReadOnly={false}
        defaultValue={blogs}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              role,
              total_years_of_exp,
              prefered_programming_lang,
              framework_proficiency,
              education,
              domain,
              github,
              stackoverflow,
              linkedin,
              blogs: value,
            };
            const result = onChange(modelFields);
            value = result?.blogs ?? value;
          }
          if (errors.blogs?.hasError) {
            runValidationTasks("blogs", value);
          }
          setBlogs(value);
        }}
        onBlur={() => runValidationTasks("blogs", blogs)}
        errorMessage={errors.blogs?.errorMessage}
        hasError={errors.blogs?.hasError}
        {...getOverrideProps(overrides, "blogs")}
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
