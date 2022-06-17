import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { SelectComponent } from './components/select/select.component'
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    HeaderComponent,
    SelectComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    BrowserModule,
    FormsModule
    
    
  ],
  exports:[
    HeaderComponent,
    SelectComponent,
    FormsModule,
  
  ]
})
export class SharedModule { }
