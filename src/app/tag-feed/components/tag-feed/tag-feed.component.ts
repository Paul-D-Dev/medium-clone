import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tag-feed',
  templateUrl: './tag-feed.component.html',
  styleUrls: ['./tag-feed.component.scss'],
})
export class TagFeedComponent implements OnInit, OnDestroy {
  tagName: string;
  apiUrl = '';
  tagNameSubscription: Subscription;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.initializeListeners();
  }

  ngOnDestroy() {
    this.tagNameSubscription.unsubscribe();
  }

  initializeListeners(): void {
    this.tagNameSubscription = this.route.params.subscribe((params: Params) => {
      this.tagName = params['slug'];
      this.apiUrl = `/articles?tag=${this.tagName}`;
    });
  }
}
