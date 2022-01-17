import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleModule } from './article/article.module';
import { DeleteArticleEffect } from './article/store/effects/delete-article.effect';
import { GetArticleEffect } from './article/store/effects/get-article.effect';
import { AuthModule } from './auth/auth.module';
import { GetCurrentUserEffect } from './auth/store/effects/get-current-user.effect';
import { LoginEffect } from './auth/store/effects/login.effect';
import { RegisterEffect } from './auth/store/effects/register.effect';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';
import { CreateArticleModule } from './create-article/create-article.module';
import { CreateArticleEffect } from './create-article/store/effects/create-article.effect';
import { GlobalFeedModule } from './globalFeed/global-feed.module';
import { GetFeedEffect } from './shared/modules/feed/store/effects/getFeed.effect';
import { NavbarModule } from './shared/modules/navbar/navbar.module';
import { PersistenceService } from './shared/services/persistence.service';
import { TagFeedModule } from './tag-feed/tag-feed.module';
import { YourFeedModule } from './your-feed/your-feed.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AuthModule,
    AppRoutingModule,
    NavbarModule,
    StoreModule.forRoot({ router: routerReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    StoreRouterConnectingModule.forRoot(),
    EffectsModule.forRoot([
      RegisterEffect,
      LoginEffect,
      GetCurrentUserEffect,
      GetFeedEffect,
      GetArticleEffect,
      DeleteArticleEffect,
      CreateArticleEffect,
    ]),
    GlobalFeedModule,
    YourFeedModule,
    TagFeedModule,
    CreateArticleModule,
    ArticleModule,
  ],
  providers: [
    PersistenceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
