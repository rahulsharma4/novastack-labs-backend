import Blog from '../models/Blog.js';

const initialBlogs = [
  {
    title: "Deep Dive into Next.js 16: Features and Performance Benefits",
    category: "Web Development",
    author: "Elena Rostova",
    role: "Lead Frontend Architect",
    date: "May 25, 2026",
    summary: "Explore the new features in Next.js 16 including advanced Turbopack optimizations, compiler enhancements, and server components performance tricks.",
    tags: ["Next.js", "React", "Frontend", "Web Performance"],
    readTime: "6 min read"
  },
  {
    title: "Optimizing MongoDB Aggregation Pipelines for Enterprise Scale",
    category: "Databases",
    author: "Rahul Bhardwaj",
    role: "Senior Backend Architect",
    date: "May 20, 2026",
    summary: "How to structure, index, and partition complex aggregation queries to process millions of records under 100 milliseconds.",
    tags: ["MongoDB", "NoSQL", "Databases", "Performance"],
    readTime: "8 min read"
  },
  {
    title: "Step-by-Step Guide to Dockerizing Express.js Microservices",
    category: "DevOps",
    author: "Marcus Chen",
    role: "DevOps Engineer",
    date: "May 18, 2026",
    summary: "Learn best practices for writing lightweight Dockerfiles, setting up local docker-compose environments, and production multi-stage builds.",
    tags: ["Docker", "Express.js", "DevOps", "Microservices"],
    readTime: "5 min read"
  },
  {
    title: "Improving User Experience with Micro-Animations in Framer Motion",
    category: "UI/UX Design",
    author: "Sofia Loren",
    role: "UI/UX Design Lead",
    date: "May 15, 2026",
    summary: "Why subtle page transitions and hover interactions can increase user engagement and how to implement them without performance drops.",
    tags: ["Framer Motion", "Animations", "UI/UX", "Tailwind CSS"],
    readTime: "5 min read"
  },
  {
    title: "How to Build HIPAA Compliant SaaS Platforms: The Essential Checklist",
    category: "Healthcare Technology",
    author: "Sarah Jenkins",
    role: "Compliance & Security Expert",
    date: "May 10, 2026",
    summary: "An overview of encryption protocols, access controls, audit logs, and hosting configurations needed to secure healthcare data.",
    tags: ["HIPAA", "Healthcare", "SaaS", "AWS"],
    readTime: "10 min read"
  },
  {
    title: "Achieving 100/100 on Google Lighthouse: Mobile Speed Optimization",
    category: "SEO Optimization",
    author: "Devid Miller",
    role: "Technical SEO Director",
    date: "May 08, 2026",
    summary: "Learn the core techniques we use at NovaStack Labs to optimize Largest Contentful Paint (LCP) and Cumulative Layout Shift (CLS) on mobile devices.",
    tags: ["SEO", "Lighthouse", "Web Performance", "Core Web Vitals"],
    readTime: "7 min read"
  },
  {
    title: "Detecting and Debugging Memory Leaks in Node.js Applications",
    category: "Backend",
    author: "Rahul Bhardwaj",
    role: "Senior Backend Architect",
    date: "May 05, 2026",
    summary: "Use chrome devtools and node heap snapshots to track down memory leaks causing system crashes under load.",
    tags: ["Node.js", "Debugging", "Backend", "Performance Optimization"],
    readTime: "9 min read"
  },
  {
    title: "State Management and Navigation Patterns in React Native Apps",
    category: "Mobile Development",
    author: "Alex Mercer",
    role: "Mobile App Lead",
    date: "May 02, 2026",
    summary: "Best practices for setting up React Navigation and combining it with lightweight state hooks for lag-free mobile experiences.",
    tags: ["React Native", "Mobile", "State Management", "iOS & Android"],
    readTime: "6 min read"
  },
  {
    title: "Configuring Nginx as a Secure Reverse Proxy & Load Balancer",
    category: "Cloud & DevOps",
    author: "Marcus Chen",
    role: "DevOps Engineer",
    date: "April 28, 2026",
    summary: "A production-grade config for Nginx handling SSL certificates, rate limiting, and round-robin traffic routing.",
    tags: ["Nginx", "DevOps", "SSL", "Load Balancing"],
    readTime: "6 min read"
  },
  {
    title: "PostgreSQL vs MongoDB: Choosing the Right Database for SaaS Platforms",
    category: "Databases",
    author: "Elena Rostova",
    role: "Lead Frontend Architect",
    date: "April 25, 2026",
    summary: "We compare schemas, query capabilities, scalability, and developer experience to help you make an informed choice.",
    tags: ["PostgreSQL", "MongoDB", "Databases", "SaaS Architecture"],
    readTime: "7 min read"
  },
  {
    title: "Integrating OpenAI and LLMs into Existing SaaS Dashboards",
    category: "AI Integration",
    author: "Sanjay Sen",
    role: "AI Integration specialist",
    date: "April 22, 2026",
    summary: "How to securely call AI models, handle stream payloads, implement chat memory, and manage token consumption costs.",
    tags: ["AI", "OpenAI", "SaaS", "Node.js"],
    readTime: "8 min read"
  },
  {
    title: "Writing Maintainable JavaScript in Large Scale Frontend Apps",
    category: "Web Development",
    author: "Elena Rostova",
    role: "Lead Frontend Architect",
    date: "April 18, 2026",
    summary: "Simple strategies like folder modularization, dependency inversion, and strict separation of concern to keep your JSX files clean.",
    tags: ["JavaScript", "Clean Code", "Web Architecture"],
    readTime: "5 min read"
  },
  {
    title: "Configuring PM2 for Zero-Downtime Node.js Deployments",
    category: "DevOps",
    author: "Marcus Chen",
    role: "DevOps Engineer",
    date: "April 15, 2026",
    summary: "How to use PM2 cluster mode to run multiple server nodes concurrently and execute rolling reloads during deployments.",
    tags: ["PM2", "Node.js", "DevOps", "Deployment"],
    readTime: "5 min read"
  },
  {
    title: "How to Build a Scalable Design System in Tailwind CSS v4",
    category: "UI/UX Design",
    author: "Sofia Loren",
    role: "UI/UX Design Lead",
    date: "April 12, 2026",
    summary: "Learn how to define theme variables, layout spacing rules, and reusable CSS components to accelerate multi-brand developments.",
    tags: ["Tailwind CSS", "Design System", "CSS", "UI/UX"],
    readTime: "7 min read"
  },
  {
    title: "Hosting Node.js and Next.js Apps on DigitalOcean VPS",
    category: "Cloud & DevOps",
    author: "Marcus Chen",
    role: "DevOps Engineer",
    date: "April 08, 2026",
    summary: "A budget-friendly guide to configuring droplet firewalls, installing node runtimes, and mapping domains to your apps.",
    tags: ["DigitalOcean", "VPS", "Linux", "Deployment"],
    readTime: "8 min read"
  },
  {
    title: "10 Technical Changes to Boost E-commerce Conversion Rates",
    category: "Ecommerce",
    author: "Devid Miller",
    role: "Technical SEO Director",
    date: "April 05, 2026",
    summary: "From image lazy loading to checkout optimization: tiny code adjustments that directly impact client conversion metrics.",
    tags: ["Ecommerce", "Conversions", "Web Performance", "UX"],
    readTime: "6 min read"
  },
  {
    title: "Secure Direct-to-S3 File Uploads from Next.js Clients",
    category: "Web Development",
    author: "Elena Rostova",
    role: "Lead Frontend Architect",
    date: "April 02, 2026",
    summary: "Implement presigned URLs in your Node backend to allow secure, fast image and video uploads directly to Amazon S3 buckets.",
    tags: ["AWS S3", "Next.js", "Express", "Node.js"],
    readTime: "6 min read"
  },
  {
    title: "Why Off-the-Shelf CRMs are Costing Your Business Money",
    category: "Business Technology",
    author: "Sarah Jenkins",
    role: "Compliance & Security Expert",
    date: "March 28, 2026",
    summary: "The business case for custom CRM/ERP development: saving on license fees and creating workflows mapped to your business.",
    tags: ["CRM", "ERP", "Custom Software", "ROI"],
    readTime: "7 min read"
  },
  {
    title: "REST APIs vs GraphQL for Modern SaaS Applications",
    category: "Web Development",
    author: "Rahul Bhardwaj",
    role: "Senior Backend Architect",
    date: "March 25, 2026",
    summary: "Analyzing data payloads, endpoint maintenance, type safety, and cache invalidation workflows in both protocols.",
    tags: ["API Development", "REST", "GraphQL", "Backend Development"],
    readTime: "6 min read"
  },
  {
    title: "VPS Hosting vs Serverless: Which is Better for Startups?",
    category: "Cloud & DevOps",
    author: "Marcus Chen",
    role: "DevOps Engineer",
    date: "March 22, 2026",
    summary: "We compare pricing predictability, latency overheads, cold starts, and environment configurations for early startups.",
    tags: ["VPS", "Serverless", "AWS Lambda", "Startups"],
    readTime: "7 min read"
  },
  {
    title: "Implementing Reliable Push Notifications in React Native",
    category: "Mobile Development",
    author: "Alex Mercer",
    role: "Mobile App Lead",
    date: "March 18, 2026",
    summary: "How to configure Firebase Cloud Messaging (FCM) and APNS to achieve near-instant delivery of notifications to devices.",
    tags: ["React Native", "Push Notifications", "Firebase", "APNS"],
    readTime: "6 min read"
  },
  {
    title: "Architecting Multi-Tenant SaaS Databases in MongoDB",
    category: "Databases",
    author: "Rahul Bhardwaj",
    role: "Senior Backend Architect",
    date: "March 15, 2026",
    summary: "Logical data isolation vs separate databases: analyzing performance, compliance, and cost considerations for SaaS founders.",
    tags: ["MongoDB", "SaaS", "Multi-tenancy", "Security"],
    readTime: "9 min read"
  },
  {
    title: "Designing Accessible Websites: Guide to WCAG Compliance",
    category: "UI/UX Design",
    author: "Sofia Loren",
    role: "UI/UX Design Lead",
    date: "March 12, 2026",
    summary: "Essential guidelines for contrast, ARIA landmarks, keyboard navigation, and screen reader compatibility in Next.js applications.",
    tags: ["Accessibility", "WCAG", "UI/UX", "Next.js"],
    readTime: "6 min read"
  },
  {
    title: "Preventing Brute Force and DDoS with API Rate Limiting",
    category: "Backend",
    author: "Rahul Bhardwaj",
    role: "Senior Backend Architect",
    date: "March 08, 2026",
    summary: "Use Redis and express-rate-limit to protect your public endpoints from overload and malicious traffic spikes.",
    tags: ["Security", "Express.js", "Redis", "Backend"],
    readTime: "5 min read"
  },
  {
    title: "Why Continuous Website Maintenance is Vital for Brand Authority",
    category: "Business Technology",
    author: "Devid Miller",
    role: "Technical SEO Director",
    date: "March 05, 2026",
    summary: "How outdated packages, broken links, and staleness can slowly degrade search rankings and customer trust.",
    tags: ["Maintenance", "SEO", "Security Updates", "Business Strategy"],
    readTime: "5 min read"
  }
];

