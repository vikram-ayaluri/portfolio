import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'ayaluri.vikram@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Vikram, I am reaching out to you because...',

    // oldPortfolio: 'https://www.legacy.me.toinfinite.dev',
};
export const HIRE_INFO = {
    email: 'ayaluri.vikram@gmail.com',

    emailSubject: "",
    emailBody: '',

    // oldPortfolio: 'https://www.legacy.me.toinfinite.dev',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/vikram-ayaluri' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/vikram-ayaluri' },
    // { name: 'facebook', url: 'https://www.facebook.com/tajmirul.2000' },
    // { name: 'Old Version', url: GENERAL_INFO.oldPortfolio },
];

export const MY_STACK = {
    frontend: [
        {
            name: 'Javascript',
            icon: '/logo/js.png',
        },
        {
            name: 'Typescript',
            icon: '/logo/ts.png',
        },
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'Angular',
            icon: '/logo/angular.png',
        },
        {
            name: 'Next.js',
            icon: '/logo/next.png',
        },
        {
            name: 'Redux',
            icon: '/logo/redux.png',
        },
        {
            name: 'Rxjs',
            icon: '/logo/rxjs.svg',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
        {
            name: 'GSAP',
            icon: '/logo/gsap.png',
        },
        // {
        //     name: 'Frammer Motion',
        //     icon: '/logo/framer-motion.png',
        // },
        {
            name: 'SASS',
            icon: '/logo/sass.png',
        },
        // {
        //     name: 'Bootstrap',
        //     icon: '/logo/bootstrap.svg',
        // },
    ],
    backend: [
        {
            name: 'Node.js',
            icon: '/logo/node.png',
        },
        {
            name: 'Spring Boot',
            icon: '/logo/spring-boot.svg',
        },
        {
            name: 'Express.js',
            icon: '/logo/express.png',
        },
    ],
    database: [
        {
            name: 'MySQL',
            icon: '/logo/mysql.svg',
        },
        {
            name: 'PostgreSQL',
            icon: '/logo/postgreSQL.png',
        },
        {
            name: 'MongoDB',
            icon: '/logo/mongodb.svg',
        },
        // {
        //     name: 'Prisma',
        //     icon: '/logo/prisma.png',
        // },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'Linux',
            icon: '/logo/linux.png',
        },
        {
            name: 'Docker',
            icon: '/logo/docker.svg',
        },
        {
            name: 'AWS',
            icon: '/logo/aws.png',
        },
        {
            name: 'Cloudflare',
            icon: '/logo/cloudflare.svg',
        },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'Hive By Smart Interviews',
        slug: 'hive',
        techStack: [
            'Angular',
            'NodeJs',
            'AWS (EC2, S3, Auto Scaling)',
            'Docker',
            'Redis',
        ],
        thumbnail: '/projects/thumbnail/epikcart.jpg',
        longThumbnail: '/projects/long/epikcart.jpg',
        images: [
            '/projects/images/epikcart-1.png',
            '/projects/images/epikcart-2.png',
            '/projects/images/epikcart-3.png',
            '/projects/images/epikcart-4.png',
            '/projects/images/epikcart-5.png',
        ],
        liveUrl: 'https://hive.smartinterviews.in/',
        year: 2023,
        description: `At Smart Interviews, I led the development of Hive, a proprietary platform designed to host coding assessments, contests, and technical interviews—completely replacing reliance on external tools like HackerRank.`,
        role: `As the frontend developer in a team of five, I:\n- Built the frontend from scratch using React, Redux, RTK Query, and Tailwind CSS.\n- Developed dynamic filtering logic for the product search page with admin-configurable parameters.\n- Integrated multi-language support with React i18n, including RTL handling.\n- Delivered a responsive, user-friendly interface in collaboration with the UI/UX designer.\n`,
        contributions: [
            "Built using the MEAN stack, Docker, and deployed on AWS with Auto Scaling, Hive dynamically handles thousands of users by spinning up EC2 instances running Docker containers.",
            "Implemented a secure code execution engine using C system calls to sandbox and run untrusted code with memory and time constraints.",
            "Integrated RabbitMQ to manage queued code execution requests efficiently and Redis for fast access to frequently requested data like leaderboard scores and test cases.",
            "Hive led to a 40% increase in client acquisition, significantly cut down infrastructure costs by 60%, and gave us full control over contest creation, security, and scalability."
          ]
    },
    {
        title: 'CoSketch',
        slug: 'cosketch',
        techStack: [
            'Next.js',
            'Tailwind CSS',
            'Liveblocks', 
            'Fabric.js'
        ],
        thumbnail: '/projects/thumbnail/resume-roaster.jpg',
        longThumbnail: '/projects/long/resume-roaster.jpg',
        images: [
            '/projects/images/resume-roaster-1.png',
            '/projects/images/resume-roaster-2.png',
            '/projects/images/resume-roaster-3.png',
        ],
        liveUrl: '',
        year: 2023,
        description:'I built a full-featured, real-time collaborative design platform that empowers multiple users to create, edit, and visualize graphics together seamlessly.',
        role: `As the sole developer and business owner, I:\n- Designed and developed the platform end-to-end using Next.js, PostgreSQL, Prisma, and Tailwind CSS.\n- Integrated GPT-4 for AI-driven feedback and insights.\n- Implemented complex SQL queries, including one to identify the top two resumes based on user points.`,
        contributions: [
            "Leveraged Next.js for frontend architecture and Liveblocks to implement real-time synchronization, ensuring all user actions (drawing, moving objects, etc.) are instantly reflected across sessions.",
            "Integrated Fabric.js to build a dynamic canvas experience with tools like drawing, object manipulation, undo/redo, and multi-user cursor tracking, delivering a fluid and interactive workspace.",
            "Crafted a responsive and intuitive UI with Tailwind CSS, designed for optimal performance and accessibility across desktops and mobile devices."
          ]
    },
    {
        title: 'Trustly',
        slug: 'trustly',
        techStack: [
            'React.js',
            'Spring Boot', 'PostgreSQL', 'AWS S3', 'OpenAI API'
,
        ],
        thumbnail: '/projects/thumbnail/property-pro.jpg',
        longThumbnail: '/projects/long/property-pro.jpg',
        images: [
            '/projects/images/property-pro-1.png',
            '/projects/images/property-pro-2.png',
            '/projects/images/property-pro-3.png',
        ],
        liveUrl: '',
        year: 2023,
        description:
            'I designed and developed a platform that helps brands collect and showcase testimonials in various formats—video, audio, and text—to enhance credibility and customer engagement.',
        role: `As the frontend developer, I:\n- Built the frontend using React, Redux, RTK Query, Framer Motion, and Tailwind CSS.\n- Integrated dynamic state management for efficient handling of property data.\n- Implemented multi-language support with React i18n to cater to diverse audiences.\n- Enhanced user interaction with animations and transitions using Framer Motion.`,
        contributions: [
            "Integrated AI transcription using the OpenAI Whisper API, enabling automatic conversion of audio and video reviews into searchable text, improving accessibility and SEO visibility.",
            "Created embeddable widgets and smart testimonial request flows, making it effortless for businesses to request, collect, and display user-generated testimonials across websites and landing pages.",
            "Focused on a smooth user experience across all touchpoints, from submission to showcasing, resulting in increased testimonial conversion and presentation quality."
          ]
    },
    {
        title: 'LetzChat',
        slug: 'letzchat',
        techStack: ['Angular', 'NodeJs', 'ExpressJs', 'MongoDB', 'Socket.io', 'Google OAuth', 'S3'],
        thumbnail: '/projects/thumbnail/consulting-finance.jpg',
        longThumbnail: '/projects/long/consulting-finance.jpg',
        images: [
            '/projects/images/consulting-finance-1.png',
            '/projects/images/consulting-finance-2.png',
            '/projects/images/consulting-finance-3.png',
        ],
        sourceCode: 'https://github.com/Tajmirul/crenotive',
        liveUrl: '',
        year: 2023,
        description:
            'A real-time, single-room chat application that allows users to communicate instantly using text, emojis, and image uploads.',
        role: ``,
        contributions: [
            "Utilized Socket.io for bi-directional real-time communication, ensuring smooth and instant messaging between users.",
            "Implemented Google OAuth2 to streamline user authentication via Gmail, enhancing security and user trust.",
            "Used AWS S3 to handle image uploads and storage, enabling scalable and efficient media sharing.",
          ]
    },
    // {
    //     title: 'devLinks',
    //     slug: 'devLinks',
    //     techStack: ['Next.js', 'Formik', 'Drag & Drop', 'Tailwind CSS'],
    //     thumbnail: '/projects/thumbnail/devLinks.jpg',
    //     longThumbnail: '/projects/long/devLinks.jpg',
    //     images: [
    //         '/projects/images/devLinks-1.png',
    //         '/projects/images/devLinks-2.png',
    //         '/projects/images/devLinks-3.png',
    //     ],
    //     sourceCode: 'https://github.com/Tajmirul/devsLink',
    //     liveUrl: 'https://devlinks-demo.vercel.app/auth/signin',
    //     year: 2023,
    //     description:
    //         'One of the most challenging projects in Frontend Mentor.\n\nI developed a LinkSharing App as part of the Frontend Mentor challenge, utilizing React, Redux, and Tailwind CSS to create a responsive and feature-rich platform. The app allows users to share, save, and explore links, with a focus on intuitive design and smooth navigation. Advanced state management ensures efficient data handling for user interactions.',
    //     role: ``,
    // },
];

