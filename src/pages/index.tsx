import { Inter } from "next/font/google";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });
import Image from 'next/image';

type img = {
  path: string;
  dims: [number, number];
  is_video?: boolean
}

type ProjectProps = {
  title: string;
  description: string;
  links: { href: string; label: string }[];
  imgs?: img[]
  layout?: string;
  features?: string;
};

const ProjectBlock: React.FC<ProjectProps> = ({ title, description, links, imgs, layout, features }) => {
  return (
    <div className="gap-2 flex flex-col">
      <div className="flex gap-2 items-center bg-orange-00">
        <h4 className="font-semibold underline-offset-4 bg-orange-100">{title}</h4>
        {links.map((link, index) => (
          <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" className="">
            {link.label}
          </a>
        ))}
      </div>
      <p className="">{description}</p>
      <ul className="list-disc list-inside">
        {features?.split(', ').map((str, ix) => <li key={ix}>{str}</li>)}
      </ul>
      <div className={`flex gap-1 ${layout === 'h' ? 'flex-row' : 'flex-col'}`}> {imgs?.map((v, ix) => v.is_video ? <>
        <video key={v.path} width={v.dims[0]} controls>
          <source src={v.path} type="video/mp4"></source>
        </video>
      </> : <Image key={v.path} width={v.dims[0]} height={v.dims[1]} alt='ios scp' src={v.path} />)}  </div>
    </div>)
};

const Menu: React.FC<{}> = () => {
  return (<>
    <div className="flex gap-3 py-8 border-t border-black">
      <div className="text-md text-lg font-mono underline cursor-pointer font-bold">projects</div>
      <a href='/2024_pablo.pdf' target="_blank" rel='noopener noreferrer' className="text-md text-lg font-mono flex gap-1 items-center hover:underline"> resume </a>
      <Link href='/blog' className="text-md text-lg font-mono flex gap-1 items-center hover:underline"> blog </Link>
      <a href='https://www.goodreads.com/review/list/72122998?shelf=%23ALL%23' target="_blank" rel='noopener noreferrer' className="text-md text-lg font-mono flex gap-1 items-center hover:underline"> bookshelf </a>
    </div>
  </>)
}

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col mt-3 p-2 max-w-3xl ${inter.className} mx-auto`}>
      <div className="flex flex-col sm:flex-row py-3">
        <div className="flex flex-col">
          <span className="text-xl font-medium mb-2">Pablo Felgueres </span>
          <p className="">
            Software engineer living in San Francisco. I&apos;ve worked on ML systems at Uber, interfaces for language models at Perplexity, and performance simulations for some of largest solar plants in the US.
            <br />
            <br />
            In 2022 I left my job to learn how to build products fullstack - design, engineering, marketing, and sales. 
            Highlights have been an LLM playground (top 10 on Product Hunt), a growing app for SF residents to simplify parking (featured on ABC news), and building an engineering community by hosting chats with industry leaders on the future of American manufacturing. 
            <br />
            <br />
            In my free time I enjoy reading - lately bios of great adventurers and US history.
            I&apos;m a regular open water swimmer in the bay.
          </p>
          <div className="my-2" />
          <a className="hover:underline" href="mailto:pablofelgueres@gmail.com">Email: pablofelgueres@gmail.com</a>
          <a target="_blank" rel="noopener noreferrer" className="hover:underline" href="https://github.com/felgueres">@felgueres on Github</a>
          <a target="_blank" rel="noopener noreferrer" className="hover:underline" href="https://twitter.com/pfelgueres">@pfelgueres on X</a>
          <span className="blockquote text-gray-500">
            Most people don&apos;t think simple enough. <br/> Jim Keller 
          </span>
        </div>
        <Image key='pfp' width={130} height={130} alt='pfp' src='/pfp.jpg' className="self-start" />
      </div>
      <Menu />
      <div className="flex flex-col gap-3">
        <ProjectBlock
          title="Street Cleaning Parking (2024)"
          description="Simplify parking in San Francisco."
          layout="h"
          features="Detects cleaning schedules from geo-based street lines, Calendar and SMS integration, Custom push notifications"
          links={[
            { href: "https://streetcleaningparking.com", label: "[link]" },
          ]}
          imgs={[{ 'path': '/1/1.png', 'dims': [180, 200] } as img, { 'path': '/1/2.png', 'dims': [180, 200] } as img]}
        />
        <ProjectBlock
          title="AI Answers with widgets (2023)"
          description="Combine RAG with widgets to answer queries."
          features="LLM-based query classifiers, Productized at Perplexity AI"
          links={[{ href: "https://perplexity.ai/search?q=weather+in+sf", label: "[link]" },
          ]}
          imgs={[{ 'path': '/2/1.png', 'dims': [500, 300] } as img]}
        />
        <ProjectBlock
          title="LLM playground (2023)"
          description="Tools to run language tasks on user content."
          features="Top 10 product of the day on Product Hunt with 700 active users, Multi-turn conversations with citations and chat history, Headless browsing to crawl sites, Speech recognition models to transcribe user videos"
          links={[
            { href: "https://www.producthunt.com/products/upstream-2#upstream-3", label: "[link]" },
          ]}
          layout=''
          imgs={[
            { 'path': '/3/1.mp4', 'dims': [500, 400], 'is_video': true } as img,
            { 'path': '/3/2.png', 'dims': [500, 300], } as img,
            { 'path': '/3/3.png', 'dims': [500, 300], } as img,
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
            { 'path': '/4/1.mp4', 'dims': [500, 400], 'is_video': true } as img,
          ]}
        />

      </div>
    </main>
  );
}
