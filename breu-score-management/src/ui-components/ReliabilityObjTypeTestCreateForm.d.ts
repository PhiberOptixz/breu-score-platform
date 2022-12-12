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
export declare type ReliabilityObjTypeTestCreateFormInputValues = {
    question_1?: string;
    question_2?: string;
    question_3?: string;
    question_4?: string;
    question_5?: string;
    question_6?: string;
    question_7?: string;
    question_8?: string;
    question_9?: string;
    question_10?: string;
};
export declare type ReliabilityObjTypeTestCreateFormValidationValues = {
    question_1?: ValidationFunction<string>;
    question_2?: ValidationFunction<string>;
    question_3?: ValidationFunction<string>;
    question_4?: ValidationFunction<string>;
    question_5?: ValidationFunction<string>;
    question_6?: ValidationFunction<string>;
    question_7?: ValidationFunction<string>;
    question_8?: ValidationFunction<string>;
    question_9?: ValidationFunction<string>;
    question_10?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ReliabilityObjTypeTestCreateFormOverridesProps = {
    ReliabilityObjTypeTestCreateFormGrid?: FormProps<GridProps>;
    question_1?: FormProps<TextFieldProps>;
    question_2?: FormProps<TextFieldProps>;
    question_3?: FormProps<TextFieldProps>;
    question_4?: FormProps<TextFieldProps>;
    question_5?: FormProps<TextFieldProps>;
    question_6?: FormProps<TextFieldProps>;
    question_7?: FormProps<TextFieldProps>;
    question_8?: FormProps<TextFieldProps>;
    question_9?: FormProps<TextFieldProps>;
    question_10?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ReliabilityObjTypeTestCreateFormProps = React.PropsWithChildren<{
    overrides?: ReliabilityObjTypeTestCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ReliabilityObjTypeTestCreateFormInputValues) => ReliabilityObjTypeTestCreateFormInputValues;
    onSuccess?: (fields: ReliabilityObjTypeTestCreateFormInputValues) => void;
    onError?: (fields: ReliabilityObjTypeTestCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: ReliabilityObjTypeTestCreateFormInputValues) => ReliabilityObjTypeTestCreateFormInputValues;
    onValidate?: ReliabilityObjTypeTestCreateFormValidationValues;
} & React.CSSProperties>;
export default function ReliabilityObjTypeTestCreateForm(props: ReliabilityObjTypeTestCreateFormProps): React.ReactElement;
