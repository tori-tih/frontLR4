import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IGroup } from 'src/app/interfaces/iGroup';

@Component({
  selector: 'app-group-modal',
  templateUrl: './group-modal.component.html',
  styleUrls: ['./group-modal.component.scss'],
})
export class GroupModalComponent {
  form = this.fb.group({
    id: [NaN],
    name: ['', [Validators.required]],
  });
  @Input()title = '';
  @Input()group?: IGroup;
  @Output()event= new EventEmitter<void>()
  @Output()eventConfirm= new EventEmitter<IGroup>
  constructor(private fb: FormBuilder) {}
  ngOnInit(){
    if (this.group) this.form.setValue({ id: this.group.id, name: this.group.name });
  }
  close() {
    this.event.emit()
  }
  confirm() {
    console.log(this.form);
    //кидать на бэк форму
    //выводить ошибку
    //если все ок
    //this.eventConfirm()
  }
}
