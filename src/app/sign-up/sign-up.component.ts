import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone:true,
  imports: [RouterModule, ReactiveFormsModule, CommonModule, HttpClientModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
 registerForm: FormGroup;

 constructor(private fb:FormBuilder,private http: HttpClient, private router: Router){
  this.registerForm=this.fb.group({
    informatics_unit: ['', Validators.required],
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    mobile: ['', [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]],
    nic_designation: ['', Validators.required],
    common_designation:['', Validators.required],
    fuctional_designation: ['', Validators.required],
    ministry: ['', Validators.required],
    department: ['', Validators.required],
    role: ['', Validators.required],
    question: ['', Validators.required],
    answer:['', Validators.required],
    password: ['', Validators.required],
    image: ['', Validators.required]
  });
 }

 onSubmit(){
  if (this.registerForm.invalid) {
    this.registerForm.markAllAsTouched();
    return;
  }

  const formData = new FormData();
  const formValue = this.registerForm.value;

  formData.append('informatics_unit', formValue.informatics_unit);
  formData.append('name', formValue.name);
  formData.append('email', formValue.email);
  formData.append('mobile', formValue.mobile);
  formData.append('nic_designation', formValue.nic_designation);
  formData.append('common_designation', formValue.common_designation);
  formData.append('functional_designation', formValue.functional_designation);
  formData.append('ministry', formValue.ministry);
  formData.append('department', formValue.department);
  formData.append('role', formValue.role);
  formData.append('question', formValue.question);
  formData.append('answer', formValue.answer);
  

  if (formValue.attachment) {
    formData.append('attachment', formValue.image);
  }

  this.http.post('http://localhost/pmsapi/public/api/register', formData).subscribe({
    next: (res: any) => {
    
      if (res.code == 1) {
        alert("Registered Successfully.");
        this.registerForm.reset();
      }

        if (res.code == 2) {
        alert("Registered Successfully. After approval, you will be able to login.");
        this.registerForm.reset();
      }
    },
    error: (err) => {
    
      console.error(err);
      alert('Ticket submission failed.');
    }
  });
}

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.registerForm.patchValue({ attachment: file });
    }
  
 }
}
