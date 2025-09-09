import caixaApp from "@/assets/images/caixaapp.png";
import easyCrawler from "@/assets/images/easycrawler.png";
import animeList from "@/assets/images/animelist.png";

const portfolioProjects = [
 {
   company: "Caixa Econômica Federal",
   year: "2024",
   title: "Caixa App - Mobile Banking Solution",
   results: [
     { title: "Desenvolvido para Hackathon Caixa" },
     { title: "Interface responsiva Android/iOS" },
     { title: "Gestão completa de empréstimos e pagamentos" },
   ],
   link: "https://github.com/GabrielMesquitaOliveira/caixa-app",
   image: caixaApp, // substitua pela sua imagem
 },
 {
   company: "Open Source",
   year: "2024",
   title: "EasyCrawler - Java Web Crawler Library",
   results: [
     { title: "Publicado no Maven Central" },
     { title: "Arquitetura multi-thread de alta performance" },
     { title: "8 estratégias de busca implementadas" },
   ],
   link: "https://github.com/GabrielMesquitaOliveira/EasyCrawler",
   image: easyCrawler, // substitua pela sua imagem
 },
 {
   company: "Personal Project",
   year: "2024",
   title: "AnimeList - API Rating Aggregator",
   results: [
     { title: "Integração com 3 APIs (MAL, IMDb, Rotten Tomatoes)" },
     { title: "Web scraping com Jsoup" },
     { title: "Performance otimizada com Quarkus" },
   ],
   link: "https://github.com/GabrielMesquitaOliveira/animelist",
   image: animeList, // substitua pela sua imagem
 },
];

export const ProjectsSection = () => {
  return <div>Projects Section</div>;
};
