import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterSheetComponent } from './Components/character-sheet/character-sheet.component';
import { CharacterCreatorComponent } from './Components/character-creator/character-creator.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './Components/login/login.component';
import { HttpClientModule } from '@angular/common/http'
import { CookieService } from 'ngx-cookie-service';
import { NavComponent } from './Components/nav/nav.component';
import { CampaignsComponent } from './Components/campaigns/campaigns.component';
import { CreateUserComponent } from './Components/create-user/create-user.component';
import { UpdateUserComponent } from './Components/update-user/update-user.component';
import { CampaignIconComponent } from './Components/campaign-icon/campaign-icon.component';
import { CreateCampaignComponent } from './Components/create-campaign/create-campaign.component';
import { ActiveCampaignService } from './Services/active-campaign.service';

@NgModule({
  declarations: [
    AppComponent,
    CharacterSheetComponent,
    CharacterCreatorComponent,
    LoginComponent,
    NavComponent,
    CampaignsComponent,
    CreateUserComponent,
    UpdateUserComponent,
    CampaignIconComponent,
    CreateCampaignComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CookieService, ActiveCampaignService],
  bootstrap: [AppComponent]
})
export class AppModule { }
