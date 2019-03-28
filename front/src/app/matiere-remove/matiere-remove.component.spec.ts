import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatiereRemoveComponent } from './matiere-remove.component';

describe('MatiereRemoveComponent', () => {
  let component: MatiereRemoveComponent;
  let fixture: ComponentFixture<MatiereRemoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatiereRemoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatiereRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
