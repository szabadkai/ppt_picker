import { Component } from '@angular/core';
import {SearchService} from './prezi/app.search.service'
import { PreziListComponent } from './prezi/app.prezi.list.component';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ SearchService ]
})
export class AppComponent {
  title = 'PreziPicker';
}
