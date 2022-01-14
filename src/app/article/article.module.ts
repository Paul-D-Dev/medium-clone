import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ErrorMessageModule } from '../shared/modules/error-message/error-message.module';
import { LoadingModule } from '../shared/modules/loading/loading.module';
import { ArticleRoutingModule } from './article-routing-module';
import { ArticleComponent } from './components/article/article.component';
import { ArticleService } from '../shared/services/article.service';
import { GetArticleEffect } from './store/effects/get-article.effect';
import * as FromArticleReducer from './store/reducers';

@NgModule({
  declarations: [ArticleComponent],
  imports: [
    CommonModule,
    ArticleRoutingModule,
    StoreModule.forFeature(
      FromArticleReducer.articleFeatureKey,
      FromArticleReducer.reducers
    ),
    EffectsModule.forFeature([GetArticleEffect]),
    LoadingModule,
    ErrorMessageModule,
  ],
  providers: [ArticleService],
})
export class ArticleModule {}
