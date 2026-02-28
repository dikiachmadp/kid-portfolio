import { useState } from 'react'
import { HiOutlineSun, HiOutlineMoon, HiOutlineMenu, HiOutlineX } from 'react-icons/hi'
import { useTheme } from './theme-provider'

const navLinks = [
    { label: 'Projects', href: '#projects' },
    { label: 'Services', href: '#services' },
    { label: 'Experiments', href: '#experiments' },
    { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const { theme, setTheme } = useTheme()

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    return (
        <nav className="navbar">
            <div className="navbar-container">
                {/* Logo */}
                <a href="#" className="navbar-logo">
                    <img
                        src="/images/logo.png"
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

                {/* Dark Mode Button */}
                <div className="flex items-center justify-end gap-4">
                    <button
                        aria-label="Toggle theme"
                        className="dark-mode-toggle"
                        onClick={toggleTheme}
                    >
                        {theme === 'dark' ? (
                            <HiOutlineSun className="h-5 w-5" />
                        ) : (
                            <HiOutlineMoon className="h-5 w-5" />
                        )}
                    </button>

                    {/* Mobile menu toggle */}
                    <button
                        aria-label="Toggle menu"
                        className="menu-toggle"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? (
                            <HiOutlineX className="h-5 w-5" />
                        ) : (
                            <HiOutlineMenu className="h-5 w-5" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            {mobileMenuOpen && (
                <div className="mobile-nav">
                    <ul className="flex flex-col gap-4 pt-4">
                        {navLinks.map((link) => (
                            <li key={link.label}>
                                <a
                                    href={link.href}
                                    className="mobile-nav-link"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    )
}
