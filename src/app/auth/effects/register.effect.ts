import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
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

  constructor(private actions$: Actions, private authService: AuthService) {}
}
