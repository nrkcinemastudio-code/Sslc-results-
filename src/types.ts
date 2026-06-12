/**
 * Types defining state and data entities for the SSLC Revaluation Portal.
 */

export enum ActiveScreen {
  LATEST_NEWS = 'LATEST_NEWS',
  VERIFICATION_FORM = 'VERIFICATION_FORM',
  RESULTS_PAGE = 'RESULTS_PAGE',
  PRANK_REVEAL = 'PRANK_REVEAL'
}

export interface StudentInfo {
  registerNumber: string;
  dateOfBirth: string;
  fullName: string;
  centreName: string;
}

export interface SubjectResult {
  id: string;
  subjectName: string;
  originalGrade: string;
  revaluedGrade: string;
}
