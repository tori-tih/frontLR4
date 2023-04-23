import { Component } from '@angular/core';
import { ShapkaService } from 'src/app/services/shapka.service';
import { ArrayType } from '@angular/compiler';
@Component({
  selector: 'app-shapka',
  templateUrl: './shapka.component.html',
  styleUrls: ['./shapka.component.scss']
})
export class ShapkaComponent {
  mas = Array(3)
  mas2 = Array(Math.floor(window.innerWidth/(8*this.shapkaService.name.length)))
 constructor(public shapkaService:ShapkaService ){}
}

