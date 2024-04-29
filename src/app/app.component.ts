import { Component } from '@angular/core';

import { AuthService } from './services/auth.service';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParent = '';
  showImg = true;
  token = '';

  constructor(
    private authService: AuthService,
    private usersService: UsersService,
  ) {}


  onLoaded(img: string) {
    console.log('log padre', img);
  }

  toggleImg() {
    this.showImg = !this.showImg;
  }

  createUser() {
    this.usersService.create({
      name: 'Klizman',
      email: 'klizmanzapata117@gmail.com',
      password: '1234'
    })
    .subscribe(rta => {
      console.log(rta);
    });
  }
  login(){
    this.authService.login('klizmanzapata117@gmail.com', '1234')
    .subscribe(rta => {
      console.log(rta);
      this.token = rta.acces_token;
    });
  }

  getProfile(){
    this.authService.profile(this.token)
    .subscribe(profile => {
      console.log(profile);
    });
  }
}
