import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { IArticleInput } from '../../shared/types/article-input.interface';
import { ISaveArticleResponse } from '../../shared/types/save-article-response.interface';

@Injectable()
export class CreateArticleService {
  constructor(private http: HttpClient) {}

  createArticle(articleInput: IArticleInput): Observable<IArticleInput> {
    const url = environment.apiUrl + '/articles';
    return this.http
      .post<ISaveArticleResponse>(url, { article: articleInput })
      .pipe(
        map((response: ISaveArticleResponse) => {
          return response.article;
        })
      );
  }
}
