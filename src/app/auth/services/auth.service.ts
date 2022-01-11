import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ICurrentUser } from '../../shared/types/current-user.interface';
import { IAuthResponse } from '../types/auth-response.interface';
import { IRegisterRequest } from '../types/register-request.interface';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  register(data: IRegisterRequest): Observable<ICurrentUser> {
    const url = environment.apiUrl + '/users';
    return this.http
      .post<IAuthResponse>(url, data)
      .pipe(map((response: IAuthResponse) => response.user));
  }
}
