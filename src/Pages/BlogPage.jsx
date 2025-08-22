import React, { useState, useEffect } from "react";
import {
  Calendar,
  Clock,
  Tag,
  Eye,
  Search,
  Filter,
  BookOpen,
  Zap,
  Star,
  ArrowRight,
  MessageCircle,
  Share2,
  Heart,
  X,
} from "lucide-react";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([
    {
      id: "12",
      title:
        "Building BusMate LK: Lessons from Developing a Real-Time Transport Web App",
      excerpt:
        "A deep dive into my experience developing BusMate LK, a React-based web app that helps users track buses in Sri Lanka in real-time.",
      content:
        "Working on BusMate LK was one of the most rewarding projects in my journey as a front-end developer. The goal was simple: create a web application that allows users to track buses, plan trips, and get real-time updates efficiently.\n\n**1. Defining the Scope and Goals**\nBefore writing a single line of code, I focused on understanding the core needs of commuters: finding bus routes, estimating arrival times, and offering a seamless user interface. I mapped out features, prioritized MVP functionalities, and created wireframes for the UI.\n\n**2. Choosing the Tech Stack**\nSince performance and scalability were priorities, I chose React for the front-end and Tailwind CSS for styling. Framer Motion was used to add smooth animations, Zustand for state management, and Firebase for backend and real-time database capabilities. This stack allowed rapid development while maintaining a high-quality user experience.\n\n**3. Handling Real-Time Data**\nOne of the biggest challenges was integrating real-time bus location data. Firebase’s real-time database made this possible, allowing users to see live bus positions without refreshing the page. Ensuring minimal latency and smooth updates was critical for usability.\n\n**4. Designing a User-Friendly Interface**\nI focused on simplicity and clarity. Users can search bus routes, view estimated arrival times, and track multiple buses simultaneously. Color-coded routes and intuitive layouts made navigation easy for all age groups.\n\n**5. Testing and Iteration**\nI conducted multiple rounds of testing with friends and potential users to identify pain points. Issues like delayed updates, map pin confusion, and slow loading times were addressed through code optimization and interface tweaks.\n\n**6. Key Takeaways**\n- Real-world projects require balancing user needs, performance, and design.\n- State management and real-time data handling are crucial for interactive apps.\n- Continuous testing and iteration improve both UX and reliability.\n- Documentation and clean code help future scalability and team collaboration.\n\n**Final Thoughts**\nBusMate LK was more than just a coding project — it was a real solution for commuters. The experience taught me how to translate ideas into functional, scalable apps, and how front-end development skills can directly impact user experience. For anyone looking to build practical applications, real-world projects like this are invaluable learning experiences.",
      category: "CAREER",
      tags: ["Frontend", "React", "Real-Time Apps", "Experience"],
      readTime: "9 min read",
      date: "2025-08-22",
      views: 410,
      likes: 26,
      featured: true,
    },
    {
      id: "13",
      title:
        "Building a Salon Inventory Management System: Streamlining Operations with Tech",
      excerpt:
        "A look into my journey developing a custom Salon Inventory Management System that helps salon staff efficiently track stock and manage operations.",
      content:
        "The Salon Inventory Management System was one of my most hands-on projects as a student and developer. The main goal was to simplify how salon staff monitor and manage inventory, ensuring that supplies are tracked accurately and operations run smoothly.\n\n**1. Understanding the Problem**\nSalon staff often struggle with tracking products, handling stock-outs, and manually recording usage. My first step was conducting research, talking to salon owners, and understanding the pain points to ensure the system would be practical and usable.\n\n**2. Planning the Features**\nI created a list of essential features, including:\n- Stock management (viewing, searching, and tracking items)\n- Supplier management (adding and tracking suppliers)\n- Alerts for low stock levels\n- Simple reporting on usage and inventory trends\n\nPrioritizing features was crucial to launch an MVP quickly without overcomplicating the system.\n\n**3. Choosing the Technology Stack**\nI used C# for the desktop application logic and MySQL for database management. The front-end forms were designed for ease of use, with ComboBoxes, buttons, and grids to allow smooth interaction. MySQL Workbench helped in designing the database schema efficiently.\n\n**4. Designing User-Friendly Interfaces**\nKeeping salon staff in mind, the UI was designed to be clean and minimal, with clear navigation and easy-to-read stock lists. Searching, viewing, and monitoring stock could be done quickly, reducing the learning curve for non-technical users.\n\n**5. Testing and Iteration**\nI tested the system extensively with sample data and real use cases. Issues like data entry errors, navigation inconsistencies, and report formatting were addressed. The feedback loop ensured the system met real-world salon needs.\n\n**6. Key Takeaways**\n- Understanding the end-user is essential for building useful software.\n- Simple, focused functionality often outweighs overcomplicated features.\n- Combining C# with MySQL provides a robust backend and flexible front-end experience.\n- Iteration and testing are crucial for reliability and usability.\n\n**Final Thoughts**\nDeveloping the Salon Inventory Management System taught me the importance of user-centric design and practical solutions. It’s a project that demonstrates how thoughtful software can improve day-to-day operations and showcases my ability to build functional, real-world applications from scratch.",
      category: "CAREER",
      tags: ["C#", "MySQL", "Inventory System", "Experience"],
      readTime: "8 min read",
      date: "2025-08-22",
      views: 375,
      likes: 22,
      featured: true,
    },
    {
      id: "01",
      title: "Building Modern Web Applications with React & TypeScript",
      excerpt:
        "Exploring the powerful combination of React and TypeScript for creating scalable, maintainable web applications with enhanced developer experience.",
      content:
        "React has become the go-to library for building dynamic and modern web applications. But as projects grow in size and complexity, maintaining type safety and catching bugs early becomes a challenge. This is where TypeScript comes in — combining the flexibility of JavaScript with the reliability of static typing.\n\n**1. Why React + TypeScript?**\nUsing TypeScript with React gives you the best of both worlds: React’s component-based architecture and TypeScript’s type safety. This combination leads to fewer runtime errors, better tooling support, and improved collaboration on larger teams.\n\n**2. Setting Up Your Project**\nStarting a React + TypeScript project is simple. Tools like Create React App and Vite provide TypeScript templates out of the box. With just one command, you get a project structure ready to scale.\n\nExample setup with Vite:\n```bash\nnpm create vite@latest my-app -- --template react-ts\n```\n\n**3. Typing Props and State**\nTypeScript makes working with props and state more predictable. Instead of relying on assumptions, you define types upfront, which makes your components easier to read and maintain.\n\n```tsx\ntype ButtonProps = {\n  label: string;\n  onClick: () => void;\n};\n\nconst Button: React.FC<ButtonProps> = ({ label, onClick }) => {\n  return <button onClick={onClick}>{label}</button>;\n};\n```\n\n**4. Best Practices**\n- Keep your types simple and reusable.\n- Use interfaces for complex objects.\n- Leverage TypeScript’s utility types like `Partial`, `Pick`, and `Omit`.\n- Combine React Hooks with strong typing for maximum safety.\n\n**5. Advanced Patterns**\nAs your app scales, patterns like higher-order components, custom hooks, and context APIs can be strongly typed for consistency. TypeScript ensures that your refactors won’t break hidden parts of your app.\n\n**6. Real-World Use Cases**\nMany production-level apps (e-commerce sites, dashboards, CRMs) rely on React + TypeScript for long-term maintainability. In my own projects, like inventory management systems and booking platforms, TypeScript has helped reduce errors and make code easier to scale.\n\n**Final Thoughts**\nIf you’re serious about building scalable applications, React + TypeScript is a powerful skill set to master. It not only boosts your productivity but also prepares you for working in professional environments where type safety and maintainability are critical.",
      category: "DEVELOPMENT",
      tags: ["React", "TypeScript", "Web Development"],
      readTime: "5 min read",
      date: "2024-08-20",
      views: 1250,
      likes: 45,
      featured: true,
    },

    {
      id: "02",
      title: "The Future of Full-Stack Development",
      excerpt:
        "A deep dive into emerging trends, technologies, and methodologies that are shaping the future of full-stack development in 2024 and beyond.",
      content:
        "Full-stack development has always been about bridging the gap between frontend and backend — creating applications that are both visually engaging and functionally powerful. But as technology evolves, so does the definition of what it means to be a full-stack developer. The future of full-stack development is being shaped by new tools, methodologies, and expectations.\n\n**1. The Rise of JavaScript Everywhere**\nJavaScript continues to dominate the full-stack world. Frameworks like Next.js, Remix, and NestJS allow developers to build end-to-end solutions without leaving the JavaScript/TypeScript ecosystem. This trend reduces the learning curve and makes it easier for teams to share knowledge across the stack.\n\n**2. Serverless Architectures**\nThe future is serverless. Instead of managing traditional servers, developers are leaning on services like AWS Lambda, Firebase Functions, and Vercel Edge Functions. These allow apps to scale automatically and reduce infrastructure costs, letting full-stack devs focus on building features instead of maintaining servers.\n\n**3. API-First and Microservices**\nFull-stack apps are no longer monoliths. Modern systems are moving toward microservices and API-first designs. REST and GraphQL APIs make it easier to integrate with external services, and developers are building apps that are modular, maintainable, and scalable.\n\n**4. The Impact of AI**\nAI is no longer just a buzzword. Tools like GitHub Copilot, AI-powered search, and personalized recommendation engines are finding their way into everyday apps. Full-stack developers will need to know how to integrate AI models and APIs to deliver smarter user experiences.\n\n**5. DevOps and Automation Skills**\nFuture full-stack developers will need to understand CI/CD pipelines, cloud deployment, and containerization with tools like Docker and Kubernetes. While coding remains central, automation and deployment skills will separate good developers from great ones.\n\n**6. Low-Code and No-Code Collaboration**\nRather than replacing developers, low-code and no-code platforms are becoming collaborative tools. Full-stack developers will often integrate custom code with no-code workflows, speeding up delivery while still maintaining flexibility.\n\n**7. Security and Performance by Default**\nWith cyber threats increasing, security can’t be an afterthought. Full-stack devs are expected to integrate authentication, encryption, and secure APIs right from the start. Performance optimization, caching, and edge computing will also be key to delivering high-quality apps.\n\n**Final Thoughts**\nThe role of a full-stack developer is evolving from 'jack of all trades' to 'architect of experiences.' In 2025 and beyond, successful full-stack developers will not only know frontend and backend but also cloud, AI, and DevOps. It’s an exciting time — the boundaries of what one developer can achieve are expanding faster than ever.",
      category: "TECH TRENDS",
      tags: ["Full-Stack", "Future Tech", "Development"],
      readTime: "8 min read",
      date: "2024-08-15",
      views: 890,
      likes: 32,
      featured: false,
    },
    {
      id: "03",
      title: "UI/UX Design Principles for Developers",
      excerpt:
        "Essential design principles every developer should know to create intuitive, user-friendly interfaces that provide exceptional user experiences.",
      content:
        "As a developer, it’s easy to focus solely on functionality and forget about the user experience. However, a great interface can make or break an application. Understanding fundamental UI/UX principles ensures your apps are not only functional but also intuitive and enjoyable to use.\n\n**1. Prioritize User-Centered Design**\nAlways start by understanding your users. What are their goals? Pain points? Behaviors? Conduct surveys, interviews, or usability tests to guide your design decisions. A developer who thinks like a user will create more engaging interfaces.\n\n**2. Consistency is Key**\nMaintain consistent design patterns, colors, typography, and spacing across your app. Consistency reduces the learning curve and builds trust with users. For example, buttons that look similar should perform similar actions.\n\n**3. Keep It Simple**\nAvoid clutter. Every element on the screen should have a purpose. Minimalist designs improve focus and make navigation intuitive. Remember, simplicity does not mean sacrificing functionality — it means presenting it clearly.\n\n**4. Visual Hierarchy and Layout**\nGuide users’ attention with visual hierarchy. Use size, color, and placement to indicate importance. Group related items together and separate unrelated items with whitespace. Proper hierarchy helps users scan interfaces quickly and understand the flow.\n\n**5. Feedback and Responsiveness**\nInterfaces should respond to user actions immediately. Buttons should provide visual feedback, forms should validate input in real-time, and animations can signal state changes. Feedback makes interactions feel alive and reduces user frustration.\n\n**6. Accessibility Matters**\nDesign for everyone. Use proper color contrast, readable fonts, and support keyboard navigation. Accessibility isn’t just ethical — it broadens your user base and improves usability for all users.\n\n**7. Test, Iterate, Repeat**\nDesign is an iterative process. Conduct usability tests and gather feedback. Watch how real users interact with your app and refine the UI accordingly. Even small tweaks can significantly improve the experience.\n\n**Final Thoughts**\nUI/UX is not just a designer’s responsibility; developers play a crucial role. By understanding these principles and integrating them into your workflow, you can build interfaces that are not only functional but also delightful to use. Remember: the best apps are those that users love to interact with, not just those that work correctly.",
      category: "DESIGN",
      tags: ["UI/UX", "Design", "User Experience"],
      readTime: "6 min read",
      date: "2024-08-10",
      views: 654,
      likes: 28,
      featured: false,
    },
    {
      id: "04",
      title: "Mastering React with Tailwind CSS for Modern UI",
      excerpt:
        "Learn how to build stunning, responsive interfaces quickly by combining React with the power of Tailwind CSS.",
      content:
        "React makes building dynamic UIs simple, but styling can sometimes slow down development — especially when maintaining consistent design across components. Tailwind CSS solves this problem with a utility-first approach, allowing developers to build modern, responsive interfaces quickly and efficiently.\n\n**1. Why Use Tailwind CSS with React?**\nTailwind CSS provides utility classes that help you style components without writing custom CSS for everything. This approach speeds up development and keeps the styling consistent across the application. When combined with React, you can create reusable, responsive components that are easy to maintain.\n\n**2. Setting Up Tailwind with React**\nGetting started is straightforward. Using Create React App or Vite, you can install Tailwind and configure it with PostCSS. Once set up, you can start using utility classes directly in JSX.\n\nExample setup:\n```bash\nnpm install -D tailwindcss postcss autoprefixer\nnpx tailwindcss init -p\n```\nThen add Tailwind directives to your CSS:\n```css\n@tailwind base;\n@tailwind components;\n@tailwind utilities;\n```\n\n**3. Building Reusable Components**\nTailwind encourages creating small, reusable components. For example, buttons, cards, and modals can be built with predefined utility classes and used across the app.\n\n```tsx\nconst Button = ({ label, onClick }) => {\n  return (\n    <button\n      onClick={onClick}\n      className=\"bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition\"\n    >\n      {label}\n    </button>\n  );\n};\n```\n\n**4. Responsive Design Made Simple**\nTailwind’s responsive utilities make designing for multiple screen sizes easy. You can define breakpoints directly in your class names, ensuring your app looks great on desktop, tablet, and mobile.\n\n```tsx\n<div className=\"grid grid-cols-1 md:grid-cols-3 gap-4\">\n  {/* Cards go here */}\n</div>\n```\n\n**5. Managing State and Styling Dynamically**\nIn React, component state can drive dynamic styling. Tailwind classes can be conditionally applied based on state, making it simple to handle themes, active states, or error indicators.\n\n```tsx\n<div className={`${isActive ? 'bg-green-500' : 'bg-gray-300'} p-4`}>Content</div>\n```\n\n**6. Best Practices**\n- Use Tailwind’s config file to define reusable colors, spacing, and fonts.\n- Keep components small and focused.\n- Combine Tailwind with React Hooks and context for scalable state-driven UI.\n- Leverage plugins for forms, typography, and animations for enhanced functionality.\n\n**Final Thoughts**\nUsing React with Tailwind CSS is a game-changer for building modern web applications. It simplifies styling, promotes consistency, and accelerates development. By mastering this combo, you can create beautiful, responsive, and maintainable interfaces efficiently.",
      category: "DEVELOPMENT",
      tags: ["React", "Tailwind CSS", "Frontend"],
      readTime: "7 min read",
      date: "2025-07-01",
      views: 1120,
      likes: 41,
      featured: true,
    },
    {
      id: "05",
      title: "Why Every Developer Should Learn Python in 2025",
      excerpt:
        "From AI to automation, Python continues to dominate. Here’s why learning Python today can future-proof your career.",
      content:
        "Python has become one of the most versatile and in-demand programming languages in the world. From web development and data analytics to AI and automation, Python’s simplicity and powerful libraries make it a must-learn for developers in 2025.\n\n**1. Python’s Versatility**\nPython can be used for a wide range of applications: building web apps with frameworks like Django or Flask, analyzing data with Pandas and NumPy, creating AI models with TensorFlow or PyTorch, and automating repetitive tasks. Its readability and clear syntax make it beginner-friendly, yet powerful enough for advanced projects.\n\n**2. AI and Machine Learning Dominance**\nArtificial intelligence and machine learning are shaping the future of technology, and Python is at the center of it. Its extensive libraries, pre-trained models, and active community make it easier for developers to experiment and implement AI solutions, from chatbots to recommendation systems.\n\n**3. Data Science and Analytics**\nData-driven decisions are critical for businesses. Python simplifies data collection, cleaning, analysis, and visualization. Tools like Matplotlib, Seaborn, and Plotly help turn raw data into actionable insights, making Python indispensable for analysts and developers alike.\n\n**4. Automation and Productivity**\nPython can automate repetitive tasks, such as file management, web scraping, sending emails, or generating reports. This not only saves time but also reduces human error, making it valuable for both personal projects and professional workflows.\n\n**5. Learning Path and Resources**\nStarting with Python is easier than ever. Beginner-friendly tutorials, online courses, and community forums allow you to go from zero to hero. Focus on building small projects first, like a to-do app or a simple scraper, then move to more complex applications like AI models or web platforms.\n\n**6. Why Python Stands the Test of Time**\nDespite being decades old, Python continues to evolve and remain relevant. Its simple syntax, strong community, and diverse libraries ensure that it will be a critical skill for developers in 2025 and beyond.\n\n**Final Thoughts**\nLearning Python is more than just adding a language to your toolkit — it’s a strategic move to future-proof your career. Whether you’re interested in AI, web development, automation, or data analytics, Python gives you the foundation to build, experiment, and innovate effectively.",
      category: "TECH TRENDS",
      tags: ["Python", "AI/ML", "Learning"],
      readTime: "6 min read",
      date: "2025-06-15",
      views: 970,
      likes: 37,
      featured: false,
    },
    {
      id: "06",
      title: "AI in Web Development: Smarter Apps with Less Code",
      excerpt:
        "AI tools are transforming the way we build. Discover how developers can integrate AI into modern web projects for real impact.",
      content:
        "Artificial Intelligence is no longer a futuristic concept — it’s here, and it’s transforming web development. By leveraging AI, developers can create smarter, more personalized applications with less manual coding.\n\n**1. AI-Powered Search and Recommendations**\nOne of the most common applications is AI-powered search and recommendation systems. By analyzing user behavior, AI can suggest content, products, or features that match individual preferences. For example, e-commerce platforms use AI to recommend products based on previous searches and purchases, increasing engagement and conversions.\n\n**2. Chatbots and Virtual Assistants**\nIntegrating AI chatbots into web apps improves customer support and user engagement. Modern tools like OpenAI’s GPT models or Dialogflow can handle FAQs, provide instant responses, and even assist in navigation. This reduces the workload on human support teams and enhances the user experience.\n\n**3. Predictive Analytics**\nAI can analyze data trends to predict user actions, optimize content delivery, and improve decision-making. For instance, analytics dashboards can forecast sales, traffic, or user behavior, helping businesses stay proactive rather than reactive.\n\n**4. Automation and Productivity Boost**\nAI can automate repetitive tasks, such as form validation, content categorization, or even code generation. Tools like GitHub Copilot allow developers to write code faster and reduce errors, letting them focus on more complex logic and creativity.\n\n**5. Personalization at Scale**\nModern users expect tailored experiences. AI enables personalized UI/UX by adapting content, layouts, or notifications based on user preferences. For example, a news website can dynamically reorder articles according to reading habits, making the app feel intuitive and responsive.\n\n**6. Getting Started with AI in Web Development**\n- Start small: Integrate one AI feature, like a recommendation engine or chatbot.\n- Leverage existing APIs: Tools like OpenAI, TensorFlow.js, or Hugging Face provide pre-trained models.\n- Collect data responsibly: Ensure privacy and ethical usage when analyzing user data.\n- Iterate and improve: Use feedback to refine AI interactions.\n\n**Final Thoughts**\nAI is transforming web development by allowing developers to build smarter, more efficient, and highly personalized applications. By integrating AI thoughtfully, you can reduce manual work, enhance user experience, and create apps that feel intelligent and responsive. The future of web apps is not just functional — it’s AI-enhanced and adaptive.",
      category: "AI/ML",
      tags: ["AI", "Web Development", "Future Tech"],
      readTime: "9 min read",
      date: "2025-06-05",
      views: 1254,
      likes: 53,
      featured: true,
    },
    {
      id: "07",
      title: "Becoming a Frontend Engineer with a Project-First Mindset",
      excerpt:
        "The best way to learn isn’t tutorials—it’s building. Here’s how project-based learning shaped my journey as a frontend developer.",
      content:
        "Learning frontend development can feel overwhelming if you rely solely on tutorials or theory. The fastest and most effective way to grow is by building real projects — that’s the project-first mindset.\n\n**1. Why Projects Accelerate Learning**\nWorking on actual projects exposes you to real-world challenges that tutorials rarely cover. From handling state management to optimizing performance and designing responsive interfaces, building projects forces you to solve problems and think critically.\n\n**2. My Personal Roadmap**\nWhen I started, I focused on small projects first: a personal portfolio site, a to-do list app, and a simple calculator. These projects taught me HTML, CSS, and basic JavaScript. Then I moved to more complex apps like e-commerce sites, dashboards, and booking systems, learning React, Tailwind CSS, Firebase, and advanced patterns along the way.\n\n**3. Learning Through Mistakes**\nProjects inevitably involve mistakes, whether it’s a buggy feature, slow performance, or messy code. These mistakes are invaluable — they highlight areas for improvement and teach you debugging, refactoring, and best practices.\n\n**4. Combining Theory and Practice**\nWhile building projects, supplement learning with theory when needed. For example, if you struggle with state management, read about React Hooks. If your CSS gets messy, study utility-first frameworks like Tailwind CSS. Theory reinforces what you encounter in real scenarios.\n\n**5. Focus on End-to-End Understanding**\nBuilding projects teaches you the full cycle: planning, designing UI, implementing features, testing, and deployment. Understanding end-to-end development makes you a more confident and capable frontend engineer.\n\n**6. Showcase Your Work**\nEvery project you build is a portfolio piece. Document your process, highlight challenges, and explain solutions. This not only helps you reflect but also impresses recruiters and clients.\n\n**Final Thoughts**\nA project-first mindset transforms learning from passive to active. By building real-world apps, you gain hands-on experience, solve practical problems, and accelerate your journey to becoming a frontend engineer. Tutorials are useful, but nothing replaces the lessons learned from doing and iterating on actual projects.",
      category: "CAREER",
      tags: ["Frontend", "Projects", "Learning"],
      readTime: "7 min read",
      date: "2025-05-25",
      views: 780,
      likes: 29,
      featured: false,
    },

    {
      id: "10",
      title: "From Idea to Launch: Building a Startup Project as a Student",
      excerpt:
        "Turning a student project into something impactful is possible. Here’s how to go from concept to launch step by step.",
      content:
        "Balancing university life while trying to build something real can feel overwhelming, but it’s also one of the best times to start experimenting with ideas. Student projects don’t have to remain assignments — with the right mindset, they can become the foundation for future startups.\n\n**1. Start With a Problem, Not Just an Idea**\nMany students begin by thinking of a 'cool app' to build. But what makes a project sustainable is solving a real-world problem. For example, I worked on an inventory management system for salons and later a boarding finder app. Both were born from actual issues people face daily.\n\n**2. Validate Early**\nBefore writing a single line of code, talk to potential users. Ask salon owners how they currently track stock, or ask students how they search for boarding places. Collect feedback, refine your idea, and adjust features before diving deep into development. Early validation saves you time and ensures your product will be useful.\n\n**3. Plan Features With Focus**\nIt’s tempting to add every feature you can think of, but simplicity is your best friend at the beginning. Write down the 'must-have' features first (like search, login, or stock tracking). Then keep a separate list for 'nice-to-haves.' Launch with your core features, and grow later.\n\n**4. Build With Tools You Know**\nAs students, we don’t always have the luxury of time. Stick with the technologies you’re most comfortable with. For me, React + Tailwind + Firebase became my go-to stack, because it’s fast, scalable, and student-friendly. Don’t waste months learning a completely new stack when you can validate faster with what you already know.\n\n**5. Test With Real Users**\nEven if your app isn’t perfect, let people use it. Watching real users interact with your app is worth more than any tutorial. I still remember the first time someone outside my team tried one of our projects — it highlighted problems we hadn’t even noticed.\n\n**6. Launch and Iterate**\nLaunching doesn’t mean your project is 'done.' It means your idea is ready for feedback. Platforms like Netlify, Vercel, or Firebase Hosting make deployment super easy. Once live, collect user input, track performance, and improve step by step.\n\n**Final Thoughts**\nStudent life is the best time to experiment, fail fast, and learn. Every project you build adds to your portfolio and sharpens your skills. Who knows — the project you start today for a class might grow into your first startup tomorrow.",
      category: "CAREER",
      tags: ["Startup", "Student Life", "Projects"],
      readTime: "8 min read",
      date: "2025-04-20",
      views: 820,
      likes: 33,
      featured: true,
    },
  ]);

  const [selectedBlog, setSelectedBlog] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [currentBlogIndex, setCurrentBlogIndex] = useState(0);

  // Floating elements for decoration
  const floatingElements = [
    {
      icon: BookOpen,
      text: "QUALITY\nCONTENT",
      position: "top-[15%] right-[8%]",
      delay: "0s",
      rotation: "rotate-12",
    },
    {
      icon: Zap,
      text: "FRESH\nIDEAS",
      position: "top-[40%] right-[5%]",
      delay: "0.8s",
      rotation: "-rotate-6",
    },
    {
      icon: Star,
      text: "INSIGHTS\nWORTH READING",
      position: "bottom-[30%] right-[10%]",
      delay: "1.6s",
      rotation: "rotate-6",
    },
  ];

  // Auto-cycle through featured blogs
  useEffect(() => {
    const featuredBlogs = blogs.filter((blog) => blog.featured);
    if (featuredBlogs.length > 1) {
      const interval = setInterval(() => {
        setCurrentBlogIndex((prev) => (prev + 1) % featuredBlogs.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [blogs]);

  const categories = [
    "ALL",
    "DEVELOPMENT", // React, Tailwind, TypeScript
    "TECH TRENDS", // Full-Stack, Python future
    "DESIGN", // UI/UX articles
    "AI/ML", // AI in web dev, ML topics
    "CAREER", // Project-first mindset, student to startup
    "FRAMEWORKS", // Next.js, new frameworks
    "DATA", // Big Data, analytics
  ];

  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch =
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "ALL" || blog.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const BlogCard = ({ blog }) => (
    <div className="group relative bg-white/10 border-2 border-white/20 p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
      {blog.featured && (
        <div className="absolute -top-2 -right-2 bg-white text-black px-3 py-1 font-black text-xs transform rotate-12 shadow-xl">
          FEATURED
        </div>
      )}

      <div className="space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div className="bg-white text-black px-3 py-1 font-black text-xs">
            {blog.category}
          </div>
        </div>

        <h3
          className="text-white font-black text-lg leading-tight hover:text-gray-300 transition-colors cursor-pointer"
          onClick={() => setSelectedBlog(blog)}
        >
          {blog.title}
        </h3>

        <p className="text-gray-300 text-sm leading-relaxed">{blog.excerpt}</p>

        <div className="flex flex-wrap gap-2">
          {blog.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-white/20 text-white px-2 py-1 text-xs font-bold"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between text-gray-400 text-xs">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Calendar size={12} />
              {new Date(blog.date).toLocaleDateString()}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={12} />
              {blog.readTime}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <Eye size={12} />
              {blog.views}
            </span>
            <span className="flex items-center gap-1">
              <Heart size={12} />
              {blog.likes}
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden">
      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Floating Elements */}
      <div className="hidden xl:block">
        {floatingElements.map((element, index) => (
          <div
            key={index}
            className={`absolute ${element.position} ${element.rotation} transform animate-bounce`}
            style={{
              animationDelay: element.delay,
              animationDuration: "6s",
              animationIterationCount: "infinite",
            }}
          >
            <div className="relative bg-white text-black px-4 py-3 rounded-lg shadow-xl border-2 border-white transform hover:scale-110 transition-transform">
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-gray-200 transform rotate-45" />
              <div className="flex items-center gap-2">
                <element.icon size={16} className="flex-shrink-0" />
                <span className="text-xs font-black leading-tight whitespace-pre-line">
                  {element.text}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-20 w-full min-h-screen px-4 md:px-8 lg:px-16 max-w-7xl mx-auto py-20">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 text-sm font-black rounded-full bg-white text-black border-4 border-white shadow-2xl mb-8">
            <BookOpen className="w-4 h-4 mr-2" />
            <span>BLOG & INSIGHTS</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-8xl font-black leading-[0.8] tracking-tight text-white mb-6">
            LATEST
            <span className="block mt-2">
              <span className="bg-white text-black px-6 py-3 transform -skew-x-12 inline-block shadow-2xl">
                THOUGHTS
              </span>
            </span>
          </h1>

          <p className="text-xl text-gray-300 font-medium max-w-2xl mx-auto mb-8">
            Insights, tutorials, and thoughts on modern web development,
            technology trends, and creative problem-solving.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="relative flex-1">
            <Search
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search blogs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white/10 border-2 border-white/20 pl-12 pr-4 py-4 text-white placeholder-gray-400 focus:border-white focus:outline-none font-medium"
            />
          </div>

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="bg-white/10 border-2 border-white/20 px-6 py-4 text-white focus:border-white focus:outline-none font-medium"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat} className="bg-black">
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Featured Blog */}
        {blogs.some((blog) => blog.featured) && (
          <div className="mb-16">
            <h2 className="text-3xl font-black text-white mb-8 flex items-center gap-4">
              FEATURED POST
              <Star className="text-white" size={24} />
            </h2>

            {(() => {
              const featuredBlogs = blogs.filter((blog) => blog.featured);
              const featuredBlog =
                featuredBlogs[currentBlogIndex % featuredBlogs.length];

              return (
                <div
                  className="relative bg-white text-black p-8 border-4 border-white shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedBlog(featuredBlog)}
                >
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-gray-200 transform rotate-45 border-2 border-white" />

                  <div className="grid md:grid-cols-3 gap-8 items-center">
                    <div className="md:col-span-2 space-y-4">
                      <div className="bg-black text-white px-4 py-2 font-black text-sm inline-block">
                        {featuredBlog.category}
                      </div>

                      <h3 className="text-2xl md:text-3xl font-black leading-tight">
                        {featuredBlog.title}
                      </h3>

                      <p className="text-gray-700 leading-relaxed">
                        {featuredBlog.excerpt}
                      </p>

                      <div className="flex items-center gap-6 text-sm">
                        <span className="flex items-center gap-2">
                          <Calendar size={16} />
                          {new Date(featuredBlog.date).toLocaleDateString()}
                        </span>
                        <span className="flex items-center gap-2">
                          <Clock size={16} />
                          {featuredBlog.readTime}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-center">
                      <div className="bg-black text-white p-6 rounded-full">
                        <ArrowRight size={32} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        )}

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>

        {/* No Results */}
        {filteredBlogs.length === 0 && (
          <div className="text-center py-16">
            <div className="text-white/50 text-6xl mb-4">📝</div>
            <h3 className="text-2xl font-black text-white mb-2">
              NO POSTS FOUND
            </h3>
            <p className="text-gray-400">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </div>

      {/* Blog Modal */}
      {selectedBlog && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="bg-white text-black max-w-4xl max-h-[90vh] overflow-y-auto w-full relative">
            <div className="sticky top-0 bg-white border-b-2 border-black p-6 flex justify-between items-center">
              <h2 className="text-2xl font-black">{selectedBlog.title}</h2>
              <button
                onClick={() => setSelectedBlog(null)}
                className="bg-black text-white p-2 hover:bg-gray-800 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div className="flex items-center gap-6 text-sm border-b-2 border-gray-200 pb-4">
                <span className="bg-black text-white px-3 py-1 font-black">
                  {selectedBlog.category}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar size={16} />
                  {new Date(selectedBlog.date).toLocaleDateString()}
                </span>
                <span className="flex items-center gap-2">
                  <Clock size={16} />
                  {selectedBlog.readTime}
                </span>
              </div>

              <div className="prose max-w-none">
                <p className="text-lg font-medium text-gray-700 mb-6">
                  {selectedBlog.excerpt}
                </p>
                <div className="text-gray-800 leading-relaxed whitespace-pre-line">
                  {selectedBlog.content}
                </div>
              </div>

              <div className="border-t-2 border-gray-200 pt-4">
                <div className="flex flex-wrap gap-2">
                  {selectedBlog.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-black px-3 py-1 text-sm font-bold"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogPage;
