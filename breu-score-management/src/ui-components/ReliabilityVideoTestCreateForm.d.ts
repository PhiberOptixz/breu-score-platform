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
export declare type ReliabilityVideoTestCreateFormInputValues = {
    question_1?: string;
    question_2?: string;
};
export declare type ReliabilityVideoTestCreateFormValidationValues = {
    question_1?: ValidationFunction<string>;
    question_2?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ReliabilityVideoTestCreateFormOverridesProps = {
    ReliabilityVideoTestCreateFormGrid?: FormProps<GridProps>;
    question_1?: FormProps<TextFieldProps>;
    question_2?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ReliabilityVideoTestCreateFormProps = React.PropsWithChildren<{
    overrides?: ReliabilityVideoTestCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ReliabilityVideoTestCreateFormInputValues) => ReliabilityVideoTestCreateFormInputValues;
    onSuccess?: (fields: ReliabilityVideoTestCreateFormInputValues) => void;
    onError?: (fields: ReliabilityVideoTestCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: ReliabilityVideoTestCreateFormInputValues) => ReliabilityVideoTestCreateFormInputValues;
    onValidate?: ReliabilityVideoTestCreateFormValidationValues;
} & React.CSSProperties>;
export default function ReliabilityVideoTestCreateForm(props: ReliabilityVideoTestCreateFormProps): React.ReactElement;
