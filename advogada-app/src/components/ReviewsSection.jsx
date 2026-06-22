import { useCallback, useEffect, useState } from 'react';
import ScalesIcon from './icons/ScalesIcon';

const REVIEWS = [
  {
    id: 1,
    text: 'Quero deixar aqui minha recomendação para a Dra. Magali Cunha, uma profissional extremamente competente na área de Direito de Família. Ela foi essencial no meu processo de guarda, conduzindo tudo com muita responsabilidade, estratégia e profundo conhecimento jurídico. Sempre muito atenciosa, transparente e comprometida, me passou segurança em todos os momentos, principalmente em uma situação tão delicada. Graças ao excelente trabalho da Dra. Magali Cunha, consegui um resultado muito importante na questão da guarda do meu filho, sempre priorizando o bem-estar da criança e respeitando todos os aspectos legais. Recomendo fortemente para quem precisa de uma advogada especialista em Direito de Família, guarda de filhos, pensão alimentícia e processos familiares. Profissional séria, dedicada e com um atendimento humanizado e de alta qualidade. Sem dúvidas, uma das melhores advogadas da área!',
    author: 'Fernando Bitencourt',
    rating: 5,
  },
  {
    id: 2,
    text: 'Quero registrar minha sincera gratidão pelo excelente trabalho prestado durante o processo de inventário familiar, realizado pela sua postura profissional, você, Dra Magali Cunha, conduziu com ética, pontualidade e transparência, nos trouxe a segurança em um momento delicado. Profissionais como você fazem toda a diferença.',
    author: 'Sarah Prado',
    rating: 5,
  },
  {
    id: 3,
    text: 'Quero registrar meu reconhecimento pelo excelente trabalho realizado pela dra. Magali Cunha. Sua atuação no inventário do meu sogro demonstrou profundo conhecimento jurídico e sensibilidade para conduzir todo o processo com eficiência e ética.',
    author: 'Fabiane Ladislau',
    rating: 5,
  },
  {
    id: 4,
    text: 'Uma excelente profissional, competente, realmente defendeu meus interesses com muito respeito e profissionalismo! Mas o principal que me faz indicar os serviços dela pra qualquer pessoas foi a humanidade da Dra Magali, ela me acolheu num momento de fragilidade do meu processo e mesmo com seu total profissionalismo, deixou seu lado humano florescer e me deu amparo e conforto. Com toda certeza é uma profissional completa!',
    author: 'Grazielle Fernandes',
    rating: 5,
  },
];

const AUTOPLAY_MS = 6000;

function StarRating({ rating }) {
  return (
    <div className="flex items-center justify-center gap-1" aria-label={`${rating} de 5 estrelas`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          width="18"
          height="18"
          viewBox="0 0 24 24"
          aria-hidden="true"
          className={i < rating ? 'text-[#C9A060]' : 'text-[rgba(201,160,96,0.25)]'}
          fill="currentColor"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function ChevronIcon({ direction }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={direction === 'left' ? 'rotate-180' : ''}
    >
      <path
        d="M9 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ReviewsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goTo = useCallback((index) => {
    setActiveIndex((index + REVIEWS.length) % REVIEWS.length);
  }, []);

  const goNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);
  const goPrev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);

  useEffect(() => {
    if (isPaused) return undefined;

    const timer = setInterval(goNext, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [isPaused, goNext]);

  return (
    <section
      id="reviews"
      className="bg-[#2C2C2C] py-16 md:py-20 px-4"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setIsPaused(false);
      }}
    >
      <div className="max-w-[900px] mx-auto w-full">
        {/* Title */}
        <div className="flex flex-col items-center mb-10 md:mb-12">
          <ScalesIcon size={44} color="#C9A060" className="mb-3 opacity-90" />
          <h2 className="font-playfair text-[34px] md:text-[40px] leading-none">
            <span className="text-[#F0EAD6] font-normal">avalia</span>
            <span className="text-[#C9A060] italic font-normal">ções</span>
          </h2>
          <div className="mt-3 mb-1">
            <span className="text-[#C9A060] text-xl">◆</span>
          </div>
          <div className="w-20 border-t border-[rgba(201,160,96,0.4)] mb-3" />
          <p className="font-lato text-[13px] tracking-widest uppercase text-[rgba(201,160,96,0.75)]">
            O que dizem nossos clientes
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl border border-[rgba(201,160,96,0.25)] bg-[#1a1008] shadow-lg transition-[height] duration-500 ease-in-out">
            <article
              key={activeIndex}
              className="px-8 py-8 md:px-14 md:py-10 text-center review-fade-in"
              aria-live="polite"
            >
              <StarRating rating={REVIEWS[activeIndex].rating} />

              <blockquote className="mt-5 mb-6">
                <span
                  className="font-playfair text-[#C9A060] text-4xl leading-none select-none"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>
                <p className="font-lato text-[15px] md:text-[16px] text-[rgba(240,234,214,0.85)] leading-relaxed max-w-[620px] mx-auto -mt-3">
                  {REVIEWS[activeIndex].text}
                </p>
              </blockquote>

              <div className="flex flex-col items-center gap-1">
                <div className="w-10 border-t border-[rgba(201,160,96,0.4)] mb-2" />
                <p className="font-playfair text-[#C9A060] text-[17px]">
                  {REVIEWS[activeIndex].author}
                </p>
              </div>
            </article>
          </div>

          {/* Arrows */}
          <button
            type="button"
            onClick={goPrev}
            aria-label="Avaliação anterior"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 md:-translate-x-full md:left-0 w-10 h-10 rounded-full border border-[rgba(201,160,96,0.4)] bg-[#2C2C2C] text-[#C9A060] flex items-center justify-center hover:bg-[rgba(201,160,96,0.15)] hover:border-[#C9A060] transition-colors duration-200 z-10"
          >
            <ChevronIcon direction="left" />
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label="Próxima avaliação"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 md:translate-x-full md:right-0 w-10 h-10 rounded-full border border-[rgba(201,160,96,0.4)] bg-[#2C2C2C] text-[#C9A060] flex items-center justify-center hover:bg-[rgba(201,160,96,0.15)] hover:border-[#C9A060] transition-colors duration-200 z-10"
          >
            <ChevronIcon direction="right" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2.5 mt-8" role="tablist" aria-label="Selecionar avaliação">
          {REVIEWS.map((review, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={review.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-label={`Avaliação ${index + 1} de ${REVIEWS.length}`}
                onClick={() => goTo(index)}
                className={`rounded-full transition-all duration-300 ${
                  isActive
                    ? 'w-8 h-2.5 bg-[#C9A060]'
                    : 'w-2.5 h-2.5 bg-[rgba(201,160,96,0.3)] hover:bg-[rgba(201,160,96,0.6)]'
                }`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
