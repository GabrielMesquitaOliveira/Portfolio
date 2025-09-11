import caixaApp from "@/assets/images/caixaapp.png";
import easyCrawler from "@/assets/images/easycrawler.png";
import animeList from "@/assets/images/animelist.png";
import Image from 'next/image';
import CheckIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";
import SectionHeading from "@/components/SectionHeading";

const portfolioProjects = [
  {
    company: "Caixa Econômica Federal",
    year: "2025",
    title: "Caixa App - Mobile Banking Solution",
    results: [
      { title: "Developed for Caixa Hackathon" },
      { title: "Responsive Android/iOS interface" },
      { title: "Complete loan and payment management" },
    ],
    link: "https://github.com/GabrielMesquitaOliveira/caixa-app",
    image: caixaApp,
  },
  {
    company: "Open Source",
    year: "2025",
    title: "EasyCrawler - Java Web Crawler Library",
    results: [
      { title: "Published on Maven Central" },
      { title: "High-performance multi-threaded architecture" },
      { title: "8 search strategies implemented" },
    ],
    link: "https://github.com/GabrielMesquitaOliveira/EasyCrawler",
    image: easyCrawler,
  },
  {
    company: "Personal Project",
    year: "2025",
    title: "AnimeList - API Rating Aggregator",
    results: [
      { title: "Integration with 3 APIs (MAL, IMDb, Rotten Tomatoes)" },
      { title: "Web scraping with Jsoup" },
      { title: "Optimized performance with Quarkus" },
    ],
    link: "https://github.com/GabrielMesquitaOliveira/animelist",
    image: animeList,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 ">
      <div className="container">
        <SectionHeading
          badge="Real-World Results"
          title="Featured Projects"
          description="See How I Transformed Ideas into Reality"
        />
        <div className="flex flex-col mt-10 md:mt-20 gap-14">
          {portfolioProjects.map((project) => (
            <div key={project.title} className="bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:content-[''] after:z-10 after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 p-8 after:pointer-events-none md:pt-12 lg:p-16 lg:px-16">
              <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                <div>
                  <div className="bg-gradient-to-r from-violet-300 to-sky-400 inline-flex font-bold uppercase tracking-widest text-sm gap-2 text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5">{project.title}</h3>
                  <hr className="border-t-2 border-white/10 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li className="flex gap-2 items-center text-white/50 md:text-base" key={result.title}>
                        <CheckIcon className="inline size-5 md:size-6" />
                        <span>
                          {result.title}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link} target="_blank" className="cursor-pointer" rel="noreferrer">
                    <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-6 md:w-auto md:px-8">
                      View Project
                      <ArrowUpRight className="size-4" />
                    </button>
                  </a>
                </div>
                <div>
                  <Image src={project.image} alt={project.title} className="mt-8 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none lg:max-h-none" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
