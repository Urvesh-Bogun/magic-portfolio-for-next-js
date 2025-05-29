const person = {
  firstName: "Urvesh",
  lastName: "Bogun",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Cybersecurity Analyst",
  myavatar: "/images/myavatar.jpg",
  email: "contact@urveshbogun.com",
  location: "Europe/London", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: [], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Let’s connect</>,
  description: (
    <>
      Whether you're a recruiter or fellow tech enthusiast — let’s start a conversation.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Urvesh-Bogun",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/urvesh-bogun/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Bridging the gap between innovation and secure design</>,
  featured: {
    display: true,
    title: <>Current project: <strong className="ml-4">Spenny - a Buy Now Pay Later Behavoral Tracker</strong></>,
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      Hi. I'm Urvesh Bogun, it's nice to meet you.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  myavatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        <p>
          I am currently pursuing an MSci in Computer Science with Information Security at Royal Holloway, University of London.
          My goal is to leverage cloud technologies to build secure and innovative solutions that have a real-world impact.
        </p>

        <p>
          Whether I’m assisting in reducing cloud vulnerabilities or sharpening my DevSecOps skills, I’m always committed to
          continuous learning, hands-on experimentation, and staying deeply engaged in the tech space.
        </p>

        <p>
          As a volunteer cybersecurity analyst, I have gained a deep understanding of AWS architecture and have assisted
          in fostering a security-first culture. I am driven by my continuous enthusiasm for the field.
        </p>
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Experience",
    experiences: [
      {
        company: "Volunteer Cybersecurity Analyst",
        timeframe: "May 2022 - Present",
        role: "Space Startup (NDA)",
        achievements: [
          <>
            Currently awaiting full environment setup to take on SOC Analyst role
          </>,
          <>
            Successfully prevented  5+ phishing attacks by blocking emails as Gmail admin and educating staff
          </>,
          <>
            Provided AWS security improvent suggestions, like Amazon Macie to help defend against DLP
          </>,
          <>
            Created security documentation aligned with OWASP standards, helping to promote a safety-first company mindset and reduce common vulnerabilities
          </>,
          
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
        ],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "MSci Computer Science with Information Security",
        description: "Royal Holloway, University of London",
        date: "2022 – 2026",
        modules: [
          "Introduction to Information Security",
          "Applications of Cryptography",
          "Critical Infrastructure Security",
          "Computer and Network Security",
          "Digital Forensics",
        ],
      },
    ],
  },
  certifications: {
    display: true,
    title: "Certifications",
    certificates: [
      {
        name: "Security+",
        issuer: "CompTIA",
        date: "currently pursuing",
      },
      {
        name: "Solutions Architecture Job Simulation",
        issuer: "AWS",
        date: "2025",
      },
      {
        name: "Cybersecurity Analyst Job Simulation",
        issuer: "Tata Group",
        date: "2025",
      },
      {
        name: "Microsoft Security, Compliance, and Identity Fundamentals",
        issuer: "ExamPro Training Inc.",
        date: "2025",
      },
      {
        name: "Certified in Cybersecurity (CC)",
        issuer: "ISC2",
        date: "2025",
        link: "https://www.isc2.org/Certifications/CC"
      },
      {
        name: "Introduction to Cisco Packet Tracer",
        issuer: "Cisco",
        date: "2024",
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Skills",
    skills: [
      {
        title: "Programming",
        description: <>Java, SQL, Python</>,
        // optional: leave the array empty if you don't want to display images
        images: [
        ],
      },
      {
        title: "Cloud Security",
        description: <>AWS</>,
        // optional: leave the array empty if you don't want to display images
        images: [
        ],
      },
      {
        title: "Networking",
        description: <>Design, Implementation, and Troubleshooting</>,
        // optional: leave the array empty if you don't want to display images
        images: [
        ],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about cybersecurity and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
