import { TestimonialsColumn } from "@/components/blocks/testimonials-columns-1";
import SectionHeading from "@/components/SectionHeading";

const testimonials = [
  {
    text: "Gabriel's leadership in modernizing legacy COBOL systems to modern Java microservices has ensured 99.9% uptime for millions of users.",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    name: "Team Lead",
    role: "Caixa Econômica Federal",
  },
  {
    text: "His framework development skills created reusable solutions adopted by 8+ teams, reducing development time by 30%.",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    name: "Senior Developer",
    role: "Qintess",
  },
  {
    text: "Gabriel's expertise in government API integrations achieved 100% compliance for automated reporting systems.",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    name: "Project Manager",
    role: "Matriz One",
  },
  {
    text: "His frontend development improved page load speeds by 50% and mobile conversion rates by 25% across e-commerce platforms.",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    name: "Client",
    role: "Syscoin Space",
  },
  {
    text: "Gabriel's secure e-commerce solutions maintained PCI compliance with zero security incidents over 2 years.",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    name: "Freelance Client",
    role: "GetNinjas",
  },
  {
    text: "His mobile banking app with biometric authentication and SSL pinning enhanced security for financial applications.",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Mobile Lead",
    role: "Caixa Econômica Federal",
  },
  {
    text: "Gabriel's containerization with Docker reduced deployment time by 70% and improved system reliability.",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "DevOps Engineer",
    role: "Matriz One",
  },
  {
    text: "His mentorship of junior developers and establishment of coding standards improved team productivity.",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Mentor",
    role: "Qintess",
  },
  {
    text: "Gabriel's technical versatility across Java, COBOL, Python, and modern frameworks bridges legacy and cloud solutions.",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    name: "Full Stack Architect",
    role: "Various Companies",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);


const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="my-20 relative">
      <div className="container z-10 mx-auto">
        <SectionHeading badge="WHAT MY CLIENTS SAY" title="Professional Achievements" description="Key accomplishments and recognitions from my career." />
        <div className="flex justify-center gap-6 mt-10 md:mt-20 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;