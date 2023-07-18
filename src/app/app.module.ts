import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/Layout/navbar/navbar.component';
import { LandingpageComponent } from './components/Home/landingpage/landingpage.component';
import { AboutusComponent } from './components/Home/aboutus/aboutus.component';
import { RecentlyComponent } from './components/Home/recently/recently.component';
import { NewsletterComponent } from './components/Home/newsletter/newsletter.component';
import { FooterComponent } from './components/Layout/footer/footer.component';
import { PopularModule } from './components/Home/popular/popular.module';
import { CartComponent } from './cart/cart.component';
import { MenuComponent } from './pages/menupage/menu/menu.component';
import { MainComponent } from './components/Home/main/main.component';
import { ScrollRevealService } from './services/scrollreveal.service';
import { ProductsCategoryComponent } from './pages/menupage/products-category/products-category.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductCartComponent } from './pages/menupage/product-cart/product-cart.component';
import { CartPageComponent } from './pages/menupage/cart-page/cart-page.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ShopService } from './services/Shop.service';
import { StoreService } from './services/store.service';
import { HttpClientModule } from '@angular/common/http';
import { ReservationPageComponent } from './pages/reservation-page/reservation-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { FormsModule } from '@angular/forms';

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
    ProductsCategoryComponent,
    ProductCartComponent,
    CartPageComponent,
    ReservationPageComponent,
    ContactPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PopularModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ScrollRevealService, ShopService, StoreService],
  bootstrap: [AppComponent],
})
export class AppModule {}
