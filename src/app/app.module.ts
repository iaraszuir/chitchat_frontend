import { NgModule, LOCALE_ID } from '@angular/core';
import localEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoginComponent } from './components/login/login.component';
import { FormUsersComponent } from './components/form-users/form-users.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventsComponent } from './components/events/events.component';
import { CommunityComponent } from './components/community/community.component';
import { EventListComponent } from './components/event-list/event-list.component';
import { DetailEventComponent } from './components/detail-event/detail-event.component';
import { MapangComponent } from './components/mapang/mapang.component';
import { AgmCoreModule } from '@agm/core';
import { ProfileComponent } from './components/profile/profile.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { ReviewsFormComponent } from './components/reviews-form/reviews-form.component';


registerLocaleData(localEs);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    LoginComponent,
    FormUsersComponent,
    EventsComponent,
    CommunityComponent,
    EventListComponent,
    DetailEventComponent,
    MapangComponent,
    ProfileComponent,
    ReviewsComponent,
    ReviewsFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBMOcTcAkobrlfKIBOJNz6lDw2R5fJsk_Q'
    })

  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-ES' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
