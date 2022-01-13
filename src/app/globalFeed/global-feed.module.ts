import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerModule } from '../shared/modules/banner/banner.module';
import { FeedModule } from '../shared/modules/feed/feed.module';

import { GlobalFeedComponent } from './components/global-feed.component';
import { GlobalFeedRoutingModule } from './global-feed-routing.module';

@NgModule({
  declarations: [GlobalFeedComponent],
  imports: [CommonModule, GlobalFeedRoutingModule, FeedModule, BannerModule],
})
export class GlobalFeedModule {}
