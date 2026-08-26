import { profile, experience, education, skills } from "@/lib/data";

export default function StructuredData() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    url: profile.website,
    image: profile.avatar,
    jobTitle: profile.title,
    email: `mailto:${profile.email}`,
    telephone: profile.phoneHref,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Giza",
      addressCountry: "EG",
    },
    worksFor: {
      "@type": "Organization",
      name: "CodeX Technologies",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: education[0].school,
    },
    sameAs: [profile.github, profile.linkedin],
    knowsAbout: Object.values(skills).flat(),
    workExample: experience.slice(0, 3).map((job) => ({
      "@type": "OrganizationRole",
      roleName: job.role,
      description: job.bullets.join(" "),
    })),
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${profile.name} | ${profile.title}`,
    url: profile.website,
    author: { "@type": "Person", name: profile.name },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }} />
    </>
  );
}
