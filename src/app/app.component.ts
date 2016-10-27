import { Component } from '@angular/core';
//Import Service Github
import {GithubService} from './services/github.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GithubService]
})
export class AppComponent {
  title = 'app works!';
}
