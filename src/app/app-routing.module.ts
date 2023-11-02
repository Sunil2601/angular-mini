import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ViewArtByIdComponent } from './view-art-by-id/view-art-by-id.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { HelpcomponentComponent } from './helpcomponent/helpcomponent.component';
import { ArtsComponent } from './arts/arts.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"viewart/:id",
    component:ViewArtByIdComponent
  },
  {
    path:"favourites",
    component:WishlistComponent
  },
  {
    path:"help",
    component:HelpcomponentComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"signup",
    component:SignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
