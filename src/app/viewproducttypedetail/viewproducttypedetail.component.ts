import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Producttypesutil } from '../producttypesutil';
@Component({
  selector: 'app-viewproducttypedetail',
  templateUrl: './viewproducttypedetail.component.html',
  styleUrls: ['./viewproducttypedetail.component.css']
})
export class ViewproducttypedetailComponent implements OnInit {

  productTypeDetail: any;
  constructor(private activatedRoute: ActivatedRoute) {


  }

  ngOnInit(): void {
    const productTypeFromUrl = this.activatedRoute.snapshot.paramMap.get('id');
    const productTypeUtilObj = new Producttypesutil();
    this.productTypeDetail = productTypeUtilObj.getSpecificProductType(Number(productTypeFromUrl));
  }

}
