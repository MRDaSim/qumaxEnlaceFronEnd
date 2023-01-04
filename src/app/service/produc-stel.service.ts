import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProducStel } from '../model/produc-stel';
import { LoginI } from '../interface/loginStel.interface';
import { ResponseI } from '../interface/reponse.interface';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class ProducStelService {

  proStel = environment.URLStel + 'products?full-reference=1000';

  constructor(private httpClient: HttpClient, private cookies: CookieService) { }

  // public listaProduct(): Observable<any> {
  //   let httpOptions = {
  //     headers: new HttpHeaders ({
  //       'accept': 'application/json; charset=utf-8',
  //       'APIKEY': '7KGAvtZouxp9RpqLVn6rcIu856DJEejFUbOalB3Z'
  //     })
  //   }
  //   return this.httpClient.get<any>(this.proStel, httpOptions);
  // }

  polo! : any;

  public getProductByFullReference() {
    
    let options = {
      headers: new HttpHeaders()
        .set('accept', 'application/json; charset=utf-8')
        .set('APIKEY', '7KGAvtZouxp9RpqLVn6rcIu856DJEejFUbOalB3Z')
         
      
    }

     this.httpClient.get('https://app.stelorder.com/app/products?', options).subscribe(data => {
      this.polo  = data;
      this.cookies.set('polo', this.polo)
      
      console.log(this.polo);
    })
  }

  



}

