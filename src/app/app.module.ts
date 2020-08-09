import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterSheetComponent } from './Components/character-sheet/character-sheet.component';
import { CharacterCreatorComponent } from './Components/character-creator/character-creator.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { EditCampaignComponent } from './Components/edit-campaign/edit-campaign.component';
import { CharacterViewComponent } from './Components/character-view/character-view.component';
import { AddEquipmentComponent } from './Components/add-equipment/add-equipment.component';
<<<<<<< HEAD
import { EditEquipmentComponent } from './Components/edit-equipment/edit-equipment.component';
=======
import { EditEquipmentComponent } from './Components/edit-equipment/edit-equipment.component';
import { CategoryItemViewComponent } from './Components/category-item-view/category-item-view.component';
>>>>>>> ecfe96a08ad99a2228dbc23f46e43d6ff1035bc1

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
    CreateCampaignComponent,
    EditCampaignComponent,
    CharacterViewComponent,
    AddEquipmentComponent,
<<<<<<< HEAD
    EditEquipmentComponent
=======
    EditEquipmentComponent,
    CategoryItemViewComponent
>>>>>>> ecfe96a08ad99a2228dbc23f46e43d6ff1035bc1
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: "fill" } }
    , CookieService, ActiveCampaignService],
  bootstrap: [AppComponent]
})
export class AppModule { }
