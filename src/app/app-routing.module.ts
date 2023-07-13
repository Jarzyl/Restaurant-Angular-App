import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './pages/menupage/menu/menu.component';
import { MainComponent } from './components/Home/main/main.component';
import { CartPageComponent } from './pages/menupage/cart-page/cart-page.component';

const routes: Routes = [
  { path: '', component: MainComponent},
  { path: 'menu', component: MenuComponent },
  { path: 'cart', component: CartPageComponent },
  // {path: '**' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
