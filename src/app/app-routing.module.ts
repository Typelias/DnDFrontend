import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharacterCreatorComponent } from './Components/character-creator/character-creator.component';
import { LoginComponent } from './Components/login/login.component';
import { AuthGuardService } from './Services/auth-guard.service';
import { CampaignsComponent } from './Components/campaigns/campaigns.component';
import { CreateUserComponent } from './Components/create-user/create-user.component';
import { AuthGuardAdminService } from './Services/auth-guard-admin.service';
import { UpdateUserComponent } from './Components/update-user/update-user.component';


const routes: Routes = [
  { path: 'creator', component: CharacterCreatorComponent, canActivate: [AuthGuardService] },
  { path: 'login', component: LoginComponent },
  { path: '', component: CampaignsComponent, canActivate: [AuthGuardService] },
  { path: 'createUser', component: CreateUserComponent, canActivate: [AuthGuardAdminService] },
  { path: 'updateUser', component: UpdateUserComponent, canActivate: [AuthGuardAdminService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
