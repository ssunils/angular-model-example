import { Component, signal } from '@angular/core';
import { StudentListComponent } from './student-list/student-list.component';
import { FilterComponent } from '../filter/filter.component';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [StudentListComponent, FilterComponent],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css',
})
export class StudentComponent {
  keyword = signal('');
}
