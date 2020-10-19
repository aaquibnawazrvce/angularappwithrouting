import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producttypesutil } from '../producttypesutil';

@Component({
  selector: 'app-viewproducttype',
  templateUrl: './viewproducttype.component.html',
  styleUrls: ['./viewproducttype.component.css']
})
export class ViewproducttypeComponent implements OnInit {

  productTypes: any[];
  constructor(private router: Router) {
     const productUtilsObj = new Producttypesutil();
     this.productTypes = productUtilsObj.getProductTypes();
   }

  ngOnInit(): void {
  }

  clickedType(id: number): void{
    console.log('id' + id);
    this.router.navigate(['/viewptype', id]);
  }

}
