import { HttpClient } from './HttpClient';
import { ProductService } from './products/index';

const httpClient = new HttpClient();
export const productService = new ProductService(httpClient);
