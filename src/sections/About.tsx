import { CalendarIcon, FileTextIcon } from "@radix-ui/react-icons";
import { BellIcon, Share2Icon, Globe as GlobeIcon } from "lucide-react";

import { cn } from "@/lib/utils";

import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { Marquee } from "@/components/magicui/marquee";
import { Globe } from "@/components/magicui/globe";
import { AnimatedListDemo } from "@/components/AnimatedListDemo";
import { AnimatedBeamDemo } from "@/components/AnimatedBeamDemo";
import { AnimatedBeamMultipleOutputDemo } from "@/components/AnimatedBeamMultipleOutputDemo";
import SectionHeading from "@/components/SectionHeading";

const files = [
  {
    name: "resume.pdf",
    body: "My professional resume highlighting key skills, experience, and achievements.",
  },
  {
    name: "skills.docx",
    body: "Document outlining technical and soft skills with proficiency levels.",
  },
  {
    name: "experience.pptx",
    body: "Presentation of work experience, projects, and career milestones.",
  },
  {
    name: "certifications.jpg",
    body: "Image showcasing certifications, awards, and professional recognitions.",
  },
  {
    name: "portfolio.html",
    body: "Interactive web page displaying my portfolio of projects and work.",
  },
];

const features = [
  {
    Icon: FileTextIcon,
    name: "Resume Documents",
    description: "Explore my resume and related professional documents.",
    href: "/resume.pdf",
    cta: "Download my resume",
    download: "resume.pdf",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Marquee
        className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] "
      >
        {files.map((f, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-32 cursor-pointer overflow-hidden rounded-3xl border p-4",
              "border-white/20 bg-gray-800 hover:bg-gray-700",
              "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none",
            )}
          >
            <div className="flex flex-row items-center gap-2">
              <div className="flex flex-col">
                <figcaption className="text-sm font-medium text-white">
                  {f.name}
                </figcaption>
              </div>
            </div>
            <blockquote className="mt-2 text-xs text-white/60">{f.body}</blockquote>
          </figure>
        ))}
      </Marquee>
    ),
  },
  {
    Icon: BellIcon,
    name: "Strong communication",
    description: "Effective communication skills for better collaboration and understanding.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <AnimatedListDemo className="absolute right-2 top-4 h-[300px] w-full scale-75 border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-90" />
    ),
  },
  {
    Icon: Share2Icon,
    name: "Skills & Tools",
    description: "Proficient in various programming languages, frameworks, and development tools.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <AnimatedBeamMultipleOutputDemo className="absolute right-2 top-4 h-[300px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
  },
  {
    Icon: GlobeIcon,
    name: "Global Professional",
    description: "International experience and global collaboration skills.",
    className: "col-span-3 lg:col-span-1",
    href: "#",
    cta: "Learn more",
    background: (
      <Globe className="absolute right-2 top-4 h-[300px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
  },
];

export function AboutSection() {
  return (
    <section id="about" className="pb-16">
      <div className="container">
        <SectionHeading
          badge="About Me"
          title="My Key Strongs"
          description="Learn more about my background, skills, and expertise."
        />
        <BentoGrid className="mt-10 md:mt-20">
          {features.map((feature, idx) => (
            <BentoCard key={idx} {...feature} />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
