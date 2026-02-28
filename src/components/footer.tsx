import { SiFreelancer } from 'react-icons/si'
import {
    FaGithub,
    FaInstagram,
    FaLinkedin,
    FaSquareUpwork,
    FaDribbble,
} from 'react-icons/fa6'

const socials = [
    {
        icon: SiFreelancer,
        href: 'https://www.freelancer.com/u/dikiachmadp123?sb=t&frm=dikiachmadp123',
        label: 'Freelancer',
    },
    {
        icon: FaGithub,
        href: 'https://github.com/dikiachmadp',
        label: 'Github',
    },
    {
        icon: FaInstagram,
        href: 'https://www.instagram.com/dikiachmadp/',
        label: 'Instagram',
    },
    {
        icon: FaLinkedin,
        href: 'https://www.linkedin.com/in/dikiachmadp',
        label: 'LinkedIn',
    },
    {
        icon: FaSquareUpwork,
        href: 'https://www.upwork.com/freelancers/~0135e2a328251a4422?mp_source=share',
        label: 'Upwork',
    },
    {
        icon: FaDribbble,
        href: 'https://dribbble.com/dikiachmadp/shots',
        label: 'Dribbble',
    },
]

export default function Footer() {
    return (
        <footer className="px-6 pb-10 pt-8 md:px-10">
            <div className="mx-auto flex max-w-360 flex-col items-center gap-8">
                {/* Social Icons */}
                <div className="flex items-center gap-5">
                    {socials.map((social) => (
                        <a
                            key={social.label}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.label}
                            className="flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-foreground"
                        >
                            <social.icon className="h-5 w-5" />
                        </a>
                    ))}
                </div>

                {/* Footer Text */}
                <div className="flex flex-col items-center gap-4 text-center">
                    <p className="text-sm text-muted-foreground">
                        "Here lies my hopes and dreams"
                    </p>
                    <p className="text-xs text-muted-foreground">
                        {'© 2026 Senor Kid. All rights reserved.'}
                    </p>
                </div>
            </div>
        </footer>
    )
}

