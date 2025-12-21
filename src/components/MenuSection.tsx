import { useState } from 'react';

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
    index: number; // Nuova prop per il ritardo sequenziale
};

function MenuSection({ titolo, items, legenda, prezzoFisso, index }: MenuSectionProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        // La classe 'reveal-menu' attiva l'animazione di comparsa
        <section
            className="menu-section montserrat reveal-menu"
            style={{ animationDelay: `${index * 0.3}s` }} // Ogni titolo appare 0.3s dopo il precedente
        >
            <div className="menu-header" onClick={() => setIsOpen(!isOpen)}>
                <h2 className="menu-title playfair-display">
                    {titolo} {prezzoFisso && <span className="prezzo-fisso">€ {prezzoFisso}</span>}
                </h2>
                {/* Icona cambiata in + e - */}
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