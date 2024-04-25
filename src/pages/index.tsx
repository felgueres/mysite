import { Inter } from "next/font/google";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });
import Image from 'next/image';

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
  layout?: string;
  features: string;
};

const ProjectBlock: React.FC<ProjectProps> = ({ title, description, links, imgs, layout, features }) => {
  return (
    <div className="gap-2 flex flex-col">
      <div className="flex gap-2 items-center bg-orange-100">
        <h4 className="font-semibold underline-offset-4 ">{title}</h4>
        {links.map((link, index) => (
          <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">
            {link.label}
          </a>
        ))}
      </div>
      <p className="">{description}</p>
      <ul className="text-sm list-disc list-inside">
        {features?.split(', ').map((str, ix)=> <li key={ix}>{str}</li>)}
      </ul>
      <div className={`flex gap-1 ${layout==='h'? 'flex-row': 'flex-col'}`}> { imgs?.map((v,ix)=> v.is_video ? <>
      <video key={v.path} width={v.dims[0]} controls>
        <source src={v.path} type="video/mp4"></source>
      </video>
      </> : <Image key={v.path} width={v.dims[0]} height={v.dims[1]} alt='ios scp' src={v.path} /> )}  </div>
    </div>)
};

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col p-4  max-w-screen-md ${inter.className}`}>
      <h1 className="text-lg font-medium">pablo felgueres // product engineering </h1>
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
          description="Avoid parking tickets in San Francisco."
          layout="h"
          features="Autodetects cleaning schedules from geo-based lines, Calendar and SMS integrations, Custom push notifications"
          links={[
            { href: "https://streetcleaningparking.com", label: "[link]" },
          ]}
          imgs={[{'path': '/1/1.png', 'dims': [180,200]} as img, {'path': '/1/2.png', 'dims': [180,200]} as img]}
        />
        <ProjectBlock
          title="AI Answers with widgets (2023)"
          description="Combine RAG with widgets to answer user queries quickly."
          features="Intent-based query classification, RAG-generated content, Productized at Perplexity AI"
          links={[{ href: "https://perplexity.ai/search?q=weather+in+sf", label: "[link]" },
          ]}
          imgs={[{'path': '/2/1.png', 'dims': [500,300]} as img]}
        />
        <ProjectBlock
          title="LLM playground (2023)"
          description="Tools to run quick language tasks on user content."
          features="Chrome extension to quickly summarize sites, Headless browsing to crawl websites, Speech recognition to transcribe user videos, Single-line of code embeddable widget, Top 10 product of the day on Product Hunt with 700 active users"
          links={[
            { href: "https://www.producthunt.com/products/upstream-2#upstream-3", label: "[link]" },
          ]}
          layout=''
          imgs={[
            {'path': '/3/1.mp4', 'dims': [500,400], 'is_video': true} as img,
            {'path': '/3/2.png', 'dims': [500,300],} as img,
            {'path': '/3/3.png', 'dims': [500,300],} as img,
          ]}
        />
        <ProjectBlock
          title="Product Engineering SDK (2022)"
          description="Tools to build better products faster."
          features="Dynamic JSON configs to control code remotely, Feature flags and A/B testing, SDK to capture events and analytics"
          links={[
            { href: "", label: "" },
          ]}
          imgs={[
            {'path': '/4/1.mp4', 'dims': [500,400], 'is_video': true} as img,
          ]}
        />
      </div>
    </main>
  );
}
