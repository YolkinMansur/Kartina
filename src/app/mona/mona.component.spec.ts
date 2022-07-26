import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonaComponent } from './mona.component';

describe('MonaComponent', () => {
  let component: MonaComponent;
  let fixture: ComponentFixture<MonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
