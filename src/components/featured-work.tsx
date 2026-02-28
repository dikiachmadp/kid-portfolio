import { HiOutlineArrowRight } from 'react-icons/hi'
import Reveal from './ui/Reveal'
import { StaggerItem } from './ui/Reveal'

const projects = [
    {
        title: 'Holroyd',
        year: '2024',
        image: '/images/holroyd.webp',
    },
    {
        title: 'Jahe Padjadjaran',
        year: '2025',
        image: '/images/jahe.webp',
    },
    {
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
                            <div className="group relative overflow-hidden rounded-2xl bg-card shadow-lg transition-transform duration-300 hover:scale-[1.02]">
                                {/* Placeholder project image area */}
                                <div className="relative aspect-square w-full overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={`${project.title} project preview`}
                                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="flex items-center justify-between p-6">
                                    <div>
                                        <h3 className="text-lg font-medium text-foreground">
                                            {project.title}
                                        </h3>
                                        <p className="mt-1 text-sm text-muted-foreground">
                                            {project.year}
                                        </p>
                                    </div>
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-foreground">
                                        <HiOutlineArrowRight className="h-4 w-4" />
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
