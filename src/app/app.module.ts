import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BoardAdminComponent } from './components/board-admin/board-admin.component';
import { BoardModeratorComponent } from './components/board-moderator/board-moderator.component';
import { BoardUserComponent } from './components/board-user/board-user.component';
import { authInterceptorProviders } from './helpers/auth.interceptor';
import { AddComponent } from './components/tutorial/add/add.component';
import { DetailsComponent } from './components/tutorial/details/details.component';
import { ListComponent } from './components/tutorial/list/list.component';
// import { FileuploadComponent } from './components/fileupload/fileupload.component';
import { AddTagComponent } from './components/tag/add-tag/add-tag.component';
import { ListTagComponent } from './components/tag/list-tag/list-tag.component';
import { EditTagComponent } from './components/tag/edit-tag/edit-tag.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    AddComponent,
    DetailsComponent,
    ListComponent,
    // FileuploadComponent,
    AddTagComponent,
    ListTagComponent,
    EditTagComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
