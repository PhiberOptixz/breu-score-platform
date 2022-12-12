// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { ReliabilityVideoTest, ReliabilityObjTypeTest, CandidateReliabilityScore, CandidateScore, CandidateProfile, CandidateBelievability } = initSchema(schema);

export {
  ReliabilityVideoTest,
  ReliabilityObjTypeTest,
  CandidateReliabilityScore,
  CandidateScore,
  CandidateProfile,
  CandidateBelievability
};