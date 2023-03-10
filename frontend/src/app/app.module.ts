import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './features/header/header.component';

import { MatButtonModule } from '@angular/material/button';

import { GradeLevelSelectionComponent } from './features/grade-level-selection/grade-level-selection.component';

@NgModule({
  declarations: [
    AppComponent,

    GradeLevelSelectionComponent,
    HeaderComponent,
    HomeComponent,
  ],
  imports: [
    AppRoutingModule,

    MatButtonModule,
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
