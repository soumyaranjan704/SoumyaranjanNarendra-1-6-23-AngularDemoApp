import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { SignupComponent } from './components/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { WebdevComponent } from './components/webdev/webdev.component';
import { BackendComponent } from './components/backend/backend.component';
import { FullstackComponent } from './components/fullstack/fullstack.component';
import { IotComponent } from './components/iot/iot.component';
import { FoundationComponent } from './components/foundation/foundation.component';
import { MissionComponent } from './components/abouts/mission/mission.component';
import { TeamComponent } from './components/abouts/team/team.component';
import { CareerComponent } from './components/career/career.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './services/auth.service';
import { LogoutComponent } from './components/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    SignupComponent,
    WebdevComponent,
    BackendComponent,
    FullstackComponent,
    IotComponent,
    FoundationComponent,
    MissionComponent,
    TeamComponent,
    CareerComponent,

    DashboardComponent,
    EmployeesComponent,
    LoginComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule 

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
