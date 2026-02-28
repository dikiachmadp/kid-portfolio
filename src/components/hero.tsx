import Reveal from './ui/Reveal'

export default function Hero() {
    return (
        <section className="hero-section">
            <div className="hero-container">

                {/* Image */}
                <div className="flex justify-center md:order-2">
                    <Reveal>
                        <div className="hero-image-wrapper">
                            <img
                                src="/images/hero-image.png"
                                alt="Diki working at desk illustration"
                                width={600}
                                height={600}
                                className="hero-image"
                            />
                        </div>
                    </Reveal>
                </div>

                {/* Content */}
                <div className="hero-content md:order-1">
                    <Reveal>
                        <div>
                            <h1 className="hero-title">
                                WELCOME TO MY
                                <br />
                                <span className="hero-title-accent">
                                    VERSE
                                </span>
                            </h1>

                            <p className="hero-subtitle">
                                Crafting idea with value as a Graphic Designer, UI/UX Designer, 3D Designer & Animation.
                            </p>
                        </div>
                    </Reveal>

                    {/* Rating */}
                    <Reveal delay={0.1}>
                        <div className="hero-rating">
                            <div className="flex gap-0.5 text-foreground">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="h-3 w-3 md:h-5 md:w-5 fill-current" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>

                            <span>
                                5.0/5 from 10+ Clients on
                            </span>

                            <span className="font-medium text-foreground">
                                Freelancer
                            </span>
                        </div>
                    </Reveal>

                    {/* Stats */}
                    <Reveal delay={0.2}>
                        <div className="flex gap-[clamp(1rem,0.72rem+1.31vw,2rem)]">
                            <div className="stat-card">
                                <span className="stat-number">10</span>
                                <span className="stat-label">
                                    Years of <br /> Experience
                                </span>
                            </div>

                            <div className="stat-card">
                                <span className="stat-number">28</span>
                                <span className="stat-label">
                                    Projects <br /> Completed
                                </span>
                            </div>
                        </div>
                    </Reveal>

                </div>
            </div>
        </section>
    );
}
