import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HttpService {

    private readonly baseURL = "https://localhost:44330/api/";

    constructor(private http: HttpClient) { }
    get(reletiveUrl: string, requestParams?: HttpParams): Observable<any> {
        return this.http.get(`${this.baseURL}${reletiveUrl}`, { params: requestParams });
    }
    post(reletiveUrl: string,body?: any, requestParams?: HttpParams): Observable<any> {
        return this.http.post(`${this.baseURL}${reletiveUrl}`,body, { params: requestParams });
    }
}
