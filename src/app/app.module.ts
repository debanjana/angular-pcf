import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CompanyComponent } from './company/company.component';
import { CompanyListComponent } from './company-list/company-list.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, CompanyComponent, CompanyListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
