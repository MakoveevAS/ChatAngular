import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  ngOnInit(): void {
    this.translate.use('en');
  }

  private initModel(): void {
  }

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }
  
}
