import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { ErrorMessageModule } from '../shared/modules/error-message/error-message.module';
import { LoadingModule } from '../shared/modules/loading/loading.module';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './components/settings/settings.component';
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
    LoadingModule,
    ErrorMessageModule,
  ],
})
export class SettingsModule {}
