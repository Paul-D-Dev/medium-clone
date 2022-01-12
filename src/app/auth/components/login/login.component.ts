import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { IAppState } from '../../../shared/types/app-state.interface';
import { IBackendErrors } from '../../../shared/types/backend-errors.interface';
import { loginAction } from '../../store/login.actions';
import {
  isSubmittingSelector,
  validationErrorsSelector,
} from '../../store/selectors';
import { ILoginRequest } from '../../types/login-request.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  isSubmitting$: Observable<boolean>;
  backendErrors$: Observable<IBackendErrors | null>;

  constructor(private fb: FormBuilder, private store: Store<IAppState>) {}

  ngOnInit(): void {
    this.initializeValues();
    this.initializeForm();
  }

  initializeForm(): void {
    console.log('Form initialize.');
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    // Select in store the content of validationErrors and bind with observable backendErrors$
    // If validationErrors value changes in store, backendErrors$ will catch the stream to update value
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
    console.log('isSubmitting$', this.isSubmitting$);
  }

  onSubmit(): void {
    console.log('submit form', this.form.value);
    const request: ILoginRequest = {
      user: this.form.value,
    };
    this.store.dispatch(loginAction({ request }));
  }
}