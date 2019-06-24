import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LookupService {
  constructor(private http: HttpClient) { }
  lookup(query: any) {
    return this.http.get<any>('assets/json/lookup.json')
      .toPromise()
      .then(res => <Lookup[]>res.data)
      .then(data => { return data; });
  }
  getResults(query: any) {
    return this.http.get<any>('assets/json/results.json')
      .toPromise()
      .then(res => <Results[]>res.data)
      .then(data => { return data; });
  }
}

