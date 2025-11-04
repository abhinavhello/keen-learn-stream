export type UserRole = 'learner' | 'creator';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  creator: {
    id: string;
    name: string;
    avatar?: string;
  };
  rating: number;
  reviewCount: number;
  tags: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  coverImg: string;
  sections: Section[];
  price: number;
  totalDuration: number;
  enrolledCount: number;
}

export interface Section {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface Lesson {
  id: string;
  title: string;
  videoUrl: string;
  durationSec: number;
  transcript: TranscriptSegment[];
  segments: Segment[];
  resources: Resource[];
  quiz: QuizQuestion[];
}

export interface Segment {
  id: string;
  startSec: number;
  endSec: number;
  title: string;
}

export interface TranscriptSegment {
  startSec: number;
  endSec: number;
  text: string;
}

export interface AdSlot {
  id: string;
  atSec: number;
  disruptionScore: number;
}

export interface QuizQuestion {
  id: string;
  type: 'MCQ' | 'MAQ' | 'TrueFalse' | 'ShortAnswer';
  prompt: string;
  options?: string[];
  correct: string[];
  difficulty: 'easy' | 'medium' | 'hard';
  hint?: string;
  segmentId?: string;
}

export interface Resource {
  id: string;
  title: string;
  type: 'pdf' | 'link' | 'file';
  url: string;
}

export interface Note {
  id: string;
  lessonId: string;
  segmentId?: string;
  text: string;
  createdAt: string;
  timestamp?: number;
}

export interface TelemetryEvent {
  userId: string;
  sessionId: string;
  deviceId: string;
  courseId: string;
  lessonId: string;
  segmentId?: string;
  timestamp: string;
  eventType: 'play' | 'pause' | 'seek' | 'replay' | 'speed_change' | 'segment_enter' | 'segment_exit' | 'caption_toggle' | 'quiz_submit' | 'note_add' | 'ad_impression' | 'ad_complete';
  payload: Record<string, any>;
}

export interface CreatorMetrics {
  views: number;
  dwellDepth: number;
  quizUplift: number;
  adImpressions: number;
  earnings: number;
}
