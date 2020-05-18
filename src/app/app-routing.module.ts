import { CoachComponent } from './components/coach/coach.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { JoingComponent } from './components/joing/joing.component';
// import { ContactComponent } from './contact/contact/contact.component';
import { RegisterComponent } from './contact/register/register.component';
import { Register1Component } from './contact/register1/register1.component';
import { LoginComponent } from './contact/login/login.component';
import { AboutComponent } from './components/about/about.component';
import { TableComponent } from './components/table/table.component';
import { SpecialistsComponent } from './components/specialists/specialists.component'
import { ClientsComponent } from './components/clients/clients.component';

const routes: Routes = [
  { path: "", component: HeaderComponent },
  { path: "about", component: AboutComponent },
  { path: "joing", component: JoingComponent },
  { path: "coach", component: CoachComponent },
  { path: "register", component: RegisterComponent },
  { path: "register1", component: Register1Component },
  { path: "login", component: LoginComponent },
  { path: "table", component: TableComponent },
  { path: "specialists", component: SpecialistsComponent },
  { path: "clients", component: ClientsComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
