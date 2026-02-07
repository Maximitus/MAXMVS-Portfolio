# CLAUDE.md - Coding Standards

## Project Overview
Portfolio project for MAXMVS, featuring structural engineering, woodworking, fitness, and coding disciplines. Built with React, Vite, Tailwind CSS, and Google Gemini AI.

## Coding Standards

### 1. Modules and Imports
- Use ES modules.
- Always include file extensions in relative imports (e.g., `import { Type } from './types.js'`).
- Sort imports: React first, third-party libraries second, local components/services/types last.

### 2. Functions and Components
- Prefer the `function` keyword over arrow functions for top-level functions and React components.
- Provide explicit return type annotations for all top-level functions (e.g., `function App(): React.ReactElement`).
- Use explicit `Props` types for React components.

### 3. Error Handling
- Use proper error handling patterns.
- Avoid `try/catch` blocks when possible; prefer error-returning patterns or handled promises.

### 4. Naming Conventions
- Maintain consistent naming conventions (PascalCase for components, camelCase for functions and variables).
- Use descriptive, clear names.

### 5. Logic and Clarity
- Avoid nested ternary operators; use `switch` statements or `if/else` chains.
- Prioritize clarity over brevity.
- Choose explicit code over overly compact solutions.
