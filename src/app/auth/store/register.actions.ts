import { createAction, props } from '@ngrx/store';
import { IBackendErrors } from '../../shared/types/backend-errors.interface';
import { ICurrentUser } from '../../shared/types/current-user.interface';
import { IRegisterRequest } from '../types/register-request.interface';
import { AuthActionTypes } from './auth.action-types';

export const registerAction = createAction(
  AuthActionTypes.REGISTER,
  props<{ request: IRegisterRequest }>()
);

export const registerSuccessAction = createAction(
  AuthActionTypes.REGISTER_SUCCESS,
  props<{ currentUser: ICurrentUser }>()
);

export const registerFailureAction = createAction(
  AuthActionTypes.REGISTER_FAILURE,
  props<{ errors: IBackendErrors }>()
);
