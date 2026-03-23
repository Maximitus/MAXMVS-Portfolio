
export enum Category {
  STRUCTURAL = 'Structural Engineering',
  WOODWORKING = 'Woodworking',
  FITNESS = 'Fitness',
  CODING = 'Coding'
}

export interface Project {
  id: string;
  title: string;
  /** Single category, or multiple when a project spans domains (e.g. fitness + coding). */
  category: Category | Category[];
  description: string;
  image: string;
  tags: string[];
  link?: string;
  linkLabel?: string;
}
