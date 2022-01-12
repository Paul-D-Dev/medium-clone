import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';

import { BackedErrorMessagesModule } from '../shared/modules/backendErrorMessages/backed-error-messages/backed-error-messages.module';
import { PersistenceService } from '../shared/services/persistence.service';
import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './components/register/register.component';
import { LoginEffect } from './effects/login.effect';
import { RegisterEffect } from './effects/register.effect';
import { AuthService } from './services/auth.service';
import { reducers } from './store/reducers';

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([RegisterEffect, LoginEffect]),
    BackedErrorMessagesModule,
  ],
  providers: [AuthService, PersistenceService],
})
export class AuthModule {}
