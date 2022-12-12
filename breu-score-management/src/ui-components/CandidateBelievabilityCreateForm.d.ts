/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CandidateBelievabilityCreateFormInputValues = {
    role?: string;
    total_years_of_exp?: number;
    prefered_programming_lang?: string;
    framework_proficiency?: string;
    education?: string;
    domain?: string;
    github?: string;
    stackoverflow?: string;
    linkedin?: string;
    blogs?: string;
};
export declare type CandidateBelievabilityCreateFormValidationValues = {
    role?: ValidationFunction<string>;
    total_years_of_exp?: ValidationFunction<number>;
    prefered_programming_lang?: ValidationFunction<string>;
    framework_proficiency?: ValidationFunction<string>;
    education?: ValidationFunction<string>;
    domain?: ValidationFunction<string>;
    github?: ValidationFunction<string>;
    stackoverflow?: ValidationFunction<string>;
    linkedin?: ValidationFunction<string>;
    blogs?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CandidateBelievabilityCreateFormOverridesProps = {
    CandidateBelievabilityCreateFormGrid?: FormProps<GridProps>;
    role?: FormProps<TextFieldProps>;
    total_years_of_exp?: FormProps<TextFieldProps>;
    prefered_programming_lang?: FormProps<TextFieldProps>;
    framework_proficiency?: FormProps<TextFieldProps>;
    education?: FormProps<TextFieldProps>;
    domain?: FormProps<TextFieldProps>;
    github?: FormProps<TextFieldProps>;
    stackoverflow?: FormProps<TextFieldProps>;
    linkedin?: FormProps<TextFieldProps>;
    blogs?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CandidateBelievabilityCreateFormProps = React.PropsWithChildren<{
    overrides?: CandidateBelievabilityCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CandidateBelievabilityCreateFormInputValues) => CandidateBelievabilityCreateFormInputValues;
    onSuccess?: (fields: CandidateBelievabilityCreateFormInputValues) => void;
    onError?: (fields: CandidateBelievabilityCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: CandidateBelievabilityCreateFormInputValues) => CandidateBelievabilityCreateFormInputValues;
    onValidate?: CandidateBelievabilityCreateFormValidationValues;
} & React.CSSProperties>;
export default function CandidateBelievabilityCreateForm(props: CandidateBelievabilityCreateFormProps): React.ReactElement;
