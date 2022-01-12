import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedModule } from '../shared/modules/feed/feed.module';

import { GlobalFeedComponent } from './components/global-feed.component';
import { GlobalFeedRoutingModule } from './global-feed-routing.module';

@NgModule({
  declarations: [GlobalFeedComponent],
  imports: [CommonModule, GlobalFeedRoutingModule, FeedModule],
})
export class GlobalFeedModule {}
