import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IpService } from './ip.service';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor(private http: HttpClient,private ipservice:IpService) { }
  getAllGategorie()
  {
    return this.http.get(`${this.ipservice.ip}/categories/getAllcategorie`);
  }
}