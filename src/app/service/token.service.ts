import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { Token } from '../model/token';


@Injectable({
  providedIn: 'root'
})
export class TokenService {

  token!: any;

  constructor(private http: HttpClient, private cookies: CookieService) { }

  public onToken() {

    let body = new URLSearchParams();
    body.set('grant_type', 'client_credentials' );
    body.set('client_id', 'soporte@qumax.com.ar');
    body.set('client_secret', 'Qumax1234');
    
    let options = {
        headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
        //.set('Access-Control-Allow-Credentials',  'true')
        //.set('Access-Control-Allow-Origin', '*')
        //.set('Content-Length', '86')
        //.set('Access', '*/*')
        //.set('Accept-Encoding', 'gzip, deflate, br')
        //.set('Access-Control-Allow-Credentials', 'true')
        //.set('Access-Control-Allow-Origin', '*')
        //.set('Connection', 'keep-alive')
        //.set('User-Agent', '')
        //.set('Host', 'rest.contabilium.com')
        //.set('Content-Length', ' ')
        //.set('User-Agent', '')  
        
    };
    
     this.http.post('http://rest.contabilium.com/token', body,  options).subscribe(
      tok => {
        this.token = tok;
        this.cookies.set('token', this.token);
        console.log(this.token)

      }
    )
 
  }

}
