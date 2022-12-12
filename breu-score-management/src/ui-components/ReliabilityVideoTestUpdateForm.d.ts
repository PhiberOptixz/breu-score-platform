/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ReliabilityVideoTest } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ReliabilityVideoTestUpdateFormInputValues = {
    question_1?: string;
    question_2?: string;
};
export declare type ReliabilityVideoTestUpdateFormValidationValues = {
    question_1?: ValidationFunction<string>;
    question_2?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ReliabilityVideoTestUpdateFormOverridesProps = {
    ReliabilityVideoTestUpdateFormGrid?: FormProps<GridProps>;
    question_1?: FormProps<TextFieldProps>;
    question_2?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ReliabilityVideoTestUpdateFormProps = React.PropsWithChildren<{
    overrides?: ReliabilityVideoTestUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    reliabilityVideoTest?: ReliabilityVideoTest;
    onSubmit?: (fields: ReliabilityVideoTestUpdateFormInputValues) => ReliabilityVideoTestUpdateFormInputValues;
    onSuccess?: (fields: ReliabilityVideoTestUpdateFormInputValues) => void;
    onError?: (fields: ReliabilityVideoTestUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: ReliabilityVideoTestUpdateFormInputValues) => ReliabilityVideoTestUpdateFormInputValues;
    onValidate?: ReliabilityVideoTestUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ReliabilityVideoTestUpdateForm(props: ReliabilityVideoTestUpdateFormProps): React.ReactElement;
