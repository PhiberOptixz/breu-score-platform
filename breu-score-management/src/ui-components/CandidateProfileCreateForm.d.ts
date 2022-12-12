/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CandidateProfileCreateFormInputValues = {
    name?: string;
    profile_pic?: string;
    ReliabilityVideoTest?: string;
    ReliabilityObjTypeTest?: string;
    CandidateReliabilityScore?: string;
    CandidateScore?: string;
    CandidateBelievability?: string;
    candidateProfileReliabilityVideoTestId?: string;
    candidateProfileReliabilityObjTypeTestId?: string;
    candidateProfileCandidateReliabilityScoreId?: string;
    candidateProfileCandidateScoreId?: string;
    candidateProfileCandidateBelievabilityId?: string;
};
export declare type CandidateProfileCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    profile_pic?: ValidationFunction<string>;
    ReliabilityVideoTest?: ValidationFunction<string>;
    ReliabilityObjTypeTest?: ValidationFunction<string>;
    CandidateReliabilityScore?: ValidationFunction<string>;
    CandidateScore?: ValidationFunction<string>;
    CandidateBelievability?: ValidationFunction<string>;
    candidateProfileReliabilityVideoTestId?: ValidationFunction<string>;
    candidateProfileReliabilityObjTypeTestId?: ValidationFunction<string>;
    candidateProfileCandidateReliabilityScoreId?: ValidationFunction<string>;
    candidateProfileCandidateScoreId?: ValidationFunction<string>;
    candidateProfileCandidateBelievabilityId?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CandidateProfileCreateFormOverridesProps = {
    CandidateProfileCreateFormGrid?: FormProps<GridProps>;
    name?: FormProps<TextFieldProps>;
    profile_pic?: FormProps<TextFieldProps>;
    ReliabilityVideoTest?: FormProps<SelectFieldProps>;
    ReliabilityObjTypeTest?: FormProps<SelectFieldProps>;
    CandidateReliabilityScore?: FormProps<SelectFieldProps>;
    CandidateScore?: FormProps<SelectFieldProps>;
    CandidateBelievability?: FormProps<SelectFieldProps>;
    candidateProfileReliabilityVideoTestId?: FormProps<TextFieldProps>;
    candidateProfileReliabilityObjTypeTestId?: FormProps<TextFieldProps>;
    candidateProfileCandidateReliabilityScoreId?: FormProps<TextFieldProps>;
    candidateProfileCandidateScoreId?: FormProps<TextFieldProps>;
    candidateProfileCandidateBelievabilityId?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CandidateProfileCreateFormProps = React.PropsWithChildren<{
    overrides?: CandidateProfileCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CandidateProfileCreateFormInputValues) => CandidateProfileCreateFormInputValues;
    onSuccess?: (fields: CandidateProfileCreateFormInputValues) => void;
    onError?: (fields: CandidateProfileCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: CandidateProfileCreateFormInputValues) => CandidateProfileCreateFormInputValues;
    onValidate?: CandidateProfileCreateFormValidationValues;
} & React.CSSProperties>;
export default function CandidateProfileCreateForm(props: CandidateProfileCreateFormProps): React.ReactElement;
