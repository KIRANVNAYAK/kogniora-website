export interface Course {
  id: string;
  title: string;
  category: string;
  description: string;
  duration: string;
  fee: number;
  thumbnail: string;
  agenda?: string;
  countries: string[];
  cities: { [country: string]: string[] };
  dates: string[];
}

export interface Trainer {
  id: string;
  name: string;
  country: string;
  expertise: string;
  image: string;
  bio: string;
}

export interface Testimonial {
  id: string;
  name: string;
  course: string;
  rating: number;
  comment: string;
  image: string;
  country: string;
}

export interface CartItem {
  courseId: string;
  country: string;
  city: string;
  date: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'user' | 'admin';
}