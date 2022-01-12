import { createAction, props } from '@ngrx/store';

import { ICurrentUser } from '../../../shared/types/current-user.interface';
import { AuthActionTypes } from '../auth.action-types';

export const getCurrentUserAction = createAction(
  AuthActionTypes.GET_CURRENT_USER
);

export const getCurrentUserSuccessAction = createAction(
  AuthActionTypes.GET_CURRENT_USER_SUCCESS,
  props<{ currentUser: ICurrentUser }>()
);

export const getCurrentUserFailureAction = createAction(
  AuthActionTypes.GET_CURRENT_USER_FAILURE
);
