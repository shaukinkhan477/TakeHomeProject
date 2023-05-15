import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { OtherServcesComponent } from './other-servces/other-servces.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BestsaleComponent } from './bestsale/bestsale.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    FooterComponent,
    CarouselComponent,
    OtherServcesComponent,
    ProductDetailComponent,
    BestsaleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
