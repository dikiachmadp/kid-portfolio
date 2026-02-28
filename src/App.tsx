import Navbar from './components/navbar'
import Hero from './components/hero'
import FeaturedWork from './components/featured-work'
import Services from './components/services'
import Experiments from './components/experiments'
import Contact from './components/contact'
import Footer from './components/footer'
import { ThemeProvider } from './components/theme-provider'

function App() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <main className="min-h-screen bg-background">
                <Navbar />
                <Hero />
                <FeaturedWork />
                <Services />
                <Experiments />
                <Contact />
                <Footer />
            </main>
        </ThemeProvider>
    )
}

export default App

