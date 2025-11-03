import type { Project } from '@/types/Project';
import projectImg1 from '@/assets/images/deinzer-1.png';
import projectImg2 from '@/assets/images/deinzer-2.jpeg';
import projectImg3 from '@/assets/images/deinzer-3.png';

export const projects: Project[] = [
    {
        id: 1,
        title: 'Deinzer Gallery Managament System',
        shortDescription: 'I built the complete backend for a high-stakes internal management system, automating everything from complex artist schedules and user roles to financial reporting and high-resolution image uploads.',
        image: projectImg1,
        tags: ['Python', 'FastAPI', 'PostgreSQL', 'Docker'],
    },
    {
        id: 2,
        title: 'Deinzer Smart Seller',
        shortDescription: 'I engineered the backend and recommendation logic for an innovative smart-shelf, powering real-time product suggestions. This project was successfully pitched to industry leaders Ferrero Group, Rossmann and Eurocis 2024.',
        image: projectImg2,
        tags: ['Python', 'FastAPI', 'Azure Blob Storage', 'Recommendation Systems'],
    },
    {
        id: 3,
        title: 'JB iphone Warehouse',
        shortDescription: 'I developed a custom, all-in-one mobile app to solve a critical business problem. This full-stack solution gives an iPhone store real-time, on-the-go control over their entire warehouse, from stocking to instant profit calculation.',
        image: projectImg3,
        tags: ['Flutter', 'Python', 'SQLite', 'Full-Stack'],
    }
]