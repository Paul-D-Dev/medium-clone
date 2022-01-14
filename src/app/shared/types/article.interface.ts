import { PopularTagType } from './popular-tag.type';
import { IProfile } from './profile.interface';

export interface IArticle {
  title: string;
  author: IProfile;
  body: string;
  createdAt: string;
  updatedAt: string;
  description: string;
  favorited: boolean;
  favoritesCount: number;
  slug: string;
  tagList: PopularTagType[];
}
