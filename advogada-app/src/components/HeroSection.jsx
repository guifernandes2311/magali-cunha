import ScalesIcon from './icons/ScalesIcon';

const WHATSAPP_URL =
  'https://wa.me/5534999865518?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta.';

export default function HeroSection({
  heroSrc = 'https://placehold.co/500x700/4a4a4a/C9A060?text=Foto',
}) {
  return (
    <section id="hero" className="bg-[#2C2C2C] min-h-screen flex flex-col md:grid md:grid-cols-[35%_35%_30%]">
      {/* LEFT COLUMN — name/title | mobile: order 2 (after photo) */}
      <div className="order-2 md:order-none flex items-center justify-center p-8 md:p-12 md:border-r md:border-[rgba(201,160,96,0.2)] md:min-h-screen">
        <div className="flex flex-col items-start">
          <h1 className="font-playfair font-bold text-[#C9A060] leading-tight tracking-wide">
            <span className="block text-xl md:text-2xl font-normal">
              Advogada em Araxá
            </span>
            <span className="block text-3xl md:text-[36px] mt-2 uppercase tracking-wide">
              Magali Cunha
            </span>
            <span className="block text-base md:text-lg mt-3 font-normal tracking-normal">
              Familia . Sucessões . Imobiliário e Bancário
            </span>
          </h1>
          <div
            className="mt-4 border-t-2 border-[#C9A060]"
            style={{ width: '80px' }}
          />
        </div>
      </div>

      {/* CENTER COLUMN — portrait photo | mobile: order 1 (top, full-width) */}
      <div className="order-1 md:order-none relative min-h-[50vh] md:min-h-screen overflow-hidden">
        <img
          src={heroSrc}
          alt="Magali Cunha — Advogada"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
      </div>

      {/* RIGHT COLUMN — tagline + CTA | mobile: order 3 */}
      <div className="order-3 md:order-none flex items-center justify-center p-8 md:p-10 md:border-l md:border-[rgba(201,160,96,0.2)] md:min-h-screen">
        <div className="flex flex-col items-center text-center gap-4">
          <ScalesIcon size={72} color="#C9A060" />
          <h2 className="font-playfair font-bold text-[#C9A060] text-2xl md:text-[28px] tracking-widest uppercase">
            HÁ 25 ANOS
          </h2>
          <div className="border-t border-[rgba(201,160,96,0.4)] w-12" />
          <p className="font-lato text-[#F0EAD6] text-[15px] md:text-[16px] font-light italic leading-relaxed">
            cuidando da sua família e do seu patrimônio.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block font-lato text-[13px] tracking-wider uppercase px-6 py-3 bg-[#C9A060] text-[#2C2C2C] font-semibold rounded hover:bg-[#A87D30] transition-colors duration-200"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
