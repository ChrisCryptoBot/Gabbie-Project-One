import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

// This would come from your CMS or database
const article = {
  title: 'How to Create an Effective MCAT Study Schedule',
  category: 'MCAT Strategy',
  date: 'November 15, 2024',
  readTime: '8 min read',
  author: {
    name: 'Dr. Sarah Johnson',
    bio: 'Medical student and former MCAT tutor who scored 520+ on the MCAT',
  },
  content: `
    <p>Creating an effective MCAT study schedule is one of the most important steps in your preparation journey. A well-structured plan not only maximizes your study efficiency but also helps prevent burnout and maintains your motivation throughout the process.</p>

    <h2>Understanding Your Timeline</h2>
    <p>Before diving into creating your schedule, you need to determine how much time you have until your test date. Most students benefit from 3-6 months of dedicated preparation, studying 20-30 hours per week. However, your ideal timeline depends on:</p>
    <ul>
      <li>Your current knowledge base in the sciences</li>
      <li>Your target score</li>
      <li>Other commitments (school, work, research, clinical experience)</li>
      <li>Your learning style and pace</li>
    </ul>

    <h2>The Three Phases of MCAT Prep</h2>
    <h3>Phase 1: Content Review (40% of your time)</h3>
    <p>Start with a comprehensive review of all MCAT content areas. Focus on understanding core concepts rather than memorizing facts. Use resources like:</p>
    <ul>
      <li>Review books (Kaplan, Princeton Review, Examkrackers)</li>
      <li>Khan Academy MCAT videos</li>
      <li>Anki flashcards for spaced repetition</li>
    </ul>

    <h3>Phase 2: Practice and Application (40% of your time)</h3>
    <p>This is where you apply your knowledge through practice questions and passages. Focus on:</p>
    <ul>
      <li>AAMC Question Packs</li>
      <li>UWorld MCAT</li>
      <li>Daily CARS practice</li>
      <li>Content-specific practice questions</li>
    </ul>

    <h3>Phase 3: Full-Length Practice Tests and Review (20% of your time)</h3>
    <p>Take full-length practice tests under realistic conditions and spend adequate time reviewing every question, even the ones you got right.</p>

    <h2>Sample Weekly Schedule</h2>
    <p>Here's a framework for a balanced 25-hour study week:</p>
    <ul>
      <li><strong>Monday-Friday (3-4 hours/day):</strong> Content review or practice questions</li>
      <li><strong>Saturday:</strong> Full-length practice test (7.5 hours)</li>
      <li><strong>Sunday:</strong> Test review and rest (3-4 hours review, then relax)</li>
    </ul>

    <h2>Integrating Faith into Your Schedule</h2>
    <p>As Christian pre-med students, it's essential to maintain spiritual disciplines alongside academic preparation. Consider:</p>
    <ul>
      <li>Starting each study session with a brief prayer or devotional</li>
      <li>Scheduling a full day of Sabbath rest each week</li>
      <li>Joining a weekly prayer or accountability group</li>
      <li>Incorporating Scripture memorization alongside content review</li>
    </ul>

    <h2>Tips for Staying on Track</h2>
    <ol>
      <li><strong>Be Realistic:</strong> Don't overschedule yourself. Leave buffer time for unexpected events.</li>
      <li><strong>Track Your Progress:</strong> Use a spreadsheet or app to monitor completion of topics and practice questions.</li>
      <li><strong>Stay Flexible:</strong> Adjust your schedule based on your diagnostic results and weak areas.</li>
      <li><strong>Prioritize Quality Over Quantity:</strong> Focused, active learning beats passive review every time.</li>
      <li><strong>Schedule Breaks:</strong> Regular breaks and complete rest days prevent burnout.</li>
    </ol>

    <h2>Common Scheduling Mistakes to Avoid</h2>
    <ul>
      <li>Starting too late or not giving yourself enough time</li>
      <li>Neglecting CARS practice (do it daily!)</li>
      <li>Not taking enough full-length practice tests</li>
      <li>Insufficient review time after practice tests</li>
      <li>Burning out by studying too many hours without breaks</li>
    </ul>

    <h2>Conclusion</h2>
    <p>An effective MCAT study schedule is personalized to your needs, balanced to prevent burnout, and flexible enough to adjust as you progress. Remember that this is a marathon, not a sprint. Trust the process, stay consistent, and lean on your faith community for support throughout the journey.</p>

    <p>Need more guidance? Check out our <a href="/shop">Devotional Study Guide</a> which includes a complete 30-day study plan with daily schedules and spiritual reflections.</p>
  `,
};

