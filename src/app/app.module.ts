import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ArtsComponent } from './arts/arts.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialUIModule } from './material-ui/material-ui.module';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ViewArtByIdComponent } from './view-art-by-id/view-art-by-id.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { HelpcomponentComponent } from './helpcomponent/helpcomponent.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ShareComponent } from './share/share.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    ArtsComponent,
    ViewArtByIdComponent,
    WishlistComponent,
    HelpcomponentComponent,
    HomeComponent,
    SearchComponent,
    ShareComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialUIModule,
    TooltipModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
