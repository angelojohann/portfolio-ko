import { useEffect, useState } from "react";

const assetPath = (path) => `${import.meta.env.BASE_URL}${path}`;

const profilePhoto = assetPath("images/profile/angelo-johann.jpg");
const clinicManagementPhoto = assetPath("images/projects/clinic-management-system.svg");
const fixedAssetManagementPhoto = assetPath("images/projects/fixed-asset-management-system.svg");
const trimexMarketingPhoto = assetPath("images/projects/trimex-marketing-system.png");
const unifiedEnterprisePortalPhoto = assetPath("images/projects/unified-enterprise-portal.svg");

const highlightStats = [
  { value: "23", label: "Years old and growing through hands-on development" },
  { value: "17+", label: "Core tools and platforms used across projects" },
  { value: "4", label: "Featured certificates from seminars, courses, and OJT" },
];

const skillGroups = [
  {
    title: "Frontend & Mobile",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "React.js",
      "React Native",
    ],
  },
  {
    title: "Backend",
    items: ["Node.js", "Django", "PHP", "Laravel", "Ruby on Rails"],
  },
  {
    title: "Data Management",
    items: ["MySQL", "PostgreSQL", "Supabase", "MongoDB", "phpMyAdmin", "Google APIs", "JSON"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "Postman", "Docker", "Expo", "Microsoft Visual Studio"],
  },
  {
    title: "Soft Skills",
    items: ["Editing & Proofreading", "Time Management", "Microsoft Office Suite"],
  },
];

