import { Helmet } from 'react-helmet-async';

const SEO_TITLE = 'Diki Achmad Prasetya - Graphic Designer, UI/UX & 3D Portfolio | dikiachmadp';
const SEO_DESCRIPTION = 'Diki Achmad Prasetya - Professional Graphic Designer, UI/UX Designer, 3D Artist & Animator. View my portfolio of branding, packaging, 3D modeling, and web design projects.';
const SEO_IMAGE = 'https://dikiachmadp.vercel.app/images/hero-image.jpg';
const SEO_URL = 'https://dikiachmadp.vercel.app';

export function Head() {
    return (
        <Helmet>
            {/* 0. GOOGLE VERIFICATION */}
            <meta name="google-site-verification" content="YcfVOY_U5Vkgpjr-yYr0GIxRsuvIZX3VleFr65gV-8w" />

            {/* 1. BASIC META */}
            <title>{SEO_TITLE}</title>
            <meta name="description" content={SEO_DESCRIPTION} />
            <meta name="author" content="Diki Achmad Prasetya" />
            <meta name="keywords" content="Diki Achmad Prasetya, graphic design, UI UX designer, 3D modeling, portfolio, branding, animation, web developer" />
            <link rel="canonical" href={SEO_URL} />
            <meta name="robots" content="index, follow" />

            {/* 2. OPEN GRAPH (FACEBOOK/WHATSAPP) */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={SEO_TITLE} />
            <meta property="og:description" content={SEO_DESCRIPTION} />
            <meta property="og:image" content={SEO_IMAGE} />
            <meta property="og:url" content={SEO_URL} />
            <meta property="og:site_name" content="Diki Achmad Prasetya" />

            {/* 3. TWITTER */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={SEO_TITLE} />
            <meta name="twitter:description" content={SEO_DESCRIPTION} />
            <meta name="twitter:image" content={SEO_IMAGE} />

            {/* 4. JSON-LD (PERSON & WEBSITE) */}
            <script type="application/ld+json">
                {JSON.stringify([
                    {
                        "@context": "https://schema.org",
                        "@type": "Person",
                        "name": "Diki Achmad Prasetya",
                        "alternateName": "Diki",
                        "url": SEO_URL,
                        "image": SEO_IMAGE,
                        "jobTitle": "Graphic Designer, UI/UX Designer, 3D Artist, Web Developer",
                        "description": SEO_DESCRIPTION,
                        "sameAs": [
                            "https://www.linkedin.com/in/dikiachmadp",
                            "https://dribbble.com/dikiachmadp",
                            "https://github.com/dikiachmadp",
                            "https://www.freelancer.com/u/dikiachmadp123",
                            "https://www.upwork.com/freelancers/~0135e2a328251a4422?mp_source=share"
                        ],
                        "knowsAbout": ["Graphic Design", "UI/UX Design", "3D Modeling", "Animation", "Branding", "Web Development"],
                        "worksFor": { "@type": "Organization", "name": "Freelance" }
                    },
                    {
                        "@context": "https://schema.org",
                        "@type": "WebSite",
                        "name": "Diki Achmad Prasetya Portfolio",
                        "url": SEO_URL,
                        "description": SEO_DESCRIPTION
                    }
                ])}
            </script>
        </Helmet>
    );
}