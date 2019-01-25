import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyListComponent } from './company-list.component';
import { CompanyStockService } from '../services/company-stock.service';

describe('CompanyListComponent', () => {
  let component: CompanyListComponent;
  let fixture: ComponentFixture<CompanyListComponent>;
  let teststockService: CompanyStockService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyListComponent ],
      providers:[CompanyStockService]
    })
    fixture = TestBed.createComponent(CompanyListComponent);
    component = fixture.componentInstance;

    teststockService = TestBed.get(CompanyStockService);
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
