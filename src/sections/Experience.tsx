import SectionHeading from "@/components/SectionHeading";
import { TimeLineContent } from "@/components/TimeLineContent";
import { Timeline } from "@/components/ui/timeline";
import CaixaLogo from "@/assets/images/logos/caixa.png"
import QintessLogo from "@/assets/images/logos/qintess.png"
import MatrizLogo from "@/assets/images/logos/matriz.png"
import SyscoinLogo from "@/assets/images/logos/syscoin.png"
import GetNinjasLogo from "@/assets/images/logos/getninjas.png"

const data = [
  {
    title: "Caixa Economica",
    role: "Full Stack Developer",
    logo: CaixaLogo.src,
    content: (
      <TimeLineContent data={{ description: "Mission-critical banking systems developer in the Payment Methods sector, Credit Cards community, working across multiple agile squads. Specializing in legacy system modernization by migrating COBOL mainframe applications to Java Quarkus microservices while maintaining and developing Angular applications for internal branch operations.", stacks: ["java", "cobol", "javascript", "html5", "css3", "sass", "tailwindcss", "bootstrap", "angular", "quarkus", "kotlin", "android", "javascript", "typescript", "nodejs", "reactnative", "azure", "azuredevops"] }} />
    ),
  },
  {
    title: "Qintess",
    role: "Full Stack Developer",
    logo: QintessLogo.src,
    content: (
      <TimeLineContent data={{ description: "Full stack developer in a 10-member development team focused on creating and enhancing internal enterprise frameworks using Java, with diverse technology stack including Python, Node.js, React, and Docker. Specialized in developing custom modules and solutions based on company framework requirements.", stacks: ["java", "spring", "javascript", "html5", "css3", "sass", "tailwindcss", "bootstrap", "angular", "python", "nodejs", "react", "docker"] }} />
    ),
  },
  {
    title: "Matriz One",
    role: "Full Stack Developer",
    logo: MatrizLogo.src,
    content: (
      <TimeLineContent data={{ description: "Full stack developer working on two main enterprise platforms: Flex Ocupacional, a nationwide occupational health and safety software, and MatrizOne EAD, an e-learning platform for corporate training. Specialized in Brazilian government API integrations and containerized solutions.", stacks: ["php", "javascript", "html5", "css3", "sass", "tailwindcss", "bootstrap", "laravel", "nodejs", "express", "vuejs", "react", "docker", "mysql"] }} />
    ),
  },
  {
    title: "Syscoin",
    role: "Front End Developer",
    logo: SyscoinLogo.src,
    content: (
      <TimeLineContent data={{ description: "Frontend engineer, UI/UX designer, and web designer specializing in high-performance e-commerce development and SEO optimization across multiple platforms. Certified in major e-commerce platforms including WooCommerce, Jet, Linx, Tray, VTEX, Magento, and Shopify, working with clients ranging from high-traffic Instagram stores to luxury jewelry retailers.", stacks: ["php", "wordpress", "javascript", "html5", "css3", "sass", "tailwindcss", "bootstrap", "react", "angular", "vuejs", "nodejs", "woocommerce", "magento"] }} />
    ),
  },
  {
    title: "GetNinjas",
    role: "PHP/Wordpress Developer",
    logo: GetNinjasLogo.src,
    content: (
      <TimeLineContent data={{ description: "Independent freelance developer specializing in custom WordPress development and institutional website creation. Working through the GetNinjas platform to deliver bespoke e-commerce solutions and corporate websites with secure payment integrations and PCI compliance standards.", stacks: ["php", "javascript", "html5", "css3", "sass", "tailwindcss", "bootstrap", "react", "nodejs", "wordpress", "woocommerce"] }} />
    ),
  },
];

export const ExperienceSection = () => {
  return (
    <div className="min-h-screen container">
      <SectionHeading badge="Work" title="My Work Experience" description="A timeline of my professional journey." />
      <Timeline data={data} />
    </div>
  );
};