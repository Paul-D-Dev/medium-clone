import { IArticle } from '../../../shared/types/article.interface';

export interface IArticleState {
  data: IArticle | null;
  isLoading: boolean;
  error: string | null;
}
