import { Component, OnInit } from '@angular/core';
import { ServerRequestService } from 'src/app/Services/server-request.service';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  users: string[] = null;
  role: string = '';
  username: string = '';
  password: string = '';
  errorText: string = '';
  usernameMatch = true;

  constructor(private sr: ServerRequestService, private router: Router, private dialogRef: MatDialogRef<CreateUserComponent>) { }

  ngOnInit(): void {

    this.sr.getUsers().subscribe(res => this.users = res);

  }

  checkUsername() {
    this.errorText = '';
    const temp = this.users.find(x => x === this.username);
    if (temp) {
      this.usernameMatch = true;
      this.errorText = 'Username exists';
    } else {
      this.usernameMatch = false;
    }
  }

  createUser() {
    this.errorText = '';
    if (this.usernameMatch) {
      this.errorText = 'Username exists';
      return;
    }
    if (this.username !== '' && this.password !== '' && this.role !== '') {
      this.sr.createUser(this.username, this.password, this.role).subscribe(res => {
        this.dialogRef.close();
      });

    } else {
      this.errorText = 'One or more of the fields was empty';
    }
  }

}
