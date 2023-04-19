import { Injectable } from '@angular/core';
import { STUDENTS } from '../data/stdents';
import { IStudent } from '../interfaces/iStudent';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  getStudent(id:number): Observable<IStudent>{
    return of(STUDENTS.find(student=>student.id === id)!)
  }

}
