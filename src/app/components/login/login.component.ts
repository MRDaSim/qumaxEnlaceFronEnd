import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProducContbService } from '../../service/producContb.service';
import { loginContabi } from '../../interface/loginContabi.interface'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    usuario : new FormControl('',Validators.required),
    password : new FormControl('', Validators.required)
  })

  constructor(private api: ProducContbService, private router: Router) { }

  ngOnInit(): void {
  }

//  onLogin(form : loginContabi) {
 //   this.api.loginByEmail(form).subscribe(data =>{
 //     console.log(data);
  //  })
 // }

}
