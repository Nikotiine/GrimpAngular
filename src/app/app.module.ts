import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TokenInterceptorProvider } from './_helpers/token.interceptor';
import { ErrorComponent } from './_utils/error/error.component';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [AppComponent, ErrorComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [TokenInterceptorProvider, DatePipe],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
