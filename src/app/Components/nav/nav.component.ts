import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CreateCampaignComponent } from '../create-campaign/create-campaign.component';
import { UpdateUserComponent } from '../update-user/update-user.component';
import { CreateUserComponent } from '../create-user/create-user.component';
import { EditCampaignComponent } from '../edit-campaign/edit-campaign.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  isAdmin(): boolean {
    return this.authService.isAdmin();
  }


  openCreateCampain() {
    const dialogRef = this.dialog.open(CreateCampaignComponent, { width: '20%', hasBackdrop: true });

    dialogRef.afterClosed().subscribe(res => {
      console.log('closed');
      window.location.reload();
    });
  }

  openUpdateUser() {
    const dialogRef = this.dialog.open(UpdateUserComponent, { width: '20%', hasBackdrop: true });

    dialogRef.afterClosed().subscribe(res => {
      console.log('closed');
    });
  }

  openCreateUser() {
    const dialogRef = this.dialog.open(CreateUserComponent, { width: '20%', hasBackdrop: true });

    dialogRef.afterClosed().subscribe(res => {
      console.log('closed');
    });
  }

  openEditCampaign() {
    const dialogRef = this.dialog.open(EditCampaignComponent, { width: '20%', hasBackdrop: true });

    dialogRef.afterClosed().subscribe(res => {
      window.location.reload();
    });
  }

  loggOut() {
    this.authService.loggOut();
    this.router.navigate(['']);
  }

}
