import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ArticleFormModule } from '../shared/modules/article-form/article-form.module';

import { CreateArticleRoutingModule } from './create-article-routing.module';
import { CreateArticleComponent } from './components/create-article/create-article.component';
import { CreateArticleService } from './services/create-article.service';
import { CreateArticleEffect } from './store/effects/create-article.effect';
import * as FromCreateArticleReducer from './store/reducers';

@NgModule({
  declarations: [CreateArticleComponent],
  imports: [
    CommonModule,
    CreateArticleRoutingModule,
    ArticleFormModule,
    StoreModule.forFeature(
      FromCreateArticleReducer.createArticleFeatureKey,
      FromCreateArticleReducer.reducers
    ),
    EffectsModule.forFeature([CreateArticleEffect]),
  ],
  providers: [CreateArticleService],
})
export class CreateArticleModule {}
