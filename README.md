# Acme CMS – Markdown-Based CMS with Next.js

This is a content management system built with **Next.js**, **Tailwind CSS**, and **Markdown**.  
Pages are rendered dynamically based on the folder structure under the `/content` directory.

---

## 🚀 Features

- ⚡ **Dynamic routing** – Pages generated based on folder structure
- 📝 **Markdown + Frontmatter** – Parsed using `gray-matter` and `marked`
- 🎨 **Responsive design with Tailwind CSS** – Enhanced content styling using `@tailwindcss/typography`
- ✅ **Testing-ready** – Uses **Jest** and **Supertest** to validate rendering and routing

---

## 🛠️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yuligomez/static-content-cms.git
cd static-content-app
```

### 2. Install Dependencies

```bash
npm install
# or
yarn
```

### 3. Run the Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

---

## 🌐 Live Demo

[View the deployed site](https://static-content-cms.vercel.app)

---

## 📦 Tech Stack

- [Next.js](https://nextjs.org/) – App router, file-based routing, and rendering
- [Tailwind CSS](https://tailwindcss.com/) – Utility-first styling framework
- [@tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin) – Rich content formatting
- [gray-matter](https://github.com/jonschlinkert/gray-matter) – Markdown frontmatter parsing
- [marked](https://github.com/markedjs/marked) – Markdown to HTML conversion
- [Heroicons](https://heroicons.com/) – Icon set used
- [TypeScript](https://www.typescriptlang.org/) – Static typing for maintainable code
- [Jest](https://jestjs.io/) – JavaScript testing framework
- [Supertest](https://github.com/ladjs/supertest) – HTTP assertions for testing routes

---

## 🧪 Testing

This project uses **Jest** and **Supertest** to validate route behavior and HTML rendering.

> ⚠️ Note: Since Next.js uses static and dynamic route generation, you must run a production build before executing tests.

### Run Tests

```bash
npm run build
npm run test
```

## ➕ Easy to Extend

If you want to add new pages or sections, simply add a new folder inside the `/content` directory.

Each folder must have a unique name and must contain an `index.md` file.  
For example:

```
/content
  └── team/index.md        → available at /team
  └── projects/index.md    → available at /projects
```

The page will be automatically available at `/{folder-name}` without any extra configuration.
