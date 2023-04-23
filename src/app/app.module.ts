import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GroupsComponent } from './components/groups/groups.component';
import { GroupComponent } from './components/group/group.component';
import { StudentComponent } from './components/student/student.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import { ShapkaComponent } from './components/shapka/shapka.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GroupModalComponent } from './components/modal/group-modal/group-modal.component';
import { StudentModalComponent } from './components/modal/student-modal/student-modal.component';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    GroupsComponent,
    GroupComponent,
    StudentComponent,
    ShapkaComponent,
    GroupModalComponent,
    StudentModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
