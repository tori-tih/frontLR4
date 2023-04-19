import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subject, Subscription, takeUntil } from 'rxjs';
import { subscriptionLogsToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { IGroup } from 'src/app/interfaces/iGroup';
import { IStudent } from 'src/app/interfaces/iStudent';
import { GroupService } from 'src/app/services/group.service';
import { ShapkaService } from 'src/app/services/shapka.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent {
  edit = false
  edit2 = false
  title=""
  form = this.fb.group({
    id: [NaN],
    name: ['', [Validators.required]],
  })
  formS = this.fb.group({
    id: [NaN],
    name: ['', [Validators.required]],
    number: [NaN],
  })
  IL2?: Subscription
  group?: IGroup
  ilX$ = new Subject()
  constructor(private fb: FormBuilder, private route: ActivatedRoute, private groupService: GroupService, private shapkaService: ShapkaService) {
  }
  ngOnInit() {
    this.shapkaService.name = " LOADING "
    const id = Number(this.route.snapshot.paramMap.get('id'))
    if (id)
      this.IL2 = this.groupService.getGroup(id).subscribe({
        next: group => {
          this.group = group;
          this.shapkaService.name = " GROUP " + this.group?.name
        },
        error: e => {
          this.shapkaService.name = "NOT FOUND"
        }
      }
      );
  }
  setForm(){
    this.edit=true; 
    if(this.group)
    this.form.setValue({id:this.group.id, name:this.group.name})
  }
  clearForm(){
    this.edit=false; 
    this.form.setValue({id:NaN, name:""})
  }
  setForm2(student:IStudent|undefined, title:string){
    this.edit2=true; 
    this.title=title
    if(student)
    this.formS.setValue({id:student.id, name:student.name, number:student.number})
  }
  clearFormS(){
    this.edit2=false; 
    this.formS.setValue({id:NaN, name:"", number:NaN})
  }
    confirm(){
    console.log(this.form)
  }
  ngOnDestroy() {
    this.IL2?.unsubscribe()
  }
}
