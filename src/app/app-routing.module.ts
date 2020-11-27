import { AppComponent } from './app.component';
import { Q4Component } from './components/q4/q4.component';
import { Q3Component } from './components/q3/q3.component';
import { Q1Component } from './components/q1/q1.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'q1', component: Q1Component },
  { path: 'q3', component: Q3Component },
  { path: 'q4', component: Q4Component },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
