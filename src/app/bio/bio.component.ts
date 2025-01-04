import {Component} from '@angular/core';
import {APP_CONSTANTS} from '../app.constants';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  imports: [
    NgOptimizedImage,
  ],
})
export class BioComponent {

  readonly CONSTANTS = APP_CONSTANTS;
}
