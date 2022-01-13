import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedComponent } from './components/feed/feed.component';
import { FeedService } from './services/feed.service';

@NgModule({
  declarations: [FeedComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [FeedComponent],
  providers: [FeedService],
})
export class FeedModule {}
