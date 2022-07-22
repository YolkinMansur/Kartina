import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private url= 'http://localhost:3000/kartina'

  constructor(public http: HttpClient) { }
  

}
