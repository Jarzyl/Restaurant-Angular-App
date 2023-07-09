import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { RecentlyComponent } from './components/recently/recently.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { FooterComponent } from './components/footer/footer.component';
import { PopularModule } from './components/popular/popular.module';
import { CartService } from './services/cart.service';
import { CartComponent } from './cart/cart.component';
import { MenuComponent } from './pages/menu/menu.component';
import { MainComponent } from './components/Home/main/main.component';
import { ScrollRevealService } from './services/scrollreveal.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingpageComponent,
    AboutusComponent,
    RecentlyComponent,
    NewsletterComponent,
    FooterComponent,
    CartComponent,
    MenuComponent,
    MainComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, PopularModule],
  providers: [CartService, ScrollRevealService],
  bootstrap: [AppComponent],
})
export class AppModule {}
