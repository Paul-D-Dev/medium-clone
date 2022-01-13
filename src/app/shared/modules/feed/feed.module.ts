import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ErrorMessageModule } from '../error-message/error-message.module';
import { LoadingModule } from '../loading/loading.module';
import { PaginationModule } from '../pagination/pagination.module';
import { TagListModule } from '../tag-list/tag-list.module';

import { FeedComponent } from './components/feed/feed.component';
import { FeedService } from './services/feed.service';
import { GetFeedEffect } from './store/effects/getFeed.effect';
import * as FromFeedReducer from './store/reducers';

@NgModule({
  declarations: [FeedComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature(
      FromFeedReducer.feedFeatureKey,
      FromFeedReducer.reducers
    ),
    EffectsModule.forFeature([GetFeedEffect]),
    RouterModule,
    ErrorMessageModule,
    LoadingModule,
    PaginationModule,
    TagListModule,
  ],
  exports: [FeedComponent],
  providers: [FeedService],
})
export class FeedModule {}
