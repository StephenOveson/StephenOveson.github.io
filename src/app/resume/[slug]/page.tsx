import { beaufort, spiegel } from "@/fonts";
import { AncestryLogo, EdXLogo, FreelanceLogo, LogoWoman, MojoMarketplaceLogo, SquareHookLogo } from "../page";

export default async function ResumeDeepDive({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    const data = resumeData[slug as keyof typeof resumeData];
    const LogoComponent = data.logo;
    return <section className="py-30 w-5/6 mx-auto">
        <article className="grid gap-x-30 lg:grid-cols-3">
            <section className="relative">
                <div className="fixed opacity-[0.15] lg:left-10 right-2 lg:opacity-[1]">
                    <LogoComponent height={400} width={400} />
                </div>
            </section>
            <section className={`space-y-5 ${spiegel.className} text-2xl text-justify lg:col-span-2`}>
                <h1 className="text-5xl text-gold-1">{data.title}</h1>
                <p className="text-gold-3">{data.time}</p>
                <h3 className="text-grey-2">{data.technologies}</h3>
                <h4 className="text-gold-3">{data.description}</h4>

                <section className="grid gap-y-5 py-10">
                    <h2 className={`${beaufort.className} text-gold-4 text-4xl`}>🔧 My Work:</h2>
                    {data?.whatIDo?.map((item, i) => <div key={i} className="text-xl text-gold-1">
                        {item}
                    </div>)}
                </section>

                <section className="grid gap-y-5 py-10">
                    <h2 className={`${beaufort.className} text-gold-4 text-4xl`}>🚀 Impact:</h2>
                    {data?.impact?.map((item, i) => <div key={i} className="text-xl text-gold-1">
                        {item}
                    </div>)}
                </section>
            </section>
        </article>
    </section>
}

const resumeData = {
    wnba: {
        title: "WNBA",
        logo: LogoWoman,
        time: "May 2023 – Present",
        technologies: "TypeScript, React, Next.js, Storybook, SCSS, Figma, Jest",
        description: "As a Software Engineer at the WNBA, I play a central role in the continuous evolution of WNBA.com, one of the league’s most visible digital platforms. My work focuses on blending performance, design, and functionality to deliver an engaging experience to fans and users across devices.",
        whatIDo: [
            "Feature Development: I actively design and implement dynamic features and updates across the WNBA website, helping to shape how fans interact with the league’s digital presence.",
            "Technical Decision Making: I contribute to selecting the right tools, libraries, and frameworks for each project — ensuring our stack remains modern, efficient, and scalable.",
            "Component Architecture: As part of a cross-functional team, I help build and maintain a shared component library in Storybook, enhancing developer efficiency and design consistency.",
            "Collaboration with Backend & CMS Teams: I work closely with backend engineers and content managers to plan, define, and integrate APIs that power our frontend experiences.",
            "Mentorship & Code Standards: I provide onboarding support and ongoing mentorship to new developers, promoting best practices, code cleanliness, and consistency across the codebase.",
            "Testing & Quality Assurance: I develop and maintain unit tests to ensure that components behave as expected across edge cases and deployment environments.",
        ],
        impact: [
            "Improved site performance and code maintainability through modular, reusable components",
            "Facilitated cross-team collaboration to align frontend needs with backend data structures",
            "Helped accelerate onboarding for new developers by introducing documentation and code guidelines"
        ],
        testimonial: {
            author: "",
            description: ""
        }
    },
    ancestry: {
        title: "Ancestry",
        logo: AncestryLogo,
        time: "July 2020 – January 2023",
        technologies: "TypeScript, GraphQL, Node.js, React, Next.js, Java, MySQL, AWS, SCSS",
        description: "At Ancestry, I worked as a Full Stack Developer with a strong focus on building scalable systems, enhancing marketing performance, and modernizing legacy tech. I contributed to both the frontend and backend across high-traffic platforms — including Newspapers.com, a major subscription-based service with millions of users.",
        whatIDo: [
            "Built a New Marketing Stack: Architected and maintained a new tech stack tailored specifically for marketing and advertising initiatives, enabling greater performance and flexibility for business campaigns.",
            "Modernization of Legacy Systems: Led efforts to migrate legacy PHP templates to React-based applications, significantly improving load times, maintainability, and developer experience.",
            "Backend API Development: Developed RESTful APIs in both Node.js and Java, ensuring reusable and modular codebases. I also wrote detailed documentation for seamless integration across teams.",
            "Cross-Functional Collaboration: Partnered closely with marketing and design teams to bring creative visions to life — ensuring high-quality user experiences aligned with brand goals.",
            "Platform Maintenance: Provided ongoing support and development for Newspapers.com, ensuring the platform remained performant, reliable, and secure for its large user base."
        ],
        impact: [
            "Enabled faster go-to-market timelines for marketing teams through improved tooling",
            "Reduced technical debt by modernizing backend and frontend systems",
            "Ensured high availability and reliability for a major subscription platform",
            "Helped bridge design and development, enhancing collaboration across disciplines"
        ],
        testimonial: {
            author: "",
            description: ""
        }
    },
    edx: {
        title: "EdX",
        logo: EdXLogo,
        time: "February 2020 – Present",
        technologies: "TypeScript, JavaScript, React, Node.js, GraphQL, HTML, CSS, MySQL, NoSQL",
        description: "As an Instructor and Mentor for the University of Minnesota’s Fullstack Bootcamp, I help shape the next generation of software developers by delivering hands-on instruction and real-world technical insights. My role bridges deep technical knowledge with a passion for teaching and mentorship.",
        whatIDo: [
            "Technical Mentorship: I guide students through core fullstack development concepts, including JavaScript, React, Node.js, and database technologies like MySQL and NoSQL. I provide personalized feedback to help learners strengthen their coding skills and problem-solving abilities.",
            "Live Code Reviews & Troubleshooting: I assist students as they tackle complex challenges, helping them debug code, understand programming logic, and learn best practices in real time.",
            "Curriculum Support: I align with the bootcamp’s structured curriculum while also incorporating industry practices and personal experience to ensure lessons are relevant and impactful.",
            "Soft Skill Development: Beyond code, I mentor students on how to communicate effectively, collaborate in teams, and approach problems like seasoned engineers."
        ],
        impact: [
            "Helped dozens of aspiring developers transition into tech careers",
            "Built a reputation for being a supportive and approachable mentor",
            "Contributed to the confidence and readiness of students entering the software industry",
        ],
        testimonial: {
            author: "",
            description: ""
        }
    },
    squarehook: {
        title: "SquareHook",
        logo: SquareHookLogo,
        time: "February 2020 – June 2020",
        technologies: "JavaScript, Node.js, React, HTML, CSS, C#, .NET, MySQL, NoSQL",
        description: "At SquareHook, I worked as a Software Developer focused on turning client requirements into functional, responsive web applications. In this fast-paced agency environment, I built reusable components and contributed to full-stack solutions using a diverse range of technologies.",
        whatIDo: [
            "Client-Centric Development: Translated detailed project requirements into fully functional applications tailored to client needs, with an emphasis on user experience and clean, maintainable code.",
            "Frontend Implementation: Developed user interface views using React, HTML, and CSS, ensuring consistency with design specifications and overall brand identity.",
            "Reusable Code Practices: Focused on writing modular and reusable code, enabling faster iteration and easier maintenance across multiple projects.",
            "Backend Integration: Assisted in backend tasks using Node.js and C#/.NET, integrating application logic with MySQL and NoSQL databases."
        ],
        impact: [
            "Delivered reliable web solutions aligned with client goals and business use cases",
            "Streamlined development through a reusable component-based approach",
            "Gained valuable experience working across frontend and backend technologies",
        ],
        testimonial: {
            author: "",
            description: ""
        }
    },
    freelance: {
        title: "Freelance",
        logo: FreelanceLogo,
        time: "March 2017 – April 2019",
        technologies: "JavaScript, HTML, CSS, PHP, SQL, SEO",
        description: "During this period, I worked independently as a freelance developer and consultant, partnering with a range of clients to bring their digital visions to life. I managed everything from front-end development to backend architecture and even helped optimize sites for search engines.",
        whatIDo: [
            "Custom Web Development: Designed and built responsive websites using HTML, CSS, JavaScript, and PHP, tailored to the unique branding and functionality needs of small businesses and entrepreneurs.",
            "Backend Implementation: Created and maintained server-side components using PHP and SQL, ensuring data integrity and performance across client platforms.",
            "SEO Optimization: Applied best practices for search engine optimization, improving client visibility and traffic by fine-tuning metadata, performance, and keyword strategies.",
            "Client Consultation: Worked directly with clients to understand their goals, translate ideas into technical requirements, and deliver solutions on time and within scope."
        ],
        impact: [
            "Helped small businesses launch and scale their online presence",
            "Delivered full-cycle solutions — from concept to deployment",
            "Developed a deep understanding of client communication and project management",
        ],
        testimonial: {
            author: "",
            description: ""
        }
    },
    mojomarketplace: {
        title: "Mojo Marketplace",
        logo: MojoMarketplaceLogo,
        time: "January 2016 – March 2017",
        technologies: "WordPress, PHP, HTML, CSS, SQL, SEO",
        description: "As a WordPress Support Consultant at MojoMarketplace, I provided technical support and web development guidance to a diverse client base, helping users build, troubleshoot, and optimize their WordPress websites.",
        whatIDo: [
            "Technical Support & Troubleshooting: Provided real-time support to customers facing technical issues with their WordPress sites, including plugin conflicts, layout errors, and server issues.",
            "Site Customization: Assisted users in customizing their sites using HTML, CSS, and PHP, offering code-level solutions that enhanced both functionality and design.",
            "Database Assistance: Diagnosed and resolved issues related to MySQL databases, including broken connections, data loss, and migration problems.",
            "SEO Guidance: Advised clients on SEO best practices, improving their site visibility and helping them better engage with target audiences through optimized content and structure.",
            "Plugin & Theme Configuration: Helped users configure and manage themes and plugins to extend the functionality of their sites without compromising performance or security."
        ],
        impact: [
            "Launced WordPress Support Consultant Role and developed documentation for future employees",
            "Enabled hundreds of users to launch, optimize, and troubleshoot their WordPress websites",
            "Developed strong skills in user communication and problem-solving under pressure",
            "Contributed to better customer satisfaction and site success through technical and strategic support",
        ],
        testimonial: {
            author: "",
            description: ""
        }
    }
}