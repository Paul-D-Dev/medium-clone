import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { IArticle } from '../types/article.interface';
import { IGetArticleResponse } from '../types/get-article-response.interface';

@Injectable()
export class ArticleService {
  constructor(private http: HttpClient) {}

  getArticle(slug: string): Observable<IArticle> {
    const url = `${environment.apiUrl}/articles/${slug}`;
    return this.http.get<IGetArticleResponse>(url).pipe(
      map((response: IGetArticleResponse) => {
        return response.article;
      })
    );
  }
}
