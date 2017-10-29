import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class GenericHttpService {
  constructor(private http: Http) {}

  public get (url: string, options?: RequestOptions): Observable<Object[]> {
    return this.http.get(url, options)
      .map((res: Response) => res.json())
      .catch((error: any) => {
        return Observable.throw(error.json().error ||
            'Server error');
      });
  }

  
  public post(url: string, body: any): Observable<Object> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers }); 

    return this.http.post(url, body, options)
      .catch((error: any) => {
        return Observable.throw(error.json().error ||
          'Server error');
      });
  }

  public put(url: string, body: any): Observable<Object> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers }); 

    return this.http.put(url, body, options)
      .catch((error: any) => {
        return Observable.throw(error.json().error ||
          'Server error');
      });
  }
}
