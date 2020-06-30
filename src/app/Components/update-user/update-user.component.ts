import { Component, OnInit } from '@angular/core';
import { ServerRequestService } from 'src/app/Services/server-request.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {

  users: string[] = null;
  userToEdit: string = null;
  role: string = "";
  username: string = "";
  password: string = "";
  errorText: string = "";

  constructor(private sr: ServerRequestService) { }

  ngOnInit(): void {
    this.sr.getUsers().subscribe(res => this.users = res);
  }

  updateUser() {
    console.log("Greger")
    if ((this.username != null && this.password != null && this.role != null) || (this.username != "" && this.password != "" && this.role != "")) {
      this.sr.updateUser(this.userToEdit, this.username, this.password, this.role).subscribe(res => {
        window.location.reload();

      });

    } else {
      this.errorText = "One or more of the fields was empty"
    }

  }

  deleteUser() {
    this.sr.deleteUser(this.userToEdit).subscribe(res => {
      window.location.reload();
    })

  }

}
