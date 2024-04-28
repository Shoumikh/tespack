import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { products } from '../../data';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  productForm: FormGroup;
  currentStep: number = 1;

  constructor(private formBuilder: FormBuilder) {
    this.productForm = this.formBuilder.group({
      id: [products.length + 1],
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      brand: ['', Validators.required],
      images: [''],
      tags: [[]],
    });
  }

  nextStep() {
    this.currentStep++;
  }

  prevStep() {
    this.currentStep--;
  }

  submitForm() {
    console.log(this.productForm.value);
    products.push(this.productForm.value);
    // Implement form submission logic here
  }

  ngOnInit(): void {}
}
