import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CreateCampaignComponent } from '../create-campaign/create-campaign.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private authServicer: AuthService, private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  isLoggedIn(): boolean {
    return this.authServicer.isLoggedIn();
  }

  isAdmin(): boolean {
    return this.authServicer.isAdmin();
  }


  openDialog() {
    const dialogRef = this.dialog.open(CreateCampaignComponent, { width: "80%", hasBackdrop: true });

    dialogRef.afterClosed().subscribe(res => {
      console.log("closed");
    })
  }

  loggOut() {
    this.authServicer.loggOut();
    this.router.navigate([''])

  }

}
