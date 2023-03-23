import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ExpEduComponent } from './components/exp-edu/exp-edu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ObjectiveComponent } from './components/objective/objective.component';
import { SkillsComponent } from './components/skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    ProfileComponent,
    ExpEduComponent,
    ObjectiveComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
