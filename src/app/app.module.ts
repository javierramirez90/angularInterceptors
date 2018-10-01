import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { I1, I2 } from './interceptors.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: I1,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: I2,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
