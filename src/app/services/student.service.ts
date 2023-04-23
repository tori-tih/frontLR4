import { Injectable } from '@angular/core';
import { STUDENTS } from '../data/stdents';
import { IStudent } from '../interfaces/iStudent';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  url = `${environment.apiUrl}/students`
  constructor(private httpClient: HttpClient){
  }
  // getStudent(id:number): Observable<IStudent>{
  //   return of(STUDENTS.find(student=>student.id === id)!)
  // }

  getStudents(): Observable<IStudent[]> {
    return this.httpClient.get<IStudent[]>(this.url)
  }
  getStudent(id:number): Observable<IStudent>{
    return this.httpClient.get<IStudent>(this.url+"/id/"+id)
  }
  deleteGroup(id:number): Observable<IStudent>{
    return this.httpClient.delete<IStudent>(this.url+"/"+id)
  }
  updateGroup(student:IStudent): Observable<IStudent>{
    return this.httpClient.put<IStudent>(this.url, student)
  }
  addGroup(student:IStudent): Observable<IStudent>{
     return this.httpClient.post<IStudent>(this.url, student)
 }

}
