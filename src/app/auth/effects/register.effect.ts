import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, of, tap } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { PersistenceService } from '../../shared/services/persistence.service';
import { ICurrentUser } from '../../shared/types/current-user.interface';
import { AuthService } from '../services/auth.service';
import {
  registerAction,
  registerFailureAction,
  registerSuccessAction,
} from '../store/register.actions';

/*
 * Aim of Effect is to decrease responsibilities of register component
 * Effect handle the fetching of data
 * */

@Injectable()
export class RegisterEffect {
  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerAction),
      switchMap(({ request }) => {
        return this.authService.register(request).pipe(
          // When successful
          map((currentUser: ICurrentUser) => {
            this.persistenceService.set('accessToken', currentUser.token);
            return registerSuccessAction({ currentUser });
          }),

          // When error from API
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              registerFailureAction({ errors: errorResponse.error.errors })
            );
          })
        );
      })
    )
  );

  redirectAfterSubmit$ = createEffect(
    () =>
      // If action of type registerSuccessAction is detected it's called
      this.actions$.pipe(
        ofType(registerSuccessAction),
        tap(() => {
          // tap do not need to return something just doing something
          this.router.navigateByUrl('/');
        })
      ),
    { dispatch: false } // do not dispatch something
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistenceService: PersistenceService,
    private router: Router
  ) {}
}
