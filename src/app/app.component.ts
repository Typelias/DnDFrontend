import { Component } from '@angular/core';
import { AuthService } from './Services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DnDFrontend';

  constructor(private auth: AuthService) { }

  isLoggedIn(): boolean {
    return this.auth.isLoggedIn();
  }


}
