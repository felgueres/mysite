import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

const ProjectBlock: React.FC = () => {
  return <>
  </>
}

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col p-24 ${inter.className}`} >
      <h1 className="text-lg font-medium">pablo felgueres // engineering & design </h1>
      <br />
      <h3 className="text-md text-lg  font-thin">projects</h3>
      <br />
      <div className="flex flex-col gap-3">
        <div className="gap-2 flex flex-col">
          <a className="flex gap-2 items-center" href="https://streetcleaningparking.com" target="_blank">
            <h4 className="font-medium underline underline-offset-4">Street Cleaning Parking</h4>
            <a href="https://apps.apple.com/us/app/street-cleaning-parking/id6474511826" target="_blank">[store]</a>
            <a href="https://youtube.com/shorts/Q6nZ8V3qEUA?feature=share" target="_blank">[demo]</a>
            <a href="https://www.reddit.com/r/sanfrancisco/comments/18lpar3/made_an_app_that_reminds_you_to_move_your_car/" target="_blank">[launch]</a>
            <a href="https://sfstandard.com/2023/12/20/san-francisco-new-app-avoid-parking-tickets/?taid=658a035aca93ff0001d3eca2&utm_campaign=trueanthem&utm_medium=social&utm_source=twitter" target="_blank">[press]</a>

          </a>
          <p className="text-slate-400">iOS app to prevent street cleaning parking tickets in San Francisco.</p>
        </div>
        <div className="gap-2 flex flex-col">
          <a className="flex gap-2 items-center" href="https://widgets-client.vercel.app" target="_blank">
            <h4 className="font-medium underline underline-offset-4">LLM Widgets </h4>
            <a href="https://github.com/felgueres/widgets_client" target="_blank">[code]</a>
          </a>
          <p className="text-slate-400">Answer search queries using LLM-based classifiers and widgets.</p>
        </div>
        <div className="gap-2 flex flex-col">
          <a className="flex gap-2 items-center" href="https://widgets-client.vercel.app" target="_blank">
            <h4 className="font-medium underline underline-offset-4"> Upstream </h4>
            <a href="https://github.com/felgueres/widgets_client" target="_blank">[launch] </a>
          </a>
          <p className="text-slate-400">Chrome extension & webapp to declutter the web with llms. Top 10 product on product hunt.</p>
        </div>
      </div>
    </main>
  );
}
