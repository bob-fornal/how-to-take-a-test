import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AssistanceSelectionComponent } from './features/assistance-selection/assistance-selection.component';
import { GradeLevelSelectionComponent } from './features/grade-level-selection/grade-level-selection.component';
import { HeaderComponent } from './features/header/header.component';
import { HomeComponent } from './pages/home/home.component';

import { MatButtonModule } from '@angular/material/button'
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


@NgModule({
  declarations: [
    AppComponent,

    AssistanceSelectionComponent,
    GradeLevelSelectionComponent,
    HeaderComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
