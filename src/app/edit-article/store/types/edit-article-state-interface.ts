import { IArticle } from '../../../shared/types/article.interface';
import { IBackendErrors } from '../../../shared/types/backend-errors.interface';

export interface IEditArticleState {
  isLoading: boolean;
  validationErrors: IBackendErrors | null;
  isSubmitting: boolean;
  article: IArticle | null;
}
