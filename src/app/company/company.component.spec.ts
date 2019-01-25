import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyComponent } from './company.component';
import { CompanyListComponent } from '../company-list/company-list.component';

describe('CompanyComponent', () => {
  let component: CompanyComponent;
  let fixture: ComponentFixture<CompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyComponent , CompanyListComponent],
    })
    
    fixture = TestBed.createComponent(CompanyComponent);
    component = fixture.componentInstance;

  }));


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});