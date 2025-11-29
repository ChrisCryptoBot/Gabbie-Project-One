import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Academy | Faith & Focus MCAT',
  description: 'Expert video courses on personal statements, secondary essays, interview preparation, and medical school admissions strategy.',
};

const courses = [
  {
    id: 1,
    title: 'Personal Statement Mastery',
    slug: 'personal-statement-mastery',
    description: 'Learn how to craft a compelling personal statement that stands out to admissions committees',
    price: 79,
    originalPrice: 99,
    lessons: 12,
    duration: '3.5 hours',
    level: 'Beginner',
    category: 'Writing',
    featured: true,
    preview: true,
  },
  {
    id: 2,
    title: 'Secondary Essay Strategies',
    slug: 'secondary-essay-strategies',
    description: 'Master the art of writing authentic and impactful secondary essays efficiently',
    price: 69,
    originalPrice: 89,
    lessons: 10,
    duration: '2.8 hours',
    level: 'Intermediate',
    category: 'Writing',
    featured: true,
    preview: true,
  },
  {
    id: 3,
    title: 'Interview Preparation Bootcamp',
    slug: 'interview-preparation',
    description: 'Comprehensive training for traditional, MMI, and panel interviews',
    price: 99,
    originalPrice: 129,
    lessons: 15,
    duration: '4.2 hours',
    level: 'All Levels',
    category: 'Interview',
    featured: true,
    preview: true,
  },
  {
    id: 4,
    title: 'Application Timeline Masterclass',
    slug: 'application-timeline',
    description: 'Month-by-month guide to staying organized and meeting all deadlines',
    price: 49,
    lessons: 8,
    duration: '2 hours',
    level: 'Beginner',
    category: 'Strategy',
    preview: false,
  },
  {
    id: 5,
    title: 'School Selection Strategy',
    slug: 'school-selection',
    description: 'Build a balanced school list based on your profile and preferences',
    price: 59,
    lessons: 9,
    duration: '2.5 hours',
    level: 'Intermediate',
    category: 'Strategy',
    preview: false,
  },
  {
    id: 6,
    title: 'Letters of Recommendation Guide',
    slug: 'letters-of-recommendation',
    description: 'How to request, prepare for, and optimize your letter writers',
    price: 39,
    lessons: 6,
    duration: '1.5 hours',
    level: 'Beginner',
    category: 'Strategy',
    preview: false,
  },
];

const subscriptionPlan = {
  name: 'All-Access Pass',
  price: 199,
  originalPrice: 450,
  features: [
    'Access to all current and future courses',
    'Downloadable worksheets and templates',
    'Private community access',
    'Monthly Q&A sessions',
    'Lifetime updates',
  ],
};

const levelColors: Record<string, string> = {
  'Beginner': 'bg-green-100 text-green-700',
  'Intermediate': 'bg-blue-100 text-blue-700',
  'All Levels': 'bg-purple-100 text-purple-700',
};

