import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  getAllProduct(){
    //return this.http.get(environment.baseApi+'products');
    return this.http.get(environment.baseApi)
  }
  getSingleProduct(id:number){
    // return this.http.get(environment.baseApi+'products/'+id)
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=fb40bcf42bf43039a2dc2e65edf21acb&language=en-US`)
  }
}
