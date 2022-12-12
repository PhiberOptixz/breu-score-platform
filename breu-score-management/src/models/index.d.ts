import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem } from "@aws-amplify/datastore";





type EagerReliabilityVideoTest = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ReliabilityVideoTest, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly question_1?: string | null;
  readonly question_2?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyReliabilityVideoTest = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ReliabilityVideoTest, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly question_1?: string | null;
  readonly question_2?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ReliabilityVideoTest = LazyLoading extends LazyLoadingDisabled ? EagerReliabilityVideoTest : LazyReliabilityVideoTest

export declare const ReliabilityVideoTest: (new (init: ModelInit<ReliabilityVideoTest>) => ReliabilityVideoTest) & {
  copyOf(source: ReliabilityVideoTest, mutator: (draft: MutableModel<ReliabilityVideoTest>) => MutableModel<ReliabilityVideoTest> | void): ReliabilityVideoTest;
}

type EagerReliabilityObjTypeTest = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ReliabilityObjTypeTest, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly question_1?: string | null;
  readonly question_2?: string | null;
  readonly question_3?: string | null;
  readonly question_4?: string | null;
  readonly question_5?: string | null;
  readonly question_6?: string | null;
  readonly question_7?: string | null;
  readonly question_8?: string | null;
  readonly question_9?: string | null;
  readonly question_10?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyReliabilityObjTypeTest = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ReliabilityObjTypeTest, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly question_1?: string | null;
  readonly question_2?: string | null;
  readonly question_3?: string | null;
  readonly question_4?: string | null;
  readonly question_5?: string | null;
  readonly question_6?: string | null;
  readonly question_7?: string | null;
  readonly question_8?: string | null;
  readonly question_9?: string | null;
  readonly question_10?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ReliabilityObjTypeTest = LazyLoading extends LazyLoadingDisabled ? EagerReliabilityObjTypeTest : LazyReliabilityObjTypeTest

export declare const ReliabilityObjTypeTest: (new (init: ModelInit<ReliabilityObjTypeTest>) => ReliabilityObjTypeTest) & {
  copyOf(source: ReliabilityObjTypeTest, mutator: (draft: MutableModel<ReliabilityObjTypeTest>) => MutableModel<ReliabilityObjTypeTest> | void): ReliabilityObjTypeTest;
}

type EagerCandidateReliabilityScore = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CandidateReliabilityScore, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly test_score?: number | null;
  readonly video_score_1?: number | null;
  readonly video_score_2?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCandidateReliabilityScore = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CandidateReliabilityScore, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly test_score?: number | null;
  readonly video_score_1?: number | null;
  readonly video_score_2?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type CandidateReliabilityScore = LazyLoading extends LazyLoadingDisabled ? EagerCandidateReliabilityScore : LazyCandidateReliabilityScore

export declare const CandidateReliabilityScore: (new (init: ModelInit<CandidateReliabilityScore>) => CandidateReliabilityScore) & {
  copyOf(source: CandidateReliabilityScore, mutator: (draft: MutableModel<CandidateReliabilityScore>) => MutableModel<CandidateReliabilityScore> | void): CandidateReliabilityScore;
}

type EagerCandidateScore = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CandidateScore, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly final_score?: number | null;
  readonly believability?: number | null;
  readonly reliability?: number | null;
  readonly emotional?: number | null;
  readonly undesirability?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCandidateScore = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CandidateScore, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly final_score?: number | null;
  readonly believability?: number | null;
  readonly reliability?: number | null;
  readonly emotional?: number | null;
  readonly undesirability?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type CandidateScore = LazyLoading extends LazyLoadingDisabled ? EagerCandidateScore : LazyCandidateScore

export declare const CandidateScore: (new (init: ModelInit<CandidateScore>) => CandidateScore) & {
  copyOf(source: CandidateScore, mutator: (draft: MutableModel<CandidateScore>) => MutableModel<CandidateScore> | void): CandidateScore;
}

type EagerCandidateProfile = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CandidateProfile, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly profile_pic?: string | null;
  readonly ReliabilityVideoTest?: ReliabilityVideoTest | null;
  readonly ReliabilityObjTypeTest?: ReliabilityObjTypeTest | null;
  readonly CandidateReliabilityScore?: CandidateReliabilityScore | null;
  readonly CandidateScore?: CandidateScore | null;
  readonly CandidateBelievability?: CandidateBelievability | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly candidateProfileReliabilityVideoTestId?: string | null;
  readonly candidateProfileReliabilityObjTypeTestId?: string | null;
  readonly candidateProfileCandidateReliabilityScoreId?: string | null;
  readonly candidateProfileCandidateScoreId?: string | null;
  readonly candidateProfileCandidateBelievabilityId?: string | null;
}

type LazyCandidateProfile = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CandidateProfile, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly profile_pic?: string | null;
  readonly ReliabilityVideoTest: AsyncItem<ReliabilityVideoTest | undefined>;
  readonly ReliabilityObjTypeTest: AsyncItem<ReliabilityObjTypeTest | undefined>;
  readonly CandidateReliabilityScore: AsyncItem<CandidateReliabilityScore | undefined>;
  readonly CandidateScore: AsyncItem<CandidateScore | undefined>;
  readonly CandidateBelievability: AsyncItem<CandidateBelievability | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly candidateProfileReliabilityVideoTestId?: string | null;
  readonly candidateProfileReliabilityObjTypeTestId?: string | null;
  readonly candidateProfileCandidateReliabilityScoreId?: string | null;
  readonly candidateProfileCandidateScoreId?: string | null;
  readonly candidateProfileCandidateBelievabilityId?: string | null;
}

export declare type CandidateProfile = LazyLoading extends LazyLoadingDisabled ? EagerCandidateProfile : LazyCandidateProfile

export declare const CandidateProfile: (new (init: ModelInit<CandidateProfile>) => CandidateProfile) & {
  copyOf(source: CandidateProfile, mutator: (draft: MutableModel<CandidateProfile>) => MutableModel<CandidateProfile> | void): CandidateProfile;
}

type EagerCandidateBelievability = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CandidateBelievability, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly role: string;
  readonly total_years_of_exp: number;
  readonly prefered_programming_lang: string;
  readonly framework_proficiency: string;
  readonly education: string;
  readonly domain: string;
  readonly github?: string | null;
  readonly stackoverflow?: string | null;
  readonly linkedin?: string | null;
  readonly blogs?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCandidateBelievability = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CandidateBelievability, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly role: string;
  readonly total_years_of_exp: number;
  readonly prefered_programming_lang: string;
  readonly framework_proficiency: string;
  readonly education: string;
  readonly domain: string;
  readonly github?: string | null;
  readonly stackoverflow?: string | null;
  readonly linkedin?: string | null;
  readonly blogs?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type CandidateBelievability = LazyLoading extends LazyLoadingDisabled ? EagerCandidateBelievability : LazyCandidateBelievability

export declare const CandidateBelievability: (new (init: ModelInit<CandidateBelievability>) => CandidateBelievability) & {
  copyOf(source: CandidateBelievability, mutator: (draft: MutableModel<CandidateBelievability>) => MutableModel<CandidateBelievability> | void): CandidateBelievability;
}