export default function AcademyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-neutral-900 via-blue-900 to-purple-900 text-white pt-24 pb-32 px-6 overflow-hidden">
        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}
        />

        <div className="relative max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
              Expert-Led Video Courses
            </div>
            <h1 className="heading-display mb-6">
              Master Your Medical School Application
            </h1>
            <p className="text-xl opacity-90 mb-8">
              Step-by-step video courses to help you craft outstanding applications, ace interviews, and stand out to admissions committees.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="secondary" size="lg">
                Browse All Courses
              </Button>
              <Button variant="ghost" size="lg" className="text-white border-white hover:bg-white/10">
                Get All-Access Pass
              </Button>
            </div>
          </div>
        </div>

        {/* Featured Course Preview Card */}
        <div className="relative max-w-7xl mx-auto mt-16">
          <Card variant="glass" className="backdrop-blur-xl border-white/20">
            <div className="grid md:grid-cols-2 gap-8 p-8">
              <div>
                <div className="aspect-video bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                    </svg>
                  </div>
                </div>
                <p className="text-white/80 text-sm">Watch free preview</p>
              </div>
              <div className="flex flex-col justify-center text-white">
                <span className="text-sm opacity-80 mb-2">FEATURED COURSE</span>
                <h3 className="heading-3 mb-3">Personal Statement Mastery</h3>
                <p className="opacity-90 mb-4">Learn the exact framework used by successful applicants to write compelling personal statements</p>
                <div className="flex items-center gap-4 text-sm opacity-80">
                  <span>12 lessons</span>
                  <span>•</span>
                  <span>3.5 hours</span>
                  <span>•</span>
                  <span>Free preview available</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* All-Access Pass */}
      <section className="py-16 px-6 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto">
          <Card variant="elevated" className="overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 relative">
              <div className="absolute top-4 right-4">
                <div className="bg-amber-400 text-amber-900 px-3 py-1 rounded-full text-xs font-bold">
                  BEST VALUE
                </div>
              </div>
              <h2 className="heading-2 mb-2">{subscriptionPlan.name}</h2>
              <p className="opacity-90 mb-6">Get unlimited access to all courses for one low price</p>
              <div className="flex items-baseline gap-3">
                <span className="text-5xl font-bold">${subscriptionPlan.price}</span>
                <span className="text-2xl line-through opacity-60">${subscriptionPlan.originalPrice}</span>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                  Save ${subscriptionPlan.originalPrice - subscriptionPlan.price}
                </span>
              </div>
            </div>

            <CardContent className="pt-8">
              <h3 className="font-semibold text-lg mb-4">What's Included:</h3>
              <ul className="space-y-3 mb-8">
                {subscriptionPlan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-neutral-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button variant="primary" size="lg" className="w-full">
                Get All-Access Pass
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="heading-2 mb-12 text-center">Featured Courses</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {courses.filter(c => c.featured).map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* All Courses */}
      <section className="py-16 px-6 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="heading-2 mb-12">All Courses</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} compact />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-600 text-white py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-2 mb-4">Ready to Stand Out?</h2>
          <p className="text-lg opacity-90 mb-8">
            Join hundreds of successful applicants who used our courses to get into their dream medical schools
          </p>
          <Button variant="secondary" size="lg">
            Start Learning Today
          </Button>
        </div>
      </section>
    </div>
  );
}

function CourseCard({ course, compact = false }: { course: typeof courses[0]; compact?: boolean }) {
  return (
    <Link href={`/academy/${course.slug}`}>
      <Card variant="elevated" className="h-full hover:scale-105 transition-transform duration-300">
        {/* Thumbnail */}
        <div className="aspect-video bg-gradient-to-br from-blue-600 to-purple-600 rounded-t-2xl flex items-center justify-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
          <div className="relative z-10 w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
            </svg>
          </div>
          {course.preview && (
            <div className="absolute top-3 right-3 px-2 py-1 bg-white/20 backdrop-blur-sm rounded text-xs font-semibold">
              Free Preview
            </div>
          )}
        </div>

        <CardHeader>
          <div className="flex items-center gap-2 mb-3">
            <span className={`px-2 py-1 rounded text-xs font-semibold ${levelColors[course.level]}`}>
              {course.level}
            </span>
            <span className="text-xs text-neutral-500">{course.category}</span>
          </div>
          <CardTitle className="hover:text-blue-600 transition-colors">{course.title}</CardTitle>
          {!compact && <CardDescription>{course.description}</CardDescription>}
        </CardHeader>

        <CardFooter className="flex-col items-start gap-4">
          <div className="flex items-center gap-4 text-sm text-neutral-500 w-full">
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
              </svg>
              {course.lessons} lessons
            </span>
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {course.duration}
            </span>
          </div>

          <div className="flex items-center justify-between w-full">
            <div>
              <span className="text-2xl font-bold text-blue-600">${course.price}</span>
              {course.originalPrice && (
                <span className="text-sm text-neutral-400 line-through ml-2">${course.originalPrice}</span>
              )}
            </div>
            <Button variant="secondary" size="sm">
              Learn More
            </Button>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
