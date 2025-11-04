import { Course } from '@/types';

export const mockCourses: Course[] = [
  {
    id: '1',
    title: 'Complete Web Development Bootcamp',
    description: 'Learn web development from scratch with HTML, CSS, JavaScript, React, and Node.js. Build real-world projects and deploy them to production.',
    creator: {
      id: 'creator1',
      name: 'Sarah Johnson',
    },
    rating: 4.8,
    reviewCount: 2340,
    tags: ['Web Development', 'React', 'JavaScript'],
    difficulty: 'beginner',
    coverImg: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop',
    price: 0,
    totalDuration: 36000,
    enrolledCount: 15420,
    sections: [
      {
        id: 's1',
        title: 'Introduction to Web Development',
        lessons: [
          {
            id: 'l1',
            title: 'Getting Started with HTML',
            videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            durationSec: 600,
            transcript: [
              { startSec: 0, endSec: 30, text: 'Welcome to the course!' },
              { startSec: 30, endSec: 120, text: 'Let\'s learn about HTML basics...' },
            ],
            segments: [
              { id: 'seg1', startSec: 0, endSec: 180, title: 'Introduction' },
              { id: 'seg2', startSec: 180, endSec: 420, title: 'HTML Elements' },
              { id: 'seg3', startSec: 420, endSec: 600, title: 'Practice Exercise' },
            ],
            resources: [
              { id: 'r1', title: 'HTML Cheat Sheet', type: 'pdf', url: '#' },
            ],
            quiz: [
              {
                id: 'q1',
                type: 'MCQ',
                prompt: 'What does HTML stand for?',
                options: [
                  'Hyper Text Markup Language',
                  'High Tech Modern Language',
                  'Home Tool Markup Language',
                  'Hyperlinks and Text Markup Language',
                ],
                correct: ['Hyper Text Markup Language'],
                difficulty: 'easy',
                segmentId: 'seg1',
              },
              {
                id: 'q2',
                type: 'MAQ',
                prompt: 'Which of these are valid HTML5 semantic elements?',
                options: ['<header>', '<section>', '<div>', '<article>'],
                correct: ['<header>', '<section>', '<article>'],
                difficulty: 'medium',
                segmentId: 'seg2',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: '2',
    title: 'Data Science with Python',
    description: 'Master data analysis, visualization, and machine learning with Python. Work with real datasets and build predictive models.',
    creator: {
      id: 'creator2',
      name: 'Michael Chen',
    },
    rating: 4.9,
    reviewCount: 1856,
    tags: ['Python', 'Data Science', 'Machine Learning'],
    difficulty: 'intermediate',
    coverImg: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
    price: 0,
    totalDuration: 43200,
    enrolledCount: 9834,
    sections: [],
  },
  {
    id: '3',
    title: 'Digital Marketing Mastery',
    description: 'Learn SEO, social media marketing, content marketing, and analytics. Grow your business or career with proven strategies.',
    creator: {
      id: 'creator3',
      name: 'Emily Rodriguez',
    },
    rating: 4.7,
    reviewCount: 3201,
    tags: ['Marketing', 'SEO', 'Social Media'],
    difficulty: 'beginner',
    coverImg: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop',
    price: 0,
    totalDuration: 28800,
    enrolledCount: 12678,
    sections: [],
  },
];
