import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { PersistenceService } from '../../../shared/services/persistence.service';
import { ICurrentUser } from '../../../shared/types/current-user.interface';
import { AuthService } from '../../services/auth.service';
import {
  getCurrentUserAction,
  getCurrentUserFailureAction,
  getCurrentUserSuccessAction,
} from '../actions/get-current-user.actions';

/*
 * Aim of Effect is to decrease responsibilities of register component
 * Effect handle the fetching of data
 * */

@Injectable()
export class GetCurrentUserEffect {
  getCurrentUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCurrentUserAction),
      switchMap(() => {
        const token = this.persistenceService.get('accessToken');
        if (!token) {
          console.log('no token');
          return of(getCurrentUserFailureAction());
        }

        return this.authService.getCurrentUser().pipe(
          // When successful
          map((currentUser: ICurrentUser) => {
            // this.persistenceService.set('accessToken', currentUser.token);
            return getCurrentUserSuccessAction({ currentUser });
          }),

          // When error from API
          catchError(() => {
            console.error('Error to fetch current user');
            return of(getCurrentUserFailureAction());
          })
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistenceService: PersistenceService
  ) {}
}
