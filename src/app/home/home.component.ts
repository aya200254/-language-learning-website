import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [CommonModule] 
})
export class HomeComponent {
  languages = ['English', 'Spanish', 'French'];

  constructor(private router: Router) {}

  selectLanguage(language: string) {
    this.router.navigate(['/quiz', language]);
  }
}
