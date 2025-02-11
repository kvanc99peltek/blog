export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
}

export const posts: BlogPost[] = [
  {
    id: '1',
    title: 'Getting Started with Next.js',
    excerpt: 'Learn the basics of Next.js and why it\'s a great framework for building modern web applications.',
    content: 'Next.js is a powerful React framework that makes building full-stack web applications simple and efficient. It provides features like server-side rendering, static site generation, and API routes out of the box...',
    date: '2024-01-24',
  },
  {
    id: '2',
    title: 'The Power of TypeScript',
    excerpt: 'Discover how TypeScript can improve your development experience and catch bugs early.',
    content: 'TypeScript adds static typing to JavaScript, making it easier to write and maintain large applications. It catches errors before runtime and provides better tooling support...',
    date: '2024-01-23',
  },
  {
    id: '3',
    title: 'Styling with Tailwind CSS',
    excerpt: 'Explore how Tailwind CSS can streamline your styling workflow and make your designs consistent.',
    content: 'Tailwind CSS is a utility-first CSS framework that allows you to build modern websites without ever leaving your HTML. It provides low-level utility classes that let you build completely custom designs...',
    date: '2024-01-22',
  },
]; 