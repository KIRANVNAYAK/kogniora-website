import { Course, Trainer, Testimonial } from '../types';
import { countries, cities } from './locations';
import { formatCurrency } from '../currency';

export const courses: Course[] = [
  {
    id: '1',
    title: 'Leadership Mastery: Inspire, Motivate & Lead Like a Pro!',
    category: 'Leadership & Management Skills',
    description: 'Master advanced leadership techniques and strategic thinking for executive success.',
    duration: '1 Day (9:00 AM – 5:00 PM)',
    fee: 699,
    thumbnail: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800',
    agenda: 'Strategic Leadership, Team Building, Decision Making, Executive Presence',
    countries,
    cities,
    dates: ['2025-11-24', '2025-12-23', '2026-01-26', '2026-02-24', '2026-03-25', '2026-04-24', '2026-05-26', '2026-06-26', '2026-07-24']
  },
  {
    id: '2',
    title: 'Public Speaking Mastery: Speak with Confidence & Impact!',
    category: 'Communication & Public Speaking',
    description: 'Overcome fear and deliver powerful presentations with confidence and impact.',
    duration: '1 Day (9:00 AM – 5:00 PM)',
    fee: 699,
    thumbnail: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800',
    countries,
    cities,
    dates: ['2025-11-12', '2025-12-11', '2026-01-14', '2026-02-12', '2026-03-13', '2026-04-15', '2026-05-14', '2026-06-10', '2026-07-16']
  },
  {
    id: '3',
    title: 'A Practical Sales Skills Bootcamp - Closing Deals Made Easy',
    category: 'Sales & Customer Service',
    description: 'Transform your sales approach and build lasting customer relationships.',
    duration: '1 Day (9:00 AM – 5:00 PM)',
    fee: 699,
    thumbnail: 'https://images.pexels.com/photos/3184436/pexels-photo-3184436.jpeg?auto=compress&cs=tinysrgb&w=800',
    countries,
    cities,
    dates: ['2025-11-12', '2025-12-11', '2026-01-14', '2026-02-12', '2026-03-13', '2026-04-15', '2026-05-14', '2026-06-10', '2026-07-16']
  },
  {
    id: '4',
    title: 'Time Management for High Achievers - The 10X Productivity Formula',
    category: 'Personal & Workplace Productivity',
    description: 'Maximize your efficiency and achieve work-life balance.',
    duration: '1 Day (9:00 AM – 5:00 PM)',
    fee: 699,
    thumbnail: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800',
    countries,
    cities,
    dates: ['2025-11-12', '2025-12-11', '2026-01-14', '2026-02-12', '2026-03-13', '2026-04-15', '2026-05-14', '2026-06-10', '2026-07-16']
  },
  {
    id: '5',
    title: 'Mastering Conflict Resolution – Turn Disputes into Win-Win Solutions!',
    category: 'Conflict Resolution & Workplace Culture',
    description: 'Learn effective mediation and conflict resolution techniques.',
    duration: '1 Day (9:00 AM – 5:00 PM)',
    fee: 699,
    thumbnail: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    countries,
    cities,
    dates: ['2025-11-12', '2025-12-11', '2026-01-14', '2026-02-12', '2026-03-13', '2026-04-15', '2026-05-14', '2026-06-10', '2026-07-16']
  },
  {
    id: '6',
    title: 'Financial Planning for Business',
    category: 'Business & Financial Skills',
    description: 'Master business finance, budgeting, and investment strategies.',
    duration: '1 Day (9:00 AM – 5:00 PM)',
    fee: 699,
    thumbnail: 'https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg?auto=compress&cs=tinysrgb&w=800',
    countries,
    cities,
    dates: ['2025-11-12', '2025-12-11', '2026-01-14', '2026-02-12', '2026-03-13', '2026-04-15', '2026-05-14', '2026-06-10', '2026-07-16']
  },
  {
    id: '7',
    title: 'Advanced Team Management',
    category: 'Leadership & Management Skills',
    description: 'Build high-performing teams and drive organizational success.',
    duration: '1 Day (9:00 AM – 5:00 PM)',
    fee: 699,
    thumbnail: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    countries,
    cities,
    dates: ['2025-11-12', '2025-12-11', '2026-01-14', '2026-02-12', '2026-03-13', '2026-04-15', '2026-05-14', '2026-06-10', '2026-07-16']
  },
  {
    id: '8',
    title: 'Effective Business Communication',
    category: 'Communication & Public Speaking',
    description: 'Enhance your professional communication and presentation skills.',
    duration: '1 Day (9:00 AM – 5:00 PM)',
    fee: 699,
    thumbnail: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
    countries,
    cities,
    dates: ['2025-11-12', '2025-12-11', '2026-01-14', '2026-02-12', '2026-03-13', '2026-04-15', '2026-05-14', '2026-06-10', '2026-07-16']
  },
  {
    id: '9',
    title: 'Effective Business Communication',
    category: 'Communication & Public Speaking',
    description: 'Enhance your professional communication and presentation skills.',
    duration: '1 Day (9:00 AM – 5:00 PM)',
    fee: 699,
    thumbnail: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
    countries,
    cities,
    dates: ['2025-11-12', '2025-12-11', '2026-01-14', '2026-02-12', '2026-03-13', '2026-04-15', '2026-05-14', '2026-06-10', '2026-07-16']
  },
{
    id: '10',
    title: 'Effective Business Communication',
    category: 'Communication & Public Speaking',
    description: 'Enhance your professional communication and presentation skills.',
    duration: '1 Day (9:00 AM – 5:00 PM)',
    fee: 699,
    thumbnail: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
    countries,
    cities,
    dates: ['2025-11-12', '2025-12-11', '2026-01-14', '2026-02-12', '2026-03-13', '2026-04-15', '2026-05-14', '2026-06-10', '2026-07-16']
  },
{
    id: '11',
    title: 'Effective Business Communication',
    category: 'Communication & Public Speaking',
    description: 'Enhance your professional communication and presentation skills.',
    duration: '1 Day (9:00 AM – 5:00 PM)',
    fee: 699,
    thumbnail: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
    countries,
    cities,
    dates: ['2025-11-12', '2025-12-11', '2026-01-14', '2026-02-12', '2026-03-13', '2026-04-15', '2026-05-14', '2026-06-10', '2026-07-16']
  },
{
    id: '12',
    title: 'Effective Business Communication',
    category: 'Communication & Public Speaking',
    description: 'Enhance your professional communication and presentation skills.',
    duration: '1 Day (9:00 AM – 5:00 PM)',
    fee: 699,
    thumbnail: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
    countries,
    cities,
    dates: ['2025-11-12', '2025-12-11', '2026-01-14', '2026-02-12', '2026-03-13', '2026-04-15', '2026-05-14', '2026-06-10', '2026-07-16']
  },
{
    id: '13',
    title: 'Effective Business Communication',
    category: 'Communication & Public Speaking',
    description: 'Enhance your professional communication and presentation skills.',
    duration: '1 Day (9:00 AM – 5:00 PM)',
    fee: 699,
    thumbnail: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
    countries,
    cities,
    dates: ['2025-11-12', '2025-12-11', '2026-01-14', '2026-02-12', '2026-03-13', '2026-04-15', '2026-05-14', '2026-06-10', '2026-07-16']
  },
{
    id: '14',
    title: 'Effective Business Communication',
    category: 'Communication & Public Speaking',
    description: 'Enhance your professional communication and presentation skills.',
    duration: '1 Day (9:00 AM – 5:00 PM)',
    fee: 699,
    thumbnail: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
    countries,
    cities,
    dates: ['2025-11-12', '2025-12-11', '2026-01-14', '2026-02-12', '2026-03-13', '2026-04-15', '2026-05-14', '2026-06-10', '2026-07-16']
  },
{
    id: '15',
    title: 'Effective Business Communication',
    category: 'Communication & Public Speaking',
    description: 'Enhance your professional communication and presentation skills.',
    duration: '1 Day (9:00 AM – 5:00 PM)',
    fee: 699,
    thumbnail: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
    countries,
    cities,
    dates: ['2025-11-12', '2025-12-11', '2026-01-14', '2026-02-12', '2026-03-13', '2026-04-15', '2026-05-14', '2026-06-10', '2026-07-16']
  },
{
    id: '16',
    title: 'Effective Business Communication',
    category: 'Communication & Public Speaking',
    description: 'Enhance your professional communication and presentation skills.',
    duration: '1 Day (9:00 AM – 5:00 PM)',
    fee: 699,
    thumbnail: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
    countries,
    cities,
    dates: ['2025-11-12', '2025-12-11', '2026-01-14', '2026-02-12', '2026-03-13', '2026-04-15', '2026-05-14', '2026-06-10', '2026-07-16']
  },
{
    id: '17',
    title: 'Effective Business Communication',
    category: 'Communication & Public Speaking',
    description: 'Enhance your professional communication and presentation skills.',
    duration: '1 Day (9:00 AM – 5:00 PM)',
    fee: 699,
    thumbnail: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
    countries,
    cities,
    dates: ['2025-11-12', '2025-12-11', '2026-01-14', '2026-02-12', '2026-03-13', '2026-04-15', '2026-05-14', '2026-06-10', '2026-07-16']
  }
];

