import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { AboutComponent } from './about/about.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { MyWorkComponent } from './my-work/my-work.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    AboutComponent,
    MySkillsComponent,
    MyWorkComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
