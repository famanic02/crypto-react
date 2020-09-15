import API from 'Constants/APIs';
import { TOKEN_KEY } from 'Constants/StorageConst';
import { APIService } from './APIService';

export default class CryptoService extends APIService {
  constructor(token = '', baseUrl = '') {
    super(token, baseUrl);
    this.setHeaders([{ key: 'Content-Type', value: 'application/json' }]);
  }

  public async login(email: string, password: string): Promise<any> {
    try {
      const response: any = await this.httpPost(
        `${API.LOGIN}?authEmail=${email}&password=${password}`,
        {},
      );

      if (response) {
        if (!response.roleMap || !response.roleMap.admin) {
          throw Error('Tài khoản này không có quyền truy cập');
        }
        localStorage.setItem(TOKEN_KEY, response.userID);
      }
      return response;
    } catch (error) {
      throw error.message || error;
    }
  }

  public async getMarketInfo(): Promise<any> {
    try {
      const response = await this.httpGet(`${API.MARKET_INFO}`);
      return response;
    } catch (error) {
      throw error.message || error;
    }
  }
}
