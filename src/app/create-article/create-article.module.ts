import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleFormModule } from '../shared/modules/article-form/article-form.module';

import { CreateArticleRoutingModule } from './create-article-routing.module';
import { CreateArticleComponent } from './components/create-article/create-article.component';

@NgModule({
  declarations: [CreateArticleComponent],
  imports: [CommonModule, CreateArticleRoutingModule, ArticleFormModule],
})
export class CreateArticleModule {}
