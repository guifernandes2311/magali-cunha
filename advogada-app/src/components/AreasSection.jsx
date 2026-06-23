import TreeIcon from './icons/TreeIcon';
import PeopleIcon from './icons/PeopleIcon';
import HouseIcon from './icons/HouseIcon';
import BankIcon from './icons/BankIcon';
import WhatsAppIcon from './icons/WhatsAppIcon';

const WHATSAPP_URL =
  'https://wa.me/5534999865518?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta.';

function AreaCard({ icon: Icon, subtitle, title, description }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-8 border border-[rgba(201,160,96,0.15)] hover:shadow-lg hover:border-gold transition-all duration-300 flex flex-col items-center text-center">
      <div className="w-20 h-20 rounded-full border-[1.5px] border-gold flex items-center justify-center">
        <Icon size={40} color="#C9A060" />
      </div>
      <div className="w-12 border-t border-gold opacity-60 my-4" />
      <p className="font-lato uppercase tracking-widest text-[11px] text-[#888] mb-1">
        {subtitle}
      </p>
      <h3 className="font-playfair font-bold text-[22px] text-charcoal mb-3">{title}</h3>
      <p className="font-lato text-[14px] text-[#888] leading-relaxed">{description}</p>
    </div>
  );
}

const AREAS = [
  {
    icon: TreeIcon,
    subtitle: 'DIREITO DAS',
    title: 'SUCESSÕES',
    description:
      'Inventários, testamentos, alvarás, planejamento sucessório — resolvo com segurança e agilidade.',
  },
  {
    icon: PeopleIcon,
    subtitle: 'DIREITO DE',
    title: 'FAMÍLIA',
    description:
      'Divórcio, pensão alimentícia, regulamentação de visitas e guarda — acompanho seu caso com cuidado e firmeza.',
  },
  {
    icon: HouseIcon,
    subtitle: 'DIREITO',
    title: 'IMOBILIÁRIO',
    description:
      'Compra, venda, litígios condominiais e regularização de imóveis — protejo seu patrimônio em cada etapa da negociação.',
  },
  {
    icon: BankIcon,
    subtitle: 'DIREITO',
    title: 'BANCÁRIO',
    description:
      'Cobranças indevidas, contratos abusivos ou nome negativado — defendo seus direitos frente aos bancos.',
  },
];

export default function AreasSection() {
  return (
    <section id="areas" className="min-h-screen flex flex-col">
      {/* HEADER BLOCK */}
      <div className="relative overflow-hidden flex-shrink-0 min-h-[220px] rounded-b-[40px] bg-gradient-to-b from-[#1a1008] to-[#2C2C2C]">
        {/* Gold decorative effects */}
        <div
          className="absolute -right-16 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full opacity-20 blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, #C9A060 0%, transparent 70%)' }}
        />
        <div
          className="absolute right-8 top-8 w-32 h-32 rounded-full opacity-10 blur-2xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, #C9A060 0%, transparent 70%)' }}
        />
        <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[rgba(201,160,96,0.35)] to-transparent pointer-events-none hidden md:block" />
        <div className="absolute right-12 top-1/2 -translate-y-1/2 w-24 h-px bg-gradient-to-r from-transparent to-[rgba(201,160,96,0.4)] pointer-events-none hidden md:block" />
        <div className="absolute right-6 bottom-10 w-16 h-16 rounded-full border border-[rgba(201,160,96,0.2)] pointer-events-none hidden md:block" />
        <div className="absolute right-20 bottom-16 w-2 h-2 rounded-full bg-[rgba(201,160,96,0.5)] pointer-events-none hidden md:block" />
        <div className="absolute right-32 top-1/3 w-1.5 h-1.5 rounded-full bg-[rgba(201,160,96,0.35)] pointer-events-none hidden md:block" />

        <div className="relative z-10 max-w-4xl px-6 md:px-12 py-10">
          <p className="font-lato uppercase tracking-widest text-[13px] text-gold">
            ÁREAS DE ATUAÇÃO
          </p>
          <div className="w-12 border-t border-gold opacity-60 my-3" />
          <h2 className="font-playfair text-2xl md:text-[38px] leading-snug text-white">
            <span className="font-normal">Soluções jurídicas </span>
            <span className="text-gold italic font-normal">para proteger</span>
            <br />
            <span className="font-normal">o que mais importa.</span>
          </h2>
        </div>
      </div>

      {/* CARDS GRID */}
      <div className="bg-[#F5F0EA] flex-1 flex flex-col justify-center py-12 md:py-16 px-6">
        <div className="max-w-[900px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          {AREAS.map((area) => (
            <AreaCard key={area.title} {...area} />
          ))}
        </div>

        {/* CTA */}
        <div className="max-w-[900px] mx-auto mt-10 flex flex-col items-center gap-3">
          <p className="font-lato text-[14px] text-[#888] italic">
            Não sabe por onde começar? Fale comigo — orientação sem compromisso.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 font-lato text-[13px] tracking-wider uppercase px-8 py-3.5 bg-[#C9A060] text-[#2C2C2C] font-semibold rounded hover:bg-[#A87D30] transition-colors duration-200"
          >
            <WhatsAppIcon size={18} className="brightness-0" />
            Fale sobre o seu caso
          </a>
        </div>
      </div>
    </section>
  );
}
