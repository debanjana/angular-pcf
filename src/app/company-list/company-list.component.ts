import { Component, OnInit } from '@angular/core';
import { CompanyStockService } from '../services/company-stock.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  constructor(public companyStockService: CompanyStockService) { }
  // here CompanyStockService is the service injected as dependency
  
  stockData = [];

  ngOnInit() {
    this.stockData = this.companyStockService.getStockData();
  }

}
