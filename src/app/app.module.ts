import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './contact/login/login.component';
import { JoingComponent } from './components/joing/joing.component';
import { RegisterComponent } from './contact/register/register.component';
import { ContactComponent } from './contact/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { Register1Component } from './contact/register1/register1.component';
import { FooterComponent } from './components/footer/footer.component';
import { TableComponent } from './components/table/table.component';
import { CoachComponent } from './components/coach/coach.component';
import { SpecialistsComponent } from './components/specialists/specialists.component';
import { ClientsComponent } from './components/clients/clients.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    LoginComponent,
    JoingComponent,
    RegisterComponent,
    ContactComponent,
    HomeComponent,
    AboutComponent,
    Register1Component,
    FooterComponent,
    TableComponent,
    CoachComponent,
    SpecialistsComponent,
    ClientsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
