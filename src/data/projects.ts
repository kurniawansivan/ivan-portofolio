import type { Project } from '@/types/Project';

export const projects: Project[] = [
    {
        id: 1,
        title: 'Personal Portfolio',
        shortDescription: 'A personal portfolio website to showcase my projects and skills.',
        image: 'https://placehold.co/300x200/cccccc/969696.png?text=Image&font=lato',
        tags: ['Vue 3', 'TypeScript', 'Bulma'],
    },
    {
        id: 2,
        title: 'E-commerce Platform',
        shortDescription: 'An e-commerce platform with shopping cart and payment integration.',
        image: 'https://placehold.co/300x200/cccccc/969696.png?text=Image&font=lato',
        tags: ['React', 'Node.js', 'MongoDB'],
    },
    {
        id: 3,
        title: 'Blog Application',
        shortDescription: 'A full-featured blog application with user authentication and comments.',
        image: 'https://placehold.co/300x200/cccccc/969696.png?text=Image&font=lato',
        tags: ['Django', 'Python', 'SQLite'],
    }
]