const technologies = [
  { name: "HTML5", icon: "https://cdn.simpleicons.org/html5/E34F26" },
  { name: "CSS3", icon: "https://cdn.simpleicons.org/css3/1572B6" },
  { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
  { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
  { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
  { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "React Native", icon: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
  { name: "Django", icon: "https://cdn.simpleicons.org/django/092E20" },
  { name: "PHP", icon: "https://cdn.simpleicons.org/php/777BB4" },
  { name: "Laravel", icon: "https://cdn.simpleicons.org/laravel/FF2D20" },
  { name: "Ruby on Rails", icon: "https://cdn.simpleicons.org/rubyonrails/D30001" },
  { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql/4479A1" },
  { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/4169E1" },
  { name: "Supabase", icon: "https://cdn.simpleicons.org/supabase/3ECF8E" },
  { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
  { name: "phpMyAdmin", icon: "https://cdn.simpleicons.org/phpmyadmin/6C78AF" },
  { name: "Google APIs", icon: "https://cdn.simpleicons.org/google/4285F4" },
  { name: "JSON", icon: "https://cdn.simpleicons.org/json/111827" },
  { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
  { name: "GitHub", icon: "https://cdn.simpleicons.org/github/181717" },
  { name: "Postman", icon: "https://cdn.simpleicons.org/postman/FF6C37" },
  { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED" },
  { name: "Expo", icon: "https://cdn.simpleicons.org/expo/000020" },
  { name: "Visual Studio", icon: "https://cdn.simpleicons.org/visualstudio/5C2D91" },
];

const certificates = [
  {
    type: "Conference",
    title: "3rd ISITE Conference",
    date: "March 17, 2023",
    issuer: "Integrated Society of Information Technology Enthusiasts",
    description:
      "Certificate of participation for the conference themed Developing Industry Skills and Technological Advancement through Research.",
    image: assetPath("images/certificates/isite-conference.jpg"),
  },
  {
    type: "Seminar",
    title: "Building Blocks: IT Career Paths, Financial Literacy, and Values Integration",
    date: "May 11, 2024",
    issuer: "Trimex Colleges",
    description:
      "Certificate of attendance for a seminar focused on career direction, financial awareness, and values formation.",
    image: assetPath("images/certificates/trimex-seminar.jpg"),
  },
  {
    type: "Course Completion",
    title: "AI for Oceans Hour of Code",
    date: "Completed Successfully",
    issuer: "Code.org",
    description:
      "Certificate of completion demonstrating understanding of basic computer science concepts through guided learning.",
    image: assetPath("images/certificates/hour-of-code.jpg"),
  },
  {
    type: "OJT Completion",
    title: "Practicum / On-the-Job Training Completion",
    date: "January 16, 2026 to March 10, 2026",
    issuer: "TTI Laguna Philippines Inc.",
    description:
      "Completed practicum training at TTI Laguna Philippines Inc. with certification issued on March 12, 2026.",
    image: assetPath("images/certificates/tti-ojt.jpg"),
  },
];

const projects = [
  {
    eyebrow: "Project 1",
    title: "Clinic Management System",
    period: "Internal clinic dashboard and secure staff access",
    description:
      "A web-based clinic management system designed to support secure staff access, cleaner navigation, and more efficient day-to-day clinic operations. The interface includes organized entry points for company or department users, plus authentication options that reduce friction for internal teams.",
    contribution:
      "Built responsive front-end interfaces with React.js, Tailwind CSS, HTML, CSS, and JavaScript, focusing on form usability, visual clarity, and a smoother login experience for internal users.",
    impact:
      "The result is a more modern, accessible access flow that helps staff reach the clinic dashboard faster across desktop and mobile layouts.",
    image: clinicManagementPhoto,
    alt: "Clinic Management System login interface preview",
    imageFit: "contain",
    previewLabel: "Project screenshot",
    tags: ["React", "JavaScript", "Tailwind CSS", "Authentication UI", "Responsive Design"],
    metrics: [
      { label: "Role", value: "Front-End Developer" },
      { label: "System", value: "Clinic Management" },
      { label: "Focus", value: "Secure Access UX" },
    ],
    highlights: [
      "Designed a clear login experience for company and department users.",
      "Supported standard credential access and Google-based sign-in flows.",
      "Created a responsive layout with clean visual hierarchy for clinic staff.",
    ],
    accessNote:
      "This system was built for internal use, so a public live demo and source link are not shared.",
  },
  {
    eyebrow: "Project 2",
    title: "Trimex Marketing System",
    period: "Marketing platform for student engagement and admissions support",
    description:
      "The Trimex Marketing System is a modern online platform built to strengthen Trimex Colleges' digital marketing presence and improve student engagement. It helps present academic programs clearly, strengthen brand visibility, and create a smoother admissions journey for prospective students.",
    contribution:
      "Developed and maintained responsive front-end interfaces with React.js, Tailwind CSS, and JavaScript, while integrating Google APIs and connected services for authentication, data access, and supporting workflows.",
    impact:
      "The platform also supports predictive enrollment forecasting, helping the school anticipate student trends, plan more strategically, and keep updates and applications more efficient for prospective students.",
    image: trimexMarketingPhoto,
    alt: "Trimex Marketing System homepage preview",
    imageFit: "contain",
    previewLabel: "Project screenshot",
    tags: ["React", "JavaScript", "Tailwind CSS", "Google APIs", "Enrollment Analytics"],
    metrics: [
      { label: "Role", value: "Front-End Developer" },
      { label: "System", value: "School Marketing" },
      { label: "Focus", value: "Student Engagement" },
    ],
    highlights: [
      "Built responsive pages for browsing programs and admissions-related actions.",
      "Integrated external services for authentication, data access, and connected workflows.",
      "Supported predictive enrollment forecasting for better planning and decision-making.",
    ],
    accessNote:
      "This project supports an internal or limited-release workflow, so public links are not available here.",
  },
  {
    eyebrow: "Project 3",
    title: "Unified Enterprise Portal for Admin Systems",
    period: "Unified admin workspace and role-based system control",
    description:
      "A unified enterprise portal built for administrative systems, giving teams a central place to access HR, payroll, and internal admin modules through role-based permissions. The platform is designed to streamline secure access, organize internal workflows, and create a more efficient digital workspace.",
    contribution:
      "Contributed to the front-end experience using React.js, Tailwind CSS, and TypeScript, with a focus on a modern, responsive admin interface. I also supported connected API and workflow integration to keep navigation, module visibility, and access handling clear and maintainable.",
    impact:
      "The result is a cleaner enterprise experience that supports faster task flow, clearer role separation, and a stronger foundation for expanding connected internal systems.",
    image: unifiedEnterprisePortalPhoto,
    alt: "Unified Enterprise Portal admin workspace preview",
    imageFit: "contain",
    previewLabel: "Project screenshot",
    tags: ["React", "TypeScript", "Tailwind CSS", "API Integration", "Enterprise UI"],
    metrics: [
      { label: "Role", value: "Front-End Developer" },
      { label: "System", value: "Enterprise Portal" },
      { label: "Focus", value: "Admin Experience" },
    ],
    highlights: [
      "Brought multiple internal modules together in one organized admin workspace.",
      "Supported role-based access for clearer navigation and system visibility.",
      "Built responsive layouts and reusable UI patterns for daily operational use.",
    ],
    accessNote:
      "This admin platform is part of a private internal system, so the deployment and codebase stay restricted.",
  },
  {
    eyebrow: "Project 4",
    title: "Automated Fixed Asset Management System",
    period: "Asset workflows, cash requests, and staff access",
    description:
      "An internal fixed asset management system built to centralize asset records, improve request handling, and reduce manual operational work for staff. The product focuses on accessible screens, dependable task flow, and a clearer experience for managing company assets and submitting related requests.",
    contribution:
      "Contributed to both the front end and the database-backed backend using React.js, TypeScript, Tailwind CSS, Node.js, and PostgreSQL. I helped shape the user interface, connect workflow forms to backend services, and support the data structure behind asset and cash request records.",
    impact:
      "The result is a more accessible system with a smoother workflow for staff, reducing manual processing and making cash requests easier to submit and manage without unnecessary delays or confusion.",
    image: fixedAssetManagementPhoto,
    alt: "Automated Fixed Asset Management System login interface preview",
    imageFit: "contain",
    previewLabel: "Project screenshot",
    tags: ["React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
    metrics: [
      { label: "Role", value: "Front End + DB" },
      { label: "System", value: "Fixed Assets" },
      { label: "Focus", value: "Cash Requests" },
    ],
    highlights: [
      "Improved accessibility and clarity across the staff login and request workflow.",
      "Reduced manual asset and cash request handling with a more structured digital process.",
      "Connected the interface to Node.js services and PostgreSQL-backed records for operational reliability.",
    ],
    links: [
      {
        label: "Live View",
        href: "https://tti-fixed-asset-management-system.vercel.app/login",
        variant: "primary",
      },
      {
        label: "View Source",
        href: "view-source:https://tti-fixed-asset-management-system.vercel.app/login",
        variant: "secondary",
      },
    ],
  },
];

const projectSectionHighlights = [
  "Responsive UI delivery",
  "Business-focused system flows",
  "API and service integration",
  "Accessible internal tools",
];

const contactDetails = [
  {
    label: "Email",
    value: "johannromblon123123@gmail.com",
    href: "mailto:johannromblon123123@gmail.com",
  },
  {
    label: "Phone",
    value: "09917139459",
    href: "tel:09917139459",
  },
  {
    label: "Location",
    value: "B3 L8 St Francis Remedios Street",
    href: "#contact-form",
  },
];

const socialLinks = [
  {
    label: "GitHub",
    value: "github.com/DarkHeu123",
    href: "https://github.com/DarkHeu123",
    icon: "https://cdn.simpleicons.org/github/181717",
    copy: "Browse my repositories and development work.",
  },
  {
    label: "Facebook",
    value: "facebook.com/Darkyellow2113",
    href: "https://www.facebook.com/Darkyellow2113",
    icon: "https://cdn.simpleicons.org/facebook/1877F2",
    copy: "Connect with me and reach out on Facebook.",
  },
  {
    label: "LinkedIn",
    value: "LinkedIn profile coming soon",
    href: "",
    icon: "https://cdn.simpleicons.org/linkedin/0A66C2",
    copy: "This profile link can be added here as soon as it is ready to share.",
  },
];

const backendTechnologies = ["Node.js", "Django", "PHP", "Laravel"];

const buildPreferences = [
  {
    title: "Mobile App Development",
    copy:
      "When building mobile apps, I prefer React Native with TypeScript and Tailwind CSS on the front end, paired with a Node.js or Ruby on Rails backend depending on the product, integrations, and delivery timeline.",
    items: ["React Native", "TypeScript", "Tailwind CSS", "Node.js", "Ruby on Rails"],
  },
  {
    title: "Web Application Development",
    copy:
      "For web applications, I prefer Tailwind CSS for fast, consistent interface development and choose MySQL or PostgreSQL when the product needs a reliable relational database foundation.",
    items: ["Tailwind CSS", "MySQL", "PostgreSQL"],
  },
];

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#backend", label: "Backend" },
  { href: "#technologies", label: "Technologies" },
  { href: "#certificates", label: "Certificates" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Get in Touch" },
];

function SectionHeading({ tag, title, copy }) {
  return (
    <div className="reveal text-center md:text-left" style={{ "--delay": "0.1s" }}>
      <span className="section-tag">{tag}</span>
      <h2 className="section-title">{title}</h2>
      <p className="section-copy">{copy}</p>
    </div>
  );
}

function AssetImage({
  src,
  alt,
  className,
  fallbackLabel,
  fallbackClassName = "",
  compactFallback = false,
}) {
  const [hasError, setHasError] = useState(false);

  if (!src || hasError) {
    return (
      <div
        className={`flex items-center justify-center text-center ${fallbackClassName}`}
      >
        {compactFallback ? (
          <div className="px-4">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-[22px] bg-gradient-to-br from-slate-900 to-accent font-display text-2xl font-bold text-white shadow-lg">
              AJP
            </div>
            <p className="mt-3 text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
              Add profile photo
            </p>
          </div>
        ) : (
          <div className="max-w-[16rem] px-4">
            <p className="font-display text-lg font-bold text-slate-900">
              Image preview ready
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-600">{fallbackLabel}</p>
          </div>
        )}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => setHasError(true)}
    />
  );
}

function TechnologyCard({ tech, className = "" }) {
  return (
    <div
      className={`flex items-center gap-3 rounded-[22px] border border-black/5 bg-white/90 px-4 py-3 shadow-lg shadow-slate-900/5 sm:px-5 sm:py-4 ${className}`}
    >
      <img
        src={tech.icon}
        alt={`${tech.name} logo`}
        className="h-10 w-10 rounded-xl bg-slate-50 p-2"
        loading="lazy"
      />
      <div className="min-w-0">
        <p className="text-sm text-slate-500">Technology</p>
        <p className="font-semibold text-slate-900">{tech.name}</p>
      </div>
    </div>
  );
}

function TechnologyMarquee({ cardClassName = "" }) {
  return (
    <div className="tech-marquee">
      {[0, 1].map((track) => (
        <div key={track} className="tech-track" aria-hidden={track === 1}>
          {technologies.map((tech) => (
            <TechnologyCard
              key={`${track}-${tech.name}`}
              tech={tech}
              className={cardClassName}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

function ProjectPreview({ project }) {
  if (project.image) {
    return (
      <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-slate-100 via-white to-slate-200 p-4 sm:p-5">
        <div className="absolute inset-0 bg-soft-grid bg-[size:44px_44px] opacity-20" />
        <div className="relative flex h-full items-center justify-center overflow-hidden rounded-[24px] border border-black/5 bg-white p-2 shadow-xl shadow-slate-900/10 sm:p-3">
          <img
            src={project.image}
            alt={project.alt}
            className={`h-full w-full rounded-[18px] ${
              project.imageFit === "contain"
                ? "bg-white object-contain object-center"
                : "bg-slate-50 object-cover object-top"
            }`}
            loading="lazy"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-slate-950 via-[#193d8d] to-[#1ea7c4] p-5 text-white sm:p-6">
      <div className="absolute inset-0 bg-soft-grid bg-[size:48px_48px] opacity-15" />
      <div className="absolute -left-10 bottom-0 h-40 w-40 rounded-full bg-cyan-300/15 blur-3xl" />
      <div className="absolute -right-10 top-4 h-40 w-40 rounded-full bg-white/10 blur-3xl" />

      <div className="relative flex h-full flex-col justify-between rounded-[24px] border border-white/10 bg-white/10 p-5 backdrop-blur-sm">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/80">
            {project.previewLabel || "Project preview"}
          </span>
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/60">
            {project.eyebrow}
          </span>
        </div>

        <div className="mt-6">
          <h3 className="max-w-md font-display text-3xl font-bold leading-tight sm:text-[2rem]">
            {project.title}
          </h3>
          <p className="mt-3 max-w-lg text-sm leading-7 text-white/80">
            {project.previewCopy ||
              "A polished placeholder is shown here until the real project screenshot is added."}
          </p>
        </div>

        <div className="mt-6 grid gap-3 min-[420px]:grid-cols-3">
          {(project.previewStats || ["Design", "Build", "Launch"]).map((item) => (
            <div
              key={`${project.title}-${item}`}
              className="rounded-[18px] border border-white/10 bg-slate-950/20 px-3 py-4 text-center"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/60">
                Focus
              </p>
              <p className="mt-2 text-sm font-semibold text-white">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project, delay }) {
  return (
    <article
      className="glass-panel reveal flex h-full flex-col overflow-hidden"
      style={{ "--delay": delay }}
    >
      <div className="border-b border-black/5">
        <ProjectPreview project={project} />
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6 md:p-8">
        <div className="flex flex-wrap items-center gap-3">
          <span className="section-tag">{project.eyebrow}</span>
          <span className="rounded-full border border-black/10 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-600">
            {project.period}
          </span>
        </div>

        <h3 className="mt-5 font-display text-2xl font-bold text-slate-900 sm:text-3xl">
          {project.title}
        </h3>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {project.metrics.map((metric) => (
            <div
              key={`${project.title}-${metric.label}`}
              className="rounded-[22px] border border-black/5 bg-white/85 p-4"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                {metric.label}
              </p>
              <p className="mt-2 font-display text-lg font-bold text-slate-900">
                {metric.value}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 space-y-4">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
              Overview
            </p>
            <p className="mt-2 text-base leading-7 text-slate-600">
              {project.description}
            </p>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
              My Contribution
            </p>
            <p className="mt-2 text-base leading-7 text-slate-600">
              {project.contribution}
            </p>
          </div>

          {project.impact ? (
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                Impact
              </p>
              <p className="mt-2 text-base leading-7 text-slate-600">
                {project.impact}
              </p>
            </div>
          ) : null}
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={`${project.title}-${tag}`} className="badge-chip">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-8 space-y-3">
          {project.highlights.map((highlight) => (
            <div
              key={`${project.title}-${highlight}`}
              className="flex items-start gap-3 rounded-[20px] bg-slate-50/90 px-4 py-3"
            >
              <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-accent" />
              <p className="text-sm leading-7 text-slate-600">{highlight}</p>
            </div>
          ))}
        </div>

        {project.links?.length ? (
          <div className="mt-8 flex flex-wrap gap-3 border-t border-black/5 pt-6">
            {project.links.map((link) => (
              <a
                key={`${project.title}-${link.label}`}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className={`inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition hover:-translate-y-1 ${
                  link.variant === "primary"
                    ? "bg-slate-900 text-white hover:bg-accent"
                    : "border border-slate-300 bg-white/85 text-slate-700 hover:border-accent hover:text-accent"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        ) : project.accessNote ? (
          <div className="mt-8 rounded-[22px] border border-dashed border-black/10 bg-white/75 px-4 py-4 text-sm leading-6 text-slate-500">
            {project.accessNote}
          </div>
        ) : null}
      </div>
    </article>
  );
}

function CertificateModal({ certificate, onClose }) {
  useEffect(() => {
    if (!certificate) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [certificate, onClose]);

  if (!certificate) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 px-3 py-4 backdrop-blur-md sm:px-4 sm:py-8"
      onClick={onClose}
      role="presentation"
    >
      <div className="flex min-h-full items-center justify-center">
        <div
          className="modal-pop relative w-full max-w-5xl overflow-hidden rounded-[24px] border border-white/10 bg-white shadow-2xl sm:rounded-[30px]"
          onClick={(event) => event.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-labelledby="certificate-modal-title"
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute right-3 top-3 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-base font-semibold text-white hover:scale-105 hover:bg-accent sm:right-4 sm:top-4 sm:h-11 sm:w-11 sm:text-xl"
            aria-label="Close certificate popup"
          >
            x
          </button>

          <div className="grid max-h-[90vh] overflow-auto lg:grid-cols-[1.2fr_0.8fr]">
            <div className="bg-gradient-to-br from-slate-100 via-white to-emerald-50 p-3 sm:p-4 md:p-6">
              <div className="overflow-hidden rounded-[24px] border border-black/5 bg-white shadow-lg shadow-slate-900/10">
                <AssetImage
                  src={certificate.image}
                  alt={`${certificate.title} certificate`}
                  className="h-full max-h-[52vh] w-full object-contain bg-white sm:max-h-[70vh]"
                  fallbackLabel="Add the certificate image file to public/images/certificates so the full preview appears here."
                  fallbackClassName="min-h-[22rem] bg-gradient-to-br from-white via-slate-50 to-emerald-50"
                />
              </div>
            </div>

            <div className="flex flex-col justify-between p-5 sm:p-6 md:p-8">
              <div>
                <span className="section-tag">{certificate.type}</span>
                <h3
                  id="certificate-modal-title"
                  className="mt-5 font-display text-2xl font-bold text-slate-900 sm:text-3xl"
                >
                  {certificate.title}
                </h3>
                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                  {certificate.issuer}
                </p>
                <p className="mt-6 text-base leading-7 text-slate-600">
                  {certificate.description}
                </p>
              </div>

              <div className="mt-8 rounded-[24px] bg-slate-50 p-5">
                <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
                  Date
                </p>
                <p className="mt-2 font-display text-xl font-bold text-slate-900 sm:text-2xl">
                  {certificate.date}
                </p>
                <p className="mt-4 text-sm leading-6 text-slate-500">
                  Click outside the popup or press ESC to close.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
      return undefined;
    }

    const mediaQuery = window.matchMedia("(min-width: 768px)");

    const handleViewportChange = (event) => {
      if (event.matches) {
        setMenuOpen(false);
      }
    };

    handleViewportChange(mediaQuery);

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", handleViewportChange);

      return () => mediaQuery.removeEventListener("change", handleViewportChange);
    }

    mediaQuery.addListener(handleViewportChange);

    return () => mediaQuery.removeListener(handleViewportChange);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") {
      return undefined;
    }

    const revealElements = document.querySelectorAll(".reveal");
    const makeVisible = () => {
      revealElements.forEach((element) => {
        element.classList.add("is-visible");
      });
    };

    // Some in-app browsers do not handle the hidden reveal state well, so
    // promote sections to visible immediately after the first paint.
    const frame = window.requestAnimationFrame(() => {
      window.requestAnimationFrame(makeVisible);
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio inquiry from ${formData.name || "Website Visitor"}`,
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
    );

    window.location.href = `mailto:johannromblon123123@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <div className="relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 -z-10 h-[38rem] bg-soft-grid bg-[size:56px_56px] opacity-40" />
        <div className="absolute left-0 top-32 -z-10 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl" />
        <div className="absolute right-0 top-80 -z-10 h-80 w-80 rounded-full bg-amber-400/15 blur-3xl" />

        <header className="sticky top-0 z-30 border-b border-black/5 bg-[#fffaf3]/85 backdrop-blur-xl">
          <div className="shell py-3 sm:py-4">
            <div className="flex items-start justify-between gap-4 sm:items-center">
              <a
                href="#home"
                className="min-w-0 max-w-[13rem] font-display text-base font-bold leading-tight text-slate-900 sm:max-w-none sm:text-xl"
              >
                Angelo Johann Paras
              </a>

              <button
                type="button"
                onClick={() => setMenuOpen((current) => !current)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/80 text-slate-800 md:hidden"
                aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={menuOpen}
              >
                <div className="flex flex-col gap-1.5">
                  <span
                    className={`h-0.5 w-5 rounded-full bg-current transition ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
                  />
                  <span
                    className={`h-0.5 w-5 rounded-full bg-current transition ${menuOpen ? "opacity-0" : ""}`}
                  />
                  <span
                    className={`h-0.5 w-5 rounded-full bg-current transition ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
                  />
                </div>
              </button>
            </div>

            <nav className="mt-4 hidden flex-wrap gap-3 text-sm text-slate-600 md:flex">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="hover:text-accent">
                  {link.label}
                </a>
              ))}
            </nav>

            {menuOpen ? (
              <nav className="mt-4 grid gap-2 rounded-[24px] border border-black/5 bg-white/85 p-3 text-sm text-slate-700 shadow-lg shadow-slate-900/5 md:hidden">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-2xl px-4 py-3 hover:bg-slate-100 hover:text-accent"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            ) : null}
          </div>
        </header>

        <main className="shell pb-16 pt-6 md:pb-24 md:pt-12">
          <section
            id="home"
            className="grid scroll-mt-28 gap-8 md:gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center"
          >
            <div className="text-center lg:text-left">
              <div className="reveal" style={{ "--delay": "0.05s" }}>
                <span className="section-tag w-full justify-center px-4 py-2 text-center leading-5 sm:w-auto sm:text-left lg:justify-start">
                  Web Developer - Digital Solutions
                </span>
                <h1 className="mt-6 max-w-4xl font-display text-3xl font-bold leading-tight text-slate-900 sm:text-5xl md:text-6xl">
                  I build User-friendly, efficient, and visually stunning websites.
                </h1>
                <p className="mt-6 max-w-2xl text-[15px] leading-7 text-slate-600 sm:mx-auto sm:text-base lg:mx-0 md:text-xl">
                  Passionate and skilled in web development, and digital solutions. I am committed to delivering high-quality
                  results while continuously learning and improving.
                </p>
              </div>

              <div
                className="reveal mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start"
                style={{ "--delay": "0.15s" }}
              >
                <a
                  href="#projects"
                  className="inline-flex w-full items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:-translate-y-1 hover:bg-accent sm:w-auto"
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="inline-flex w-full items-center justify-center rounded-full border border-slate-300 bg-white/80 px-6 py-3 text-sm font-semibold text-slate-700 hover:-translate-y-1 hover:border-accent hover:text-accent sm:w-auto"
                >
                  Contact Me
                </a>
              </div>

              <div
                className="reveal mt-10 grid gap-4 sm:grid-cols-3"
                style={{ "--delay": "0.25s" }}
              >
                {highlightStats.map((stat) => (
                  <div key={stat.label} className="stat-card">
                    <p className="font-display text-3xl font-bold text-slate-900">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal" style={{ "--delay": "0.2s" }}>
              <div className="glass-panel relative mx-auto max-w-xl overflow-hidden p-6 sm:p-8 md:p-10">
                <div className="absolute -right-10 top-8 h-28 w-28 rounded-full bg-emerald-300/40 blur-2xl" />
                <div className="absolute -left-8 bottom-0 h-32 w-32 rounded-full bg-amber-300/35 blur-2xl" />

                <div className="relative mx-auto h-36 w-36 overflow-hidden rounded-[32px] border-4 border-white/80 shadow-2xl shadow-slate-900/15 animate-float sm:h-44 sm:w-44 sm:rounded-[36px]">
                  <AssetImage
                    src={profilePhoto}
                    alt="Portrait of Angelo Johann Paras"
                    className="h-full w-full object-cover"
                    fallbackLabel="Add your photo to public/images/profile/angelo-johann.jpg to show it here."
                    fallbackClassName="h-full w-full bg-gradient-to-br from-slate-100 via-white to-emerald-50"
                    compactFallback
                  />
                </div>

                <div className="relative mt-8 space-y-5 text-center sm:text-left">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
                      Hello, I&apos;m
                    </p>
                    <h2 className="mt-2 font-display text-3xl font-bold text-slate-900">
                      Angelo Johann Paras
                    </h2>
                    <p className="mt-3 text-base leading-7 text-slate-600">
                      A dedicated web developer passionate
                      about technology, innovation, and meaningful solutions that
                      make a difference.
                    </p>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-black/5 bg-white/80 p-4">
                      <p className="text-sm text-slate-500">Focus</p>
                      <p className="mt-1 font-semibold text-slate-900">
                        Web Development
                      </p>
                    </div>
                    <div className="rounded-2xl border border-black/5 bg-white/80 p-4">
                      <p className="text-sm text-slate-500">Based In</p>
                      <p className="mt-1 font-semibold text-slate-900">
                        Laguna, Philippines
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap justify-center gap-3 sm:justify-start">
                    <span className="badge-chip">Modern UI</span>
                    <span className="badge-chip">Responsive Layouts</span>
                    <span className="badge-chip">Continuous Learning</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="about" className="scroll-mt-28 pt-20 md:pt-24">
            <SectionHeading
              tag="About Me"
              title="A portfolio shaped by experience, execution, and continuous growth."
              copy="With a foundation in web development and digital tools, I focus on building solutions that are clear, useful, and dependable. This section highlights both my technical range and the professional habits I bring to every project."
            />

            <div className="mt-12 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
              <div
                className="glass-panel reveal p-6 sm:p-8 md:p-10"
                style={{ "--delay": "0.15s" }}
              >
                <p className="text-lg leading-8 text-slate-600">
                  I combine curiosity, discipline, and creativity to build
                  websites that feel polished, intuitive, and reliable. My
                  work balances strong interface development with practical
                  problem-solving so every feature supports a real user need.
                </p>
                <p className="mt-6 text-lg leading-8 text-slate-600">
                  Whether I am organizing data, refining interfaces with
                  Tailwind CSS, or building components in React, my goal stays
                  the same: deliver work that is clean, efficient, and genuinely
                  helpful.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {skillGroups.map((group, index) => (
                  <div
                    key={group.title}
                    className="info-card reveal"
                    style={{ "--delay": `${0.2 + index * 0.08}s` }}
                  >
                    <h3 className="font-display text-xl font-bold text-slate-900">
                      {group.title}
                    </h3>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span key={item} className="badge-chip">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="backend" className="scroll-mt-28 pt-20 md:pt-24">
            <SectionHeading
              tag="Backend"
              title="Backend systems i personally chosen for maintainability, scalability, and product fit."
              copy="I work across JavaScript and PHP ecosystems, selecting the backend stack that best supports performance, team workflow, and long-term growth."
            />

            <div className="mt-12 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
              <div
                className="glass-panel reveal p-6 sm:p-8 md:p-10"
                style={{ "--delay": "0.15s" }}
              >
                <span className="section-tag">Core Backend Stack</span>
                <h3 className="mt-5 font-display text-3xl font-bold text-slate-900">
                  Node.js, Django, and PHP with Laravel
                </h3>
                <p className="mt-5 text-lg leading-8 text-slate-600">
                  My backend foundation now includes Node.js, Django, and PHP with
                  Laravel. I use these technologies to build application logic,
                  structure APIs, manage data flow, and support web products
                  with clean, maintainable architecture.
                </p>
                <p className="mt-5 text-lg leading-8 text-slate-600">
                  I value backend decisions that keep projects stable and easy
                  to extend, whether the goal is rapid product delivery,
                  reliable database integration, or a clear separation between
                  front-end and server-side responsibilities.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {backendTechnologies.map((item) => (
                    <span key={item} className="badge-chip">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid gap-4">
                {buildPreferences.map((preference, index) => (
                  <article
                    key={preference.title}
                    className="info-card reveal"
                    style={{ "--delay": `${0.22 + index * 0.08}s` }}
                  >
                    <h3 className="font-display text-2xl font-bold text-slate-900">
                      {preference.title}
                    </h3>
                    <p className="mt-4 text-base leading-7 text-slate-600">
                      {preference.copy}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {preference.items.map((item) => (
                        <span key={`${preference.title}-${item}`} className="badge-chip">
                          {item}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section id="technologies" className="scroll-mt-28 pt-20 md:pt-24">
            <SectionHeading
              tag="Technologies I Use"
              title="A practical tools for frontend, backend, data, and delivery."
              copy="These are the technologies I use to design interfaces, build application logic, manage data, and ship reliable digital results."
            />

            <div
              className="glass-panel reveal mt-12 overflow-hidden p-4 sm:p-6 md:p-8"
              style={{ "--delay": "0.15s" }}
            >
              <TechnologyMarquee cardClassName="min-w-[14rem] sm:min-w-[180px]" />
            </div>
          </section>

          <section id="certificates" className="scroll-mt-28 pt-20 md:pt-24">
            <SectionHeading
              tag="Certificates"
              title="Webinar, seminar, and OJT achievements presented in one place."
              copy="Certificates that reflects my commitment to continuous learning through seminars that enhanced my skills."
            />

            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {certificates.map((certificate, index) => (
                <button
                  key={certificate.title}
                  type="button"
                  onClick={() => setSelectedCertificate(certificate)}
                  className="glass-panel reveal group overflow-hidden text-left"
                  style={{ "--delay": `${0.12 + index * 0.08}s` }}
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-slate-100 via-white to-emerald-50">
                    <AssetImage
                      src={certificate.image}
                      alt={`${certificate.title} certificate preview`}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      fallbackLabel="Add the certificate image file to public/images/certificates to show the real preview."
                      fallbackClassName="h-full w-full bg-gradient-to-br from-slate-100 via-white to-emerald-50"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent p-4 sm:p-5">
                      <span className="inline-flex rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-slate-700">
                        Click to View
                      </span>
                    </div>
                  </div>

                  <div className="p-5 sm:p-6 md:p-8">
                    <div className="rounded-[24px] bg-gradient-to-br from-white via-white to-emerald-50 p-5 sm:p-6">
                      <span className="section-tag">{certificate.type}</span>
                      <h3 className="mt-5 font-display text-2xl font-bold text-slate-900">
                        {certificate.title}
                      </h3>
                      <p className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                        {certificate.issuer}
                      </p>
                      <p className="mt-5 text-base leading-7 text-slate-600">
                        {certificate.description}
                      </p>
                    </div>
                    <div className="mt-5 flex flex-col items-start gap-3 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
                      <span>Date</span>
                      <span className="rounded-full bg-slate-100 px-4 py-2 font-medium text-slate-700">
                        {certificate.date}
                      </span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </section>

          <section id="projects" className="scroll-mt-28 pt-20 md:pt-24">
            <SectionHeading
              tag="Projects"
              title="Selected work focused on usability, integration, and real-world product needs."
              copy="These projects reflect how I approach front-end development: building responsive interfaces, supporting connected workflows, and creating experiences that are practical, polished, and easy to use."
            />

            <div className="reveal mt-8 flex flex-wrap gap-3" style={{ "--delay": "0.12s" }}>
              {projectSectionHighlights.map((item) => (
                <span key={item} className="badge-chip">
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {projects.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  delay={`${0.14 + index * 0.08}s`}
                />
              ))}
            </div>
          </section>

          <section id="contact" className="scroll-mt-28 pt-20 md:pt-24">
            <SectionHeading
              tag="Get in Touch"
              title="My Contact"
              copy="Want to work with me? Let's have a chat!"
            />

            <div className="mt-12 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
              <div className="space-y-4">
                {contactDetails.map((detail, index) => (
                  <a
                    key={detail.label}
                    href={detail.href}
                    className="info-card reveal block hover:-translate-y-1 hover:border-accent/20"
                    style={{ "--delay": `${0.12 + index * 0.08}s` }}
                  >
                    <p className="text-sm uppercase tracking-[0.24em] text-slate-500">
                      {detail.label}
                    </p>
                    <p className="mt-3 break-words text-lg font-semibold text-slate-900">
                      {detail.value}
                    </p>
                  </a>
                ))}

                <div
                  className="glass-panel reveal p-5 sm:p-6"
                  style={{ "--delay": "0.36s" }}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-sm uppercase tracking-[0.24em] text-slate-500">
                        Connect with me
                      </p>
                      <h3 className="mt-3 font-display text-2xl font-bold text-slate-900">
                        Social Links
                      </h3>
                    </div>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
                      {socialLinks.filter((link) => link.href).length} Live Now
                    </span>
                  </div>

                  <div className="mt-5 grid gap-3">
                    {socialLinks.map((link) =>
                      link.href ? (
                        <a
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-start gap-4 rounded-[24px] border border-black/5 bg-white/80 p-4 transition hover:-translate-y-1 hover:border-accent/30 hover:bg-white"
                        >
                          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100">
                            <img
                              src={link.icon}
                              alt={`${link.label} logo`}
                              className="h-6 w-6"
                              loading="lazy"
                            />
                          </div>
                          <div className="min-w-0">
                            <p className="text-sm uppercase tracking-[0.22em] text-slate-500">
                              {link.label}
                            </p>
                            <p className="mt-2 break-words text-base font-semibold text-slate-900">
                              {link.value}
                            </p>
                            <p className="mt-2 text-sm leading-6 text-slate-600">
                              {link.copy}
                            </p>
                          </div>
                        </a>
                      ) : (
                        <div
                          key={link.label}
                          className="flex items-start gap-4 rounded-[24px] border border-dashed border-slate-300 bg-slate-50/80 p-4"
                        >
                          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white">
                            <img
                              src={link.icon}
                              alt={`${link.label} logo`}
                              className="h-6 w-6"
                              loading="lazy"
                            />
                          </div>
                          <div className="min-w-0">
                            <p className="text-sm uppercase tracking-[0.22em] text-slate-500">
                              {link.label}
                            </p>
                            <p className="mt-2 break-words text-base font-semibold text-slate-900">
                              {link.value}
                            </p>
                            <p className="mt-2 text-sm leading-6 text-slate-600">
                              {link.copy}
                            </p>
                          </div>
                        </div>
                      ),
                    )}
                  </div>
                </div>
              </div>

              <form
                id="contact-form"
                onSubmit={handleSubmit}
                className="glass-panel reveal p-5 sm:p-6 md:p-8"
                style={{ "--delay": "0.2s" }}
              >
                <div className="grid gap-5 md:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-sm font-medium text-slate-600">
                      Your name
                    </span>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400 focus:border-accent"
                      required
                    />
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-sm font-medium text-slate-600">
                      Your email
                    </span>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400 focus:border-accent"
                      required
                    />
                  </label>
                </div>

                <label className="mt-5 block">
                  <span className="mb-2 block text-sm font-medium text-slate-600">
                    Your message
                  </span>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here"
                    rows="6"
                    className="w-full rounded-[24px] border border-black/10 bg-white px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400 focus:border-accent"
                    required
                  />
                </label>

                <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm leading-6 text-slate-500">
                    Clicking send opens an email draft addressed to{" "}
                    johannromblon123123@gmail.com.
                  </p>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:-translate-y-1 hover:bg-accent sm:w-auto"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </section>
        </main>

        <footer className="border-t border-black/5 bg-white/50 py-6">
          <div className="shell flex flex-col gap-3 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
            <p>
              Copyright {new Date().getFullYear()} Angelo Johann Paras.
            </p>
            <a href="#home" className="font-medium text-slate-700 hover:text-accent">
              Back to top
            </a>
          </div>
        </footer>
      </div>

      <CertificateModal
        certificate={selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
      />
    </>
  );
}

export default App;
