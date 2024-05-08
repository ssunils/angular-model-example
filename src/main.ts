import { Component, model, signal } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { StudentComponent } from './app/student/student.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [StudentComponent],
  template: `
    <app-student />
  `,
})
export class App {}

bootstrapApplication(App);
