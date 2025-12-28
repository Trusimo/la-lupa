import { useState, useEffect, useRef } from 'react';

function Contatti() {
    const [isInfoVisible, setIsInfoVisible] = useState(false);
    const infoRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observerOptions = { threshold: 0.1 };

        const infoObserver = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsInfoVisible(true);
                infoObserver.unobserve(entry.target);
            }
        }, observerOptions);

        if (infoRef.current) {
            infoObserver.observe(infoRef.current);
        }

        return () => {
            infoObserver.disconnect();
        };
    }, []);

    return (
        <section id="contatti" className="contatti-section">
            <h2 className="section-title playfair-display">Contatti e Orari</h2>

            <div className="contatti-container">
                {/* COLONNA SINISTRA: Tutte le info */}
                <div className="info-box" ref={infoRef}>
                    <div
                        className={`info-item reveal-menu ${isInfoVisible ? 'is-visible' : ''}`}
                        style={{ transitionDelay: '0.2s' }}
                    >
                        <h3 className="montserrat">Telefono</h3>
                        <p><a className="button-tel" href="tel:0331074382">Prenota al <span className='text-decoration-underline'>+03 3107 4382</span></a></p>
                    </div>

                    <div
                        className={`info-item reveal-menu ${isInfoVisible ? 'is-visible' : ''}`}
                        style={{ transitionDelay: '0.6s' }}
                    >
                        <h3 className="montserrat">Orari di Apertura</h3>
                        <ul className="orari-list">
                            <li><span>Lunedì:</span> 19:00 – 23:00</li>
                            <li><span>Martedì:</span> 12:00 – 14:00<br></br>19:00 – 23:00</li>
                            <li className="chiuso"><span>Mercoledì:</span> Chiuso</li>
                            <li><span>Giovedì:</span> 12:00 – 14:00<br></br>19:00 – 23:00</li>
                            <li><span>Venerdì:</span> 12:00 – 14:00<br></br>19:00 – 23:00</li>
                            <li><span>Sabato:</span> 12:00 – 14:00<br></br>19:00 – 23:00</li>
                            <li><span>Domenica:</span> 12:00 – 14:00<br></br>19:00 – 23:00</li>
                        </ul>
                    </div>
                    <div
                        className={`info-item reveal-menu ${isInfoVisible ? 'is-visible' : ''}`}
                        style={{ transitionDelay: '1.2s' }}
                    >
                        <h3 className="montserrat">Indirizzo</h3>
                        <p>Piazza Italia, 17, 20014 Nerviano (MI)</p>
                    </div>
                </div>

                {/* COLONNA DESTRA: Solo Mappa */}
                <div className="map-box">
                    <iframe
                        title="Google Maps Trattoria La Lupa"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2793.5415740445583!2d8.973419376664952!3d45.55956042709191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478692d3910b535b%3A0xdee6ab2fb914bc2a!2sPiazza%20Italia%2C%2017%2C%2020014%20Nerviano%20MI!5e0!3m2!1sit!2sit!4v1700000000000!5m2!1sit!2sit"
                        width="100%"
                        height="400"
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </section>
    );
}

export default Contatti;