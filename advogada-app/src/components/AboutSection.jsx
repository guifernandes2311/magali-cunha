import ScalesIcon from './icons/ScalesIcon';
import PeopleIcon from './icons/PeopleIcon';
import PersonIcon from './icons/PersonIcon';
import HeartIcon from './icons/HeartIcon';
import TreeIcon from './icons/TreeIcon';
import WhatsAppIcon from './icons/WhatsAppIcon';

const WHATSAPP_URL =
  'https://wa.me/5534999865518?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta.';

function IconBlock({ icon: Icon, children }) {
  return (
    <div className="flex items-start gap-5 py-6 border-b border-gray-100 last:border-b-0">
      <div className="flex-shrink-0 w-[50px] h-[50px] rounded-full border-2 border-[#C9A060] flex items-center justify-center">
        <Icon size={26} color="#C9A060" />
      </div>
      <p className="font-lato text-[15px] text-[#2C2C2C] leading-relaxed">{children}</p>
    </div>
  );
}

export default function AboutSection({
  aboutSrc = 'https://placehold.co/500x700/f5f0eb/C9A060?text=Foto',
}) {
  return (
    <section id="about" className="bg-white min-h-screen flex items-center py-12 md:py-16 px-4">
      <div className="max-w-[1100px] mx-auto w-full flex flex-col md:grid md:grid-cols-[40%_60%] gap-0 md:min-h-[calc(100vh-8rem)]">
        {/* LEFT COLUMN — portrait */}
        <div className="flex-shrink-0 min-h-[40vh] md:min-h-full overflow-hidden">
          <img
            src={aboutSrc}
            alt="Magali Cunha — Advogada"
            className="w-full h-full min-h-[40vh] md:min-h-full object-cover object-top"
          />
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col px-6 md:px-12 pt-10 md:pt-0 justify-center">
          {/* Title block */}
          <div className="flex flex-col items-center mb-2">
            <ScalesIcon size={48} color="#C9A060" className="mb-3" />
            <h2 className="font-playfair text-[38px] md:text-[42px] leading-none mt-3">
              <span className="text-[#2C2C2C] font-normal">sobre </span>
              <span className="text-[#C9A060] italic font-normal">mim</span>
            </h2>
            <div className="mt-3 mb-1">
              <span className="text-[#C9A060] text-xl">◆</span>
            </div>
            <div className="w-20 border-t border-[rgba(201,160,96,0.4)] mb-3" />
            {/* OAB credential */}
            <p className="font-lato text-[12px] tracking-widest uppercase text-[#C9A060] opacity-80">
              Dra. Magali Cunha &nbsp;|&nbsp; OAB/MG: 81.727
            </p>
          </div>

          {/* Icon + text blocks */}
          <div className="flex flex-col mt-4">
            {/* First block: TreeIcon — avoids duplicate ScalesIcon */}
            <IconBlock icon={TreeIcon}>
              Com{' '}
              <strong className="font-bold text-[#C9A060]">
                mais de 25 anos de experiência
              </strong>{' '}
              na advocacia, atuo de forma especializada nas áreas de Direito das
              Sucessões (inventários, testamentos e planejamento sucessório),
              Direito Imobiliário, Direito de Família e Direito Bancário.
            </IconBlock>

            <IconBlock icon={PeopleIcon}>
              Ao longo da minha trajetória profissional, acompanhei centenas de
              casos, desde as demandas mais simples até questões jurídicas de
              elevada complexidade, sempre com o mesmo compromisso: oferecer
              soluções seguras, técnicas e eficientes para cada cliente.
            </IconBlock>

            <IconBlock icon={PersonIcon}>
              Acredito que a advocacia vai muito além do conhecimento jurídico.
              Por isso, alio uma atuação técnica a um atendimento humanizado e
              transparente, mantendo o cliente constantemente informado sobre o
              andamento de seu processo, disponibilizando inclusive as
              principais peças processuais.
            </IconBlock>

            <IconBlock icon={HeartIcon}>
              Cada cliente é único. E cada caso recebe o mesmo rigor técnico que
              norteia minha atuação há mais de duas décadas na advocacia.
            </IconBlock>
          </div>

          {/* CTA */}
          <div className="mt-8 flex justify-center md:justify-start">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-lato text-[13px] tracking-wider uppercase px-7 py-3.5 bg-[#C9A060] text-[#2C2C2C] font-semibold rounded hover:bg-[#A87D30] transition-colors duration-200"
            >
              <WhatsAppIcon size={18} className="brightness-0" />
              Fale comigo no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
