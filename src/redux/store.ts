import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { IJobActions } from './jobs/actions';
import { jobsReducer } from './jobs/reducer';
import { IJobState } from './jobs/state';

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any
    }
}


export interface IRootState {
    jobs: IJobState;
}


export type IRootAction = IJobActions;


const rootReducers = combineReducers({
    jobs: jobsReducer,
})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export type DispatchThunk = ThunkDispatch<IRootState, null, IRootAction>

export const store = createStore<IRootState, IRootAction, {}, {}>(
    rootReducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);
