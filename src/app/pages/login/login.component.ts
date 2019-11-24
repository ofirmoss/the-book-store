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
      // username: new FormControl(''),
    });
   }

  ngOnInit() {
  }

  onSubmit(user) {
    // if (!this.loginForm.dirty) { return };
    this.authService.login(user)
    this.loginForm.reset();
    this.router.navigate(['/search-book']);
    console.log(this.loginForm, this.authService.user)
  }

}
