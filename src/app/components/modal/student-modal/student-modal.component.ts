import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IStudent } from 'src/app/interfaces/iStudent';

@Component({
  selector: 'app-student-modal',
  templateUrl: './student-modal.component.html',
  styleUrls: ['./student-modal.component.scss']
})
export class StudentModalComponent {
  form = this.fb.group({
    id: [NaN],
    name: ['', [Validators.required]],
    number: [NaN],
  });
  @Input()title = '';
  @Input()student?: IStudent;
  @Output()event= new EventEmitter<void>()
  @Output()eventConfirm= new EventEmitter<IStudent>

constructor(private fb: FormBuilder) {}
ngOnInit(){
  if (this.student) this.form.setValue({id:this.student.id, name:this.student.name, number:this.student.number})
}
close() {
  this.event.emit()
}
add(){

}
confirm() {
  console.log(this.form);
  //кидать на бэк форму
  //выводить ошибку
  //если все ок
  //this.eventConfirm()
}
}
