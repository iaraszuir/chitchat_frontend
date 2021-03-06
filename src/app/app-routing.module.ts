import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './components/events/events.component';
import { CommunityComponent } from './components/community/community.component';
import { FormUsersComponent } from './components/form-users/form-users.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EventListComponent } from './components/event-list/event-list.component';
import { LoginGuard } from './login.guard';
import { DetailEventComponent } from './components/detail-event/detail-event.component';
import { ProfileComponent } from './components/profile/profile.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: 'home', component: HomeComponent, canActivate: [LoginGuard] },
  { path: 'community', component: CommunityComponent, canActivate: [LoginGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'events/new', component: EventsComponent, canActivate: [LoginGuard] },
  { path: 'events/:pEventId', component: DetailEventComponent, canActivate: [LoginGuard] },
  { path: 'events', component: EventListComponent, canActivate: [LoginGuard] },
  { path: 'register', component: FormUsersComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [LoginGuard] },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
