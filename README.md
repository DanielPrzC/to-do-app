# 📝 To-Do App – Frontend Technical Challenge

This is a simple To-Do List application built as part of a frontend technical challenge. The app allows users to add, mark as complete, and delete tasks. It demonstrates the use of modern tools and best practices in the React + Next.js ecosystem.

## 🚀 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Language**: TypeScript
- **State Management**: [Zustand](https://zustand-demo.pmnd.rs/)
- **UI Library**: [Materia UI](https://mui.com/)

## 🎯 Features

- ✅ Add a new task with title and description
- ✅ Mark tasks as complete/in progress
- ✅ Delete tasks
- ✅ View tasks by status (all / in progress / completed)

## 📦 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/DanielPrzC/to-do-app.git
cd to-do-app
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Run the development server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000/](http://localhost:3000/) to see the app.

## 📁 Folder structure

The components were developed following the [Atomic Design Methodology](https://atomicdesign.bradfrost.com/chapter-2/).


```bash
src/app/
    ├── components/      # Reusable UI components
        ├── molecules/
        ├── organisms/
        ├── templates/
    ├── store/           # Zustand store for managing todos
    ├── types/           # Shared TypeScript interfaces
    ├── leayout          # Next.js page
    └── page             # Next.js layout
```
