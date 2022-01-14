import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BannerModule } from '../shared/modules/banner/banner.module';
import { FeedTogglerModule } from '../shared/modules/feed-toggler/feed-toggler.module';
import { FeedModule } from '../shared/modules/feed/feed.module';
import { PopularTagsModule } from '../shared/modules/popular-tags/popular-tags.module';
import { TagListModule } from '../shared/modules/tag-list/tag-list.module';

import { GlobalFeedComponent } from './components/global-feed.component';
import { GlobalFeedRoutingModule } from './global-feed-routing.module';

@NgModule({
  declarations: [GlobalFeedComponent],
  imports: [
    CommonModule,
    GlobalFeedRoutingModule,
    FeedModule,
    BannerModule,
    TagListModule,
    PopularTagsModule,
    FeedTogglerModule,
  ],
})
export class GlobalFeedModule {}
