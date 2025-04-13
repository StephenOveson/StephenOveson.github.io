import { beaufort, spiegel } from "@/fonts";
import { AncestryLogo, LogoWoman } from "../page";

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
        ]
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
        ]
    }
    
}