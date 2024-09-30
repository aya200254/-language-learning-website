import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private questions: { [key: string]: any[] } = {
    English: [
      { question: 'What is the capital of France?', options: ['Paris', 'London', 'Berlin'], answer: 'Paris' },
      { question: 'Which planet is known as the Red Planet?', options: ['Earth', 'Mars', 'Jupiter'], answer: 'Mars' },
      { question: 'Who wrote "Hamlet"?', options: ['Shakespeare', 'Dickens', 'Hemingway'], answer: 'Shakespeare' },
      { question: 'What is the largest ocean on Earth?', options: ['Atlantic', 'Indian', 'Pacific'], answer: 'Pacific' },
      { question: 'In which year did the Titanic sink?', options: ['1912', '1905', '1920'], answer: '1912' }
    ],
    Spanish: [
      { question: '¿Cuál es la capital de España?', options: ['Madrid', 'Barcelona', 'Sevilla'], answer: 'Madrid' },
      { question: '¿Qué planeta es conocido como el Planeta Rojo?', options: ['Tierra', 'Marte', 'Júpiter'], answer: 'Marte' },
      { question: '¿Quién escribió "Don Quijote"?', options: ['Cervantes', 'Borges', 'García Márquez'], answer: 'Cervantes' },
      { question: '¿Cuál es el océano más grande del mundo?', options: ['Atlántico', 'Índico', 'Pacífico'], answer: 'Pacífico' },
      { question: '¿En qué año comenzó la Primera Guerra Mundial?', options: ['1914', '1900', '1920'], answer: '1914' }
    ],
    French: [
      { question: 'Quelle est la capitale de la France?', options: ['Paris', 'Lyon', 'Marseille'], answer: 'Paris' },
      { question: 'Quelle planète est connue sous le nom de Planète Rouge?', options: ['Terre', 'Mars', 'Jupiter'], answer: 'Mars' },
      { question: 'Qui a écrit "Les Misérables"?', options: ['Hugo', 'Voltaire', 'Camus'], answer: 'Hugo' },
      { question: 'Quel est le plus grand océan du monde?', options: ['Atlantique', 'Indien', 'Pacifique'], answer: 'Pacifique' },
      { question: 'En quelle année la Révolution française a-t-elle commencé?', options: ['1789', '1800', '1799'], answer: '1789' }
    ],
  };

  constructor() {}

  getQuestions(language: string) {
    return this.questions[language] || [];
  }
  private score: number = 0;


  setScore(value: number) {
    this.score = value;
  }

  getScore(): number { 
    return this.score;
  }

  resetScore() {
    this.score = 0;
  }
}

