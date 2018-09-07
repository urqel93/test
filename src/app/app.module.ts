import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ProfileCardComponent} from './components/profile-card/profile-card.component';
import {UserInfoCardComponent} from './components/user-info-card/user-info-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileCardComponent,
    UserInfoCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
