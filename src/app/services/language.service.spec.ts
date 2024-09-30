export class LanguageService {
  private quizQuestions: { [language: string]: { question: string; answer: string }[] } = {
    English: [
      { question: 'What is the capital of England?', answer: 'London' },
      { question: 'What is 2 + 2?', answer: '4' },
      { question: 'What is the past tense of go?', answer: 'went' },
      { question: 'What color do you get by mixing red and white?', answer: 'Pink' },
      { question: 'What is the opposite of hot?', answer: 'Cold' }
    ],
    Spanish: [
      { question: '¿Cuál es la capital de España?', answer: 'Madrid' },
      { question: '¿Qué es 2 + 2?', answer: '4' },
      { question: '¿Cuál es el pasado de ir?', answer: 'fue' },
      { question: '¿Qué color se obtiene al mezclar rojo y blanco?', answer: 'Rosa' },
      { question: '¿Cuál es lo opuesto a caliente?', answer: 'Frío' }
    ],
    French: [
      { question: 'Quelle est la capitale de la France?', answer: 'Paris' },
      { question: 'Qu\'est-ce que 2 + 2?', answer: '4' },
      { question: 'Quel est le passé de aller?', answer: 'est allé' },
      { question: 'Quelle couleur obtient-on en mélangeant rouge et blanc?', answer: 'Rose' },
      { question: 'Quel est l\'opposé de chaud?', answer: 'Froid' }
    ]
  };

  private score: number = 0;

  constructor() {}

  getQuizQuestions(language: string) {
    return this.quizQuestions[language] || [];
  }

  getQuestions(language: string) {
    return this.quizQuestions[language] || [];  
  }

  setScore(value: number) {
    this.score = value;
  }

  getScore() {
    return this.score;
  }

  resetScore() {
    this.score = 0;
  }
}
