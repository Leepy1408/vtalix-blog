import type { BlogPost } from '@/types';

export const blogPosts: BlogPost[] = [
  {
    slug: 'beyond-algorithms-skills-of-designers',
    title: 'Beyond Algorithms: Skills Of Designers That AI Can\'t Replicate',
    date: '2024-07-20',
    author: 'Elena Rivera',
    authorImage: 'https://placehold.co/100x100.png',
    category: 'Design',
    image: 'https://placehold.co/1200x600.png',
    description: 'While AI is a powerful tool, it can\'t replace the uniquely human skills that great designers possess. Explore the creative, empathetic, and strategic abilities that set human designers apart.',
    content: `Artificial Intelligence is reshaping the design landscape, automating tasks and offering powerful new capabilities. However, the essence of great design lies beyond algorithms. This article delves into the core skills that remain the domain of human designers. We'll discuss the importance of empathy in understanding user needs, the role of critical thinking in problem-solving, and the creative intuition that leads to breakthrough innovations. Learn why these human-centric skills are more valuable than ever in an AI-driven world and how designers can leverage AI as a partner, not a replacement.`,
  },
  {
    slug: 'mastering-react-hooks',
    title: 'Mastering React Hooks for Cleaner Code',
    date: '2024-07-15',
    author: 'Jane Doe',
    authorImage: 'https://placehold.co/100x100.png',
    category: 'React',
    image: 'https://placehold.co/1200x600.png',
    description: 'Dive deep into React Hooks and learn how to write more readable, maintainable, and efficient components.',
    content: `React Hooks have revolutionized how we write components. They let you use state and other React features without writing a class. In this post, we'll explore the most common Hooks and some advanced patterns.

useState is the most basic hook. It lets you add React state to function components.

useEffect allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers.

useContext is used to manage global state, like theme or user authentication. It allows you to avoid "prop drilling".

We will cover these and more, with practical examples to solidify your understanding. Get ready to level up your React skills!
`,
  },
  {
    slug: 'getting-started-with-nextjs-15',
    title: 'Getting Started with Next.js 15',
    date: '2024-07-10',
    author: 'John Smith',
    authorImage: 'https://placehold.co/100x100.png',
    category: 'Next.js',
    image: 'https://placehold.co/1200x600.png',
    description: 'A comprehensive guide to setting up your first Next.js 15 project, covering the new features and improvements.',
    content: `Next.js 15 is here, and it brings a host of new features to the table. From improved server components to compiler optimizations, this version is all about performance and developer experience.

In this tutorial, we will walk you through creating a new Next.js 15 application from scratch. We will cover:
- Project setup and configuration
- Understanding the new App Router
- Data fetching strategies
- Deploying your application to the cloud.

By the end, you'll have a solid foundation to build your next-generation web applications with Next.js.
`,
  },
  {
    slug: 'the-power-of-generative-ai',
    title: 'The Power of Generative AI in Modern Applications',
    date: '2024-07-05',
    author: 'Alice Johnson',
    authorImage: 'https://placehold.co/100x100.png',
    category: 'AI',
    image: 'https://placehold.co/1200x600.png',
    description: 'Explore how generative AI is transforming industries and how you can integrate it into your own projects.',
    content: `Generative AI is not just a buzzword; it's a technological shift. From creating realistic images to writing human-like text, the possibilities are endless.

This article explores the core concepts behind generative models like LLMs and diffusion models. We will also look at practical use cases:
- Content creation and automation
- Personalized user experiences
- Advanced data analysis and insights

We'll also provide a high-level overview of how to use popular AI APIs to bring intelligent features into your applications without needing to be an AI expert.
`,
  },
  {
    slug: 'how-to-protect-your-app',
    title: 'How To Protect Your App With Threat Model Based On JSONDiff',
    date: '2024-06-25',
    author: 'Samurai Jack',
    authorImage: 'https://placehold.co/100x100.png',
    category: 'Security',
    image: 'https://placehold.co/1200x600.png',
    description: 'A practical guide to implementing threat modeling in your development lifecycle using JSONDiff to identify and mitigate potential security vulnerabilities before they become a problem.',
    content: `In today's digital landscape, application security is paramount. Proactively identifying threats is far more effective than reacting to breaches. This article introduces the concept of threat modeling, a structured process to identify and prioritize potential threats to an application. We will focus on a practical approach using JSONDiff, a tool that can highlight changes in data structures and reveal potential vulnerabilities. Learn how to integrate this process into your CI/CD pipeline to build more secure and resilient applications from the ground up.`,
  },
  {
    slug: 'exploring-the-future-of-ai-in-design',
    title: 'Exploring The Future Of AI In Design',
    date: '2024-06-20',
    author: 'Ada Lovelace',
    authorImage: 'https://placehold.co/100x100.png',
    category: 'AI',
    image: 'https://placehold.co/1200x600.png',
    description: 'The integration of Artificial Intelligence in design is not a futuristic concept; it\'s happening now. Discover the exciting possibilities and challenges that lie ahead.',
    content: `AI is poised to become an indispensable partner in the creative process. This article explores the evolving role of AI in design, from generative art and automated UI creation to personalized user experiences. We'll examine how AI tools can augment a designer's workflow, freeing them up for higher-level strategic thinking. We will also discuss the ethical considerations and the new skills designers will need to thrive in an AI-augmented future. Join us as we look at the horizon of design and technology.`,
  },
  {
    slug: '5-essential-tips-for-a-balanced-diet',
    title: '5 Essential Tips For A Balanced Diet',
    date: '2024-06-15',
    author: 'Dr. Anya Sharma',
    authorImage: 'https://placehold.co/100x100.png',
    category: 'Health',
    image: 'https://placehold.co/1200x600.png',
    description: 'A balanced diet is crucial for overall health. This article breaks down five simple, actionable tips to help you build healthier eating habits for a better life.',
    content: `Navigating the world of nutrition can be confusing. This guide simplifies it for you with five essential tips for maintaining a balanced diet. We'll cover the importance of macronutrients, the benefits of incorporating a variety of fruits and vegetables, hydration, mindful eating, and how to read nutrition labels effectively. These practical tips are designed to be easily integrated into your daily routine, helping you make sustainable changes for long-term health and well-being.`,
  },
  {
    slug: 'cloud-native-architecture-patterns',
    title: 'Cloud-Native Architecture Patterns',
    date: '2024-06-28',
    author: 'Bob Brown',
    authorImage: 'https://placehold.co/100x100.png',
    category: 'Cloud',
    image: 'https://placehold.co/1200x600.png',
    description: 'Learn about essential architectural patterns for building scalable, resilient, and maintainable applications in the cloud.',
    content: `Moving to the cloud is more than just lifting and shifting your applications. To truly leverage the power of the cloud, you need to adopt cloud-native architectures.

This post covers key patterns, including:
- Microservices vs. Monoliths
- Serverless Computing
- Event-Driven Architectures
- Infrastructure as Code (IaC)

Understanding these patterns will help you design systems that are built for the scale, elasticity, and resilience that modern cloud platforms offer.
`,
  },
];