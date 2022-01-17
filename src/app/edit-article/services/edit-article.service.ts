import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { IArticleInput } from '../../shared/types/article-input.interface';
import { IArticle } from '../../shared/types/article.interface';
import { ISaveArticleResponse } from '../../shared/types/save-article-response.interface';

@Injectable()
export class EditArticleService {
  constructor(private http: HttpClient) {}
  updateArticle(
    slug: string,
    articleInput: IArticleInput
  ): Observable<IArticle> {
    const url = `${environment.apiUrl}/articles/${slug}`;
    return this.http
      .put<ISaveArticleResponse>(url, { article: articleInput })
      .pipe(
        map((response: ISaveArticleResponse) => {
          return response.article;
        })
      );
  }
}
