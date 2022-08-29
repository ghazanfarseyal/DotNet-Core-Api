import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TransactionRequest } from '../models/transaction.request.view';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  constructor(private httpClient: HttpClient) {}

  encrypt(req: TransactionRequest) {
    var token = sessionStorage.getItem('token');
    const header = new HttpHeaders().set('Authorization', 'Bearer ' + token); // may be localStorage/sessionStorage
    return this.httpClient
      .post(`${environment.apiUrl}/payments/encrypt`, req)
      .pipe(
        map((response: any) => {
          return response;
        })
      );
  }

  process(req: TransactionRequest) {
    var token = sessionStorage.getItem('token');
    const header = new HttpHeaders().set('Authorization', 'Bearer ' + token); // may be localStorage/sessionStorage
    return this.httpClient
      .post(`${environment.apiUrl}/payments/process`, req)
      .pipe(
        map((response: any) => {
          return response;
        })
      );
  }
}
