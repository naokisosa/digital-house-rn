import { HttpClient } from '@services/HttpClient';
import { Product } from './types';

export class ProductService {
  constructor(private http: HttpClient) {}

  async getHouseProducts() {
    const { data } = await this.http.get<Product[]>(
      'https://6222994f666291106a29f999.mockapi.io/api/v1/products'
    );
    return data;
  }
}
