import { Job } from "../jobs/state";
export const LOAD_JOB = 'LOAD_JOB';

export interface ILoadJobAction {
    type: typeof LOAD_JOB;
    jobs: Job[];
}




export type IJobActions = ILoadJobAction ;

export function loadJobs(jobs: Job[]): ILoadJobAction {
    return {
        type: LOAD_JOB, 
        jobs
    }
}