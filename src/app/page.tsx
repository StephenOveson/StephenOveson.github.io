import { beaufort, spiegel } from "@/fonts";
import Image from "next/image";

export default function Home() {
  return (
    <section className="grid text-2xl py-30 w-7/8 mx-auto">
      <article className="grid lg:grid-cols-2 text-4xl gap-x-10">
        <section className={`${beaufort.className} space-y-2`}>
          <h1 className="text-gold-4">Hi, I'm Stephen Oveson</h1>
          <h2 className="text-2xl text-gold-3">Software Engineer • Frontend Specialist • Technical Mentor</h2>

          <h3 className="text-2xl text-grey-2">Crafting Code. Building Experience.</h3>

          <p className={`text-2xl text-gold-1 ${spiegel.className} text-justify`}>
            Welcome to my digital space — I'm a software engineer with a passion for building user-centric web experiences and scalable, maintainable systems.
            With a strong foundation in modern technologies like React, Next.js, TypeScript, and Node, I specialize in creating intuitive frontend solutions while bridging the gap between design and backend architecture.
          </p>

          <div className="text-xl py-10 space-y-3">
            <h3 className="text-2xl">🛠️ Skills & Technologies</h3>
            <section className="grid lg:grid-cols-2 gap-4">

              <HextechCard title="Frontend" description="React, Next.js, TypeScript, JavaScript, SCSS" />
              <HextechCard title="Backend" description="Node.js, Golang, Java, REST/GraphQL APIs" />
              <HextechCard title="Tools & Platforms" description="AWS, Storybook, MySQL, Figma" />
              <HextechCard title="Soft Skills" description="Mentorship, Collaboration, Agile Development" />
            </section>
          </div>
        </section>

        <Image className="mx-auto" src="/i/home/me.png" height={1000} width={600} alt="Stephen Oveson" />
      </article>

      <article className={`${spiegel.className} mx-auto py-10`}>

        <section className="flex flex-col space-y-5 items-center">
          <h2 className={`${beaufort.className}`}>🏆 Other Notables</h2>
          <ul className="gap-5 grid lg:grid-cols-3">
            <HextechCard description="Former Head Coach for League of Legends teams at Zenith and Azio Esports"></HextechCard>
            <HextechCard description="Winner of multiple tournaments including Indy PopCon and Wichita Open"></HextechCard>
            <HextechCard description="Experienced in SEO, WordPress, and freelance consulting"></HextechCard>
          </ul>
        </section>
      </article>
    </section>
  );
}


function HextechCard({ title, description }: { title?: string; description: string; }) {
  return <div className={`border-2 border-gold-5 outline-2 outline-gold-5 outline-offset-3 p-5 space-y-1 ${!title ? "text-gold-1 bg-radial-[at_25%_25%] from-blue-3 to-blue-5" : ""}`}>
    {title && <h4 className="text-4xl hextech-gold-gradient border-b border-gold-5">{title}</h4>}
    <p className={`${spiegel.className} text-2xl`}>{description}</p>
  </div>
}