import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListItemComponent } from './list-item/list-item.component';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  


  private baseUrl = "http://localhost:8080/api/v1/items";
  constructor(private httpClient : HttpClient) { }

  getToDoList():Observable<ListItemComponent[]>
  {
      return this.httpClient.get<ListItemComponent[]>(`${this.baseUrl}`);
  }

  createListItem(listitem:ListItemComponent) :Observable<Object>
  {
      return this.httpClient.post(`${this.baseUrl}`,listitem);
  }

  getItemById(id:number):Observable<ListItemComponent> 
  {
    return this.httpClient.get<ListItemComponent>(`${this.baseUrl}/${id}`); 
  }

  updateItem(id: number, listItem: ListItemComponent): Observable<Object>{
    console.log("Love");
    return this.httpClient.put(`${this.baseUrl}/${id}`, listItem);
  }

  deleteItem(id: number): Observable<Object>
  {
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }

}
