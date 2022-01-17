import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ErrorMessageModule } from '../shared/modules/error-message/error-message.module';
import { LoadingModule } from '../shared/modules/loading/loading.module';
import { TagListModule } from '../shared/modules/tag-list/tag-list.module';
import { ArticleRoutingModule } from './article-routing-module';
import { ArticleComponent } from './components/article/article.component';
import { ArticleService as SharedArticleService } from '../shared/services/article.service';
import { ArticleService } from './services/article.service';
import { DeleteArticleEffect } from './store/effects/delete-article.effect';
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
    EffectsModule.forFeature([GetArticleEffect, DeleteArticleEffect]),
    LoadingModule,
    ErrorMessageModule,
    TagListModule,
  ],
  providers: [SharedArticleService, ArticleService],
})
export class ArticleModule {}
