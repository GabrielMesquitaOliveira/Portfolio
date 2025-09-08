import { PropsWithChildren } from "react";
export const HeroOrbit = ({ children, size, rotation }: PropsWithChildren<{ size: number; rotation: number }>) => {
    return (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ">
            <div className="animate-spin" style={{
                height: size,
                width: size,
                animationDuration: `${size / 30}s`,
                animationDelay: `${-(rotation / 360) * (size / 50)}s`,
            }}>
                <div className="inline-flex animate-spin" style={{
                    animationDuration: `${size / 15}s`,
                    animationDelay: `${-(rotation / 360) * (size / 50)}s`,
                }}>
                    {children}
                </div>
            </div>
        </div>
    );
};
