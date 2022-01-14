import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { combineLatest, map, Observable, Subscription } from 'rxjs';
import { currentUserSelector } from '../../../auth/store/selectors';
import { IArticle } from '../../../shared/types/article.interface';
import { ICurrentUser } from '../../../shared/types/current-user.interface';
import { getArticleAction } from '../../store/actions/get-article-action';
import {
  articleSelector,
  errorSelector,
  isLoadingSelector,
} from '../../store/selectors';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit, OnDestroy {
  slug: string;
  article: IArticle;
  articleSubscription: Subscription;
  isLoading$: Observable<boolean>;
  error$: Observable<string>;
  isAuthor$: Observable<boolean>;
  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.initializeValues();
    this.initializeListeners();
    this.fetchData();
  }

  ngOnDestroy() {
    this.articleSubscription.unsubscribe();
  }

  initializeValues(): void {
    this.slug = this.route.snapshot.params['slug'];
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    // https://www.learnrxjs.io/learn-rxjs/operators/combination/combinelatest
    this.isAuthor$ = combineLatest(
      this.store.pipe(select(articleSelector)),
      this.store.pipe(select(currentUserSelector))
    ).pipe(
      map(([article, currentUser]: [IArticle | null, ICurrentUser | null]) => {
        if (!article || !currentUser) return false;
        return currentUser.username === article.author.username;
      })
    );
  }

  initializeListeners(): void {
    this.articleSubscription = this.store
      .pipe(select(articleSelector))
      .subscribe((article: IArticle) => {
        this.article = article;
      });
  }

  fetchData(): void {
    this.store.dispatch(getArticleAction({ slug: this.slug }));
  }
}
