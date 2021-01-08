import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  form: FormGroup;
  loading = false;
  submitted = false;
  returnURL: string;

  constructor(private readonly fb: FormBuilder, private route: ActivatedRoute, private router: Router) { 
    this.form = this.fb.group ({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]], 
      dateOfBirth: [null, [Validators.required, Validators.max(2000)]]
    })
  }
 get f() { return this.form.controls; }

  ngOnInit(): void {
    
    
  }

  onSubmit() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        firstName: this.form.value.firstName,
        lastName: this.form.value.lastName,
        email: this.form.value.email,
        dateOfBirth: this.form.value.dateOfBirth
      }
    };
    this.router.navigate(['/info-pg'], navigationExtras);

    }
  
      }
    

    
  
