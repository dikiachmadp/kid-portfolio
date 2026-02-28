import { MdDesignServices } from 'react-icons/md'
import { FaComputer } from 'react-icons/fa6'
import { LuMove3D } from 'react-icons/lu'
import Reveal from './ui/Reveal'
import { StaggerItem } from './ui/Reveal'

const services = [
    {
        icon: MdDesignServices,
        title: 'Graphic Design',
        items: ['Branding', 'Packaging Design', 'Layout Formatting'],
    },
    {
        icon: FaComputer,
        title: 'UI/UX Design',
        items: ['Mobile App', 'Front-end Design', 'Back-end Design'],
    },
    {
        icon: LuMove3D,
        title: '3D Design',
        items: ['Mockup', '3D Modelling', 'Game Asset'],
    },
]

export default function Services() {
    return (
        <section id="services" className="px-6 py-20 md:px-10 md:py-28">
            <div className="mx-auto max-w-360">
                {/* Section Title */}
                <Reveal>
                    <h2 className="section-title">
                        SERVICES
                    </h2>
                </Reveal>

                {/* Service Cards */}
                <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-3 md:gap-12">
                    {services.map((service, index) => (
                        <StaggerItem key={service.title} delay={index * 0.1}>
                            <div className="flex flex-col items-center gap-6 rounded-2xl bg-card p-8 md:p-10">
                                <div className="service-icon">
                                    <service.icon className="h-7 w-7" />
                                </div>
                                <h3 className="service-title">
                                    {service.title}
                                </h3>
                                <ul className="flex flex-col gap-3">
                                    {service.items.map((item) => (
                                        <li
                                            key={item}
                                            className="text-sm text-center leading-relaxed text-muted-foreground"
                                        >
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </StaggerItem>
                    ))}
                </div>

                {/* CTA Button */}
                <Reveal delay={0.3}>
                    <div className="mt-12 flex justify-center md:mt-16">
                        <button className="btn">
                            MORE SERVICES
                        </button>
                    </div>
                </Reveal>
            </div>
        </section>
    )
}

