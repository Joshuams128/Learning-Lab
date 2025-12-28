# The Learning Lab - Next.js Website

A modern, responsive website for The Learning Lab - showcasing collaborative work between an Instructional Designer and a Front-end Developer.

## 🚀 Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Language**: TypeScript
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
learning-lab/
├── app/                      # Next.js App Router pages
│   ├── about/               # About page
│   ├── contact/             # Contact page
│   ├── portfolio/           # Portfolio listing & dynamic project pages
│   │   └── [slug]/         # Individual project case studies
│   ├── layout.tsx          # Root layout with Header/Footer
│   ├── page.tsx            # Homepage
│   └── globals.css         # Global styles
├── components/              # Reusable React components
│   ├── Header.tsx          # Navigation header
│   ├── Footer.tsx          # Site footer
│   ├── ProjectCard.tsx     # Portfolio project card
│   ├── SkillCard.tsx       # Skills showcase card
│   └── RocketIcon.tsx      # Animated rocket icon
├── data/                    # Static JSON data
│   ├── team.json           # Team member bios
│   ├── projects.json       # Portfolio projects
│   └── skills.json         # Combined skills list
├── public/                  # Static assets
│   └── images/             # Project images, team photos, etc.
└── package.json            # Dependencies
```

## 🎨 Features

### Homepage
- Animated hero section with rocket icon
- Skills & expertise grid
- Team member preview cards
- Call-to-action sections

### About Page
- Full bios for both team members
- Professional headshots
- Links to individual portfolios
- Contact information

### Portfolio Page
- Filterable project grid (All / Sasha's Work / Joshua's Work)
- Project cards with hover effects
- Dynamic project case study pages
- Tools & technologies showcase

### Contact Page
- Contact form (Name, Email, Message)
- Individual team member contact info
- Responsive design

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📝 Customization

### Update Team Information
Edit `/data/team.json` to update team member bios, titles, and contact info.

### Add Portfolio Projects
Add new projects to `/data/projects.json`. Each project should include:
- `id`: Unique identifier (used in URL)
- `title`: Project name
- `owner`: "sasha" or "joshua"
- `category`: Project type
- `description`: Brief description
- `tags`: Array of technology/skill tags
- `tools`: Array of tools used
- `overview`: Detailed project description
- `keyTasks`: Array of tasks performed
- `outcomes`: Array of results achieved

### Update Skills
Modify `/data/skills.json` to add or remove skill categories.

### Add Images
Place images in `/public/images/` directory:
- `/public/images/team/` - Team member photos
- `/public/images/projects/` - Project screenshots

Update image paths in JSON files and uncomment Image components in the code.

## 🎨 Design System

### Colors
- **Primary Green**: Soft green tones (`primary-50` to `primary-900`)
- **Mint Accent**: Complementary mint shades (`mint-50` to `mint-900`)

### Typography
- Font: Inter (Google Fonts)
- Mobile-first responsive sizing

### Animations
- Framer Motion for page transitions
- Hover effects on cards
- Scroll-triggered animations

## 📱 Responsive Design

The site is fully responsive and optimized for:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktops (1024px+)

## ♿ Accessibility

- WCAG 2.1 compliant
- Semantic HTML
- ARIA labels where needed
- Keyboard navigation support
- Screen reader friendly

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel dashboard
3. Deploy automatically

### Other Platforms
The site can be deployed to any platform supporting Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean

## 📄 License

This project is private and proprietary to The Learning Lab.

## 👥 Team

- **Sasha** - Instructional Designer & eLearning Developer
- **Joshua** - Front-end Developer & Web Designer

---

Built with ❤️ using Next.js and Tailwind CSS