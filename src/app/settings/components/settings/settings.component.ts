import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IBackendErrors } from '../../../shared/types/backend-errors.interface';
import {
  isSubmittingSelector,
  validationErrorsSelector,
} from '../../store/selectors';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  isLoading$: Observable<boolean>;
  backEndErrors$: Observable<IBackendErrors | null>;
  constructor(private store: Store) {}

  ngOnInit(): void {}

  initializeValues(): void {
    this.isLoading$ = this.store.pipe(select(isSubmittingSelector));
    this.backEndErrors$ = this.store.pipe(select(validationErrorsSelector));
  }
}
