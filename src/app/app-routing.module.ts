import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { HomeComponent } from './home/home.component';
import { UserInputComponent } from './user-input/user-input.component';
import { SolutionComponent } from './solution/solution.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'userInput', component: UserInputComponent},
  {path: 'solution', component: SolutionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
