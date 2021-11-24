import Job from "../../components/Job/Job";
import { IJobActions, LOAD_JOB } from "./actions";
import { IJobState } from "./state";


const initialState: IJobState = {
    jobs: []
};

export const jobsReducer = (oldState: IJobState = initialState, action: IJobActions): IJobState => {
    switch (action.type) {
        case LOAD_JOB:
            return {
                ...oldState,
                jobs: action.jobs
            }
        default:
            return oldState;

    }
};