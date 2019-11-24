import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  showHeader;

  constructor(public authService: AuthService, private router: Router) {
    router.events.subscribe((url: any) => url.url ? this.showHeader = (url.url !== '/login') : null );
   }

  ngOnInit() {
    console.log(this.authService.getCurrentUser())
    this.handleUser();
  }

  handleUser() {
    if (!this.authService.checkIfUserLoggedIn()) {
      this.router.navigate(['/login']);
    }
  }

}
