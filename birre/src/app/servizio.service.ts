import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServizioService {
  constructor(private http: HttpClient) { }

  searchProd(query: string) {
  const url = `https://api.punkapi.com/v2/beers?beer_name=${query}`;
  let obsProd = this.http.get(url);
  return obsProd;
  }
  searchH(query: string) {
    const url = `https://api.punkapi.com/v2/beers/${query}`;
    let obsProd = this.http.get(url);
    return obsProd;
    }
  }

