import { useState, useEffect } from 'react'
import {
    HiOutlineSun,
    HiOutlineMoon,
    HiOutlineTerminal,
    HiOutlineLightningBolt,
    HiOutlineBeaker,
    HiOutlineMail
} from 'react-icons/hi'
import { useTheme } from './theme-provider'

const navLinks = [
    { label: 'Projects', href: '#projects', icon: HiOutlineTerminal },
    { label: 'Services', href: '#services', icon: HiOutlineLightningBolt },
    { label: 'Experiments', href: '#experiments', icon: HiOutlineBeaker },
    { label: 'Contact', href: '#contact', icon: HiOutlineMail },
]

export default function Navbar() {
    const { theme, setTheme } = useTheme()
    const [isAtBottom, setIsAtBottom] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight
            const documentHeight = document.documentElement.scrollHeight
            const scrollTop = window.scrollY
            // Sembunyikan navbar mobile jika sudah sampai footer
            setIsAtBottom(scrollTop + windowHeight >= documentHeight - 100)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    return (
        <>
            {/* --- DESKTOP NAVBAR (Mengikuti gaya asli kamu) --- */}
            <nav className="navbar">
                <div className="navbar-container">
                    {/* Logo */}
                    <a href="#" className="navbar-logo">
                        <img
                            src="/images/logo.webp"
                            alt="Senor Kid logo"
                            width={48}
                            height={48}
                            className="rounded-full"
                        />
                    </a>

                    {/* Desktop Nav Links */}
                    <ul className="hidden items-center gap-10 md:flex">
                        {navLinks.map((link) => (
                            <li key={link.label}>
                                <a href={link.href} className="nav-link">
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Dark Mode Button - Style asli dengan warna adaptif B&W */}
                    <div className="flex items-center justify-end gap-4">
                        <button
                            aria-label="Toggle theme"
                            className="dark-mode-toggle navbar-logo"
                            onClick={toggleTheme}
                        >
                            {theme === 'dark' ? (
                                <HiOutlineSun className="h-5 w-5 text-white" />
                            ) : (
                                <HiOutlineMoon className="h-5 w-5 text-black" />
                            )}
                        </button>
                    </div>
                </div>
            </nav>

            {/* --- MOBILE BOTTOM NAVIGATION (Khusus Tampilan Mobile) --- */}
            <div className={`fixed bottom-6 left-1/2 z-50 w-[92%] -translate-x-1/2 rounded-2xl p-4 shadow-md transition-all duration-500 backdrop-blur-xl dark:border-background dark:bg-card/60 md:hidden ${isAtBottom ? 'opacity-0 pointer-events-none translate-y-10' : 'opacity-100'
                }`}>
                <div className="flex items-center justify-around">
                    {navLinks.map((link) => {
                        const Icon = link.icon
                        return (
                            <a
                                key={link.label}
                                href={link.href}
                                className="flex flex-col items-center gap-1 text-[10px] font-black uppercase tracking-tighter text-black dark:text-muted-foreground"
                            >
                                <Icon className="h-6 w-6" />
                                <span>{link.label}</span>
                            </a>
                        )
                    })}
                </div>
            </div>
        </>
    )
}