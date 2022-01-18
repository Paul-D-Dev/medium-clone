import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { stringify, parseUrl } from 'query-string';

import { environment } from '../../../../../../environments/environment';
import { getFeedAction } from '../../store/actions/getFeed.action';
import {
  errorSelector,
  feedSelector,
  isLoadingSelector,
} from '../../store/selectors';
import { IGetFeedResponse } from '../../types/get-feed-response.interface';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit, OnDestroy, OnChanges {
  @Input('apiUrl') apiUrlProps: string;
  feed$: Observable<IGetFeedResponse | null>;
  error$: Observable<string | null>;
  isLoading$: Observable<boolean | null>;
  limit = environment.limit;
  baseUrl: string;
  currentPage: number;
  queryParamsSubscription: Subscription;

  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initializeValues();
    this.initializeListeners();
  }

  ngOnChanges(changes: SimpleChanges) {
    // TAG FEED : re-render tag feed when we click on other tag
    const c = changes['apiUrlProps'];
    const isApiUrlChanged =
      !c.firstChange && c.previousValue !== c.currentValue;
    if (isApiUrlChanged) this.fetchFeed();
  }

  ngOnDestroy() {
    this.queryParamsSubscription.unsubscribe();
  }

  initializeListeners(): void {
    this.queryParamsSubscription = this.route.queryParams.subscribe(
      (params: Params) => {
        this.currentPage = Number(params['page'] || '1');
        this.fetchFeed();
      }
    );
  }

  initializeValues(): void {
    this.feed$ = this.store.pipe(select(feedSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.baseUrl = this.router.url.split('?')[0];
  }

  fetchFeed(): void {
    const offset = this.currentPage * this.limit - this.limit;
    const parsedUrl = parseUrl(this.apiUrlProps);
    const stringifiedUrl = stringify({
      limit: this.limit,
      offset,
      ...parsedUrl.query,
    });
    const apiUrlWithParams = `${parsedUrl.url}?${stringifiedUrl}`;
    this.store.dispatch(getFeedAction({ url: apiUrlWithParams }));
  }
}
