import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Pipes';

  constructor(public translateService:TranslateService){
  }

  changeLanguage(lang: string): void {
    this.translateService.use(lang);
  }
}
