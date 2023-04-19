import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, Subscription, takeUntil } from 'rxjs';
import { IStudent } from 'src/app/interfaces/iStudent';
import { ShapkaService } from 'src/app/services/shapka.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent {
  IL2?: Subscription
  student?: IStudent
  constructor(private route: ActivatedRoute, private studentService: StudentService, private shapkaService: ShapkaService) {
  }
  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    if (id)
      this.IL2 = this.studentService.getStudent(id).subscribe({
        next: student => {
        this.student = student;
        this.shapkaService.name = "STUDENT";
      }, 
        error: e => {
          this.shapkaService.name = "NOT FOUND"
        }
      });
  }
  ngOnDestroy() {
    this.IL2?.unsubscribe()
  }
}
