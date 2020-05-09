import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../Service/product.service";
import {FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {IProduct} from "../../IProduct";

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {
  addProductForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    description: ['', [Validators.required, Validators.minLength(4)]],
    price: ['', [Validators.required, Validators.minLength(4)]]
  })

  constructor(private ProductService: ProductService,
              private fb: FormBuilder,
              private route: Router) {
  }

  ngOnInit() {
  }

  create() {
    const data = this.addProductForm.value;
    this.ProductService.add(data).subscribe((result: IProduct) => {
      return this.route.navigate(['products'])

    })
  }
  get name() {
    return this.addProductForm.get('name');
  }

  get description() {
    return this.addProductForm.get('description');
  }

  get price() {
    return this.addProductForm.get('price');
  }
}
