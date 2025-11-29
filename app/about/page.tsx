import { Metadata } from 'next';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About | Faith & Focus MCAT',
  description: 'Learn about our mission to help Christian pre-med students integrate faith with their MCAT preparation and medical school journey.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-24 pb-16 px-6 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="heading-display mb-6">
            Our <span className="text-gradient">Mission</span>
          </h1>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Empowering Christian pre-med students to pursue medicine with excellence, purpose, and unwavering faith
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Photo Placeholder */}
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 mx-auto mb-4" />
                <p className="text-neutral-600">Add your photo here</p>
              </div>
            </div>

            {/* Story */}
            <div>
              <h2 className="heading-2 mb-6">The Story Behind Faith & Focus</h2>
              <div className="space-y-4 text-neutral-700">
                <p>
                  As a Christian pre-med student preparing for the MCAT, I experienced firsthand the challenge of maintaining spiritual disciplines while dedicating countless hours to studying. Too often, I felt I had to choose between my faith and my academic goals.
                </p>
                <p>
                  That's when I realized: what if these two aspects of my life could strengthen each other instead of competing? What if daily devotionals could provide the mental clarity and peace needed for effective studying? What if a community of Christian pre-meds could offer both academic accountability and spiritual support?
                </p>
                <p>
                  Faith & Focus MCAT was born from this vision. After scoring well on the MCAT and navigating the medical school application process, I created the resources I wish I had—tools that treat spiritual growth and academic excellence as complementary rather than contradictory.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-6 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="heading-2 mb-12 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card variant="elevated">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="heading-4 mb-3">Faith-Centered</h3>
                <p className="text-neutral-600">
                  We believe spiritual growth and academic excellence go hand in hand. Every resource is designed to strengthen both.
                </p>
              </CardContent>
            </Card>

            <Card variant="elevated">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="heading-4 mb-3">Evidence-Based</h3>
                <p className="text-neutral-600">
                  Our study strategies are backed by learning science and proven by students who've successfully reached their goals.
                </p>
              </CardContent>
            </Card>

            <Card variant="elevated">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="heading-4 mb-3">Community-Driven</h3>
                <p className="text-neutral-600">
                  Pre-med journey is better together. We foster a supportive community of Christian students pursuing medicine.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-gradient mb-2">500+</div>
              <p className="text-neutral-600">Students Served</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-gradient mb-2">520+</div>
              <p className="text-neutral-600">Average MCAT Score</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-gradient mb-2">85%</div>
              <p className="text-neutral-600">Acceptance Rate</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-gradient mb-2">24/7</div>
              <p className="text-neutral-600">Community Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-16 px-6 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-2 mb-12 text-center">Our Approach</h2>
          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="heading-4 mb-2">Integration, Not Separation</h3>
                <p className="text-neutral-700">
                  We don't ask you to set aside your faith while studying. Instead, we help you use spiritual disciplines to enhance focus, reduce anxiety, and maintain perspective throughout the preparation process.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="heading-4 mb-2">Proven Strategies</h3>
                <p className="text-neutral-700">
                  Every study technique and admissions strategy we teach has been tested and refined by successful medical school applicants. We share what actually works, not just theory.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-600 text-white flex items-center justify-center font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="heading-4 mb-2">Community Support</h3>
                <p className="text-neutral-700">
                  You're not alone in this journey. Our community of Christian pre-meds provides accountability, encouragement, prayer support, and practical advice from those who understand your unique challenges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-600 text-white py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-2 mb-4">Ready to Begin?</h2>
          <p className="text-lg opacity-90 mb-8">
            Join our community and discover how faith and focus can work together in your medical school journey
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/shop">
              <Button variant="secondary" size="lg">
                Get the Study Guide
              </Button>
            </Link>
            <Link href="/community">
              <Button variant="ghost" size="lg" className="text-white border-white hover:bg-white/10">
                Join the Community
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
