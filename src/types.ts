export interface EducationalUnit {
  id: string;
  name: string;
  shortName: string;
  badge: string;
  category: string;
  tagline: string;
  description: string;
  highlights: string[];
  curriculum: string[];
  facilities: string[];
  schedule: string;
  ageGroup: string;
  hasAc: boolean;
  externalWebsiteUrl?: string;
  image: string;
  fallbackImage: string;
  accentColor: string;
}

export interface CommunityProgram {
  id: string;
  title: string;
  category: string;
  targetAudience: string;
  schedule: string;
  description: string;
  highlights: string[];
  topics: string[];
  image: string;
  fallbackImage: string;
  isYouth?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  unit: string;
  quote: string;
  avatar: string;
  rating: number;
}

export interface Facility {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  isAc?: boolean;
  image: string;
  fallbackImage: string;
  iconName: string;
}
