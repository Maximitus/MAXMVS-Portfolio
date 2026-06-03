import React from 'react';
import { HardHat, Hammer, Dumbbell, Code } from 'lucide-react';
import { Category, Project } from './types.ts';

export const CATEGORY_ICONS: Record<Category, React.ReactElement> = {
  [Category.STRUCTURAL]: <HardHat className="w-6 h-6" />,
  [Category.WOODWORKING]: <Hammer className="w-6 h-6" />,
  [Category.FITNESS]: <Dumbbell className="w-6 h-6" />,
  [Category.CODING]: <Code className="w-6 h-6" />,
};

export const PROJECTS: Project[] = [
  {
    id: '2',
    title: 'Walnut Dining Table',
    category: Category.WOODWORKING,
    description: 'Custom live-edge walnut dining table with hand-cut dovetail joinery and epoxy inlay.',
    image: 'https://images.unsplash.com/photo-1549187774-b4e9b0445b41?auto=format&fit=crop&w=1200&q=80',
    tags: ['Fine Furniture', 'Joinery', 'Walnut'],
  },
  {
    id: '3',
    title: 'Workout App',
    category: [Category.FITNESS, Category.CODING],
    description: 'A workout app with an AI personal trainer that guides programming, tracks performance, and adapts sessions to your goals.',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80',
    tags: ['React', 'D3.js', 'Powerlifting'],
    link: 'https://maxmvs.com/workout/'
  },
  {
    id: '8',
    title: 'Macro Counter',
    category: [Category.FITNESS, Category.CODING],
    description:
      'A macro-tracking web app for protein, carbs, and fat—fitness-focused nutrition tooling built with deliberate UX and solid front-end craft.',
    image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1200&q=80',
    tags: ['Web App', 'Nutrition', 'Macros'],
    link: 'https://maxmvs.com/macrocounter/'
  },
  {
    id: '9',
    title: 'Form Analyzer',
    category: [Category.FITNESS, Category.CODING],
    description:
      'A form analyzer that helps assess movement quality by measuring stride angle and squat depth from uploaded footage.',
    image: 'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&w=1200&q=80',
    tags: ['Biomechanics', 'Computer Vision', 'Web App'],
    link: 'https://maxmvs.com/formanalyzer/'
  },
  {
    id: '4',
    title: 'Structural Calc Automation',
    category: Category.CODING,
    description: 'Automating beam deflection calculations using Python and Revit API integration.',
    image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=1200&q=80',
    tags: ['Python', 'Automation', 'Revit'],
    link: 'https://github.com/Maximitus'
  },
  {
    id: '5',
    title: 'Luxury Custom Home - ArchiCAD Design',
    category: Category.STRUCTURAL,
    description: 'Complete structural engineering for luxury custom home designed in ArchiCAD. Full structural analysis, design, and permitting for high-end residential project.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
    tags: ['ArchiCAD', 'Luxury Homes', 'Residential', 'Structural Design'],
    link: 'https://mass-engineering.com/',
    linkLabel: 'Visit Website'
  },
  {
    id: '7',
    title: 'Residential Retaining Wall',
    category: Category.STRUCTURAL,
    description: 'Full design and permitting for a complex hillside residential project.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
    tags: ['Civil', 'CAD', 'Permitting'],
    link: 'https://mass-engineering.com/'
  }
];
