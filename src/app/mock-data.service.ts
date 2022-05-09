import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {

  constructor(private http: HttpClient) { }

  post(data){
    return  this.http.post('http://localhost:3000/orders',data)
    }
    get(){
      return this.http.get('http://localhost:3000/orders')
    }
    put(data:any,id:any){
      return this.http.put('http://localhost:3000/orders/'+id,data)
    }
    delete(id){
      return this.http.delete('http://localhost:3000/orders/'+id)
    }
}
