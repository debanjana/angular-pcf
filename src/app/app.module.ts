import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CompanyComponent } from './company/company.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { RouterModule } from '@angular/router';
import { RoutingModule } from './app.routing.module';


@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule, RoutingModule, RouterModule.forRoot([]) ],
  declarations: [ AppComponent, HelloComponent, CompanyComponent, CompanyListComponent, CompanyDetailsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
