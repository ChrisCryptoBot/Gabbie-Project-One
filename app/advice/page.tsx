import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Advice | Faith & Focus MCAT',
  description: 'Expert advice on MCAT prep, medical school admissions, personal statements, and interview preparation.',
};

const categories = [
  { name: 'All Articles', slug: 'all', count: 24 },
  { name: 'MCAT Strategy', slug: 'mcat-strategy', count: 8 },
  { name: 'Medical School Admissions', slug: 'admissions', count: 6 },
  { name: 'Personal Statements', slug: 'personal-statements', count: 4 },
  { name: 'Interview Prep', slug: 'interview-prep', count: 3 },
  { name: 'Faith & Medicine', slug: 'faith-medicine', count: 3 },
];

const articles = [
  {
    title: 'How to Create an Effective MCAT Study Schedule',
    slug: 'effective-mcat-study-schedule',
    excerpt: 'Learn how to build a personalized study plan that maximizes retention and prevents burnout during your MCAT preparation.',
    category: 'MCAT Strategy',
    readTime: '8 min read',
    date: 'Nov 15, 2024',
    featured: true,
  },
  {
    title: 'Integrating Faith into Your MCAT Journey',
    slug: 'integrating-faith-mcat-journey',
    excerpt: 'Discover how daily devotions and prayer can strengthen your focus and reduce anxiety during intense study periods.',
    category: 'Faith & Medicine',
    readTime: '6 min read',
    date: 'Nov 12, 2024',
    featured: true,
  },
  {
    title: 'Writing a Compelling Personal Statement',
    slug: 'compelling-personal-statement',
    excerpt: 'A step-by-step guide to crafting a personal statement that stands out and authentically represents your journey to medicine.',
    category: 'Personal Statements',
    readTime: '12 min read',
    date: 'Nov 10, 2024',
    featured: true,
  },
  {
    title: 'Top 10 MCAT Study Resources for 2024',
    slug: 'top-mcat-resources-2024',
    excerpt: 'An honest review of the best MCAT prep books, practice exams, and online resources to help you score your best.',
    category: 'MCAT Strategy',
    readTime: '10 min read',
    date: 'Nov 8, 2024',
  },
  {
    title: 'How to Handle Medical School Interview Questions',
    slug: 'medical-school-interview-questions',
    excerpt: 'Common interview questions and strategies for answering them confidently and authentically.',
    category: 'Interview Prep',
    readTime: '9 min read',
    date: 'Nov 5, 2024',
  },
  {
    title: 'The Timeline for Medical School Applications',
    slug: 'medical-school-application-timeline',
    excerpt: 'A month-by-month breakdown of the application cycle so you never miss an important deadline.',
    category: 'Medical School Admissions',
    readTime: '7 min read',
    date: 'Nov 3, 2024',
  },
  {
    title: 'Balancing Clinical Experience and MCAT Prep',
    slug: 'balancing-clinical-experience-mcat',
    excerpt: 'Tips for maintaining meaningful clinical experiences while dedicating enough time to MCAT studying.',
    category: 'MCAT Strategy',
    readTime: '8 min read',
    date: 'Oct 30, 2024',
  },
  {
    title: 'Understanding the MCAT Scoring System',
    slug: 'understanding-mcat-scoring',
    excerpt: 'Demystify MCAT scores, percentiles, and what scores you need for your target medical schools.',
    category: 'MCAT Strategy',
    readTime: '6 min read',
    date: 'Oct 28, 2024',
  },
  {
    title: 'Secondary Essay Tips and Strategies',
    slug: 'secondary-essay-tips',
    excerpt: 'How to tackle secondary essays efficiently while making each one unique and compelling.',
    category: 'Personal Statements',
    readTime: '11 min read',
    date: 'Oct 25, 2024',
  },
];

const categoryColors: Record<string, string> = {
  'MCAT Strategy': 'bg-blue-100 text-blue-700',
  'Medical School Admissions': 'bg-purple-100 text-purple-700',
  'Personal Statements': 'bg-green-100 text-green-700',
  'Interview Prep': 'bg-amber-100 text-amber-700',
  'Faith & Medicine': 'bg-pink-100 text-pink-700',
};

export default function AdvicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white">
      {/* Hero */}
      <section className="pt-24 pb-12 px-6 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="heading-display mb-6">
            Expert <span className="text-gradient">Advice</span> for Your Journey
          </h1>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Free resources, strategies, and guidance for MCAT preparation and medical school admissions
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="sticky top-20 z-40 bg-white/80 backdrop-blur-md border-b border-neutral-200 py-4 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((cat) => (
              <button
                key={cat.slug}
                className={`
                  px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all
                  ${cat.slug === 'all'
                    ? 'bg-blue-600 text-white'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                  }
                `}
              >
                {cat.name}
                <span className="ml-1.5 opacity-70">({cat.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="heading-2 mb-8">Featured Articles</h2>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {articles.filter(a => a.featured).map((article) => (
            <Link key={article.slug} href={`/advice/${article.slug}`}>
              <Card variant="elevated" className="h-full hover:scale-105 transition-transform duration-300">
                {/* Article Image Placeholder */}
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 rounded-t-2xl flex items-center justify-center">
                  <svg className="w-16 h-16 text-blue-600 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>

                <CardHeader>
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[article.category]}`}>
                      {article.category}
                    </span>
                  </div>
                  <CardTitle className="hover:text-blue-600 transition-colors">{article.title}</CardTitle>
                  <CardDescription className="mt-2">{article.excerpt}</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex items-center justify-between text-sm text-neutral-500">
                    <span>{article.date}</span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {article.readTime}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* All Articles */}
        <h2 className="heading-2 mb-8">All Articles</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Link key={article.slug} href={`/advice/${article.slug}`}>
              <Card variant="default" className="h-full hover:-translate-y-1 transition-transform">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[article.category]}`}>
                      {article.category}
                    </span>
                  </div>
                  <CardTitle className="text-lg hover:text-blue-600 transition-colors">{article.title}</CardTitle>
                  <CardDescription className="mt-2 line-clamp-2">{article.excerpt}</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex items-center justify-between text-sm text-neutral-500">
                    <span>{article.date}</span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {article.readTime}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-600 text-white py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-2 mb-4">Get Weekly Advice in Your Inbox</h2>
          <p className="text-lg opacity-90 mb-8">
            Join 2,000+ pre-med students receiving expert tips, study strategies, and encouragement every week.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-neutral-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-neutral-100 transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-sm opacity-75 mt-4">No spam. Unsubscribe anytime.</p>
        </div>
      </section>
    </div>
  );
}
