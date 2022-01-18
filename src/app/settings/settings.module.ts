import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { BackendErrorMessagesModule } from '../shared/modules/backend-error-messages/backend-error-messages.module';
import { SettingsComponent } from './components/settings/settings.component';

import { SettingsRoutingModule } from './settings-routing.module';
import * as FromSettingsReducer from './store/reducers';

@NgModule({
  declarations: [SettingsComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    StoreModule.forFeature(
      FromSettingsReducer.settingsFeatureKey,
      FromSettingsReducer.reducers
    ),
    ReactiveFormsModule,
    BackendErrorMessagesModule,
  ],
})
export class SettingsModule {}
