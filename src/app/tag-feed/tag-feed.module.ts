import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerModule } from '../shared/modules/banner/banner.module';
import { FeedTogglerModule } from '../shared/modules/feed-toggler/feed-toggler.module';
import { FeedModule } from '../shared/modules/feed/feed.module';
import { PopularTagsModule } from '../shared/modules/popular-tags/popular-tags.module';

import { TagFeedRoutingModule } from './tag-feed-routing.module';
import { TagFeedComponent } from './components/tag-feed/tag-feed.component';

@NgModule({
  declarations: [TagFeedComponent],
  imports: [
    CommonModule,
    TagFeedRoutingModule,
    BannerModule,
    FeedTogglerModule,
    FeedModule,
    PopularTagsModule,
  ],
})
export class TagFeedModule {}
