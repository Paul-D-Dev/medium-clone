import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, of, switchMap } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserProfileService } from '../../services/user-profile.service';
import { IUserProfile } from '../../types/user-profile.interface';
import {
  getUserProfileAction,
  getUserProfileFailureAction,
  getUserProfileSuccessAction,
} from '../actions/get-user-profile.action';

@Injectable()
export class GetUserProfileEffect {
  getUserProfile$ = createEffect(() =>
    this.action$.pipe(
      ofType(getUserProfileAction),
      switchMap(({ username }) => {
        return this.userProfileService.getUserProfile(username).pipe(
          map((userProfile: IUserProfile) => {
            return getUserProfileSuccessAction({ userProfile });
          }),
          catchError(() => of(getUserProfileFailureAction))
        );
      })
    )
  );

  constructor(
    private action$: Actions,
    private userProfileService: UserProfileService
  ) {}
}
