import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError} from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { DataForm } from '../views/custom-form/custom-form.component';

@Injectable({
  providedIn: 'root'
})
export class PusherService {
  [x: string]: any;

  constructor(private http: HttpClient) { }



  push(data: DataForm): Observable<DataForm> {
    return this.http.post<DataForm>("https://f6ee54fc0e3ee8c47fbebeda0e16c3dd.m.pipedream.net", data)
    .subscribe()
  }

  
}
