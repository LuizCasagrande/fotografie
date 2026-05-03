import { Component } from '@angular/core';
import { CONSTANTS } from '../app.constants';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-bio',
  imports: [NgOptimizedImage],
  templateUrl: './bio.html',
})
export class Bio {
  protected constants = CONSTANTS;
}
