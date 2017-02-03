import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SectionComponent } from './section/section.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { LookupService } from './services/lookup.service'; 
import { ProdutcsComponent } from './produtcs/produtcs.component';
import { PetsComponent } from './pets/pets.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SectionComponent,
    HomeComponent,
    AboutComponent,
    SignupComponent,
    LoginComponent,
    ProdutcsComponent,
    PetsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule,
    RouterModule.forRoot([
      {path:"Home",component:HomeComponent},
      {path:"About",component:AboutComponent},
      {path:"Products",component:ProdutcsComponent},
      {path:"Pets",component:PetsComponent},
      {path:"login",component:LoginComponent},
      {path:"register",component:SignupComponent},
      {path:"", redirectTo: '/Home', pathMatch: 'prefix'}
    ])
  ],
  providers: [LookupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