export const trainers: Trainer[] = [
  {
    id: '1',
    name: 'Sarah Mitchell',
    country: 'USA',
    expertise: 'Leadership & Executive Coaching',
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Former Fortune 500 executive with 15+ years in leadership development and organizational transformation.'
  },
  {
    id: '2',
    name: 'James Anderson',
    country: 'Canada',
    expertise: 'Public Speaking & Communication',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Renowned speaker and communication expert with international conference experience across 25+ countries.'
  },
  {
    id: '3',
    name: 'Emma Thompson',
    country: 'Australia',
    expertise: 'Sales & Customer Experience',
    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Sales transformation specialist with proven track record in retail and B2B sectors across Asia-Pacific.'
  },
  {
    id: '4',
    name: 'Michael Weber',
    country: 'Germany',
    expertise: 'Business Strategy & Finance',
    image: 'https://images.pexels.com/photos/3184435/pexels-photo-3184435.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Former investment banker turned business consultant, specializing in financial planning and strategic growth.'
  },
  {
    id: '5',
    name: 'Sophie Laurent',
    country: 'France',
    expertise: 'Workplace Culture & HR',
    image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'HR executive and organizational psychologist with expertise in creating positive workplace cultures.'
  },
  {
    id: '6',
    name: 'David Wilson',
    country: 'United Kingdom',
    expertise: 'Productivity & Time Management',
    image: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Productivity coach and author of bestselling books on time management and personal effectiveness.'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Rachel Green',
    course: 'Executive Leadership Excellence',
    rating: 5,
    comment: 'Transformed my leadership approach completely. The practical strategies I learned have made a huge impact on my team\'s performance.',
    image: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=300',
    country: 'USA'
  },
  {
    id: '2',
    name: 'Mark Johnson',
    course: 'Public Speaking Mastery',
    rating: 5,
    comment: 'I went from being terrified of public speaking to confidently presenting to executives. Life-changing experience!',
    image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=300',
    country: 'Canada'
  },
  {
    id: '3',
    name: 'Lisa Chen',
    course: 'Sales Excellence & Customer Relations',
    rating: 5,
    comment: 'My sales increased by 40% within 3 months of applying these techniques. Excellent content and delivery!',
    image: 'https://images.pexels.com/photos/3184340/pexels-photo-3184340.jpeg?auto=compress&cs=tinysrgb&w=300',
    country: 'Australia'
  },
  {
    id: '4',
    name: 'Thomas Müller',
    course: 'Time Management & Productivity',
    rating: 4,
    comment: 'Finally achieved work-life balance! The productivity frameworks are practical and easy to implement.',
    image: 'https://images.pexels.com/photos/3184336/pexels-photo-3184336.jpeg?auto=compress&cs=tinysrgb&w=300',
    country: 'Germany'
  },
  {
    id: '5',
    name: 'Anna Kowalski',
    course: 'Conflict Resolution Strategies',
    rating: 5,
    comment: 'Incredible training! I now handle workplace conflicts with confidence and achieve win-win outcomes.',
    image: 'https://images.pexels.com/photos/3184341/pexels-photo-3184341.jpeg?auto=compress&cs=tinysrgb&w=300',
    country: 'United Kingdom'
  },
  {
    id: '6',
    name: 'Jean-Paul Dubois',
    course: 'Financial Planning for Business',
    rating: 5,
    comment: 'Comprehensive financial training that helped me make better business decisions. Highly recommend!',
    image: 'https://images.pexels.com/photos/3184337/pexels-photo-3184337.jpeg?auto=compress&cs=tinysrgb&w=300',
    country: 'France'
  }
];

export const newsItems = [
  {
    id: '1',
    title: 'The Future of EdTech: AI-Powered Learning Experiences',
    excerpt: 'Exploring how artificial intelligence is revolutionizing educational technology and personalized learning paths.',
    date: '2024-01-15',
    image: 'https://images.pexels.com/photos/3184419/pexels-photo-3184419.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: '2',
    title: 'Global Workplace Trends: Remote Leadership Skills',
    excerpt: 'How modern leaders are adapting to manage distributed teams effectively in the post-pandemic world.',
    date: '2024-01-10',
    image: 'https://images.pexels.com/photos/3184314/pexels-photo-3184314.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: '3',
    title: 'Building Resilient Organizations Through Employee Development',
    excerpt: 'The critical role of continuous learning in creating adaptable and resilient business cultures.',
    date: '2024-01-05',
    image: 'https://images.pexels.com/photos/3184421/pexels-photo-3184421.jpeg?auto=compress&cs=tinysrgb&w=400'
  }
];


export const stats = {
  learners: 25847,
  countries: 18,
  sessions: 12456
};