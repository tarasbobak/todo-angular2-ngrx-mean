import { CategoryApiService } from './category-api.service';
import { GenericHttpService } from './generic-http.service';

export * from './category-api.service';
export * from './generic-http.service';

export const appServices = [
  CategoryApiService,
  GenericHttpService
];
