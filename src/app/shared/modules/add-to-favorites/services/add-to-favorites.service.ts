import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../../../environments/environment';
import { IArticle } from '../../../types/article.interface';
import { IGetArticleResponse } from '../../../types/get-article-response.interface';

@Injectable()
export class AddToFavoritesService {
  constructor(private http: HttpClient) {}

  addToFavorites(slug: string): Observable<IArticle> {
    const url = this.getUrl(slug);
    return this.http.post(url, {}).pipe(map(this.getArticle));
  }

  removeToFavorites(slug: string): Observable<IArticle> {
    const url = this.getUrl(slug);
    return this.http.delete(url, {}).pipe(map(this.getArticle));
  }

  getUrl(slug: string): string {
    return `${environment.apiUrl}/articles/${slug}/favorite`;
  }

  getArticle(response: IGetArticleResponse): IArticle {
    return response.article;
  }
}
