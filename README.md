# 🎓 Samskruthi Academy — Official Website

> **Tagline:** Education builds character  
> **Campuses:** Mandya & Mysuru, Karnataka, India

A modern, high-performance, mobile-first responsive web application built for Samskruthi Academy using **React**, **Vite**, **Tailwind CSS**, **React Router**, **Framer Motion**, and **Lucide Icons**.

---

## 🌟 Key Features

- **Single Centralized Config (`src/data/siteData.js`)**: Edit phone numbers, email, social links, branch addresses, courses, testimonials, blog posts, and FAQs in one file!
- **Multi-Branch Divided Showcase**: Filterable layout displaying all 5 branches in Mandya and Mysuru with direct **Call**, **WhatsApp**, and **Google Maps** integration.
- **Interactive Lead Generation Form**: "Book a FREE Demo Class" form with instant validation, confetti celebration animation, and commented backend submission handler.
- **Search Overlay Modal**: Real-time search across courses, branches, and blog articles (Shortcut: `Ctrl + K` or `Cmd + K`).
- **Timed Admission Offer Pop-up**: Non-intrusive popup triggering 7 seconds after page load with session storage persistence.
- **Floating WhatsApp & Call Widgets**: Pulse-animated WhatsApp button prefilled with admission inquiry text and bottom-left mobile call button.
- **SEO & Schema Ready**: Dynamic Open Graph tags, canonical links, and EducationalOrganization JSON-LD structured data via `react-helmet-async`.

---

## 📁 Project Folder Structure

```
c:\Users\NBT\Desktop\web\
├── public/
│   └── logo.png                # Samskruthi Academy official logo
├── src/
│   ├── components/
│   │   ├── BranchCard.jsx      # Reusable card with Call, WhatsApp, Maps buttons
│   │   ├── CookieBanner.jsx    # Cookie consent banner (localStorage backed)
│   │   ├── CourseCard.jsx      # Reusable program showcase card
│   │   ├── FloatingWidgets.jsx # WhatsApp pulse & Mobile Call floating buttons
│   │   ├── Footer.jsx          # Comprehensive footer with educational backlinks
│   │   ├── Header.jsx          # Sticky glassmorphic navbar & mobile drawer
│   │   ├── LeadForm.jsx        # Demo class booking form with validation & confetti
│   │   ├── LeadModal.jsx       # Modal dialog for demo booking form
│   │   ├── NotificationPopup.jsx # 7s delayed admission offer popup
│   │   ├── SearchModal.jsx     # Site-wide search overlay
│   │   ├── SEO.jsx             # React Helmet & JSON-LD schema wrapper
│   │   └── TestimonialSlider.jsx # Video & parent/student review slider
│   ├── data/
│   │   └── siteData.js         # CENTRAL CONFIG (Edit all site details here!)
│   ├── pages/
│   │   ├── About.jsx           # Academy story, vision, mission, core values
│   │   ├── BlogPage.jsx        # Blog listing with search & category filters
│   │   ├── BlogPostDetail.jsx  # Detailed reading view with share buttons
│   │   ├── BranchesPage.jsx    # Dedicated 5-branch campus overview
│   │   ├── Contact.jsx         # Contact page with branch directory & FAQ accordion
│   │   ├── Home.jsx            # Dynamic homepage with all requested sections
│   │   ├── PrivacyPolicy.jsx   # Privacy & cookie policy
│   │   ├── ProgramsPage.jsx    # Complete course catalog
│   │   └── Terms.jsx           # Terms of service
│   ├── App.jsx                 # Router & layout provider
│   ├── index.css               # Global Tailwind CSS & color variables
│   └── main.jsx                # React app entry point
├── package.json
└── README.md
```

---

## ⚙️ How to Edit Site Data (`src/data/siteData.js`)

All site details are kept in **`src/data/siteData.js`**. You do not need to touch any JSX code to update contact details, add a new branch, post a blog article, or change course info.

### 1. Changing Contact Information
Open `src/data/siteData.js` and edit the `siteConfig` object:
```javascript
export const siteConfig = {
  name: "Samskruthi Academy",
  phone: "+91 98765 43210",          // Main call hotline
  whatsapp: "919876543210",          // WhatsApp number without + or spaces
  email: "admissions@samskruthiacademy.in",
  socialLinks: {
    facebook: "https://facebook.com/your-page",
    instagram: "https://instagram.com/your-handle",
    youtube: "https://youtube.com/@your-channel",
    whatsapp: "https://wa.me/919876543210..."
  }
};
```

### 2. Updating or Adding Branch Locations
Under `siteConfig.branches`, update existing branch objects or add a new one:
```javascript
{
  id: "branch-id",
  name: "Samskruthi Academy, Branch Name",
  city: "Mandya",                     // "Mandya" or "Mysuru"
  address: "Full street address...",
  landmark: "Opposite Landmark",
  phone: "+91 98765 43210",
  whatsapp: "919876543210",
  mapUrl: "https://maps.google.com/?q=Your+Branch+Address",
  mapEmbed: "Google Maps iframe src link",
  facilities: ["AC Classrooms", "Science Lab", "CCTV Secured"]
}
```

### 3. Adding Blog Posts
Add an entry to `siteConfig.blogPosts`:
```javascript
{
  slug: "your-blog-post-slug",
  title: "Title of your post",
  category: "Exam Guide",
  author: "Principal Desk",
  date: "October 1, 2026",
  readTime: "5 min read",
  image: "https://images.unsplash.com/...",
  excerpt: "Short summary...",
  seoTitle: "SEO Title | Samskruthi Academy",
  seoDescription: "SEO Description...",
  content: `
### Subheading
Your full markdown text content here...
  `,
  tags: ["Tag1", "Tag2"]
}
```

---

## 🔌 Connecting the Lead Form to Backend / EmailJS / Google Sheets

The form logic is in `src/components/LeadForm.jsx` in the `handleSubmit` function:

### Option A: EmailJS (Free Email Service)
1. Install EmailJS: `npm install @emailjs/browser`
2. Uncomment and configure in `src/components/LeadForm.jsx`:
```javascript
import emailjs from '@emailjs/browser';

const handleSubmit = async (e) => {
  e.preventDefault();
  if (!validate()) return;
  setIsSubmitting(true);

  await emailjs.send(
    'YOUR_SERVICE_ID',
    'YOUR_TEMPLATE_ID',
    formData,
    'YOUR_PUBLIC_KEY'
  );

  setIsSubmitting(false);
  setIsSubmitted(true);
};
```

### Option B: Google Sheets via Webhook
Create a Google Apps Script Webhook and send `formData` directly:
```javascript
await fetch('YOUR_GOOGLE_APPS_SCRIPT_WEBHOOK_URL', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
});
```

---

## 🛠️ Development & Build Commands

Run these commands in terminal:

- **Start Dev Server**:
  ```bash
  npm run dev
  ```
- **Build Production Bundle**:
  ```bash
  npm run build
  ```
- **Preview Production Build**:
  ```bash
  npm run preview
  ```

---

## 🎨 Branding & Design System

- **Primary Color:** Sky Blue (`#0B9BE6`) — Headings, Navigation, Trust Badges
- **Secondary Color:** Vibrant Orange (`#F7941D`) — Call to Action buttons, Highlights
- **Background:** Soft Off-White (`#F8FBFF`)
- **Dark Neutral:** Dark Navy (`#0F2A43`)
- **Typography:** Plus Jakarta Sans & Inter
