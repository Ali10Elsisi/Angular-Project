import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './shared/shared.module';
import { ProductsModule } from './products/products.module';
import { CartsModule } from './carts/carts.module';


@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    CartsModule,
    ProductsModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    SharedModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
