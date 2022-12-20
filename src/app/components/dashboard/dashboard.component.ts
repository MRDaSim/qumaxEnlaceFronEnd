import { Component, OnInit } from '@angular/core';
import { ResponseI } from 'src/app/interface/reponse.interface';
import { ProducContb } from 'src/app/model/producContb';
import { ProducContbService } from 'src/app/service/producContb.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  proc: any = [];
  

  constructor(private producContbService: ProducContbService) { }

  ngOnInit(): void {

    console.log(this.producContbService.login(this.proc).subscribe(data => this.proc));
  }

 
  
}
