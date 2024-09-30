import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
})
export class ResultsComponent implements OnInit {
  score: number = 0;

  constructor(private languageService: LanguageService, private router: Router) {}

  ngOnInit(): void {
    this.score = this.languageService.getScore();
  }

  resetQuiz() {
    this.languageService.resetScore();
    this.router.navigate(['/home']);
  }
}
