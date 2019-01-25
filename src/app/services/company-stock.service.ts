/*
This is the service.
This has @injectable decorator because it will be injected to the Company List component
This is the new way of Dependency Injection from Angular 6 onwards
*/

import { Injectable } from '@angular/core';
import { getQueryValue } from '@angular/core/src/view/query';
@Injectable({
    providedIn: 'root',
  })

  export class CompanyStockService {
      testVal = "test val";
      realStockData = [];

    mockStockData= [
        {"name" : "Vmware",
        "currentPrice": 170,
        "change" : -3.74
    },
    {"name" : "Google",
    "currentPrice": 1071,
    "change" : -11.74
},
{"name" : "Tortoise Global",
        "currentPrice": 150,
        "change" : +0.13
    },
    {"name" : "State Farm",
        "currentPrice": 200,
        "change" : +8.74
    }
    ]

    getStockData(){
        this.realStockData = this.mockStockData;
        return this.realStockData;
    }
    
  }
