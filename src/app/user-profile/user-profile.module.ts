import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { FeedModule } from '../shared/modules/feed/feed.module';
import { UserProfileService } from './services/user-profile.service';
import { GetUserProfileEffect } from './store/effects/get-user-profile.effect';

import { UserProfileRoutingModule } from './user-profile-routing.module';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import * as FromUserProfileReducer from './store/reducers';

@NgModule({
  declarations: [UserProfileComponent],
  imports: [
    CommonModule,
    UserProfileRoutingModule,
    EffectsModule.forFeature([GetUserProfileEffect]),
    StoreModule.forFeature(
      FromUserProfileReducer.userProfileFeatureKey,
      FromUserProfileReducer.reducers
    ),
    FeedModule,
  ],
  providers: [UserProfileService],
})
export class UserProfileModule {}
