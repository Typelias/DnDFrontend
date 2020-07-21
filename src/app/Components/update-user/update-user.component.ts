import { Component, OnInit } from '@angular/core';
import { ServerRequestService } from 'src/app/Services/server-request.service';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {

  users: string[] = null;
  userToEdit: string = null;
  role: string = "";
  username: string;
  password: string = "";
  errorText: string = "";

  constructor(private sr: ServerRequestService, private dialogRef: MatDialogRef<UpdateUserComponent>, private auth: AuthService) { }

  ngOnInit(): void {
    this.sr.getUsers().subscribe(res => this.users = res);
  }

  updateUser() {
    this.username = this.auth.getUsername();
    if ((this.username != null && this.password != null && this.role != null) || (this.username != "" && this.password != "" && this.role != "")) {
      this.sr.updateUser(this.userToEdit, this.username, this.password, this.role).subscribe(res => {
        this.dialogRef.close();

      });

    } else {
      this.errorText = "One or more of the fields was empty"
    }

  }

  deleteUser() {
    this.sr.deleteUser(this.userToEdit).subscribe(res => {
      this.dialogRef.close();
    })

  }

}
