import { createAction, props } from '@ngrx/store';
import { RegisterRequestInterface } from '../types/register-request.interface';
import { AuthActionTypes } from './auth.action-types';

export const registerAction = createAction(
  AuthActionTypes.REGISTER,
  props<{ request: RegisterRequestInterface }>()
);
