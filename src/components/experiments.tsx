import { HiOutlineArrowLeft, HiOutlineArrowRight } from 'react-icons/hi'
import Reveal from './ui/Reveal'

export default function Experiments() {
    return (
        <section id="experiments" className="px-6 py-20 md:px-10 md:py-28">
            <div className="mx-auto max-w-360">
                {/* Section Title */}
                <Reveal>
                    <h2 className="section-title">
                        EXPERIMENTS
                    </h2>
                </Reveal>

                {/* Experiment Showcase */}
                <Reveal delay={0.1}>
                    <div className="mt-12 flex items-center justify-center gap-6 md:mt-16 md:gap-10">
                        {/* Left Arrow */}
                        <button
                            aria-label="Previous experiment"
                            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-card text-foreground transition-colors hover:bg-secondary"
                        >
                            <HiOutlineArrowLeft className="h-5 w-5" />
                        </button>

                        {/* Image */}
                        <div className="w-full max-w-150 overflow-hidden rounded-4xl bg-card">
                            <img
                                src="/images/experiment-image.png"
                                alt="Retro computer experiment illustration"
                                width={600}
                                height={450}
                                className="w-full object-contain"
                            />
                        </div>

                        {/* Right Arrow */}
                        <button
                            aria-label="Next experiment"
                            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-card text-foreground transition-colors hover:bg-secondary"
                        >
                            <HiOutlineArrowRight className="h-5 w-5" />
                        </button>
                    </div>
                </Reveal>

                {/* CTA Button */}
                <Reveal delay={0.2}>
                    <div className="mt-12 flex justify-center md:mt-16">
                        <button className="btn">
                            MY LAB
                        </button>
                    </div>
                </Reveal>
            </div>
        </section>
    )
}

