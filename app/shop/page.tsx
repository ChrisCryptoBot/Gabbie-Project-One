import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Devotional Study Guide | Shop',
  description: 'Get the Faith & Focus MCAT Devotional Study Guide - a 30-day journey combining MCAT prep with daily spiritual reflections.',
};

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <nav className="flex text-sm text-neutral-500">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-neutral-900">Shop</span>
        </nav>
      </div>

      {/* Product Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-[3/4] relative rounded-2xl overflow-hidden bg-neutral-100 shadow-xl group">
              {/* Placeholder for main product image */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-100 to-amber-100">
                <div className="text-center p-8">
                  <svg className="w-24 h-24 mx-auto text-blue-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <p className="text-neutral-600 font-medium">Faith & Focus MCAT</p>
                  <p className="text-sm text-neutral-500">Devotional Study Guide</p>
                  <p className="text-xs text-neutral-400 mt-4">Add your product image here</p>
                </div>
              </div>
            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square rounded-lg overflow-hidden bg-neutral-100 border-2 border-transparent hover:border-blue-500 cursor-pointer transition-all">
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-amber-50">
                    <span className="text-xs text-neutral-400">Image {i}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
                Physical Product • Ships Worldwide
              </div>
              <h1 className="heading-1 mb-4">Faith & Focus MCAT Devotional Study Guide</h1>
              <p className="text-xl text-neutral-600 mb-6">
                A comprehensive 30-day journey that combines proven MCAT preparation strategies with daily spiritual reflections and prayer prompts.
              </p>

              <div className="flex items-baseline gap-4 mb-8">
                <span className="text-4xl font-bold text-blue-600">$39.99</span>
                <span className="text-lg text-neutral-400 line-through">$49.99</span>
                <span className="inline-block px-2 py-1 bg-green-100 text-green-700 rounded text-sm font-semibold">Save 20%</span>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-3 py-6 border-y border-neutral-200">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="font-semibold text-neutral-900">30-Day Structured Study Plan</p>
                  <p className="text-sm text-neutral-600">Daily schedule optimized for MCAT success</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="font-semibold text-neutral-900">Daily Devotionals & Reflections</p>
                  <p className="text-sm text-neutral-600">Scripture-based encouragement for your journey</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="font-semibold text-neutral-900">Study Techniques & Strategies</p>
                  <p className="text-sm text-neutral-600">Proven methods to maximize retention</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="font-semibold text-neutral-900">Premium Quality Printing</p>
                  <p className="text-sm text-neutral-600">Durable hardcover with ribbon bookmark</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="space-y-4">
              <Button variant="primary" size="lg" className="w-full text-lg">
                Add to Cart - $39.99
              </Button>
              <p className="text-center text-sm text-neutral-500">
                Free shipping on orders over $50
              </p>
            </div>

            {/* Shipping Info */}
            <Card variant="outline" className="mt-6">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">Shipping & Delivery</h3>
                    <ul className="text-sm text-neutral-600 space-y-1">
                      <li>• Standard shipping: 5-7 business days</li>
                      <li>• Express shipping available at checkout</li>
                      <li>• International shipping available</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="space-y-8">
            <ProductSection
              title="What's Inside"
              icon={
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              }
            >
              <ul className="grid md:grid-cols-2 gap-3">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>30 daily devotionals with Scripture</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Study schedule templates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>MCAT strategy guides</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Prayer prompts and journaling space</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Memory techniques & mnemonics</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Stress management techniques</span>
                </li>
              </ul>
            </ProductSection>

            <ProductSection
              title="How to Use This Guide"
              icon={
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              }
            >
              <div className="space-y-4">
                <p className="text-neutral-700">
                  Begin each morning with the daily devotional to ground yourself spiritually before diving into your MCAT studies.
                  Each day includes specific study goals, review strategies, and evening reflection prompts.
                </p>
                <p className="text-neutral-700">
                  The 30-day plan is designed to build momentum while maintaining balance between academic rigor and spiritual growth.
                  You can adapt the schedule to fit your timeline, repeating cycles as needed.
                </p>
              </div>
            </ProductSection>

            <ProductSection
              title="Sample Pages"
              icon={
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              }
            >
              <p className="text-neutral-600 mb-4">Preview coming soon - Add your sample page images here</p>
              <div className="grid md:grid-cols-2 gap-4">
                {[1, 2].map((i) => (
                  <div key={i} className="aspect-[3/4] bg-neutral-100 rounded-lg flex items-center justify-center">
                    <span className="text-neutral-400">Sample Page {i}</span>
                  </div>
                ))}
              </div>
            </ProductSection>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-16">
          <h2 className="heading-2 text-center mb-12">What Students Are Saying</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Sarah M.",
                score: "MCAT 518",
                text: "This guide transformed my study routine. The daily devotionals kept me centered during the most stressful preparation period of my life."
              },
              {
                name: "David L.",
                score: "MCAT 521",
                text: "As a Christian pre-med student, I struggled to balance faith and academics. This guide showed me they strengthen each other."
              },
              {
                name: "Rachel K.",
                score: "MCAT 515",
                text: "The study strategies alone are worth the price, but the spiritual component made all the difference in staying motivated."
              }
            ].map((testimonial, i) => (
              <Card key={i} variant="glass" className="backdrop-blur-lg">
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-neutral-700 mb-4 italic">&ldquo;{testimonial.text}&rdquo;</p>
                  <div>
                    <p className="font-semibold text-neutral-900">{testimonial.name}</p>
                    <p className="text-sm text-neutral-600">{testimonial.score}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductSection({ title, icon, children }: { title: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-xl p-8 shadow-sm border border-neutral-100">
      <div className="flex items-center gap-3 mb-4">
        <div className="text-blue-600">{icon}</div>
        <h3 className="heading-3">{title}</h3>
      </div>
      {children}
    </div>
  );
}