const relatedArticles = [
  {
    title: 'Top 10 MCAT Study Resources for 2024',
    slug: 'top-mcat-resources-2024',
    category: 'MCAT Strategy',
  },
  {
    title: 'Balancing Clinical Experience and MCAT Prep',
    slug: 'balancing-clinical-experience-mcat',
    category: 'MCAT Strategy',
  },
  {
    title: 'Understanding the MCAT Scoring System',
    slug: 'understanding-mcat-scoring',
    category: 'MCAT Strategy',
  },
];

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: article.title,
    description: 'Learn how to build a personalized MCAT study plan that maximizes retention and prevents burnout.',
  };
}

export default function ArticlePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-6 py-16">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-neutral-500 mb-8">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <span>/</span>
          <Link href="/advice" className="hover:text-blue-600">Advice</Link>
          <span>/</span>
          <span className="text-neutral-900">Article</span>
        </nav>

        {/* Category & Meta */}
        <div className="flex items-center gap-4 mb-6">
          <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
            {article.category}
          </span>
          <span className="text-neutral-500">{article.date}</span>
          <span className="text-neutral-500">•</span>
          <span className="text-neutral-500 flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {article.readTime}
          </span>
        </div>

        {/* Title */}
        <h1 className="heading-1 mb-8">{article.title}</h1>

        {/* Featured Image Placeholder */}
        <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl mb-12 flex items-center justify-center">
          <div className="text-center">
            <svg className="w-20 h-20 mx-auto text-blue-600 opacity-50 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <p className="text-neutral-500">Add featured image here</p>
          </div>
        </div>

        {/* Article Content */}
        <div
          className="article-content prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        {/* Author Box */}
        <Card variant="glass" className="mt-12 backdrop-blur-lg">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-1">{article.author.name}</h3>
                <p className="text-neutral-600">{article.author.bio}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Share Buttons */}
        <div className="mt-8 flex items-center gap-4">
          <span className="text-sm font-medium text-neutral-600">Share this article:</span>
          <div className="flex gap-2">
            <button className="p-2 rounded-full bg-neutral-100 hover:bg-blue-100 text-neutral-600 hover:text-blue-600 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </button>
            <button className="p-2 rounded-full bg-neutral-100 hover:bg-blue-600 text-neutral-600 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </button>
            <button className="p-2 rounded-full bg-neutral-100 hover:bg-green-600 text-neutral-600 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </button>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="bg-neutral-50 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="heading-2 mb-8 text-center">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedArticles.map((related) => (
              <Link key={related.slug} href={`/advice/${related.slug}`}>
                <Card variant="default" className="h-full hover:-translate-y-1 transition-transform">
                  <CardContent className="pt-6">
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold mb-3">
                      {related.category}
                    </span>
                    <h3 className="font-semibold text-lg hover:text-blue-600 transition-colors">{related.title}</h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-600 text-white py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-2 mb-4">Want More MCAT Tips?</h2>
          <p className="text-lg opacity-90 mb-8">
            Get weekly advice and strategies delivered to your inbox
          </p>
          <Button variant="secondary" size="lg">
            Subscribe to Newsletter
          </Button>
        </div>
      </section>
    </div>
  );
}
