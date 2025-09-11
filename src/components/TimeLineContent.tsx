import Image from 'next/image'

interface TimeLineContentProps {
    description?: string;
    stacks?: string[];
}

export const TimeLineContent = ({ data }: { data: TimeLineContentProps }) => {
    return (
        <div>
            <p className="text-white/60 text-md md:text-xl font-normal mb-8">
                {data.description}
            </p>
            <div className="flex flex-wrap justify-center justify-items-center gap-8 bg-gray-800 p-4 rounded-md border border-white/20">
                {data.stacks?.map((stack, index) => (
                    <div key={index} className="flex justify-center justify-items-center">
                        <Image
                            src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${stack}/${stack}-original.svg`}
                            alt={stack}
                            width={50}
                            height={50}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};