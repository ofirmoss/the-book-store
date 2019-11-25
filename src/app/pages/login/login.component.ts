import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.formBuilder.group({
      username: [''],
    });
   }

  ngOnInit() {
  }

  onSubmit(user) {
    if (!this.loginForm.valid) { return };
    this.authService.login(user);
    this.router.navigate(['/search-book']);
    // console.log(this.loginForm, this.authService.user)
  }

}
