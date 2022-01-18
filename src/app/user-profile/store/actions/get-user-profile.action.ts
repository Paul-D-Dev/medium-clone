import { createAction, props } from '@ngrx/store';
import { IUserProfile } from '../../types/user-profile.interface';
import { ActionTypes } from '../action-types';

export const getUserProfileAction = createAction(
  ActionTypes.GET_USER_ACTION,
  props<{ username: string }>()
);

export const getUserProfileSuccessAction = createAction(
  ActionTypes.GET_USER_ACTION_SUCCESS,
  props<{ userProfile: IUserProfile }>()
);

export const getUserProfileFailureAction = createAction(
  ActionTypes.GET_USER_ACTION_FAILURE
);
