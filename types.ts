export interface Course {
  id: string;
  title: string;
  category: 'Science' | 'Commerce' | 'Arts' | 'Diploma';
  description: string;
  duration: string;
  image: string;
}

export interface Faculty {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
}