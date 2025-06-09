import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-signin-component',
  standalone:true,
  imports: [RouterModule, CommonModule, ReactiveFormsModule],
  templateUrl: './signin-component.component.html',
  styleUrl: './signin-component.component.css'
})
export class SigninComponentComponent {

}
