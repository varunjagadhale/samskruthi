// Central Site Configuration File for Samskruthi Academy
// Edit contact info, branch addresses, courses, testimonials, and blog posts here.

export const siteConfig = {
  name: "Samskruthi Academy",
  tagline: "Education builds character",
  subTagline: "Premier Educational Institute & International Preschool in Mandya & Mysuru",
  phone: "+91 84314 75263",
  altPhone: "+91 84314 75263",
  whatsapp: "918431475263",
  email: "admissions@samskruthiacademy.in",
  altEmail: "info@samskruthiacademy.in",
  operatingHours: "Monday to Saturday: 8:00 AM - 7:30 PM",
  
  socialLinks: {
    facebook: "https://facebook.com/samskruthiacademy",
    instagram: "https://instagram.com/samskruthiacademy",
    youtube: "https://youtube.com/@samskruthiacademy",
    whatsapp: "https://wa.me/918431475263?text=Hello%20Samskruthi%20Academy,%20I%20would%20like%20to%20know%20more%20about%20admissions."
  },


  seo: {
    metaTitle: "Samskruthi Academy | Education builds character | Mandya & Mysuru",
    metaDescription: "Samskruthi Academy is Karnataka's leading educational institute and international preschool with branches across Mandya and Mysuru. Offering CBSE/State coaching, PUC, NEET/KCET foundation.",
    keywords: "Samskruthi Academy, Education Mandya, Preschool Mandya, Coaching Mysuru, Kuvempu Nagar academy, PUC coaching Mandya, SSLC tuition Mandya",
    siteUrl: "https://www.samskruthiacademy.in",
    ogImage: "/logo.png"
  },

  hero: {
    badge: "Trusted Education Leader in Karnataka",
    title: "Empowering Minds, Building Character & Academic Excellence",
    description: "Welcome to Samskruthi Academy — Mandya and Mysuru's premier educational institute. From early childhood international preschooling to competitive NEET/KCET prep, we nurture every student's potential.",
    stats: [
      { label: "Branches across Karnataka", value: "5+" },
      { label: "Students Educated", value: "10,000+" },
      { label: "Expert Faculty", value: "50+" },
      { label: "Pass & Distinction Rate", value: "98.4%" }
    ]
  },

  whyChooseUs: [
    {
      id: "character-building",
      icon: "ShieldCheck",
      title: "Character-First Philosophy",
      description: "Rooted in our core tagline 'Education builds character', we impart moral values, discipline, and critical thinking alongside academic curriculum."
    },
    {
      id: "expert-mentors",
      icon: "Award",
      title: "Seasoned & Dedicated Mentors",
      description: "Our faculty comprises experienced subject experts, top rankers, and passionate educators dedicated to personalized mentorship."
    },
    {
      id: "multi-branch",
      icon: "MapPin",
      title: "Accessible Multi-Branch Network",
      description: "4 state-of-the-art campuses in Mandya and 1 sprawling hub in Mysuru (Kuvempu Nagar) ensuring quality education right near you."
    },
    {
      id: "small-batches",
      icon: "Users",
      title: "Small Batch Sizes & Personal Care",
      description: "We maintain optimal student-teacher ratios so every learner receives tailored attention, regular doubt solving, and monitoring."
    },
    {
      id: "tech-smart",
      icon: "Laptop",
      title: "Smart Classrooms & Modern Labs",
      description: "Equipped with interactive smart boards, audio-visual aids, science labs, and comprehensive digital study materials."
    },
    {
      id: "competitive-edge",
      icon: "Target",
      title: "NEET / JEE / KCET Integrated Foundation",
      description: "Early conceptual clarity from Class 7 onwards to ensure students excel in board examinations as well as national entrance tests."
    }
  ],

  branches: [
    {
      id: "head-office-mandya",
      name: "Samskruthi Academy, Head Office",
      city: "Mandya",
      isHeadOffice: true,
      address: "Besagarahalli Ramanna Circle, 100 Feet Road, Opposite TVS Showroom, Ashok Nagar, Mandya, Karnataka 371401",
      landmark: "Opposite TVS Showroom, Ashok Nagar",
      phone: "+91 98765 43210",
      whatsapp: "918431475263",
      mapUrl: "https://maps.google.com/?q=Besagarahalli+Ramanna+Circle+100+Feet+Road+Ashok+Nagar+Mandya",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3897.6890875249455!2d76.8920!3d12.5255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDMxJzMxLjgiTiA3NsKwNTMnMzEuMiJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
      image: "/branches/branch_1_headoffice.jpg",
      timing: "Mon - Sat: 8:00 AM - 7:30 PM",
      facilities: ["Smart Classrooms", "Science & Computer Labs", "Career Counseling Cell", "Library", "CCTV Security"]
    },
    {
      id: "preschool-mandya",
      name: "Samskruthi International Preschool",
      city: "Mandya",
      isPreschool: true,
      address: "Neharu Nagar, 2nd Cross, Opposite RSS Office, Mandya, Karnataka 371401",
      landmark: "Opposite RSS Office, Neharu Nagar",
      phone: "+91 98765 43211",
      whatsapp: "918431475263",
      mapUrl: "https://maps.google.com/?q=Neharu+Nagar+2nd+Cross+Opposite+RSS+Office+Mandya",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3897.6500!2d76.8950!3d12.5220!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDMxJzE5LjIiTiA3NsKwNTMnNDIuMCJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
      image: "/branches/branch_2_preschool.jpg",
      timing: "Mon - Sat: 9:00 AM - 4:00 PM",
      facilities: ["Child-Safe Soft Play Area", "Activity & Craft Zone", "Montessori Kits", "CCTV Live Feed", "Daycare Facility"]
    },
    {
      id: "branch-2-mandya",
      name: "Samskruthi Academy, 2nd Branch",
      city: "Mandya",
      address: "Besagarahalli Ramanna Circle, 100 Feet Road, Opposite TVS Showroom, Ashok Nagar, Mandya, Karnataka 371401",
      landmark: "Opposite TVS Showroom, Ashok Nagar",
      phone: "+91 98765 43212",
      whatsapp: "918431475263",
      mapUrl: "https://maps.google.com/?q=Besagarahalli+Ramanna+Circle+100+Feet+Road+Ashok+Nagar+Mandya",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3897.6890875249455!2d76.8920!3d12.5255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDMxJzMxLjgiTiA3NsKwNTMnMzEuMiJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
      image: "/branches/branch_5_mysuru.jpg",
      timing: "Mon - Sat: 8:30 AM - 7:00 PM",
      facilities: ["High School Foundation Wing", "Doubt Resolution Desk", "Regular Assessment Center", "Purified Water & Transport"]
    },
    {
      id: "branch-4-mandya",
      name: "Samskruthi Academy, 4th Branch",
      city: "Mandya",
      address: "7th Cross Main Road, Chamundeshwari Nagar, Opposite Shani Mahatma Temple, Mandya, Karnataka 371401",
      landmark: "Opposite Shani Mahatma Temple, Chamundeshwari Nagar",
      phone: "+91 98765 43214",
      whatsapp: "918431475263",
      mapUrl: "https://maps.google.com/?q=7th+Cross+Main+Road+Chamundeshwari+Nagar+Mandya",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3897.7100!2d76.8890!3d12.5280!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDMxJzQwLjgiTiA3NsKwNTMnMDAuNCJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
      image: "/branches/branch_4_branch4.jpg",
      timing: "Mon - Sat: 8:00 AM - 7:30 PM",
      facilities: ["PUC Science & Commerce Wing", "Competitive Exam Test Center", "Air-Conditioned Study Rooms", "Audio-Visual Hall"]
    },
    {
      id: "branch-5-mysuru",
      name: "Samskruthi Academy, 5th Branch",
      city: "Mysuru",
      address: "1st, 2nd & 3rd Floor, G & H Block, No. 1335, Anikethana Rd, Jayanagar, Kuvempu Nagar, Mysuru, Karnataka 570023",
      landmark: "Anikethana Road, Jayanagar, Kuvempu Nagar",
      phone: "+91 98765 43215",
      whatsapp: "918431475263",
      mapUrl: "https://maps.google.com/?q=No.+1335+Anikethana+Rd+Jayanagar+Kuvempu+Nagar+Mysuru",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.3456!2d76.6234!3d12.2890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDE3JzIwLjQiTiA3NsKwMzcnMjQuMyJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
      image: "/branches/branch_3_branch2.jpg",
      timing: "Mon - Sat: 8:00 AM - 8:00 PM",
      facilities: ["Spacious 3-Floor Campus", "Hi-Tech Science Labs", "NEET/KCET Special Coaching", "Conference & Seminar Room", "Parent Lounge"]
    }
  ],


  boards: [
    { name: "CBSE", label: "Central Board of Secondary Education", bg: "bg-sky-50 border-sky-200 text-sky-800" },
    { name: "ICSE", label: "Indian Certificate of Secondary Education", bg: "bg-blue-50 border-blue-200 text-blue-800" },
    { name: "STATE", label: "Karnataka State Board (KSEAB)", bg: "bg-amber-50 border-amber-200 text-amber-800" },
    { name: "SAINIK", label: "Sainik School Entrance Exam Prep", bg: "bg-emerald-50 border-emerald-200 text-emerald-800" },
    { name: "NAVODAYA", label: "Jawahar Navodaya Vidyalaya (JNVST)", bg: "bg-purple-50 border-purple-200 text-purple-800" },
    { name: "OLYMPIAD", label: "Math, Science & Cyber Olympiads", bg: "bg-orange-50 border-orange-200 text-orange-800" }
  ],

  courses: [
    {
      id: "regular-tuitions-1-10",
      category: "Tuitions 1st - 10th",
      title: "Regular Tuitions for 1st - 10th Std",
      subtitle: "State / CBSE / ICSE Syllabus Mastery",
      grades: "Classes 1st to 10th",
      ageGroup: "6 to 16 Years",
      icon: "BookOpen",
      badge: "Regular & Foundation",
      description: "Dedicated subject-wise coaching for 1st to 10th std students in State, CBSE & ICSE boards with strong concept clarity and exam confidence.",
      highlights: [
        "Complete State, CBSE & ICSE syllabus coverage",
        "Homework & Project Support provided daily",
        "Weekly Mock Tests and Performance Assessments",
        "Small batch sizes for individual student focus",
        "Special SSLC & Class 10 Board Exam prep modules"
      ]
    },
    {
      id: "sainik-navodaya-prep",
      category: "School Entrance",
      title: "Sainik & Navodaya Entrance Prep",
      subtitle: "Cracking All India Sainik & JNVST Exams",
      grades: "Classes 4th, 5th & 6th",
      ageGroup: "9 to 12 Years",
      icon: "ShieldCheck",
      badge: "High Rank Success",
      description: "Specialized entrance coaching for Sainik School and Jawahar Navodaya Vidyalaya (JNVST) selection tests.",
      highlights: [
        "Intelligence, Mathematics & General Knowledge focus",
        "Previous year question paper practice & speed tricks",
        "OMR sheet practice & time management drills",
        "Regular mock tests adhering to official exam patterns"
      ]
    },
    {
      id: "upsc-kpsc-foundation",
      category: "Govt Exam Foundation",
      title: "UPSC & KPSC Foundation (6th to 10th)",
      subtitle: "Early Civil Services & Administration Mindset",
      grades: "Classes 6th to 10th",
      ageGroup: "11 to 16 Years",
      icon: "Award",
      badge: "Future Leaders",
      description: "Building early analytical thinking, general studies, history, polity, geography, and current affairs knowledge for future UPSC (IAS/IPS) & KPSC aspirants.",
      highlights: [
        "NCERT-based foundational General Studies modules",
        "Current affairs & newspaper analysis for school kids",
        "Logical reasoning, mental ability & essay writing",
        "Interactive seminars with administrative officers"
      ]
    },
    {
      id: "personalised-1on1-coaching",
      category: "Personalized",
      title: "1:1 Personalised Coaching & Homework Support",
      subtitle: "Tailored one-on-one mentor attention",
      grades: "Classes 1st to 12th",
      ageGroup: "6 to 18 Years",
      icon: "Users",
      badge: "Custom Learning",
      description: "Individual dedicated tutor coaching for students needing special attention, custom pace learning, or targeted subject improvement.",
      highlights: [
        "1:1 dedicated teacher assignment",
        "Complete Homework & School Project assistance",
        "Customized lesson plans & flexible timings",
        "Continuous feedback to parents on progress"
      ]
    },
    {
      id: "defence-banking-govt-prep",
      category: "Competitive Division",
      title: "Defence & Banking Foundation Prep",
      subtitle: "Central & State Govt Exam Readiness",
      grades: "High School, PUC & Degree Aspirants",
      ageGroup: "14+ Years",
      icon: "Target",
      badge: "Govt Career Focus",
      description: "Fundamental training in Quantitative Aptitude, Reasoning, English, and General Awareness for Defence (NDA/CDS), Banking (IBPS/SBI), and Central/State Govt Exams.",
      highlights: [
        "Quantitative Aptitude & Shortcut math methods",
        "Reasoning Ability & General Knowledge drills",
        "Mock Tests & Computer-Based Exam replica",
        "Comprehensive study materials & practice sets"
      ]
    },
    {
      id: "preschool-early-learning",
      category: "Preschool",
      title: "Samskruthi International Preschool",
      subtitle: "Nurturing curiosity, habits & social skills",
      grades: "Playgroup, Nursery, LKG, UKG",
      ageGroup: "2 to 6 Years",
      icon: "Baby",
      badge: "Popular for Early Years",
      description: "A fun-filled, play-based Montessori & playway curriculum designed to foster emotional resilience, cognitive development, language fluency, and moral values.",
      highlights: [
        "Play-based & Experiential Montessori Learning",
        "Fine Motor Skills & Sensory Development",
        "Phonetic & Early English Communication",
        "Theme-Based Activity Rooms & Outdoor Play",
        "Safe, Hygienic & CCTV-Monitored Environment"
      ]
    },
    {
      id: "puc-coaching",
      category: "Pre-University (PUC)",
      title: "PUC Academic Excellence (1st & 2nd PUC)",
      subtitle: "Science & Commerce Streams",
      grades: "11th & 12th Std (PUC I & II)",
      ageGroup: "16 to 18 Years",
      icon: "GraduationCap",
      badge: "Top Board Results",
      description: "Rigorous academic coaching for 1st & 2nd PUC students with in-depth concept delivery, practical lab assistance, and board-oriented revision modules.",
      highlights: [
        "PCMB & PCMC Science Combinations",
        "CEBA & SEBA Commerce Combinations",
        "Experienced PU College Lecturers & Authors",
        "Structured Revision & Model Exam Series",
        "Career guidance & college counseling support"
      ]
    },
    {
      id: "neet-jee-kcet",
      category: "Competitive Prep",
      title: "NEET / JEE / KCET Foundation & Crash Course",
      subtitle: "Cracking Karnataka & All-India Entrance Exams",
      grades: "Classes 8th to 12th & Repeaters",
      ageGroup: "14 to 19 Years",
      icon: "Target",
      badge: "High Rank Focus",
      description: "Specialized competitive coaching designed by expert rank-makers. Master speed, accuracy, shortcuts, and problem-solving techniques for NEET, JEE, and KCET.",
      highlights: [
        "Daily Practice Problems (DPP) & Question Bank",
        "Computer-Based Test (CBT) Replica Exams",
        "Shortcut methods & time-management techniques",
        "Detailed performance analytics dashboard",
        "Personalized mentoring by Top Medical/Engineering alumni"
      ]
    }
  ],


  founderQuote: {
    badge: "From Founder’s Desk",
    quote: "Education is not just about marks, it's about mastering concepts for lifelong success",
    author: "Vishwas V.",
    role: "Founder & Managing Director, Samskruthi Academy",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80"
  },

  testimonials: [
    {
      id: "text-1",
      author: "Rajesh & Kavitha Gowda",
      role: "Parents of SSLC Topper (98.2%)",
      branch: "Head Office, Mandya",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      quote: "Samskruthi Academy transformed our son's study discipline. The faculty doesn't just teach for marks; they instil strong character and genuine understanding."
    },
    {
      id: "text-2",
      author: "Sneha M.",
      role: "KCET Rank 412 Student",
      branch: "5th Branch, Kuvempu Nagar, Mysuru",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
      quote: "The NEET & KCET coaching at Mysuru Kuvempu Nagar branch is unparalleled. The faculty gives personal attention to every doubt, and weekly CBT mock tests built my exam confidence immensely!"
    },
    {
      id: "text-3",
      author: "Dr. Ananth & Deepa S.",
      role: "Parents of Preschooler",
      branch: "Samskruthi International Preschool, Mandya",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      quote: "Sending our daughter to Samskruthi International Preschool was the best decision. She learned to speak fluently and shows immense curiosity every single day!"
    },
    {
      id: "text-4",
      author: "Manjunath Swamy",
      role: "Parent of 2nd PUC Student",
      branch: "4th Branch, Chamundeshwari Nagar, Mandya",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
      quote: "Exceptional coaching for 2nd PUC Science! The lecturers at Chamundeshwari Nagar branch are easily accessible and provide excellent notes that helped my son score 96% in PCMB."
    },
    {
      id: "text-5",
      author: "Priyanka N.",
      role: "Class 9 CBSE Student",
      branch: "2nd Branch, Ashok Nagar, Mandya",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
      quote: "Math used to scare me until I joined Samskruthi Academy. The teachers use real-life examples and shortcut tricks. Now Math is my favorite subject!"
    }
  ],


  blogPosts: [
    {
      slug: "effective-study-habits-board-exams",
      title: "10 Proven Study Strategies to Excel in SSLC & PUC Board Exams",
      category: "Exam Guide",
      author: "Principal Desk",
      date: "September 15, 2026",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80",
      excerpt: "Master time management, conceptual clarity, and strategic revision with these expert-backed tips designed for Karnataka SSLC and PUC students.",
      seoTitle: "10 Study Habits for SSLC & PUC Exams | Samskruthi Academy Blog",
      seoDescription: "Discover how students in Mandya and Mysuru can boost their board exam scores with proven time management and memory retention techniques.",
      content: `
Board exams represent a major milestone in every student's academic journey. Whether you are preparing for the SSLC (Class 10) or 2nd PUC examinations in Karnataka, success isn't just about studying hard — it's about studying smart.

At Samskruthi Academy, our top rankers follow a structured regimen that balances concept mastery with mental well-being. Here are the 10 proven strategies to help you score 95%+ in your board exams:

### 1. Understand the Weightage & Blueprint
Before diving into textbook chapters, review the official KSEAB / Karnataka Board blueprint. Focus maximum study hours on high-weightage chapters first while ensuring you don't skip lower-weightage topics completely.

### 2. Follow the Pomodoro Technique
Studying continuously for hours causes mental fatigue. Break your study time into 45-minute focused bursts followed by a 10-minute relaxation break.

### 3. Build Active Recall Notes
Instead of passively re-reading textbooks, write down key formulas, definitions, and diagrams from memory. Active recall strengthens neural pathways for long-term retention.

### 4. Solve Past 5 Years' Model Papers
Practicing previous year question papers familiarizes you with the question patterns and trains your exam time management.

### 5. Prioritize NCERT & Board Textbooks
Board exams strictly adhere to prescribed textbooks. Master every example problem, numerical, and exercise before referring to additional reference guides.

---
> "Education builds character — and disciplined preparation builds confidence."
---

### Contact Samskruthi Academy for Mentorship
Need personalized guidance? Visit any of our 5 branches in Mandya & Mysuru or book a FREE demo session today!
      `,
      tags: ["SSLC Prep", "PUC Coaching", "Study Tips", "Mandya Education", "Exam Guide"]
    },
    {
      slug: "early-childhood-education-benefits",
      title: "Why Early Childhood Education Shapes Lifetime Character & Learning Ability",
      category: "Parenting & Early Years",
      author: "Preschool Director",
      date: "August 28, 2026",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
      excerpt: "90% of brain development occurs before age 5. Discover how Samskruthi International Preschool fosters curiosity, social skills, and moral values.",
      seoTitle: "Importance of Early Childhood Education | Samskruthi International Preschool Mandya",
      seoDescription: "Learn why early childhood education matters and how Samskruthi International Preschool in Neharu Nagar, Mandya builds a strong foundation.",
      content: `
The first six years of a child's life are a critical window of neurodevelopment. Research confirms that over 90% of a human child's brain connectivity develops before entering primary school.

At Samskruthi International Preschool in Neharu Nagar, Mandya, we blend Montessori playway methods with character-building activities.

### Key Pillars of Early Childhood Excellence:
1. **Sensory & Fine Motor Skills**: Hands-on activities like clay modeling, puzzles, and sensory trays strengthen hand-eye coordination.
2. **Language Fluency & Phonetics**: Interactive storytelling and phonetic games build confident early communicators.
3. **Emotional Resilience & Empathy**: Group play teaches children sharing, teamwork, and kindness.
4. **Curiosity-Driven Learning**: We encourage children to ask "why" and explore their surroundings safely.

---
> Visit Samskruthi International Preschool at Neharu Nagar, 2nd Cross (Opposite RSS Office), Mandya to experience our child-centric atmosphere!
      `,
      tags: ["Preschool Mandya", "Early Education", "Montessori", "Parenting Tips", "Child Development"]
    },
    {
      slug: "cracking-neet-kcet-from-class-9",
      title: "How Starting NEET & KCET Foundation Early Gives Students a Competitive Edge",
      category: "Career & Competitive",
      author: "Academic Director",
      date: "August 10, 2026",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80",
      excerpt: "Starting competitive exam prep in high school eliminates last-minute stress and builds solid analytical thinking required for NEET & JEE.",
      seoTitle: "NEET & KCET Foundation Classes in Mandya & Mysuru | Samskruthi Academy",
      seoDescription: "Discover how early foundation classes in Class 8, 9 & 10 prepare students for top medical and engineering ranks in NEET, JEE & KCET.",
      content: `
Entrance exams like NEET (UG), JEE Mains, and KCET test deeper conceptual understanding, speed, and problem-solving aptitude. Waiting until 2nd PUC to begin preparation often leads to overwhelming pressure.

### Advantages of an Early Foundation Program:
- **Strong Fundamentals**: Concepts in Physics, Chemistry, and Math taught in Class 9 and 10 form the base for Class 11 and 12 syllabus.
- **Speed & Accuracy**: Regular exposure to multiple-choice questions (MCQs) develops fast calculation skills and logical deduction.
- **Exam Temperament**: Taking weekly computer-based test (CBT) mocks desensitizes students to exam anxiety.

Samskruthi Academy offers integrated foundation batches at our campuses in Mandya and Mysuru (Kuvempu Nagar). Book a FREE counseling and demo class now!
      `,
      tags: ["NEET Coaching", "KCET Prep", "Foundation Course", "Mysuru Coaching", "JEE Mains"]
    }
  ],

  faqs: [
    {
      question: "Where are Samskruthi Academy branches located?",
      answer: "We have 4 branches in Mandya (Head Office at 100 Feet Rd Ashok Nagar, Preschool at Neharu Nagar, 2nd Branch at Ashok Nagar, 4th Branch at Chamundeshwari Nagar) and 1 major branch in Mysuru (5th Branch at Anikethana Rd, Jayanagar, Kuvempu Nagar)."
    },
    {
      question: "How do I book a FREE Demo Class?",
      answer: "You can click on the 'Book Free Demo Class' button on our website, fill in your details, or call us directly at +91 98765 43210. Our academic coordinator will schedule a convenient session at your nearest branch."
    },
    {
      question: "What courses do you offer for school and college students?",
      answer: "We provide comprehensive coaching for Class 1st - 10th (CBSE & Karnataka State Board), 1st & 2nd PUC (Science PCMB/PCMC and Commerce CEBA/SEBA), NEET/JEE/KCET foundation, Samskruthi International Preschooling, and skill programs like Abacus & Vedic Maths."
    },
    {
      question: "What are the branch timings?",
      answer: "Most of our academy branches operate Monday to Saturday from 8:00 AM to 7:30 PM. Samskruthi International Preschool operates from 9:00 AM to 4:00 PM."
    },
    {
      question: "Do you offer student transport facilities?",
      answer: "Yes, safe van and auto transport facilities are available for selected routes across Mandya and Mysuru branch locations. Contact the specific branch office for route details."
    },
    {
      question: "How are parents informed about student academic progress?",
      answer: "We conduct regular Parent-Teacher Meetings (PTMs), send weekly test score SMS/WhatsApp reports, and maintain an open-door policy for parents to consult mentors anytime."
    }
  ],

  partnerBacklinks: [
    { name: "Education India Directory", url: "https://www.educationindia.in", category: "Education Partner" },
    { name: "SchoolMyKids Karnataka", url: "https://www.schoolmykids.com", category: "Preschool Listing" },
    { name: "Shiksha Academies", url: "https://www.shiksha.com", category: "Coaching Directory" },
    { name: "Sulekha Education Mysuru", url: "https://www.sulekha.com", category: "Verified Institute" },
    { name: "Justdial Mandya Education", url: "https://www.justdial.com", category: "Local Directory" }
  ]
};
