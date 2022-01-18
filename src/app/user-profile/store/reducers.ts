import { Action, createReducer, on } from '@ngrx/store';
import { IUserProfileState } from '../types/user-profile-state.interface';
import {
  getUserProfileAction,
  getUserProfileFailureAction,
  getUserProfileSuccessAction,
} from './actions/get-user-profile.action';

const initialState: IUserProfileState = {
  data: null,
  isLoading: false,
  error: null,
};

const userProfileReducer = createReducer(
  initialState,
  on(
    getUserProfileAction,
    (state): IUserProfileState => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getUserProfileSuccessAction,
    (state, action): IUserProfileState => ({
      ...state,
      isLoading: false,
      data: action.userProfile,
    })
  ),
  on(
    getUserProfileFailureAction,
    (state): IUserProfileState => ({
      ...state,
      isLoading: false,
    })
  )
);

export function reducers(state: IUserProfileState, action: Action) {
  return userProfileReducer(state, action);
}

export const userProfileFeatureKey = 'userProfile';
