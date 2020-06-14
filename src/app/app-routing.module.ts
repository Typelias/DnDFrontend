import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { CharacterCreatorComponent } from './Components/character-creator/character-creator.component';
import { LoginComponent } from './Components/login/login.component';
import { AuthGuardService } from './Services/auth-guard.service';
import { CampaignsComponent } from './Components/campaigns/campaigns.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'creator', component: CharacterCreatorComponent, canActivate: [AuthGuardService] },
  { path: 'login', component: LoginComponent },
  { path: 'campaigns', component: CampaignsComponent, canActivate: [AuthGuardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
