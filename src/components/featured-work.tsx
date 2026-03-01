import Reveal from './ui/Reveal'
import { StaggerItem } from './ui/Reveal'

const projects = [
    {
        category: 'Packaging Design',
        title: 'Holroyd',
        year: '2024',
        image: '/images/holroyd.webp',
    },
    {
        category: 'Brand Identity',
        title: 'Jahe Padjadjaran',
        year: '2025',
        image: '/images/jahe.webp',
    },
    {
        category: '3D Modeling',
        title: "Bread'eat",
        year: '2024',
        image: '/images/trade.webp',
    },
]

export default function FeaturedWork() {
    return (
        <section id="projects" className="featured-work-section">
            <div className="mx-auto max-w-360">
                {/* Section Title */}
                <Reveal>
                    <h2 className="section-title">
                        FEATURED
                        <br />
                        WORK
                    </h2>
                </Reveal>

                {/* Project Cards */}
                <div className="featured-grid">
                    {projects.map((project, index) => (
                        <StaggerItem key={project.title} delay={index * 0.1}>
                            <div className="group relative overflow-hidden rounded-2xl bg-card shadow-lg transition-transform duration-300 hover:scale-105">
                                {/* Placeholder project image area */}
                                <div className="relative aspect-square w-full overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={`${project.title} project preview`}
                                        className="h-full w-full object-cover rounded-3xl p-3"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="text-center p-4">
                                    <div>
                                        {project.category && (
                                            <p className="text-lg md:text-sm pb-1 text-muted-foreground font-medium uppercase tracking-wider">
                                                {project.category}
                                            </p>
                                        )}
                                        <h3 className="text-lg font-bold text-foreground">
                                            {project.title}
                                        </h3>
                                        <p className="mt-1 text-sm text-muted-foreground">
                                            {project.year}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </StaggerItem>
                    ))}
                </div>

                {/* CTA Button */}
                <Reveal delay={0.3}>
                    <div className="mt-12 flex justify-center md:mt-16">
                        <button className="btn">
                            ALL PROJECTS
                        </button>
                    </div>
                </Reveal>
            </div>
        </section>
    )
}
