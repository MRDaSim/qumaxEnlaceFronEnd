import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProducStel } from '../model/produc-stel';
import { LoginI } from '../interface/loginStel.interface';
import { ResponseI } from '../interface/reponse.interface';


@Injectable({
  providedIn: 'root'
})
export class ProducStelService {

  proStel = environment.URLStel + 'products';

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders ({
      'Content-Type': 'application/json; charset=utf-8',
      'APIKEY': 'ilb2NhAwMoAW39GJ1f1ln9dnxjTwFWH6YgXiMbpn'
    })
  }

  


}

