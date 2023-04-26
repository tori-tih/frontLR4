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
  create = false
  title=""
  student?: IStudent
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
  close(){
    this.edit = false
    this.edit2 = false
    this.create = false
  }
  closeGroup(group: IGroup){
      this.edit = false;
      this.group=group;
      this.ngOnInit()
  }

  ngOnDestroy() {
    this.IL2?.unsubscribe()
  }
}
