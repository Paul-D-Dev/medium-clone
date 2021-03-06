import { IArticleState } from '../../article/store/types/article.state.interface';
import { IAuthState } from '../../auth/types/auth-state.interface';
import { ICreateArticleState } from '../../create-article/store/types/create-article-state.interface';
import { IEditArticleState } from '../../edit-article/store/types/edit-article-state-interface';
import { ISettingsState } from '../../settings/store/types/settings-state.interface';
import { IUserProfileState } from '../../user-profile/types/user-profile-state.interface';
import { IFeedState } from '../modules/feed/types/feed-state.interface';
import { IPopularTagsState } from '../modules/popular-tags/types/popular-tags-state.interface';

export interface IAppState {
  auth: IAuthState;
  feed: IFeedState;
  popularTags: IPopularTagsState;
  article: IArticleState;
  createArticle: ICreateArticleState;
  editArticle: IEditArticleState;
  settings: ISettingsState;
  userProfile: IUserProfileState;
}
