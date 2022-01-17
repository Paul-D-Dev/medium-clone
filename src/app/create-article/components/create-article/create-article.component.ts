import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IArticleInput } from '../../../shared/types/article-input.interface';
import { IBackendErrors } from '../../../shared/types/backend-errors.interface';
import { createArticleAction } from '../../store/actions/create-article-action';
import {
  isSubmittingSelector,
  validationErrorsSelector,
} from '../../store/selectors';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss'],
})
export class CreateArticleComponent implements OnInit {
  initializeValues: IArticleInput = {
    title: '',
    description: '',
    body: '',
    tagList: [],
  };
  isSubmitting$: Observable<boolean>;
  backEndErrors$: Observable<IBackendErrors | null>;
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backEndErrors$ = this.store.pipe(select(validationErrorsSelector));
  }

  onSubmit(articleInput: IArticleInput): void {
    this.store.dispatch(createArticleAction({ articleInput }));
  }
}
