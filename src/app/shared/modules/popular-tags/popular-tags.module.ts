import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ErrorMessageModule } from '../error-message/error-message.module';
import { LoadingModule } from '../loading/loading.module';
import { PopularTagsService } from './services/popular-tags.service';
import { GetPopularTagsEffect } from './store/effects/get-popular-tags-effect.service';
import * as FromPopularTagsReducer from './store/reducers';
import { PopularTagsComponent } from './components/popular-tags/popular-tags.component';

@NgModule({
  declarations: [PopularTagsComponent],
  imports: [
    CommonModule,
    LoadingModule,
    StoreModule.forFeature(
      FromPopularTagsReducer.popularTagsFeatureKey,
      FromPopularTagsReducer.popularTagsReducer
    ),
    EffectsModule.forFeature([GetPopularTagsEffect]),
    ErrorMessageModule,
    RouterModule,
  ],
  providers: [PopularTagsService],
  exports: [PopularTagsComponent],
})
export class PopularTagsModule {}
