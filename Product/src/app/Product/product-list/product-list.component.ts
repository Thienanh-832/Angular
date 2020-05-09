import {Component, OnInit} from '@angular/core';
import {IProduct} from "../../IProduct";
import {ProductService} from "../../Service/product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: IProduct[] = [];
  count: number

  constructor(private ProductService: ProductService,
              private route: Router) {
  }

  ngOnInit() {
    this.ProductService.getAll().subscribe((data: IProduct[]) => {
      this.products = data;
      console.log(data);
      this.count = this.products.length;
    });
  }

  delete(id: number) {
    if (confirm('Bạn có chắc chắn muốn xoá ?')) {
      this.ProductService.delete(id).subscribe((result: IProduct) => {
        this.ngOnInit()
      });
    }
  }
}
