import { partners, site } from "@/content/site";

export function Footer() {
  return (
    <footer className="bg-cream-paper text-pure-ink">
      <div className="page-shell border-t border-bone-gray py-60">
        <div className="grid gap-60 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-section">{site.name}</p>
            <p className="mt-20 max-w-[28rem] text-body-sm">
              Rural Hackers y Espacio Geranios: 20 plazas abiertas a toda
              España, para una semana en Galicia o en Murcia.
            </p>
          </div>

          <div className="grid gap-40 sm:grid-cols-2 lg:col-span-7">
            <div>
              <h2 className="label-mono text-charcoal-press">{partners.title}</h2>
              <ul className="mt-20 space-y-16">
                {partners.items.map((partner) => (
                  <li key={partner.name}>
                    <a
                      href={partner.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="label-mono underline underline-offset-4 transition-opacity hover:opacity-60"
                    >
                      {partner.name}
                    </a>
                    <p className="text-caption text-charcoal-press">{partner.role}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="label-mono text-charcoal-press">Contacto</h2>
              <ul className="mt-20 space-y-12 text-body-sm">
                <li>
                  <a
                    href={`mailto:${site.email}`}
                    className="underline underline-offset-4 transition-opacity hover:opacity-60"
                  >
                    {site.email}
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+34610602012"
                    className="underline underline-offset-4 transition-opacity hover:opacity-60"
                  >
                    610 602 012
                  </a>
                </li>
                <li className="label-mono text-charcoal-press">
                  {site.hashtags.join(" ● ")}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-60 flex flex-col gap-12 border-t border-bone-gray pt-24 label-mono text-caption sm:flex-row sm:items-center sm:justify-between">
          <span>Versión 0.1</span>
          <span>
            Rural Hackers · Espacio Geranios · Galicia · Murcia
          </span>
        </div>
      </div>
    </footer>
  );
}
