import { Inter } from "next/font/google";
import Link from "next/link";
import { cloneElement } from "react";
import { Icons } from "../../constants";
const inter = Inter({ subsets: ["latin"] });


// Define a type for project props to ensure type safety
type ProjectProps = {
  title: string;
  description: string;
  links: { href: string; label: string }[];
};

// Define the ProjectBlock component to display individual projects
const ProjectBlock: React.FC<ProjectProps> = ({ title, description, links }) => {
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
    </div>
  );
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
          description="Prevent street cleaning parking tickets in San Francisco."
          links={[
            { href: "https://streetcleaningparking.com", label: "[link]" },
            // { href: "https://www.reddit.com/r/sanfrancisco/comments/18lpar3/made_an_app_that_reminds_you_to_move_your_car/", label: "[reddit]" },
          ]}
        />
        <ProjectBlock
          title="Widget queries (2023)"
          description="Answer queries using llm classifiers and widgets. Productized at Perplexity AI."
          links={[{ href: "https://perplexity.ai/search?q=weather+in+sf", label: "[link]" },
          ]}
        />
        <ProjectBlock
          title="Upstream (2023)"
          description="AI answers for any site, ran for 6 months with ~700 active users at peak. Top 10 product of the day."
          links={[
            { href: "https://www.producthunt.com/products/upstream-2#upstream-3", label: "[link]" },
          ]}
        />
      </div>
    </main>
  );
}
