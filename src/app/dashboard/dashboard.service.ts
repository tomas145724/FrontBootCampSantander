import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Stock from '../shared/models/stock-model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {


  readonly baseUrl = 'https://bootcamp-dev-week.herokuapp.com/stock';

  constructor(private http: HttpClient) { }

  async getStocks(): Promise<Stock[]> {
    return this.http.get<Stock[]>(`${this.baseUrl}`).toPromise();
  }

}
