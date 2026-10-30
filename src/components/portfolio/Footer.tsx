import { profile } from '@/data/portfolio';

export function Footer() {
  return (
    <footer className="border-t py-8 hairline">
      <div className="content-shell flex flex-col gap-5 text-sm muted-copy md:flex-row md:items-center md:justify-between">
        <p>Srigan Sivagnanenthirarajah</p>
        <div className="flex flex-wrap gap-4">
          {profile.links.map((link) => (
            <a
              className="transition duration-300 hover:text-[color:var(--accent)]"
              data-cursor="hover"
              href={link.href}
              key={link.label}
              rel={link.external ? 'noopener noreferrer' : undefined}
              target={link.external ? '_blank' : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
