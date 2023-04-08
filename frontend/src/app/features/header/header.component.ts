import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isDarkMode = false;

  constructor(@Inject(DOCUMENT) private document: Document) {
    const savedDarkMode = localStorage.getItem('isDarkMode');

    if (savedDarkMode) {
      this.isDarkMode = JSON.parse(savedDarkMode);
    } else {
      this.isDarkMode = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;
    }

    this.applyDarkModeClass();
  }

  toggleDarkMode(event: MatSlideToggleChange) {
    this.isDarkMode = event.checked;
    localStorage.setItem('isDarkMode', JSON.stringify(this.isDarkMode));
    this.applyDarkModeClass();
  }

  private applyDarkModeClass() {
    if (this.isDarkMode) {
      this.document.documentElement.classList.add('dark-mode');
    } else {
      this.document.documentElement.classList.remove('dark-mode');
    }
  }
}
