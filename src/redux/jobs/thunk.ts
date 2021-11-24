import { DispatchThunk } from "../store";
import { loadJobs } from "./actions";

export const getJobs = () => {
    return async(dispatch: DispatchThunk) => {
        const res = await fetch("http://ec2-18-140-71-77.ap-southeast-1.compute.amazonaws.com:8080/jobpool", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            mode:'cors'
        })
        
        const jobsList = await res.json()
    
        dispatch(loadJobs(jobsList));
    };
};