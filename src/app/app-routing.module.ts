import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MissionComponent } from './components/abouts/mission/mission.component';
import { TeamComponent } from './components/abouts/team/team.component';
import { BackendComponent } from './components/backend/backend.component';
import { CareerComponent } from './components/career/career.component';
import { ContactComponent } from './components/contact/contact.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
//import { DepartmentsComponent } from './components/departments/departments.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { FoundationComponent } from './components/foundation/foundation.component';
import { FullstackComponent } from './components/fullstack/fullstack.component';
import { HomeComponent } from './components/home/home.component';
import { IotComponent } from './components/iot/iot.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { SignupComponent } from './components/signup/signup.component';
import { WebdevComponent } from './components/webdev/webdev.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: '', children: [

      {
        path: 'team',
        component: TeamComponent
      },
      {
        path: 'mission',
        component: MissionComponent
      },
    ]
  },
  {
    path: '', children: [

      {
        path: 'foundation',
        component: FoundationComponent
      },
      {
        path: 'webdev',
        component: WebdevComponent
      },
      {
        path: 'backend',
        component: BackendComponent
      },
      {
        path: 'fullstack',
        component: FullstackComponent
      },
      {
        path: 'iot',
        component: IotComponent
      },
    ]
  },
{ path: 'careers', component: CareerComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'register', component: SignupComponent },
   { path: 'dashboards', component: DashboardComponent },
   { path: 'employees', component: EmployeesComponent },
   { path: 'login', component: LoginComponent },
   { path: 'logout', component: LogoutComponent }



];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
