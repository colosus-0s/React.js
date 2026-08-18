# Tailwind CSS Setup with Vite + React

A small practice project where I set up **Tailwind CSS** in a React application created using **Vite**.

This project is mainly for understanding how Tailwind CSS is installed and configured in a Vite + React project.

## 🛠️ Tech Used

* React
* Vite
* Tailwind CSS
* JavaScript

## ⚙️ Setup

### 1. Create a Vite React project

```bash
npm create vite@latest
```

Choose:

```text
React
JavaScript
```

Then install the dependencies:

```bash
npm install
```

### 2. Install Tailwind CSS

Install Tailwind CSS and its Vite integration:

```bash
npm install tailwindcss @tailwindcss/vite
```

### 3. Configure Tailwind in `vite.config.js`

Add the Tailwind Vite plugin:

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})
```

### 4. Import Tailwind CSS

In `src/index.css`:

```css
@import "tailwindcss";
```

Now Tailwind utility classes can be used inside the React components.

For example:

```jsx
<h1 className="text-4xl font-bold">
  Hello Tailwind
</h1>
```

## 📁 Important Files

```text
src/
├── App.jsx
├── index.css
└── main.jsx

vite.config.js
package.json
```

### `vite.config.js`

Used to configure Vite and add the Tailwind CSS Vite plugin.

### `src/index.css`

Imports Tailwind CSS so that its utility classes are available throughout the application.

### `App.jsx`

Used to practice and test Tailwind CSS classes inside React components.

## 🎯 What I Learned

* How to create a React project using Vite
* How to install Tailwind CSS
* How Tailwind integrates with Vite
* How to configure Tailwind through `vite.config.js`
* How to import Tailwind into the application's CSS
* How to use Tailwind utility classes inside React

## 🚀 Next Step

Continue learning Tailwind CSS and use it while building React projects.
