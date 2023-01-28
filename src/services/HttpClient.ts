import axios from 'axios';

export class HttpClient {
  async get<T>(url: string) {
    const { data, status } = await axios.get<T>(url);
    return { data, status };
  }
}
