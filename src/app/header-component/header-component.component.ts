import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-component',
  standalone: true,
  imports: [RouterModule, RouterLink, CommonModule],
  templateUrl: './header-component.component.html',
  styleUrl: './header-component.component.css'
})
export class HeaderComponentComponent {
 constructor(public router: Router) {}

  isHomeRoute(): boolean {
    return this.router.url === '/';
  }
}
