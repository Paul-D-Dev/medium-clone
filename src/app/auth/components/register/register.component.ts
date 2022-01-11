import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IAppState } from '../../../shared/types/app-state.interface';
import { registerAction } from '../../store/auth.actions';
import { isSubmittingSelector } from '../../store/selectors';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  isSubmitting$: Observable<boolean>;

  constructor(private fb: FormBuilder, private store: Store<IAppState>) {}

  ngOnInit(): void {
    this.initializeValues();
    this.initializeForm();
  }

  initializeForm(): void {
    console.log('Form initialize.');
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    console.log('isSubmitting$', this.isSubmitting$);
  }

  onSubmit(): void {
    console.log('submit form', this.form.value);
    this.store.dispatch(registerAction(this.form.value));
  }
}
