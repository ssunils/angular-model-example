import { Component, computed, input } from '@angular/core';
import { STUDENTS } from '../student';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css',
})
export class StudentListComponent {
  filterKeyword = input.required({
    transform: (value: string) => value.toLocaleLowerCase(),
  });

  filteredStudents = computed(() =>
    STUDENTS.filter((s) =>
      s.name.toLocaleLowerCase().includes(this.filterKeyword())
    )
  );
}
