import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/auth/auth.service';
import { User } from 'firebase';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isAuthenticated: boolean;
  username: string;

  constructor(private authService: AuthService) {
    this.authService.user.subscribe(
      (user: User) => {
        this.isAuthenticated = (user) ? true : false;
        if(this.isAuthenticated) {
          this.username = user.displayName;
        }
      }
    );
   }

  ngOnInit() {
  }

  onLogin() {
    this.authService.login();
  }

  onLogout() {
    this.authService.logout();
  }

}
