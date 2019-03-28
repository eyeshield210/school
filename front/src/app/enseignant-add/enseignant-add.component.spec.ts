import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnseignantAddComponent } from './enseignant-add.component';

describe('EnseignantAddComponent', () => {
  let component: EnseignantAddComponent;
  let fixture: ComponentFixture<EnseignantAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnseignantAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnseignantAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
