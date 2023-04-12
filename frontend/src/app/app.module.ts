import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssistanceSelectionComponent } from './features/assistance-selection/assistance-selection.component';
import { GradeLevelSelectionComponent } from './features/grade-level-selection/grade-level-selection.component';
import { HeaderComponent } from './features/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginModalComponent } from './shared/login-modal/login-modal.component';
import { RegisterModalComponent } from './shared/register-modal/register-modal.component';

@NgModule({
  declarations: [
    AppComponent,

    AssistanceSelectionComponent,
    GradeLevelSelectionComponent,
    HeaderComponent,
    HomeComponent,

    LoginModalComponent,
    RegisterModalComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,

    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatSlideToggleModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
