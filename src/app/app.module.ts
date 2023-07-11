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
import { MenuComponent } from './pages/menu/menu.component';
import { MainComponent } from './components/Home/main/main.component';
import { ScrollRevealService } from './services/scrollreveal.service';
import { ProductsHeaderComponent } from './pages/products-header/products-header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductCartComponent } from './pages/product-cart/product-cart.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ShopService } from './services/Shop.service';
import { StoreService } from './services/store.service';
import { HttpClientModule } from '@angular/common/http';

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
    ProductsHeaderComponent,
    ProductCartComponent,
    CartPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PopularModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    HttpClientModule,
  ],
  providers: [ScrollRevealService, ShopService, StoreService],
  bootstrap: [AppComponent],
})
export class AppModule {}
