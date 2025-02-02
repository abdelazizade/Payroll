import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  currentLang: string;
  constructor(public translate: TranslateService) {
    this.translate.setDefaultLang('en');

    this.translate.use('en');

    this.currentLang = this.translate.currentLang;
  }
}
