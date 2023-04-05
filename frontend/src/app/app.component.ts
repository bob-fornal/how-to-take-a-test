import { OverlayContainer } from '@angular/cdk/overlay';
import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  isDarkMode = false;

  constructor(private overlayContainer: OverlayContainer) {}

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      this.overlayContainer.getContainerElement().classList.add('test');
      document.documentElement.classList.add('test');
    } else {
      this.overlayContainer.getContainerElement().classList.remove('test');
      document.documentElement.classList.remove('test');
    }
  }
}
