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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SectionComponent,
    HomeComponent,
    AboutComponent,
    SignupComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule,
    RouterModule.forRoot([
      {path:"home",component:HomeComponent},
      {path:"about",component:AboutComponent},
      {path:"signup",component:SignupComponent},
      {path:"login",component:LoginComponent}
    ])
  ],
  providers: [LookupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
