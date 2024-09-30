import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuizComponent } from './quiz/quiz.component';
import { ResultsComponent } from './results/results.component';
import { RouterModule } from '@angular/router';

export const routes: Routes = [
   { path: '', redirectTo: '/home', pathMatch: 'full' }, 
  { path: 'home', component: HomeComponent },          
  { path: 'quiz/:language', component: QuizComponent }, 
  { path: 'results', component: ResultsComponent },    
  { path: '**', redirectTo: '/home' }                   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
