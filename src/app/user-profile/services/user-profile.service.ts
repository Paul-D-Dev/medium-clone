import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { IGetUserProfileResponse } from '../types/get-user-profile-response.interface';
import { IUserProfile } from '../types/user-profile.interface';

@Injectable()
export class UserProfileService {
  constructor(private http: HttpClient) {}

  getUserProfile(username: string): Observable<IUserProfile> {
    const url = `${environment.apiUrl}/profiles/${username}`;
    return this.http
      .get<IGetUserProfileResponse>(url)
      .pipe(map((response) => response.profile));
  }
}
