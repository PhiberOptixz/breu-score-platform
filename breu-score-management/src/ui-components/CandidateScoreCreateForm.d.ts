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
export declare type CandidateScoreCreateFormInputValues = {
    final_score?: number;
    believability?: number;
    reliability?: number;
    emotional?: number;
    undesirability?: number;
};
export declare type CandidateScoreCreateFormValidationValues = {
    final_score?: ValidationFunction<number>;
    believability?: ValidationFunction<number>;
    reliability?: ValidationFunction<number>;
    emotional?: ValidationFunction<number>;
    undesirability?: ValidationFunction<number>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CandidateScoreCreateFormOverridesProps = {
    CandidateScoreCreateFormGrid?: FormProps<GridProps>;
    final_score?: FormProps<TextFieldProps>;
    believability?: FormProps<TextFieldProps>;
    reliability?: FormProps<TextFieldProps>;
    emotional?: FormProps<TextFieldProps>;
    undesirability?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CandidateScoreCreateFormProps = React.PropsWithChildren<{
    overrides?: CandidateScoreCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CandidateScoreCreateFormInputValues) => CandidateScoreCreateFormInputValues;
    onSuccess?: (fields: CandidateScoreCreateFormInputValues) => void;
    onError?: (fields: CandidateScoreCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: CandidateScoreCreateFormInputValues) => CandidateScoreCreateFormInputValues;
    onValidate?: CandidateScoreCreateFormValidationValues;
} & React.CSSProperties>;
export default function CandidateScoreCreateForm(props: CandidateScoreCreateFormProps): React.ReactElement;
