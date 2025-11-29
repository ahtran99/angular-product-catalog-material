import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {ReactiveFormsModule} from '@angular/forms'; 
import { MaterialModule } from './modules/material-ui/material-ui.module';
import { PopupbioComponent } from './popupbio/popupbio.component';
import { HeadfootModule } from './headfoot/headfoot.module';
import { CategoriesComponent } from './categories/categories.component';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    PopupbioComponent,
    CategoriesComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule, 
	  MaterialModule,
    HeadfootModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
