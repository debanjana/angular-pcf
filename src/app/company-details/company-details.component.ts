import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompanyStockService } from '../services/company-stock.service';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {
 // @Input() company;
 id: number;
private sub: any;
private displayCompany;


  constructor(private route: ActivatedRoute, private companyStockService : CompanyStockService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      // In a real app: dispatch action to load the details here.
      this.displayCompany = this.companyStockService.getCompanyStockData(this.id);
    
   });
  }

}
