import WhatsAppIcon from './icons/WhatsAppIcon';

const WHATSAPP_URL =
  'https://wa.me/5534999865518?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta.';

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-5 right-5 md:bottom-6 md:right-6 z-50">
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale conosco no WhatsApp"
        className="whatsapp-float relative isolate flex items-center justify-center w-14 h-14 md:w-[60px] md:h-[60px] rounded-full bg-[#25D366] shadow-lg transition-transform duration-200 hover:scale-105"
      >
        <WhatsAppIcon size={30} />
      </a>
    </div>
  );
}
