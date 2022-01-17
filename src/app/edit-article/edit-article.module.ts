import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ArticleFormModule } from '../shared/modules/article-form/article-form.module';
import { LoadingModule } from '../shared/modules/loading/loading.module';
import { ArticleService as SharedArticleService } from '../shared/services/article.service';

import { EditArticleRoutingModule } from './edit-article-routing.module';
import { EditArticleComponent } from './components/edit-article/edit-article.component';
import { EditArticleService } from './services/edit-article.service';
import { EditArticleEffect } from './store/effetcs/edit-article.effect';
import { GetArticleEffect } from './store/effetcs/get-article.effect';
import * as FromEditArticleReducers from './store/reducers';

@NgModule({
  declarations: [EditArticleComponent],
  imports: [
    CommonModule,
    EditArticleRoutingModule,
    StoreModule.forFeature(
      FromEditArticleReducers.editArticleFeatureKey,
      FromEditArticleReducers.reducers
    ),
    EffectsModule.forFeature([EditArticleEffect, GetArticleEffect]),
    ArticleFormModule,
    LoadingModule,
  ],
  providers: [EditArticleService, SharedArticleService],
})
export class EditArticleModule {}
