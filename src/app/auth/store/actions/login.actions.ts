import { createAction, props } from '@ngrx/store';

import { IBackendErrors } from '../../../shared/types/backend-errors.interface';
import { ICurrentUser } from '../../../shared/types/current-user.interface';
import { ILoginRequest } from '../../types/login-request.interface';
import { AuthActionTypes } from '../auth.action-types';

export const loginAction = createAction(
  AuthActionTypes.LOGIN,
  props<{ request: ILoginRequest }>()
);

export const loginSuccessAction = createAction(
  AuthActionTypes.LOGIN_SUCCESS,
  props<{ currentUser: ICurrentUser }>()
);

export const loginFailureAction = createAction(
  AuthActionTypes.LOGIN_FAILURE,
  props<{ errors: IBackendErrors }>()
);
