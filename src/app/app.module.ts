import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Q1Component } from './components/q1/q1.component';
import { Q3Component } from './components/q3/q3.component';
import { Q4Component } from './components/q4/q4.component';
import { Q2Component } from './components/q2/q2.component';

@NgModule({
  declarations: [
    AppComponent,
    Q1Component,
    Q3Component,
    Q4Component,
    Q2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
