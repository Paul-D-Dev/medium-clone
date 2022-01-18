import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { combineLatest, filter, Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { currentUserSelector } from '../../../auth/store/selectors';
import { ICurrentUser } from '../../../shared/types/current-user.interface';
import { getUserProfileAction } from '../../store/actions/get-user-profile.action';
import {
  errorSelector,
  isLoadingSelector,
  userProfileSelector,
} from '../../store/selectors';
import { IUserProfile } from '../../types/user-profile.interface';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit, OnDestroy {
  userProfile: IUserProfile;
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  userProfileSubscription: Subscription;
  apiUrl: string;
  username: string;
  isCurrentUserProfile$: Observable<boolean>;

  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initializeValues();
    this.initializeListener();
  }

  ngOnDestroy() {
    this.userProfileSubscription.unsubscribe();
  }

  initializeValues(): void {
    this.username = this.route.snapshot.paramMap.get('username');
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));

    this.isCurrentUserProfile$ = combineLatest(
      this.store.pipe(select(currentUserSelector), filter(Boolean)),
      this.store.pipe(select(userProfileSelector), filter(Boolean))
    ).pipe(
      map(([currentUser, userProfile]: [ICurrentUser, IUserProfile]) => {
        return currentUser.username === userProfile.username;
      })
    );
  }

  initializeListener(): void {
    this.userProfileSubscription = this.store
      .pipe(select(userProfileSelector))
      .subscribe((userProfile: IUserProfile) => {
        this.userProfile = userProfile;
      });

    this.route.params.subscribe((params: Params) => {
      this.username = params['username'];
      this.fetchUserProfile();
    });
  }
  fetchUserProfile(): void {
    this.store.dispatch(getUserProfileAction({ username: this.username }));
  }

  getApiUrl(): string {
    const isFavorite = this.router.url.includes('favorites');

    return isFavorite
      ? `/articles?favorited=${this.username}`
      : `/articles?author=${this.username}`;
  }
}
