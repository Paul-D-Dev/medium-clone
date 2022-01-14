import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { environment } from '../../../../../environments/environment';
import { PopularTagType } from '../../../types/popular-tag.type';
import { IPopularTagsResponse } from '../types/popular-tags.interface';

@Injectable()
export class PopularTagsService {
  constructor(private http: HttpClient) {}
  getPopularTags(): Observable<PopularTagType[]> {
    const url = environment.apiUrl + '/tags';
    return this.http.get(url).pipe(
      map((response: IPopularTagsResponse) => {
        return response.tags;
      })
    );
  }
}
