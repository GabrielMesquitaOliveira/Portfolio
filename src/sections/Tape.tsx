"use client";
import StarIcon from "@/assets/icons/star.svg";

const words = [
  "Performant",
  "Accessible",
  "Responsive",
  "Intuitive",
  "Dynamic",
  "Engaging",
  "Secure",
  "Scalable",
  "Optimized",
  "Innovative",
  "Robust",
  "Maintainable",
  "Cutting-Edge",
  "User-Centric",
  "Seamless",
  "Interactive",
  "Fast-Loading",
];

export const TapeSection = () => {
  return (
    <div className="py-16 overflow-x-clip">
      <div className="bg-gradient-to-r from-violet-300 to-sky-400 -rotate-3 -mx-1">
        <div className="[mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
          <div className="marquee-container">
            <div className="marquee-content">
              {words.map((word, index) => (
                <div key={index} className="marquee-item">
                  <span className="font-extrabold text-sm text-gray-900">
                    {word}
                  </span>
                  <StarIcon className="size-6 text-gray-900" />
                </div>
              ))}
            </div>
            <div className="marquee-content py-2" aria-hidden="true">
              {words.map((word, index) => (
                <div key={`duplicate-${index}`} className="marquee-item">
                  <span className="font-extrabold text-sm text-gray-900">
                    {word}
                  </span>
                  <StarIcon className="size-6 text-gray-900" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};