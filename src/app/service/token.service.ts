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

    let token: Token;

    let body = new HttpParams();
    body.set('grant_type', '{{credentials}}' );
    body.set('client_id', 'soporte@qumax.com.ar');
    body.set('client_secret', 'Qumax1234');
    
    let options = {
        headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
        
        

        
        
    };
    
    return this.http.post<any>('http://rest.contabilium.com/token', body, options)

      
      
    
  
  
  }

}
