import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { FeedService } from '../../services/feed.service';
import { IGetFeedResponse } from '../../types/get-feed-response.interface';
import {
  getFeedAction,
  getFeedFailureAction,
  getFeedSuccessAction,
} from '../actions/getFeed.action';

/*
 * Aim of Effect is to decrease responsibilities of register component
 * Effect handle the fetching of data
 * */

@Injectable()
export class GetFeedEffect {
  getFeed$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getFeedAction),
      switchMap(({ url }) => {
        return this.feedService.getFeed(url).pipe(
          // When successful
          map((feed: IGetFeedResponse) => {
            return getFeedSuccessAction({ feed });
          }),

          // When error from API
          catchError(() => {
            return of(getFeedFailureAction());
          })
        );
      })
    )
  );

  constructor(private actions$: Actions, private feedService: FeedService) {}
}
