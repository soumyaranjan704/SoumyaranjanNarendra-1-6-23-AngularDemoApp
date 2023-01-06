import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email = new FormControl('');
  password = new FormControl('');
  
  constructor(
    private authService: AuthService,
    public router: Router
  ) {}

  ngOnInit() {
  }

  submit () {
    this.email.setValue('');
    this.password.setValue('');
    this.authService.isLoggedIn = true;
    this.router.navigateByUrl('logout');
  }

}
