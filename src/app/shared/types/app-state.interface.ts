import { IAuthState } from '../../auth/types/auth-state.interface';
import { IFeedState } from '../modules/feed/types/feed-state.interface';
import { IPopularTagsState } from '../modules/popular-tags/types/popular-tags-state.interface';

export interface IAppState {
  auth: IAuthState;
  feed: IFeedState;
  popularTags: IPopularTagsState;
}
