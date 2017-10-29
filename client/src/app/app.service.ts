import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { CategoryApiService } from './core/services';
import { AppState } from './core/store';
import { Category } from './core/models';

@Injectable()
export class AppService {
  constructor (
    private categoryApiService: CategoryApiService,
    private store: Store<AppState>) {
      this.init();
  }

  private init() {
    this.categoryApiService.getCategories().subscribe((categoriesData) => {
      if (!categoriesData.length) {
        this.populateDataSource();
      } else {
        this.store.dispatch({type: 'INIT_CATEGORIES', payload: { categories: categoriesData }});
      }
    });
  }

  private populateDataSource() {
    this.categoryApiService.fetchCategories().subscribe((res: Category[]) => {
      this.categoryApiService.saveCategories(res);
      this.store.dispatch({type: 'INIT_CATEGORIES', payload: { categories: res }});
    });
  }
}
