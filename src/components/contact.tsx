
import Reveal from './ui/Reveal'

export default function Contact() {
    return (
        <section id="contact" className="px-6 py-20 md:px-10 md:py-28">
            <div className="mx-auto max-w-360">
                <Reveal>
                    <div className="flex flex-col items-center gap-10 rounded-2xl bg-card px-8 py-16 text-center md:px-16 md:py-24 border border-border shadow-brutalist">
                        <h2 className="section-title ">
                            HAVE A GREAT IDEA?
                        </h2>
                        <p className="text-[clamp(1rem,0.93rem+0.37vw,1.25rem)] leading-normal text-muted-foreground md:max-w-180">
                            Let's collaborate and create something amazing together!
                        </p>
                        <button className="btn border border-border shadow-brutalist transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none">
                            CONTACT ME
                        </button>
                    </div>
                </Reveal>
            </div>
        </section>
    )
}

