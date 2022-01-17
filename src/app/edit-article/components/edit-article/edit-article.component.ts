import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { filter, map, Observable } from 'rxjs';
import {
  isSubmittingSelector,
  validationErrorsSelector,
} from '../../../create-article/store/selectors';
import { IArticleInput } from '../../../shared/types/article-input.interface';
import { IArticle } from '../../../shared/types/article.interface';
import { IBackendErrors } from '../../../shared/types/backend-errors.interface';
import { updateArticleAction } from '../../store/actions/edit-article.action';
import { getArticleAction } from '../../store/actions/get-article.action';
import { articleSelector, isLoadingSelector } from '../../store/selectors';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.scss'],
})
export class EditArticleComponent implements OnInit {
  initializeValues$: Observable<IArticleInput>;
  article$: Observable<IArticle>;
  isLoading$: Observable<boolean>;
  isSubmitting$: Observable<boolean>;
  backEndErrors$: Observable<IBackendErrors | null>;
  slug: string;

  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.initValues();
    this.fetchData();
  }

  initValues(): void {
    this.slug = this.route.snapshot.paramMap.get('slug');
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backEndErrors$ = this.store.pipe(select(validationErrorsSelector));
    this.initializeValues$ = this.store.pipe(
      select(articleSelector),
      filter(Boolean),
      map((article: IArticle) => {
        return {
          title: article.title,
          description: article.description,
          body: article.body,
          tagList: article.tagList,
        };
      })
    );
  }

  fetchData(): void {
    this.store.dispatch(getArticleAction({ slug: this.slug }));
  }

  onSubmit(articleInput: IArticleInput) {
    this.store.dispatch(updateArticleAction({ slug: this.slug, articleInput }));
  }
}
