import { Injectable } from '@angular/core';
import { ProducContb } from '../model/producContb';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProducContbService {

  URLProdContb = environment.URLContab + 'conceptos/'

  constructor(private httpClient: HttpClient) { }

  public detail(id: number): Observable<ProducContb> {
    return this.httpClient.get<ProducContb>(''+{id});
  }
}
