import { createAction, props } from '@ngrx/store';
import { AuthActionTypes } from './auth.action-types';

export const registerAction = createAction(
  AuthActionTypes.REGISTER,
  props<{ username: string; password: string; email: string }>()
);
