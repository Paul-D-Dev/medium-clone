import { IBackendErrors } from '../../shared/types/backend-errors.interface';
import { ICurrentUser } from '../../shared/types/current-user.interface';

export interface IAuthState {
  isSubmitting: boolean;
  currentUser: ICurrentUser | null;
  isLoggedIn: boolean | null;
  validationErrors: IBackendErrors | null;
  isLoading: boolean;
}
