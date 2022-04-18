import { Component, Directive } from '@angular/core';
// import { ProfileComponent } from './profile/profile.component';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // directives :[ProfileComponent],
  providers :[ ProfileService]
})
export class AppComponent {
  title = 'gitit';
}


