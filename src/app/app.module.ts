import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { GetCurrentUserEffect } from './auth/store/effects/get-current-user.effect';
import { LoginEffect } from './auth/store/effects/login.effect';
import { RegisterEffect } from './auth/store/effects/register.effect';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';
import { GlobalFeedModule } from './globalFeed/global-feed.module';
import { GetFeedEffect } from './shared/modules/feed/store/effects/getFeed.effect';
import { NavbarModule } from './shared/modules/navbar/navbar.module';
import { PersistenceService } from './shared/services/persistence.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AuthModule,
    AppRoutingModule,
    NavbarModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([
      RegisterEffect,
      LoginEffect,
      GetCurrentUserEffect,
      GetFeedEffect,
    ]),
    GlobalFeedModule,
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
