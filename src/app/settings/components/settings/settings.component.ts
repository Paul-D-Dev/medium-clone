import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { filter, Observable, Subscription } from 'rxjs';
import { logoutAction } from '../../../auth/store/actions/sync.action';
import { updateCurrentUserAction } from '../../../auth/store/actions/update-current-user.action';
import { currentUserSelector } from '../../../auth/store/selectors';
import { IBackendErrors } from '../../../shared/types/backend-errors.interface';
import { ICurrentUserInput } from '../../../shared/types/current-user-input.interface';
import { ICurrentUser } from '../../../shared/types/current-user.interface';
import {
  isSubmittingSelector,
  validationErrorsSelector,
} from '../../store/selectors';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit, OnDestroy {
  form: FormGroup;
  currentUser: ICurrentUser;
  currentUserSubscription: Subscription;
  isSubmitting$: Observable<boolean>;
  backEndErrors$: Observable<IBackendErrors>;
  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.initializeValues();
    this.initializeListeners();
  }

  ngOnDestroy() {
    this.currentUserSubscription.unsubscribe();
  }

  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backEndErrors$ = this.store.pipe(select(validationErrorsSelector));
  }

  initializeListeners(): void {
    this.currentUserSubscription = this.store
      .pipe(select(currentUserSelector), filter(Boolean))
      .subscribe((currentUser: ICurrentUser) => {
        this.currentUser = currentUser;
        this.initializeForm();
      });
  }

  initializeForm(): void {
    this.form = this.fb.group({
      image: this.currentUser.image,
      username: this.currentUser.username,
      bio: this.currentUser.bio,
      email: this.currentUser.email,
      password: '',
    });
  }

  onSubmit(): void {
    const currentUserInput: ICurrentUserInput = {
      ...this.currentUser, // Set currentUserInput as this.currentUser object
      ...this.form.value, // then override with form to add password input
    };
    this.store.dispatch(updateCurrentUserAction({ currentUserInput }));
  }

  logOut(): void {
    this.store.dispatch(logoutAction());
  }
}
