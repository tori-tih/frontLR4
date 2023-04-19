import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShapkaComponent } from './shapka.component';

describe('ShapkaComponent', () => {
  let component: ShapkaComponent;
  let fixture: ComponentFixture<ShapkaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShapkaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShapkaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
