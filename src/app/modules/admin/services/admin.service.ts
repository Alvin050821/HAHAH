import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from 'src/app/auth/services/storage/storage.service';

const BASIC_URL = "http://localhost:8080";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  postProduk(ProdukDto: any): Observable<any> {
    const headers = this.createAuthorizationHeader();
    return this.http.post(BASIC_URL + "/api/admin/produk", ProdukDto, {
      headers: headers
    })
  }

  getAllProduks (): Observable<any> {
    return this.http.get(BASIC_URL + "/api/admin/produks", {
      headers: this.createAuthorizationHeader()
    })
  }

  deleteProduk(id:number):Observable<any>{
    return this.http.delete(BASIC_URL + "/api/admin/produk/" + id, {
      headers: this.createAuthorizationHeader()
    });
  }

  getProdukById(id: number): Observable<any> {
    return this.http.get(BASIC_URL + "/api/admin/produk/" + id, {
      headers: this.createAuthorizationHeader()
    })
  }

  createAuthorizationHeader(): HttpHeaders {
    let authHeaders : HttpHeaders = new HttpHeaders();
    return authHeaders.set(
      'Authorization',
      'Bearer ' + StorageService.getToken()
    );
  }
}
