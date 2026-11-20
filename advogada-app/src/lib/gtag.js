const WHATSAPP_CONVERSION_ID = 'AW-18476351423/UeRyCMvnkbwdEL__mupE';

// onClick para links de WhatsApp: registra a conversão do Google Ads.
// Nova aba: deixa o link abrir normalmente. Mesma aba: segura a navegação
// até o gtag confirmar o envio (ou até 1s, se o callback não voltar).
export function trackWhatsAppConversion(event) {
  if (typeof window.gtag !== 'function') return;

  const link = event.currentTarget;
  const opensNewTab =
    link.target === '_blank' ||
    event.ctrlKey ||
    event.metaKey ||
    event.shiftKey ||
    event.button === 1;

  if (opensNewTab) {
    window.gtag('event', 'conversion', { send_to: WHATSAPP_CONVERSION_ID });
    return;
  }

  event.preventDefault();
  const url = link.href;
  let redirected = false;
  const redirect = () => {
    if (redirected) return;
    redirected = true;
    window.location.href = url;
  };

  window.gtag('event', 'conversion', {
    send_to: WHATSAPP_CONVERSION_ID,
    event_callback: redirect,
  });
  setTimeout(redirect, 1000);
}
