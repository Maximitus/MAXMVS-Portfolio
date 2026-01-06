
import React from 'react';
import { Category, Project } from './types';
import { HardHat, Hammer, Dumbbell, Code } from 'lucide-react';

export const CATEGORY_ICONS = {
  [Category.STRUCTURAL]: <HardHat className="w-6 h-6" />,
  [Category.WOODWORKING]: <Hammer className="w-6 h-6" />,
  [Category.FITNESS]: <Dumbbell className="w-6 h-6" />,
  [Category.CODING]: <Code className="w-6 h-6" />,
};

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'High-Rise Steel Optimization',
    category: Category.STRUCTURAL,
    description: 'Developed a custom analysis tool for optimizing seismic loads in urban high-rise commercial structures.',
    image: 'https://picsum.photos/seed/structural/800/600',
    tags: ['ETABS', 'Python', 'Seismic Design'],
    link: 'https://mass-engineering.com/'
  },
  {
    id: '2',
    title: 'Walnut Dining Table',
    category: Category.WOODWORKING,
    description: 'Custom live-edge walnut dining table with hand-cut dovetail joinery and epoxy inlay.',
    image: 'https://picsum.photos/seed/wood/800/600',
    tags: ['Fine Furniture', 'Joinery', 'Walnut'],
  },
  {
    id: '3',
    title: 'Personal Training Dashboard',
    category: Category.FITNESS,
    description: 'A web-based tracker for powerlifting progress, calculating 1RM and volume periodization.',
    image: 'https://picsum.photos/seed/fitness/800/600',
    tags: ['React', 'D3.js', 'Powerlifting'],
    link: 'https://github.com/Maximitus'
  },
  {
    id: '4',
    title: 'Structural Calc Automation',
    category: Category.CODING,
    description: 'Automating beam deflection calculations using Python and Revit API integration.',
    image: 'https://picsum.photos/seed/code/800/600',
    tags: ['Python', 'Automation', 'Revit'],
    link: 'https://github.com/Maximitus'
  },
  {
    id: '5',
    title: 'Residential Retaining Wall',
    category: Category.STRUCTURAL,
    description: 'Full design and permitting for a complex hillside residential project.',
    image: 'https://picsum.photos/seed/wall/800/600',
    tags: ['Civil', 'CAD', 'Permitting'],
    link: 'https://mass-engineering.com/'
  },
  {
    id: '6',
    title: 'Modern Coffee Station',
    category: Category.WOODWORKING,
    description: 'Built-in ash and oak coffee station with integrated lighting and minimalist drawer slides.',
    image: 'https://picsum.photos/seed/coffee/800/600',
    tags: ['Ash', 'Modern', 'Cabinetry'],
  }
];
