import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}
  login(usr: any) {
    sessionStorage.removeItem('token');
    return this.httpClient.post(`${environment.apiUrl}/users/login`, usr).pipe(
      map((response: any) => {
        if (response && response['token']) {
          sessionStorage.setItem('token', response['token']);
        }
        return response;
      })
    );
  }
}
