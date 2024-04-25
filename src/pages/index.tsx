import { Inter } from "next/font/google";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });
import Image from 'next/image';

// Define a type for project props to ensure type safety
type img = {
  path: string;
  dims: [number,number];
  is_video?: boolean
}

type ProjectProps = {
  title: string;
  description: string;
  links: { href: string; label: string }[];
  imgs?: img[] 
};

// Define the ProjectBlock component to display individual projects
const ProjectBlock: React.FC<ProjectProps> = ({ title, description, links, imgs}) => {
  return (
    <div className="gap-2 flex flex-col">
      <div className="flex gap-2 items-center">
        <h4 className="font-medium underline-offset-4">{title}</h4>
        {links.map((link, index) => (
          // Using index as a key here is generally fine as the list is static and order won't change
          <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">
            {link.label}
          </a>
        ))}
      </div>
      <p className="">{description}</p>
      <div className="flex gap-0"> { imgs?.map((v,ix)=> v.is_video ? <>
      <video key={v.path} width={v.dims[0]} controls>
        <source src={v.path} type="video/mp4"></source>
      </video>
      </> : <Image key={v.path} width={v.dims[0]} height={v.dims[1]} alt='ios scp' src={v.path} /> )}  </div>
    </div>)
};

// Home component organizing the projects
export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col p-4 ${inter.className}`}>
      <h1 className="text-lg font-medium">pablo felgueres // engineering </h1>
      <br />
      <div className="flex gap-3">
        <div className="text-md text-lg font-mono underline">projects</div>
        <Link href='/blog' className="text-md text-lg font-mono flex gap-1 items-center ">
          blog
        </Link>
        <a href='https://github.com/felgueres' target="_blank" rel='noopener noreferrer' className="text-md text-lg font-mono flex gap-1 items-center ">
          github
        </a>
      </div>
      <br />
      <div className="flex flex-col gap-3">
        <ProjectBlock
          title="Street Cleaning Parking (2024)"
          description="Avoid parking tickets in San Francisco"
          links={[
            { href: "https://streetcleaningparking.com", label: "[link]" },
          ]}
          imgs={[{'path': '/1/1.png', 'dims': [180,200]} as img, {'path': '/1/2.png', 'dims': [180,200]} as img]}
        />
        <ProjectBlock
          title="AI-answers (2023)"
          description="Answer queries using llm classifiers and widgets. Productized at Perplexity AI"
          links={[{ href: "https://perplexity.ai/search?q=weather+in+sf", label: "[link]" },
          ]}
          imgs={[{'path': '/2/1.png', 'dims': [400,300]} as img]}
        />
        <ProjectBlock
          title="LLM playground (2023)"
          description="Use LLMs on multimodal content, embeddable widget, ~700 active users at peak. Top 10 PH product of the day"
          links={[
            { href: "https://www.producthunt.com/products/upstream-2#upstream-3", label: "[link]" },
          ]}
          imgs={[
            {'path': '/3/1.mp4', 'dims': [400,400], 'is_video': true} as img,
          ]}
        />
      </div>
    </main>
  );
}
