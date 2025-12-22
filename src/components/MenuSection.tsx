import { useState, useEffect, useRef } from 'react';

type MenuItem = {
    nome: string;
    prezzo?: string;
    nota?: string;
    nota_testo?: string;
};

type MenuSectionProps = {
    titolo: string;
    items: MenuItem[];
    legenda?: string[];
    prezzoFisso?: string;
    index: number;
};

function MenuSection({ titolo, items, legenda, prezzoFisso, index }: MenuSectionProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Una volta visibile, smettiamo di osservare per mantenere l'elemento fisso
                    observer.unobserve(entry.target);
                }
            },
            { 
                threshold: 0.15, // Parte quando il 15% dell'elemento è visibile
                rootMargin: "0px 0px -50px 0px" // Inizia l'animazione leggermente prima che entri del tutto
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            className={`menu-section montserrat reveal-menu ${isVisible ? 'is-visible' : ''}`}
            style={{ 
                transitionDelay: isVisible ? `${index * 0.2}s` : '0s' 
            }}
        >
            <div className="menu-header" onClick={() => setIsOpen(!isOpen)}>
                <h2 className="menu-title playfair-display">
                    {titolo} {prezzoFisso && <span className="prezzo-fisso">€ {prezzoFisso}</span>}
                </h2>
                <span className="accordion-icon">{isOpen ? '−' : '+'}</span>
            </div>

            <div className={`menu-content ${isOpen ? 'show' : ''}`}>
                <div className="menu-items-container">
                    {items.map((item, id) => (
                        <div key={id} className="menu-item-wrapper">
                            <div className="menu-item">
                                <span className="item-nome">
                                    {item.nome}
                                    {item.nota && <span className="item-nota">{item.nota}</span>}
                                </span>
                                {item.prezzo && (
                                    <>
                                        <span className="item-dots"></span>
                                        <span className="item-prezzo">€ {item.prezzo}</span>
                                    </>
                                )}
                            </div>
                            {item.nota_testo && (
                                <p className="item-descrizione">{item.nota_testo}</p>
                            )}
                        </div>
                    ))}
                </div>

                {legenda && (
                    <div className="menu-legenda">
                        {legenda.map((l, i) => <p key={i}>{l}</p>)}
                    </div>
                )}
            </div>
        </section>
    );
}

export default MenuSection;