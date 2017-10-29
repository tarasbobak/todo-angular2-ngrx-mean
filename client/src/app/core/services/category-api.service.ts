import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { GenericHttpService } from './generic-http.service';
import { APP_CONFIG, IAppConfig } from '../config';
import { Category } from '../models';

@Injectable()
export class CategoryApiService {
  constructor (
      @Inject(APP_CONFIG) private config: IAppConfig,
      private httpService: GenericHttpService
  ) {}

  public getCategories(): Observable<any[]> {
    return this.httpService.get('http://localhost:3001/categories');
  }

  public saveCategories(data: Category[]): Promise<any> {
    return this.httpService.post('http://localhost:3001/categories', data).toPromise();
  }

  public updateCategories(data: Category[]): Promise<any> {
    return this.httpService.put('http://localhost:3001/categories', data).toPromise();
  }

  public fetchCategories(): Observable<any[]> {
    return this.httpService.get(this.config.mockedCategoriesUrl);
  }
}
