/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { CandidateScore } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CandidateScoreUpdateFormInputValues = {
    final_score?: number;
    believability?: number;
    reliability?: number;
    emotional?: number;
    undesirability?: number;
};
export declare type CandidateScoreUpdateFormValidationValues = {
    final_score?: ValidationFunction<number>;
    believability?: ValidationFunction<number>;
    reliability?: ValidationFunction<number>;
    emotional?: ValidationFunction<number>;
    undesirability?: ValidationFunction<number>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CandidateScoreUpdateFormOverridesProps = {
    CandidateScoreUpdateFormGrid?: FormProps<GridProps>;
    final_score?: FormProps<TextFieldProps>;
    believability?: FormProps<TextFieldProps>;
    reliability?: FormProps<TextFieldProps>;
    emotional?: FormProps<TextFieldProps>;
    undesirability?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CandidateScoreUpdateFormProps = React.PropsWithChildren<{
    overrides?: CandidateScoreUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    candidateScore?: CandidateScore;
    onSubmit?: (fields: CandidateScoreUpdateFormInputValues) => CandidateScoreUpdateFormInputValues;
    onSuccess?: (fields: CandidateScoreUpdateFormInputValues) => void;
    onError?: (fields: CandidateScoreUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: CandidateScoreUpdateFormInputValues) => CandidateScoreUpdateFormInputValues;
    onValidate?: CandidateScoreUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CandidateScoreUpdateForm(props: CandidateScoreUpdateFormProps): React.ReactElement;
