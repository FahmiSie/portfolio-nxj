"use client";

import Image from "next/image";
import Link from "next/link";

type LogoItem = {
  name: string;
  src: string;
  href?: string;
  alt?: string;
};

const logoItems: LogoItem[] = [
  {
    name: "PT. Fam Tech Globe",
    src: "/image/logos/famgroup.png",
    href: "mailto:famtech.co@gmail.com",
    alt: "Fam Logo",
  },
  {
    name: "PT. PIPI Plywood",
    src: "/image/logos/PIPI.png",
    href: "https://pipiplywood.com/",
    alt: "PIPI Logo",
  },
  {
    name: "PT. Mitra Makmur Jaya",
    src: "/image/logos/MMJ.png",
    href: "https://inaexport.id/perusahaan/56795-mitra-makmur-jaya",
    alt: "MMJ Logo",
  },
];

export default function LogoStrip({
  title = "Worked At",
  subtitle = "Great Companies",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="home-section logo-strip">
      <div className="container">
        <div className="logo-strip-header">
          <p className="logo-strip-kicker">Experienced</p>
          <h2 className="section-title">{title}</h2>
          <p className="section-subtitle">{subtitle}</p>
        </div>

        <div className="logo-strip-grid">
          {logoItems.map((logo) => {
            const img = (
              <div className="logo-card" key={logo.name}>
                <div className="logo-card-inner">
                  <Image
                    src={logo.src}
                    alt={logo.alt || logo.name}
                    width={120}
                    height={120}
                    className="logo-img-el"
                  />
                </div>
                <p className="logo-name">{logo.name}</p>
              </div>
            );

            return logo.href ? (
              <Link
                key={logo.name}
                href={logo.href}
                className="logo-card-link"
                target={logo.href.startsWith("http") ? "_blank" : undefined}
                rel={logo.href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                {img}
              </Link>
            ) : (
              img
            );
          })}
        </div>
      </div>
    </section>
  );
}
