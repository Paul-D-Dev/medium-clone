import { PopularTagType } from '../../../types/popular-tag.type';

export interface IPopularTagsState {
  isLoading: boolean;
  error: string | null;
  data: PopularTagType[] | null;
}
