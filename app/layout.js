import "./globals.css";

// ── UPDATE THIS when you buy your domain ──
const SITE_URL = "https://arriza.dev";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Arriza Wibowo — Full-Stack Developer & Systems Engineer",
  description:
    "Portfolio of Arriza Wibowo — full-stack developer, systems engineer, and CS student at Western Michigan University. Co-founder of Electric Trident. Specializing in Next.js, Django, AI tooling, and IT infrastructure.",
  keywords: [
    "Arriza Wibowo",
    "full-stack developer",
    "systems engineer",
    "Western Michigan University",
    "WMU",
    "Electric Trident",
    "Next.js",
    "Django",
    "Python",
    "TypeScript",
    "React",
    "AI tooling",
    "Revit Copilot",
    "GraduAI",
    "portfolio",
    "software engineer",
    "Kalamazoo",
  ],
  authors: [{ name: "Arriza Wibowo", url: SITE_URL }],
  creator: "Arriza Wibowo",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Arriza Wibowo",
    title: "Arriza Wibowo — Full-Stack Developer & Systems Engineer",
    description:
      "CS sophomore @ WMU with a 4.0 GPA. Co-founder of Electric Trident. Building AI tooling, full-stack apps, and managing IT infrastructure.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Arriza Wibowo — Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arriza Wibowo — Full-Stack Developer",
    description:
      "CS sophomore @ WMU with a 4.0 GPA. Co-founder of Electric Trident. Building AI tooling, full-stack apps, and managing IT infrastructure.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
};

// JSON-LD structured data for Google
function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Arriza Wibowo",
    url: SITE_URL,
    jobTitle: "Full-Stack Developer & Systems Engineer",
    worksFor: [
      {
        "@type": "Organization",
        name: "Electric Trident LLC",
        url: "https://www.electrictrident.com/",
      },
      {
        "@type": "EducationalOrganization",
        name: "Western Michigan University",
      },
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Western Michigan University",
    },
    knowsAbout: [
      "Next.js", "React", "Django", "Python", "TypeScript",
      "T3 Stack", "AI/ML", "System Administration", "Revit API",
    ],
    sameAs: [
      "https://github.com/ArriZa-Wi",
      "https://linkedin.com/in/arriza-wibowo",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kalamazoo",
      addressRegion: "MI",
      addressCountry: "US",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
        <JsonLd />
      </head>
      <body>{children}</body>
    </html>
  );
}
