import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OrderCharacters } from './pipes/order-characters.pipe';
import { FormsModule } from '@angular/forms';
import { FilterCharacters } from './pipes/filter.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { GenericModalComponent } from './components/generic-modal/generic-modal.component';
import { CapitalizedString } from './pipes/capitalizedString.pipe';
import { FormatDate } from './pipes/formatDate.pipe';
import { FilterByOptions } from './pipes/filterByOptions.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OrderCharacters,
    FilterCharacters,
    CapitalizedString,
    FilterByOptions,
    FormatDate,
    GenericModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    NgxPaginationModule,
  ],
  exports: [
    OrderCharacters,
    FilterCharacters,
    CapitalizedString,
    FilterByOptions,
    FormatDate,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
