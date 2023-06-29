import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateListitemComponent } from './create-listitem.component';

describe('CreateListitemComponent', () => {
  let component: CreateListitemComponent;
  let fixture: ComponentFixture<CreateListitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateListitemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateListitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
