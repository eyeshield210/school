import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnseignantRemoveComponent } from './enseignant-remove.component';

describe('EnseignantRemoveComponent', () => {
  let component: EnseignantRemoveComponent;
  let fixture: ComponentFixture<EnseignantRemoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnseignantRemoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnseignantRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
