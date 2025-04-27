## ⚙️ Tech Used

- React
- TypeScript
- Vite
- Sass
- React Router
- Context API
- Local Storage

## 🛠️ Getting Started

Make sure you have the following installed:
```
Node.js >= 16
```
Install once the repository is cloned locally:
```
npm install
```
Run locally:
```
npm run dev
```
The app will be available at: [http://localhost:5173/](http://localhost:5173/)

## 📁 Folder Structure

```
src/
├── components/        # Components have their individual partial
│   ├── Header.tsx
│   ├── Notes.tsx      # All 5 notepads with functionality from context.tsx
│   ├── _header.scss
│   └── _notes.scss
├── App.scss           # All Sass partial imports (_global.scss, _setup.scss, _variables.scss)
├── App.tsx            # Homepage
├── _global.scss       # Applies across all components
├── _setup.scss        # For browser consistency
├── _variables.scss
├── context.tsx        # State management for storing note information in local storage, as well as functions to handle note changes and minimize the textarea
├── main.tsx
└── types.ts
```
