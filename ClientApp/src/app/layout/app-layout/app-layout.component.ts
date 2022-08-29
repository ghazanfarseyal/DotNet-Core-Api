import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
})
export class AppLayoutComponent implements OnInit {
  constructor(private _router: Router) {}

  ngOnInit() {}

  logout() {
    sessionStorage.removeItem('token');
    this._router.navigate(['login']);
  }
}
