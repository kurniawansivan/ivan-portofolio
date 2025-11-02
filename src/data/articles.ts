import type { Article } from '@/types/Article'

// Create an array of article objects
export const articles: Article[] = [
    {
        id: 1,
        title: 'My First Blog Post',
        publishDate: new Date('2025-10-15'),
        shortDescription: 'Why I decided to start writing and what you can expect from this blog.',
        content: '<p>This is the full content of my first blog post. It can contain <strong>HTML</strong> tags!</p><p>Lorem ipsum dolor sit amet...</p>',
        image: 'https://placehold.co/400x250/cccccc/969696.png?text=Article&font=lato'
    },
    {
        id: 2,
        title: 'Vue 3 vs. React in 2025',
        publishDate: new Date('2025-11-01'),
        shortDescription: 'A brief comparison of the two most popular frontend frameworks today.',
        content: '<p>Both frameworks are excellent, but Vue.js offers a more gentle learning curve and better out-of-the-box experience in my opinion.</p>',
        image: 'https://placehold.co/400x250/cccccc/969696.png?text=Article&font=lato'
    },
]