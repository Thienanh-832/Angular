import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterModule, Routes} from "@angular/router";
import {ProductListComponent} from "../../Product/product-list/product-list.component";
import {ProductAddComponent} from "../../Product/product-add/product-add.component";
import {ProductEditComponent} from "../../Product/product-edit/product-edit.component";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

const routes: Routes = [
  {path: '' , component: ProductListComponent},
  {path: 'create' , component: ProductAddComponent},
  {path: ':id' , component: ProductEditComponent},
]

@NgModule({
  declarations: [ProductListComponent,ProductAddComponent,ProductEditComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class ProductModule { }
