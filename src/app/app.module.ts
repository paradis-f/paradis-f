import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { IndexPageComponent } from './index-page/index-page.component';
import { InfoPageComponent } from './info-page/info-page.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { CartComponent } from './cart/cart.component';
import { RegFormComponent } from './reg-form/reg-form.component';
import { ProgEnCoursComponent } from './prog-en-cours/prog-en-cours.component';
import { ContactComponent } from './contact/contact.component';
import { AdminInfoComponent } from './admin-info/admin-info.component';
import { AdminCreerComponent } from './admin-creer/admin-creer.component';
import { AdminDetailsComponent } from './admin-details/admin-details.component';
import { AddFamilyMembersComponent } from './add-family-members/add-family-members.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    AboutComponent,
    IndexPageComponent,
    InfoPageComponent,
    LoginFormComponent,
    CartComponent,
    RegFormComponent,
    ProgEnCoursComponent,
    ContactComponent,
    AdminInfoComponent,
    AdminCreerComponent,
    AdminDetailsComponent,
    AddFamilyMembersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
