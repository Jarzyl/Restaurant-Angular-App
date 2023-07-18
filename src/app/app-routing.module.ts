import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './pages/menupage/menu/menu.component';
import { MainComponent } from './components/Home/main/main.component';
import { CartPageComponent } from './pages/menupage/cart-page/cart-page.component';
import { ReservationPageComponent } from './pages/reservation-page/reservation-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';

const routes: Routes = [
  { path: '', component: MainComponent},
  { path: 'menu', component: MenuComponent },
  { path: 'cart', component: CartPageComponent },
  { path: 'reservation', component: ReservationPageComponent },
  { path: 'contact', component: ContactPageComponent },
  // {path: '**' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
