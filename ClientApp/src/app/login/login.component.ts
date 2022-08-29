import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  submitted = false;
  userForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private _userService: UserService,
    private _router: Router
  ) {
    this.userForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  ngOnInit(): void {}

  onSubmit(formData: any) {
    this.submitted = true;
    if (formData.valid) {
      this._userService.login(this.userForm.value).subscribe((d) => {
        this._router.navigate(['payment']);
      });
    }
  }
}
