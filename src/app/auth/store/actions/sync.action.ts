import { createAction } from '@ngrx/store';
import { AuthActionTypes } from '../auth.action-types';

export const logoutAction = createAction(AuthActionTypes.LOGOUT);
