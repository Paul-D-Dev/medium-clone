import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { GetCurrentUserEffect } from './auth/store/effects/get-current-user.effect';
import { LoginEffect } from './auth/store/effects/login.effect';
import { RegisterEffect } from './auth/store/effects/register.effect';
import { NavbarModule } from './shared/modules/navbar/navbar.module';

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
    EffectsModule.forRoot([RegisterEffect, LoginEffect, GetCurrentUserEffect]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
