interface SectionHeadingProps {
    badge?: string;
    title?: string;
    description?: string;
    badgeClassName?: string;
    titleClassName?: string;
    descriptionClassName?: string;
}

export default function SectionHeading({
    badge,
    title,
    description,
    badgeClassName = "uppercase font-semibold tracking-widest bg-gradient-to-r from-violet-300 to-sky-400 bg-clip-text text-transparent text-center",
    titleClassName = "font-serif text-3xl md:text-5xl text-center mt-6",
    descriptionClassName = "text-center md:text-lg lg:text-xl max-w-md mx-auto text-white/60 mt-4",
}: SectionHeadingProps) {
    return (
        <>
            {badge && (
                <div className="flex justify-center">
                    <p className={badgeClassName}>
                        {badge}
                    </p>
                </div>
            )}

            {title && (
                <h2 className={titleClassName}>
                    {title}
                </h2>
            )}

            {description && (
                <p className={descriptionClassName}>
                    {description}
                </p>
            )}
        </>
    );
}

