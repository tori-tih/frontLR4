import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subject, Subscriber } from 'rxjs';
import { IGroup } from 'src/app/interfaces/iGroup';
import { GroupService } from 'src/app/services/group.service';

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
  @Input() title = '';
  @Input() group?: IGroup;
  @Output() event = new EventEmitter<void>();
  @Output() eventConfirm = new EventEmitter<IGroup>();
  err = '';
  sub = new Subject

  constructor(private fb: FormBuilder, private groupService: GroupService) {}
  ngOnInit() {
    if (this.group)
      this.form.setValue({ id: this.group.id, name: this.group.name });
  }
  close() {
    this.event.emit();
  }
  add() {
    console.log(this.form);

    if (this.form.invalid) {
      this.err="DATA IS NOT CORRECT";
      return;
    }
    let gr = this.form.getRawValue() as IGroup
    if(this.title==="CREATE"){
    this.groupService.addGroup(gr).subscribe({
      next: (data) => {
        this.group = data;
        this.confirm();},
      error: (e) => {
        this.err = "ERROR"
      }});} else {
        this.groupService.updateGroup(gr).subscribe({
          next: (data) => {
            this.group = data;
            this.confirm();
          },
          error: (e) => {
            this.err = "ERROR"
          }});
      }

  }
  confirm() {
    this.eventConfirm.emit(this.group);
  }
}
