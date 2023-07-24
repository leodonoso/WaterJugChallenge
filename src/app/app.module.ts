import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Modules
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Components
import { AppComponent } from './app.component';
import { UserInputComponent } from './user-input/user-input.component';
import { HomeComponent } from './home/home.component';
import { SolutionComponent } from './solution/solution.component';


@NgModule({
  declarations: [
    AppComponent,
    UserInputComponent,
    HomeComponent,
    SolutionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
