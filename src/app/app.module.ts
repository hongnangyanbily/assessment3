import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from "./app.component";
import { GroupsComponent } from "./groups/groups.component";
import { GroupDetailComponent } from "./group-detail/group-detail.component";
import { UserComponent } from "./user/user.component";
import { AppRoutingModule } from ".//app-routing.module";
import { SearchComponent } from "./search/search.component";
import { GroupBoardComponent } from "./group-board/group-board.component";
import { LoginComponent } from './login/login.component';

import { LoginServiceService } from './services/login-service.service';

@NgModule({
  declarations: [
    AppComponent,
    GroupsComponent,
    GroupDetailComponent,
    UserComponent,
    SearchComponent,
    GroupBoardComponent,
    LoginComponent
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  providers: [LoginServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
