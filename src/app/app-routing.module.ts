import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardAdminComponent } from './components/board-admin/board-admin.component';
import { BoardModeratorComponent } from './components/board-moderator/board-moderator.component';
import { BoardUserComponent } from './components/board-user/board-user.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { AddTagComponent } from './components/tag/add-tag/add-tag.component';
import { ListTagComponent } from './components/tag/list-tag/list-tag.component';
import { AddComponent } from './components/tutorial/add/add.component';
import { DetailsComponent } from './components/tutorial/details/details.component';
import { ListComponent } from './components/tutorial/list/list.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'tutorials', component: ListComponent },
  { path: 'tutorials/:id', component: DetailsComponent },
  { path: 'add', component: AddComponent },
  { path: 'tags', component: ListTagComponent },
  { path: 'add-tag', component: AddTagComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
