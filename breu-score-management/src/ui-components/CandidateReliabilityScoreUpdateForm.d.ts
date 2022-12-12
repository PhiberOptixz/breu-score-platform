/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { CandidateReliabilityScore } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CandidateReliabilityScoreUpdateFormInputValues = {
    test_score?: number;
    video_score_1?: number;
    video_score_2?: number;
};
export declare type CandidateReliabilityScoreUpdateFormValidationValues = {
    test_score?: ValidationFunction<number>;
    video_score_1?: ValidationFunction<number>;
    video_score_2?: ValidationFunction<number>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CandidateReliabilityScoreUpdateFormOverridesProps = {
    CandidateReliabilityScoreUpdateFormGrid?: FormProps<GridProps>;
    test_score?: FormProps<TextFieldProps>;
    video_score_1?: FormProps<TextFieldProps>;
    video_score_2?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CandidateReliabilityScoreUpdateFormProps = React.PropsWithChildren<{
    overrides?: CandidateReliabilityScoreUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    candidateReliabilityScore?: CandidateReliabilityScore;
    onSubmit?: (fields: CandidateReliabilityScoreUpdateFormInputValues) => CandidateReliabilityScoreUpdateFormInputValues;
    onSuccess?: (fields: CandidateReliabilityScoreUpdateFormInputValues) => void;
    onError?: (fields: CandidateReliabilityScoreUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: CandidateReliabilityScoreUpdateFormInputValues) => CandidateReliabilityScoreUpdateFormInputValues;
    onValidate?: CandidateReliabilityScoreUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CandidateReliabilityScoreUpdateForm(props: CandidateReliabilityScoreUpdateFormProps): React.ReactElement;
