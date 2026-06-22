import { useEffect, useState } from 'react';

const SECTIONS = [
  { id: 'hero', label: 'Início' },
  { id: 'areas', label: 'Áreas' },
  { id: 'about', label: 'Sobre' },
  { id: 'reviews', label: 'Avaliações' },
];

export default function SectionNav() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const elements = SECTIONS.map(({ id }) => document.getElementById(id)).filter(Boolean);
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (!visible.length) return;

        const index = elements.indexOf(visible[0].target);
        if (index !== -1) setActiveIndex(index);
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  function scrollToSection(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <nav
      aria-label="Navegação entre seções"
      className="fixed right-3 md:right-6 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center gap-3"
    >
      <div className="flex flex-col items-center gap-2.5 rounded-full bg-[rgba(44,44,44,0.75)] backdrop-blur-sm px-2 py-3 border border-[rgba(201,160,96,0.25)]">
        {SECTIONS.map(({ id, label }, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={id}
              type="button"
              onClick={() => scrollToSection(id)}
              aria-label={`Ir para ${label}`}
              aria-current={isActive ? 'true' : undefined}
              className="group relative flex items-center justify-center p-1"
            >
              <span
                className={`block rounded-full transition-all duration-300 ${
                  isActive
                    ? 'w-2.5 h-2.5 bg-[#C9A060] scale-110'
                    : 'w-2 h-2 bg-[rgba(201,160,96,0.35)] hover:bg-[rgba(201,160,96,0.7)]'
                }`}
              />
              <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded bg-[#2C2C2C] px-2.5 py-1 font-lato text-[11px] tracking-wide text-[#F0EAD6] opacity-0 transition-opacity duration-200 group-hover:opacity-100 hidden md:block">
                {label}
              </span>
            </button>
          );
        })}
      </div>

      <p className="font-lato text-[10px] tracking-widest uppercase text-[#C9A060] bg-[rgba(44,44,44,0.75)] backdrop-blur-sm px-2 py-1 rounded border border-[rgba(201,160,96,0.25)]">
        {activeIndex + 1} de {SECTIONS.length}
      </p>
    </nav>
  );
}
