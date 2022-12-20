import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient , HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Token } from '../../app/interface/token.interface'
import { CookieService } from 'ngx-cookie-service';




@Injectable({
  providedIn: 'root'
})
export class ProducContbService {

  URLProdContb = environment.URLContab;
  
  constructor(private http: HttpClient, private cookies: CookieService) { }

  

  public login(token: Token): Observable<any>{


    let parametros = new HttpParams();
    parametros = parametros.append('grant_type',environment.grant_type);
    parametros = parametros.append('client_id', environment.client_id );
    parametros = parametros.append('client_secret', environment.client_secret);

    const opciones = {
      headers: new HttpHeaders({
        'Content-Type':'application/x-www-form-urlencoded',
        
      }),
      params: parametros
    };

    

    return this.http.post<any>('http://rest.contabilium.com/token',parametros ,opciones);

    

    
}


}



 







/*
  URLProdContb = environment.URLContab;

  grant_type = '{{credentials}}'

  httpOptions = {
    headers: new HttpHeaders ({
      'Content-Type : application/x-www-form-urlencoded'
    })
  }

  

 

  loginByEmail(form : loginContabi) : Observable<ResponseI> {
    let direccion  = this.URLProdContb + 'token';
    
    return this.http.post<ResponseI> (direccion, form);
  }







  

 public loginByEmail(){
  let body = new URLSearchParams();
body.set('grant_type', environment.grant_type );
body.set('client_id', environment.client_id);
body.set('client_secret', environment.client_secret);

let options = {
    headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
};

  return this.http.post<any>(environment.URLContab, body.toString(), options);
  

}

*/
