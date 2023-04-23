import { Injectable } from '@angular/core';
import { GROUPS } from '../data/groups';
import { IGroup } from '../interfaces/iGroup';
import { Observable, delay, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  url = `${environment.apiUrl}/groups`

  constructor(private httpClient: HttpClient){
  }
  getGroups(): Observable<IGroup[]> {
    return this.httpClient.get<IGroup[]>(this.url+"/groups")
  }
  getGroup(id:number): Observable<IGroup>{
    return this.httpClient.get<IGroup>(this.url+"/"+id)
  }
  deleteGroup(id:number): Observable<IGroup>{
    return this.httpClient.delete<IGroup>(this.url+"/"+id)
  }
  updateGroup(group:IGroup): Observable<IGroup>{
    return this.httpClient.put<IGroup>(this.url, group)
  }
  addGroup(group:IGroup): Observable<IGroup>{
     return this.httpClient.post<IGroup>(this.url, group)
 }
}
