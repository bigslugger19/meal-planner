import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {InventoryItem} from '../model/models';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(private http: HttpClient) { }

  getInventoryItems(): Observable<InventoryItem[]> {
    const url = '/api/inventory-item';
    return this.http.get<InventoryItem[]>(url);
  }
}
