# Faith & Focus MCAT

A modern, full-stack web application for faith-integrated MCAT preparation. This platform combines e-commerce (physical devotional study guide), free educational content (advice column), community building (group chat links), and premium video content (paywalled admissions coaching).

## 🌟 Features

- **Beautiful Landing Page** with animated gradient orbs and glass morphism effects
- **E-commerce Shop** for the Devotional MCAT Study Guide (physical product)
- **Advice Column** (blog-style) with categorized articles
- **Community Hub** with organized group chat links across platforms
- **Academy** with paywalled video courses for admissions coaching
- **User Dashboard** for managing purchases and progress
- **Stripe Integration** for payments and subscriptions
- **Responsive Design** with mobile-first approach
- **Dark Mode Support** (coming soon)
- **SEO Optimized** with proper meta tags and Open Graph
- **Accessible** with WCAG AA compliance

## 🛠 Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Custom CSS Variables
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js
- **Payments**: Stripe
- **Video Hosting**: Mux or Bunny.net
- **Email**: Resend
- **Deployment**: Vercel

## 📁 Project Structure

```
/
├── app/                      # Next.js App Router
│   ├── page.tsx             # Landing page
│   ├── layout.tsx           # Root layout
│   ├── globals.css          # Global styles & design system
│   ├── shop/                # E-commerce pages
│   ├── advice/              # Blog/advice column
│   ├── community/           # Community hub
│   ├── academy/             # Video courses
│   └── api/                 # API routes
├── components/
│   ├── ui/                  # Base UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── Input.tsx
│   ├── layout/              # Layout components
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── shop/                # Shop-specific components
│   ├── advice/              # Blog components
│   ├── academy/             # Video/course components
│   └── community/           # Community components
├── lib/
│   ├── db.ts               # Prisma client
│   ├── stripe.ts           # Stripe utilities
│   └── utils.ts            # Helper functions
├── prisma/
│   └── schema.prisma       # Database schema
├── public/                  # Static assets
└── styles/                  # Additional styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- PostgreSQL database
- Stripe account
- (Optional) Mux or Bunny.net account for video hosting

### Installation

1. **Clone the repository**

```bash
git clone <repository-url>
cd Gabbie-Project-One
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

Copy `.env.example` to `.env` and fill in your values:

```bash
cp .env.example .env
```

Required environment variables:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/faith-focus-mcat?schema=public"

# Authentication
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key"

# Stripe
STRIPE_SECRET_KEY="sk_test_..."
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..."
```

4. **Set up the database**

```bash
npx prisma generate
npx prisma db push
```

5. **Run the development server**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Design System

The project uses a comprehensive design system with:

### Color Palette

- **Primary**: Deep Blue (Trust, Medicine, Professionalism)
- **Secondary**: Warm Gold (Faith, Light, Hope)
- **Neutral**: Slate shades

### Key Features

- **Glass Morphism**: Frosted glass effects with backdrop blur
- **Fluid Typography**: Responsive text sizing using `clamp()`
- **Multi-Layer Shadows**: Depth and elevation
- **CSS Variables**: Consistent theming throughout
- **Animations**: Smooth transitions and micro-interactions

### CSS Variables

All design tokens are available as CSS variables:

```css
var(--color-primary-500)
var(--space-4)
var(--radius-xl)
var(--text-lg)
var(--shadow-md)
var(--transition-base)
```

## 📊 Database Schema

The database includes models for:

- **User**: Authentication and profile
- **Purchase**: Order history
- **Subscription**: Recurring payments
- **Course**: Video course metadata
- **Video**: Individual lessons
- **VideoProgress**: User progress tracking
- **Article**: Blog posts
- **CommunityGroup**: Group chat links
- **NewsletterSubscriber**: Email list

## 🔐 Authentication

Authentication is set up with NextAuth.js and supports:

- Email/password authentication
- OAuth providers (Google, etc.)
- Protected routes and API endpoints

## 💳 Stripe Integration

### Products

The following product types are supported:

1. **Physical Product**: Devotional Study Guide (with shipping)
2. **Digital Courses**: Individual video course access
3. **Subscriptions**: All-access academy pass

### Webhook Events

Webhook handler processes:

- `checkout.session.completed`: Grant access to purchased content
- `customer.subscription.updated`: Update subscription status
- `customer.subscription.deleted`: Revoke access

## 📱 Responsive Design

- **Mobile-first approach**
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Flexible layouts** with CSS Grid and Flexbox
- **Touch-friendly** UI elements

## ♿ Accessibility

- **WCAG AA compliant**
- **Keyboard navigation** support
- **Screen reader** optimized
- **Focus indicators**
- **Skip links**
- **Semantic HTML**
- **Reduced motion** support

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Environment Variables on Vercel

Make sure to add all environment variables from `.env.example` in your Vercel project settings.

### Post-Deployment

1. Set up Stripe webhook endpoint pointing to your production URL
2. Update `NEXTAUTH_URL` to your production domain
3. Run database migrations if needed

## 📝 Development Workflow

### Adding New Pages

1. Create page in `app/` directory
2. Add route to navigation in `components/layout/Header.tsx`
3. Update sitemap and metadata

### Creating New Components

1. Place in appropriate `components/` subdirectory
2. Use TypeScript for type safety
3. Follow existing component patterns
4. Use design system variables

### Database Changes

1. Update `prisma/schema.prisma`
2. Run `npx prisma db push` for development
3. Create migration for production: `npx prisma migrate dev`

## 🎯 Roadmap

### Phase 1: Foundation ✅

- [x] Project setup
- [x] Design system
- [x] Database schema
- [x] Core UI components
- [x] Landing page

### Phase 2: Core Features (Next Steps)

- [ ] Shop page with product display
- [ ] Stripe checkout flow
- [ ] Advice column with articles
- [ ] Community hub
- [ ] Academy with courses

### Phase 3: Advanced Features

- [ ] User authentication
- [ ] User dashboard
- [ ] Video player with DRM
- [ ] Progress tracking
- [ ] Newsletter integration

### Phase 4: Enhancements

- [ ] Dark mode toggle
- [ ] Search functionality
- [ ] Admin dashboard
- [ ] Analytics integration
- [ ] Performance optimization

## 🤝 Contributing

This is a private project. Please contact the repository owner for contribution guidelines.

## 📄 License

All rights reserved.

## 🙏 Acknowledgments

Built with the Faith & Focus MCAT specification for Christian pre-med students seeking to integrate faith and academic excellence.

---

**Note**: This is a work in progress. Phase 1 (Foundation) is complete with a fully functional landing page, design system, and core infrastructure. Many features are still being implemented. Check the roadmap above for current status.