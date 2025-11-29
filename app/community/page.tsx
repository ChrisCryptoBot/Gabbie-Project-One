import { Metadata } from 'next';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Community | Faith & Focus MCAT',
  description: 'Join our Christian pre-med community for MCAT prep, prayer support, and accountability groups.',
};

const communityGroups = [
  {
    category: 'MCAT Preparation',
    description: 'Study groups and accountability partners for MCAT prep',
    groups: [
      {
        name: 'Daily Study Accountability',
        description: 'Check in daily with your study progress and get encouragement from peers',
        platform: 'Discord',
        members: 150,
        link: '#',
      },
      {
        name: 'Practice Test Review Sessions',
        description: 'Weekly sessions to review practice exams and discuss difficult concepts',
        platform: 'Discord',
        members: 89,
        link: '#',
      },
      {
        name: 'Study Strategy Sharing',
        description: 'Share what works, learn from others, optimize your prep',
        platform: 'GroupMe',
        members: 67,
        link: '#',
      },
    ],
  },
  {
    category: 'Application Season',
    description: 'Support through the medical school application process',
    groups: [
      {
        name: 'Personal Statement Workshop',
        description: 'Get feedback on your personal statement from peers and mentors',
        platform: 'Discord',
        members: 120,
        link: '#',
      },
      {
        name: 'Secondary Essay Review',
        description: 'Peer review and editing for secondary application essays',
        platform: 'WhatsApp',
        members: 95,
        link: '#',
      },
      {
        name: 'Interview Preparation',
        description: 'Mock interviews, MMI practice, and interview day tips',
        platform: 'Discord',
        members: 78,
        link: '#',
      },
      {
        name: 'School List Building',
        description: 'Research schools together and create your balanced school list',
        platform: 'GroupMe',
        members: 56,
        link: '#',
      },
    ],
  },
  {
    category: 'Faith & Pre-Med Life',
    description: 'Integrate faith with your pre-med journey',
    groups: [
      {
        name: 'Morning Prayer Group',
        description: 'Start your day with prayer and Scripture before studying',
        platform: 'WhatsApp',
        members: 134,
        link: '#',
      },
      {
        name: 'Faith & Medicine Discussions',
        description: 'Explore the intersection of Christian faith and medical practice',
        platform: 'Discord',
        members: 102,
        link: '#',
      },
      {
        name: 'Stress & Burnout Support',
        description: 'Find encouragement and practical tips for managing pre-med stress',
        platform: 'GroupMe',
        members: 88,
        link: '#',
      },
      {
        name: 'Sunday Reflection Circle',
        description: 'Weekly virtual gathering for worship and reflection',
        platform: 'Discord',
        members: 76,
        link: '#',
      },
    ],
  },
  {
    category: 'Admitted Students',
    description: 'For students who have been accepted to medical school',
    groups: [
      {
        name: 'Gap Year Planning',
        description: 'Make the most of your time before matriculation',
        platform: 'GroupMe',
        members: 45,
        link: '#',
      },
      {
        name: 'Moving & Housing',
        description: 'Find roommates and navigate relocation for medical school',
        platform: 'WhatsApp',
        members: 67,
        link: '#',
      },
      {
        name: 'Pre-Matriculation Prep',
        description: 'Prepare for M1 year with current medical students',
        platform: 'Discord',
        members: 54,
        link: '#',
      },
    ],
  },
];

const platformIcons = {
  Discord: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03z"/>
    </svg>
  ),
  GroupMe: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 1.592.382 3.091 1.055 4.424L2 22l5.766-1.055A9.96 9.96 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/>
    </svg>
  ),
  WhatsApp: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  ),
};

const platformColors = {
  Discord: 'bg-[#5865F2] text-white',
  GroupMe: 'bg-[#00AFF0] text-white',
  WhatsApp: 'bg-[#25D366] text-white',
};

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-amber-50">
      {/* Hero */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
            Join 500+ Christian Pre-Med Students
          </div>
          <h1 className="heading-display mb-6">
            You're <span className="text-gradient">Not Alone</span> on This Journey
          </h1>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto mb-8">
            Connect with fellow Christian pre-med students for study support, prayer, accountability, and friendship throughout your MCAT prep and medical school journey.
          </p>
        </div>
      </section>

      {/* Community Guidelines */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <Card variant="glass" className="backdrop-blur-lg">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="heading-4 mb-3">Community Guidelines</h3>
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-3 text-sm text-neutral-700">
                  <p>• Be respectful and encouraging</p>
                  <p>• No sharing of copyrighted materials</p>
                  <p>• Maintain confidentiality</p>
                  <p>• Support each other in faith and academics</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Community Groups */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="space-y-16">
          {communityGroups.map((category, idx) => (
            <div key={idx}>
              <div className="mb-8">
                <h2 className="heading-2 mb-2">{category.category}</h2>
                <p className="text-lg text-neutral-600">{category.description}</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.groups.map((group, groupIdx) => (
                  <Card key={groupIdx} variant="elevated" className="hover:scale-105 transition-transform duration-300">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-3">
                        <CardTitle className="text-lg">{group.name}</CardTitle>
                        <div className={`flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-semibold ${platformColors[group.platform as keyof typeof platformColors]}`}>
                          {platformIcons[group.platform as keyof typeof platformIcons]}
                          <span>{group.platform}</span>
                        </div>
                      </div>
                      <CardDescription>{group.description}</CardDescription>
                    </CardHeader>
                    <CardFooter className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-neutral-500">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span>{group.members} members</span>
                      </div>
                      <Button variant="secondary" size="sm">
                        Join Group
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-700 text-white py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-2 mb-4">Ready to Connect?</h2>
          <p className="text-lg opacity-90 mb-8">
            Join our community today and surround yourself with peers who understand both the academic rigor and spiritual journey of becoming a physician.
          </p>
          <Button variant="secondary" size="lg">
            Get Started with Community
          </Button>
        </div>
      </section>
    </div>
  );
}
