import { Injectable } from '@angular/core';
import { GROUPS } from '../data/groups';
import { IGroup } from '../interfaces/iGroup';
import { Observable, delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  getGroups(): Observable<IGroup[]> {
    return of(GROUPS).pipe(delay(1000))
  }
  getGroup(id:number): Observable<IGroup>{
    return of(GROUPS.find(group=>group.id === id)!).pipe(delay(1000))
  }
}
