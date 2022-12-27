import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { Token } from '../model/token';


@Injectable({
  providedIn: 'root'
})
export class TokenService {

  

  constructor(private http: HttpClient, cookies: CookieService) { }


  public onToken() : Observable<any> {

    

    let body = new HttpParams();
    body.set('grant_type', 'client_credentials' );
    body.set('client_id', 'soporte@qumax.com.ar');
    body.set('client_secret', 'Qumax1234');
    
    let options = {
        headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .set('Access-Control-Allow-Credentials',  'true')
        .set('Access-Control-Allow-Origin', 'http://localhost:4200')
        //.set('Content-Length', '86')
        //.set('Access', '*/*')
        //.set('Accept-Encoding', 'gzip, deflate, br')
        //.set('Access-Control-Allow-Credentials', 'true')
        //.set('Access-Control-Allow-Origin', '*')
        //.set('Connection', 'keep-alive')
        //.set('User-Agent', 'PostmanRuntime/7.30.0')
        //.set('Host', 'rest.contabilium.com')
        //.set('Content-Length', ' ')
        //.set('User-Agent', 'PostmanRuntime/7.30.0')


        

        
        
    };
    
    return this.http.post<any>('http://rest.contabilium.com/'+ 'token', body, options)

      
      
    
  
  
  }

}
