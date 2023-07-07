import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './pages/menu/menu.component';
import { MainComponent } from './components/Home/main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent},
  { path: 'menu', component: MenuComponent },
  // {path: '**' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
