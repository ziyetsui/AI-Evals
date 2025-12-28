
export enum Difficulty {
  Beginner = 'Beginner',
  Intermediate = 'Intermediate',
  Advanced = 'Advanced'
}

export enum Category {
  Foundations = 'Foundations',
  Frameworks = 'Frameworks',
  RAG = 'RAG & Specialized',
  BestPractices = 'Best Practices',
  Tools = 'Tools & Github'
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  url: string;
  category: Category;
  difficulty: Difficulty;
  author: string;
  tags: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
