import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tabletop-rpg-rule-of-cool';

  showAlert(){
    alert('Aburoshid Bogdanov');
  }
}
