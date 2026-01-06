
export enum Category {
  STRUCTURAL = 'Structural Engineering',
  WOODWORKING = 'Woodworking',
  FITNESS = 'Fitness',
  CODING = 'Coding'
}

export interface Project {
  id: string;
  title: string;
  category: Category;
  description: string;
  image: string;
  tags: string[];
  link?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
