---
title: 'My First Astro Blog Dev Story'
description: 'Sharing why I built my own blog, why I chose Astro, and the development journey with Antigravity.'
pubDate: 2026-02-02
tags: ['astro', 'blog', 'development']
heroImage: ''
---

## Astro Blog Dev Story - Starting with Astro (Build a Blog with LLM Vibe Coding)

### [ Subtitle: Building a Clean Velog-style Blog with Astro ]

#### 1. Introduction
Hello, I am **zzado**.
Today's topic is **Building a Blog with Astro**.

There are already many great platforms like `Velog` or `Tistory`.
However, every developer dreams of having **"their own customizable blog"** at least once.
Managing posts via Github allows for **version control**, easy migration, and the freedom to implement any feature I want.

Recently, **Vibe Coding using LLMs** has become popular, so I decided to build a blog myself to study it.
In this post, I will record why I chose **Astro** despite the existence of great frameworks like **Next.js** or **Gatsby**, and the process of completing this blog.

#### 2. Tech Stack Selection (Why Astro?)
I considered several frameworks.
If you build a React-based blog, you usually have these options:

1.  **Next.js**: Powerful and popular. But it felt a bit heavy for a static blog.
2.  **Gatsby**: Huge plugin ecosystem. But it has a learning curve (GraphQL) and build speed issues.
3.  **Astro**: **This was the answer.**

**Reasons for choosing Astro:**
-   **Content-First**: Optimized for content-centric sites.
-   **Zero JS by Default**: Excludes unnecessary JavaScript for fast speed.
-   **Islands Architecture**: Can mix partial dynamic components.

#### 3. Development Process & Key Features
Environment: Mac OS, Package Manager: `npm`.

**3.1) Initial Setup**
One line command:
```bash
npm create astro@latest
```
I added **Tailwind CSS** for styling.

**3.2) Theme System (Dark Mode)**
Implemented 4 themes:
-   **Pure**: Clean white
-   **Paper**: Warm off-white (Velog style)
-   **Space**: Deep navy
-   **Dark**: Standard dark mode

**3.3) View Mode Toggle**
Toggle between **List** and **Card** views, saved in user preferences.

#### 4. Thoughts & Future Plans
**Astro** feels definitely **"light"**.
Fast loading with no unnecessary hydration.
Writing posts in `.md` or `.mdx` is comfortable.

**Future Plans:**
1.  **Comments**: Giscus
2.  **Series**: Grouping posts
3.  **GA**: Analytics

If you are considering "your own blog", I highly recommend **Astro**.
:-)