export const MY_EXPERIENCE = [
    {
        title: 'Full Stack Developer',
        company: 'Smart Interviews',
        duration: 'June 2021 - July 2023',
        points: [
            "Led engineering efforts to automate manual workflows, replace costly platforms like HackerRank with in-house solutions, and cut frontend load time and infrastructure costs significantly.",
            "Improved backend performance by 70% via distributed caching and automated financial operations by integrating Razorpay, eliminating manual invoice handling.",
            "Delivered full-stack features including a Discord bot, plagiarism detection, and detailed analytics dashboards; also conducted code reviews and mentored junior developers on best practices."
          ]
          
    },
    {
        title: 'Frontend Developer',
        company: 'Spaarks',
        duration: 'June 2020 - May 2021',
        points: [
            "Collaborated with a cross-functional team to build the frontend web application of Spaarks using React, focusing on performance, responsiveness, and modular architecture.",
            "Implemented dynamic UI components and integrated real-time features to enhance user engagement and improve overall UX across devices.",
            "Optimized codebase for scalability and maintainability by leveraging React best practices, lazy loading, and efficient state management."
          ]
          
    },
    // {
    //     title: 'FRONTEND ENGINEER',
    //     company: 'Anchorblock Technology',
    //     duration: 'Oct 2022 - Sep 2023',
    // },
    // {
    //     title: 'Frontend Developer (Part-time)',
    //     company: 'Branex IT',
    //     duration: 'Jan 2022 - Oct 2022',
    // },
];
