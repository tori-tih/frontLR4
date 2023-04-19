import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupsComponent } from './components/groups/groups.component';
import { GroupComponent } from './components/group/group.component';
import { StudentComponent } from './components/student/student.component';

const routes: Routes = [{ path: "", component: GroupsComponent },
{ path: "group/:id", component: GroupComponent },
{ path: "student/:id", component: StudentComponent },
{ path: "**", redirectTo: "", pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
