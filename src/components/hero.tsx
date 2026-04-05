import Reveal from './ui/Reveal'

export default function Hero() {
    return (
        <section className="hero-section">
            <div className="hero-container">

                {/* Image */}
                <div className="flex justify-center md:order-2">
                    <Reveal>
                        <div className="hero-image-wrapper relative group aspect-video w-full max-w-md md:max-w-lg lg:max-w-4xl">
                            <div className="absolute inset-0 bg-red-500/0 rounded-2xl blur-2xl group-hover:bg-red-500/20 group-hover:blur-3xl transition-all duration-700 opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-105 pointer-events-none" />
                            <div className="relative h-60 md:h-96 bg-white border-[3px] border-black rounded-2xl overflow-hidden p-1 md:p-2 z-10 transition-colors duration-500 group-hover:border-red-600">
                                <div className="relative w-full h-full bg-black overflow-hidden rounded-xl">
                                    <video
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        webkit-playsinline="true"
                                        preload="auto"
                                        className="w-full h-full object-cover grayscale opacity-70 contrast-125 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-[1.03] will-change-transform"
                                    >
                                        <source src="/images/hero-video.mp4" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                    <div className="absolute inset-0 pointer-events-none z-10 opacity-15 mix-blend-overlay bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.4)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-size[100%_6px,6px_100%] transition-opacity duration-500 group-hover:opacity-25" />
                                    <div className="absolute top-4 left-2 flex flex-col gap-1 z-20 pointer-events-none transition-transform duration-500 group-hover:translate-x-1">
                                        <div className="flex items-center gap-2">
                                            <span className="relative flex h-2 w-2">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
                                            </span>
                                            <span className="text-[10px] font-mono text-black tracking-widest uppercase drop-shadow-md">
                                                status: Available
                                            </span>
                                        </div>
                                        <div className="text-[8px] font-mono text-black/40 uppercase tracking-tighter ml-4">
                                            last online: 5 mins ago
                                        </div>
                                    </div>
                                    <div className="absolute top-4 right-4 w-4 h-4 border-white/40 z-20"></div>
                                </div>
                            </div>
                            <div className="absolute -inset-1 rounded-[20px] pointer-events-none group-hover:border-red-500/30 transition-colors duration-500" />
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
                                    SPACE
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
                            <div className="stat-card border border-border shadow-brutalist transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none">
                                <span className="stat-number">10</span>
                                <span className="stat-label">
                                    Years of <br />Experience
                                </span>
                            </div>

                            <div className="stat-card border border-border shadow-brutalist transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none">
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
