import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormUsersComponent } from './components/form-users/form-users.component';
import { HomeComponent } from './components/home/home.component';
import { UsersListComponent } from './components/users-list/users-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent },
  { path: 'users', component: UsersListComponent },
  { path: 'register', component: FormUsersComponent },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
