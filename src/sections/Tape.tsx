import StarIcon from "@/assets/icons/star.svg";

const words = [
  "Perfomant",
  "Accessible",
  "Responsive",
  "Intuitive",
  "Dynamic",
  "Engaging",
  "Secuere",
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
]

export const TapeSection = () => {
  return (
    <div className="py-16 overflow-x-clip">
      <div className="bg-gradient-to-r from-violet-300 to-sky-400 -rotate-3 -mx-1">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
          <div className="flex flex-none gap-4 py-3">
            {words.map((word, index) => (
              <div key={index} className="inline-flex gap-4 items-center">
                <span className="font-extrabold text-sm text-gray-900 ">
                  {word}
                </span>
                <StarIcon className="size-6 text-gray-900" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
