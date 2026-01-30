import { Course, Faculty, Event, Testimonial } from './types';

export const INSTITUTE_NAME = "Jaipur Heritage Institute";

export const COURSES: Course[] = [
  {
    id: '1',
    title: 'B.Sc. in Computer Science',
    category: 'Science',
    description: 'A comprehensive program focusing on modern computing, algorithms, and software development.',
    duration: '3 Years',
    image: 'https://picsum.photos/seed/comp/400/300'
  },
  {
    id: '2',
    title: 'B.Com Honors',
    category: 'Commerce',
    description: 'Expert-designed curriculum covering accounting, finance, and business management.',
    duration: '3 Years',
    image: 'https://picsum.photos/seed/comm/400/300'
  },
  {
    id: '3',
    title: 'BA in History & Culture',
    category: 'Arts',
    description: 'Deep dive into the rich history of Rajasthan and India with a focus on cultural preservation.',
    duration: '3 Years',
    image: 'https://picsum.photos/seed/arts/400/300'
  },
  {
    id: '4',
    title: 'Diploma in Digital Marketing',
    category: 'Diploma',
    description: 'Professional certification for modern marketing strategies and tools.',
    duration: '1 Year',
    image: 'https://picsum.photos/seed/diploma/400/300'
  }
];

export const FACULTY: Faculty[] = [
  {
    id: 'f1',
    name: 'Dr. Rajesh Verma',
    role: 'Head of Science Dept',
    bio: 'Ph.D. in Physics with 20 years of teaching experience.',
    image: 'https://picsum.photos/seed/f1/200/200'
  },
  {
    id: 'f2',
    name: 'Prof. Anita Desai',
    role: 'Senior Lecturer, Arts',
    bio: 'Renowned historian and author of "Colors of Jaipur".',
    image: 'https://picsum.photos/seed/f2/200/200'
  },
  {
    id: 'f3',
    name: 'Mr. Vikram Singh',
    role: 'Sports Coordinator',
    bio: 'Former national level athlete dedicated to student fitness.',
    image: 'https://picsum.photos/seed/f3/200/200'
  }
];

export const EVENTS: Event[] = [
  {
    id: 'e1',
    title: 'Annual Cultural Fest',
    date: 'Oct 15, 2023',
    description: 'Celebrating the traditions of Rajasthan with music and dance.',
    image: 'https://picsum.photos/seed/fest/400/250'
  },
  {
    id: 'e2',
    title: 'Science Exhibition',
    date: 'Nov 05, 2023',
    description: 'Showcasing innovative projects by our bright students.',
    image: 'https://picsum.photos/seed/science/400/250'
  },
  {
    id: 'e3',
    title: 'Jaipur Literature Workshop',
    date: 'Dec 10, 2023',
    description: 'Guest lectures from prominent writers.',
    image: 'https://picsum.photos/seed/lit/400/250'
  }
];
