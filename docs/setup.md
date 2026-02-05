1️⃣ What is Docusaurus?

Docusaurus is a static site generator built by Meta, designed specifically for documentation websites.

Why use Docusaurus?

Markdown-based (easy writing)

Auto sidebar & navigation

Built-in search

Versioned docs

SEO friendly

Free hosting options

---
2️⃣ Prerequisites

Before starting, make sure you have:

Node.js (v18+ recommended)

npm or yarn

Basic Markdown knowledge

Git (for hosting)

Check installation:

```
node -v
npm -v
```

---
3️⃣ Create a New Docusaurus Project

Run this command:


```
npx create-docusaurus@latest my-docs classic
```
Then:

```
npx create-docusaurus@latest my-docs classic
```

🎉 Your docs site will run at:

```
http://localhost:3000
```

---

4️⃣ Understanding the Folder Structure

```
my-docs/
├── docs/
│   ├── intro.md
│   ├── setup.md
│   └── hosting.md
├── sidebars.js
├── docusaurus.config.js
└── src/
```
Key folders:

* docs/ → Your documentation content

* sidebars.js → Sidebar navigation

* docusaurus.config.js → Site config

* src/ → UI customization

---

5️⃣ Writing Documentation Pages

Docs are written in Markdown (.md) or MDX (.mdx).

Example intro.md:

```
---
title: Introduction
sidebar_position: 1
---

Welcome to this documentation guide.
```

Markdown Features Supported:

* Code blocks

* Tables

* Alerts (Note, Tip, Warning)

* Images

* Links

---

6️⃣ Creating the Sidebar

Edit sidebars.js:

```
module.exports = {
  tutorialSidebar: [
    'intro',
    'setup',
    'hosting',
  ],
};
```
This automatically builds your sidebar.

---

7️⃣ Styling & Customization

You can customize:

* Logo

* Navbar

* Footer

* Theme colors

* Fonts

Edit docusaurus.config.js:

```
themeConfig: {
  navbar: {
    title: 'Docs with Docusaurus',
  },
}
```
---

8️⃣ Building the Docs for Production

To generate static files:

```
npm run build
```
This creates a build/ folder (production-ready).