export const seedBlogs = async () => {
  try {
    // Clear old seeded documents to update to the new schema
    await Blog.deleteMany({});
    
    const seededList = initialBlogs.map((b, idx) => {
      const slug = b.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      const content = `
        <div class="blog-rich-text">
          <h2 class="text-md font-bold text-slate-900 mb-4">${b.title}</h2>
          <p class="text-slate-700 leading-relaxed mb-6">${b.summary}</p>
          <h3 class="text-sm font-bold text-slate-800 mb-3">Key Technical Principles</h3>
          <p class="text-slate-600 leading-relaxed mb-4">When developing enterprise systems, architectural decisions dictate scaling boundaries. By prioritizing cache layers, compounding database indexes, and streamlining frontends, application responsiveness increases by orders of magnitude.</p>
          <ul class="list-disc pl-5 text-slate-600 flex flex-col gap-2 mb-6">
            <li><strong>Optimized Performance:</strong> Minimize server loads and response metrics.</li>
            <li><strong>Secured Datasets:</strong> Restrict system inputs using validation pipelines.</li>
            <li><strong>Automated Scaling:</strong> Coordinate network resources during spike periods.</li>
          </ul>
          <p class="text-slate-600 leading-relaxed">This post outlines the exact mitigation scripts we employ at NovaStack Labs to reduce query latency, partition database nodes, and cache configurations.</p>
        </div>
      `;
      // Premium Unsplash developer/server stock photos
      const images = [
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop&q=60", 
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=60", 
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=60", 
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=60", 
        "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&auto=format&fit=crop&q=60"
      ];
      const imageUrl = images[idx % images.length];

      return {
        ...b,
        slug,
        content,
        cssContent: ".blog-rich-text h2 { color: #4f46e5; }",
        imageUrl,
        status: "Published"
      };
    });

    await Blog.insertMany(seededList);
    console.log('Database Seeding: Pre-populated 25 technology articles with rich layouts successfully.');
  } catch (error) {
    console.error('Database Seeding Error:', error);
  }
};
