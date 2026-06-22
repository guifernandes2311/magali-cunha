const WHATSAPP_URL =
  'https://wa.me/5534999865518?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta.';

function PhoneIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z"
        fill="#C9A060"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
        fill="#C9A060"
      />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1112 6.5a2.5 2.5 0 010 5z"
        fill="#C9A060"
      />
    </svg>
  );
}

const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'Áreas', href: '#areas' },
  { label: 'Sobre', href: '#about' },
  { label: 'Avaliações', href: '#reviews' },
];

const AREAS = [
  'Direito das Sucessões',
  'Direito de Família',
  'Direito Imobiliário',
  'Direito Bancário',
];

function scrollTo(id) {
  document.getElementById(id.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' });
}

export default function FooterSection() {
  return (
    <footer>
      {/* BLOCO 1 — Barra de contato */}
      <div className="bg-[#1a1008] border-b border-[rgba(201,160,96,0.2)]">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[rgba(201,160,96,0.2)]">
          {/* Telefone */}
          <a
            href={`tel:+5534999865518`}
            className="flex items-center gap-5 px-8 py-7 hover:bg-[rgba(201,160,96,0.05)] transition-colors"
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-full border border-[rgba(201,160,96,0.4)] flex items-center justify-center">
              <PhoneIcon />
            </div>
            <div>
              <p className="font-lato text-[11px] tracking-[0.15em] uppercase text-[#C9A060] font-semibold mb-0.5">
                Ligue-nos agora!
              </p>
              <p className="font-playfair text-[#F0EAD6] text-[17px]">(34) 99986-5518</p>
              <p className="font-lato text-[13px] text-[rgba(240,234,214,0.55)] mt-0.5">
                Magali Cunha - Advogada
              </p>
            </div>
          </a>

          {/* E-mail */}
          <a
            href="mailto:magalicunha@terra.com.br"
            className="flex items-center gap-5 px-8 py-7 hover:bg-[rgba(201,160,96,0.05)] transition-colors"
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-full border border-[rgba(201,160,96,0.4)] flex items-center justify-center">
              <MailIcon />
            </div>
            <div>
              <p className="font-lato text-[11px] tracking-[0.15em] uppercase text-[#C9A060] font-semibold mb-0.5">
                Envie-nos uma mensagem!
              </p>
              <p className="font-playfair text-[#F0EAD6] text-[17px]">magalicunha@terra.com.br</p>
              <p className="font-lato text-[13px] text-[rgba(240,234,214,0.55)] mt-0.5">
                Magali Cunha - Advogada
              </p>
            </div>
          </a>

          {/* Endereço */}
          <a
            href="https://maps.google.com/?q=Rua+André+Costa+Nunes,+60,+Araxá,+MG"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-5 px-8 py-7 hover:bg-[rgba(201,160,96,0.05)] transition-colors"
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-full border border-[rgba(201,160,96,0.4)] flex items-center justify-center">
              <PinIcon />
            </div>
            <div>
              <p className="font-lato text-[11px] tracking-[0.15em] uppercase text-[#C9A060] font-semibold mb-0.5">
                Visite nosso escritório!
              </p>
              <p className="font-playfair text-[#F0EAD6] text-[17px]">Rua André Costa Nunes, 60</p>
              <p className="font-lato text-[13px] text-[rgba(240,234,214,0.55)] mt-0.5">
                Leda Barcellos — Araxá MG
              </p>
            </div>
          </a>
        </div>
      </div>

      {/* BLOCO 2 — Corpo do footer (4 colunas) */}
      <div className="bg-[#2C2C2C] py-14 px-6">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {/* Col 1 — Institucional */}
          <div>
            <h3 className="font-playfair text-[#C9A060] text-[18px] mb-3">
              Magali Cunha Advogada
            </h3>
            <div className="w-10 border-t border-[#C9A060] opacity-60 mb-4" />
            <p className="font-lato text-[13px] text-[rgba(240,234,214,0.7)] leading-relaxed">
              Magali Cunha é uma advogada dedicada e experiente, oferecendo serviços jurídicos de
              qualidade com foco na ética, justiça e excelência.
            </p>
          </div>

          {/* Col 2 — Horário */}
          <div>
            <h3 className="font-playfair text-[#C9A060] text-[18px] mb-3">
              Horário comercial
            </h3>
            <div className="w-10 border-t border-[#C9A060] opacity-60 mb-4" />
            <p className="font-lato text-[13px] text-[#C9A060] font-semibold mb-1">
              Dias de Abertura:
            </p>
            <p className="font-lato text-[13px] text-[rgba(240,234,214,0.7)] mb-4">
              Seg – Sex: 8:00 às 18:00
            </p>
            <p className="font-lato text-[13px] text-[#C9A060] font-semibold mb-1">
              Sem expediente:
            </p>
            <p className="font-lato text-[13px] text-[rgba(240,234,214,0.7)] leading-relaxed">
              Todos os Sábados e Domingos
              <br />
              Todos os feriados.
            </p>
          </div>

          {/* Col 3 — Áreas de atuação */}
          <div>
            <h3 className="font-playfair text-[#C9A060] text-[18px] mb-3">
              Áreas de atuação
            </h3>
            <div className="w-10 border-t border-[#C9A060] opacity-60 mb-4" />
            <ul className="flex flex-col gap-2">
              {AREAS.map((area) => (
                <li key={area} className="flex items-start gap-2">
                  <span className="text-[#C9A060] text-[10px] mt-[3px] flex-shrink-0">&#9658;</span>
                  <span className="font-lato text-[13px] text-[rgba(240,234,214,0.7)]">{area}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Perfil */}
          <div>
            <h3 className="font-playfair text-[#C9A060] text-[18px] mb-3">
              Perfil da Advogada
            </h3>
            <div className="w-10 border-t border-[#C9A060] opacity-60 mb-4" />
            <p className="font-lato text-[13px] text-[rgba(240,234,214,0.7)] leading-relaxed">
              Advogada com vasta experiência e comprometimento, buscando sempre a justiça e a
              defesa dos direitos dos seus clientes com ética e excelência.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-5 font-lato text-[11px] tracking-widest uppercase px-5 py-2.5 border border-[rgba(201,160,96,0.5)] text-[#C9A060] rounded hover:bg-[rgba(201,160,96,0.1)] transition-colors duration-200"
            >
              Fale comigo
            </a>
          </div>
        </div>
      </div>

      {/* BLOCO 3 — Barra de copyright */}
      <div className="bg-[#111] border-t border-[rgba(201,160,96,0.15)] py-5 px-6">
        <div className="max-w-[1100px] mx-auto flex flex-col items-center gap-3">
          <nav aria-label="Links do rodapé" className="flex items-center gap-1">
            {NAV_LINKS.map(({ label, href }, i) => (
              <span key={href} className="flex items-center gap-1">
                {i > 0 && (
                  <span className="text-[rgba(201,160,96,0.4)] text-[12px] select-none">·</span>
                )}
                <button
                  type="button"
                  onClick={() => scrollTo(href)}
                  className="font-lato text-[12px] tracking-wider text-[rgba(240,234,214,0.5)] hover:text-[#C9A060] transition-colors duration-200"
                >
                  {label}
                </button>
              </span>
            ))}
          </nav>
          <p className="font-lato text-[11px] text-[rgba(240,234,214,0.35)] tracking-wide">
            Magali Cunha © Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}
