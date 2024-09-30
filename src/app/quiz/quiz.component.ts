import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LanguageService } from '../services/language.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],  
})
export class QuizComponent implements OnInit {
  selectedLanguage!: string; 
  questions!: any[]; 
  quizForm!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private languageService: LanguageService
  ) {}
  initializeForm() {
    this.questions.forEach((question, index) => {
      this.quizForm.addControl(`q${index}`, this.fb.control('')); 
    });
  }
  ngOnInit(): void {
    this.selectedLanguage = this.route.snapshot.paramMap.get('language') as string;
    this.questions = this.languageService.getQuestions(this.selectedLanguage);

    
    const controls = this.questions.reduce((acc, q, i) => {
      acc[i] = this.fb.control('', Validators.required);
      return acc;
    }, {} as any);

    this.quizForm = this.fb.group(controls);
  }

  submitAnswers() {
  
    this.router.navigate(['/results'], { state: { score: this.calculateScore() } });
  }

  calculateScore(): number {
    let score = 0;
    this.questions.forEach((q, i) => {
      if (q.answer === this.quizForm.value[i]) {
        score++;
      }
    });
    return score;
  }
}
