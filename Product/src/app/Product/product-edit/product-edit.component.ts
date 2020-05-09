import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../Service/product.service";
import {FormBuilder, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {IProduct} from "../../IProduct";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  updateProductForm = this.fb.group({
    name: [''],
    description: [''],
    price: ['']
  })

  id = +this.activatedRoute.snapshot.paramMap.get('id');

  constructor(private ProductService: ProductService,
              private fb: FormBuilder,
              private activatedRoute: ActivatedRoute,
              private route: Router) {
  }

  ngOnInit() {
    this.ProductService.findById(this.id).subscribe((result: IProduct) => {
      this.updateProductForm = this.fb.group({
        name: [result.name, [Validators.required, Validators.minLength(4)]],
        description: [result.description, [Validators.required, Validators.minLength(4)]],
        price: [result.price, [Validators.required, Validators.minLength(4)]],
      });
    });
  }

  update() {
    const data = this.updateProductForm.value;
    const id = this.id;
    this.ProductService.edit(data, id).subscribe((result: IProduct) => {
      return this.route.navigate(['/products'])
    });
  }
}
