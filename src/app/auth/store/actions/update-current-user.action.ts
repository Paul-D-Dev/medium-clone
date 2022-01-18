import { createAction, props } from '@ngrx/store';

import { IBackendErrors } from '../../../shared/types/backend-errors.interface';
import { ICurrentUserInput } from '../../../shared/types/current-user-input.interface';
import { ICurrentUser } from '../../../shared/types/current-user.interface';
import { AuthActionTypes } from '../auth.action-types';

export const updateCurrentUserAction = createAction(
  AuthActionTypes.UPDATE_CURRENT_USER,
  props<{ currentUserInput: ICurrentUserInput }>()
);

export const updateCurrentUserSuccessAction = createAction(
  AuthActionTypes.UPDATE_CURRENT_USER_SUCCESS,
  props<{ currentUser: ICurrentUser }>()
);

export const updateCurrentUserFailureAction = createAction(
  AuthActionTypes.UPDATE_CURRENT_USER_FAILURE,
  props<{ errors: IBackendErrors }>()
);
