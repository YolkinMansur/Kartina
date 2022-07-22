import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from "@angular/common/http";
import { MainComponent } from './main/main.component';
import { MonaComponent } from './mona/mona.component';
import { PaintersComponent } from './painters/painters.component';
import { GeneratComponent } from './generat/generat.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MonaComponent,
    PaintersComponent,
    GeneratComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
