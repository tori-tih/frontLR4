import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subject, Subscription, takeUntil } from 'rxjs';
import { GROUPS } from 'src/app/data/groups';
import { IGroup } from 'src/app/interfaces/iGroup';
import { GroupService } from 'src/app/services/group.service';
import { ShapkaService } from 'src/app/services/shapka.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit, OnDestroy{
  IL2?: Subscription
  groups?: IGroup[] 
  edit = false
  title = "EDIT"
  form = this.fb.group({
    id: [NaN],
    name: ['', [Validators.required]],
  })
  constructor(private fb: FormBuilder, private groupService:GroupService, private shapkaService:ShapkaService){}
  ngOnInit(){
    this.shapkaService.name = " LOADING "
    this.IL2 = this.groupService.getGroups().subscribe({
      next: groups=>{
      this.groups=groups;
      this.shapkaService.name = "GROUPS"
      },
      error: e => {
        this.shapkaService.name = "NOT FOUND"
      }
    }
    );
  }
  setForm(group: IGroup|undefined, title: string){
    this.edit=true; 
    if(group)
    this.form.setValue({id:group.id, name:group.name})
    this.title = title
  }
  clearForm(){
    this.edit=false; 
    this.form.setValue({id:NaN, name:""})
  }
  confirm(){
    console.log(this.form)
  }
  ngOnDestroy(){
    this.IL2?.unsubscribe()
  }
}
