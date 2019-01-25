/* this is the main component that whose UI loads after being redirected from app.component.ts
It has a Company list as child component
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: 'company.component.html',
  styleUrls: [ 'company.component.css' ]
})
export class CompanyComponent  {
  name = 'Company Stock';
}
