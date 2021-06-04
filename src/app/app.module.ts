import { SharedModule } from './shared/shared.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import localeṔt from '@angular/common/locales/pt';
import { HomebrokerComponent } from './homebroker/homebroker.component';
registerLocaleData(localeṔt);

@NgModule({
  declarations: [
    AppComponent,
    HomebrokerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    SharedModule,
  ],
  providers: [
    {provide: LOCALE_ID,useValue: 'pt-BR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
