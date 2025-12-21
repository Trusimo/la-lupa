function Contatti() {
    return (
        <section id="contatti" className="contatti-section">
            <h2 className="section-title playfair-display">Contatti e Orari</h2>

            <div className="contatti-container">
                {/* COLONNA SINISTRA: Tutte le info */}
                <div className="info-box">
                    <div className="info-item">
                        <h3 className="montserrat">Indirizzo</h3>
                        <p>Piazza Italia, 17, 20014 Nerviano (MI)</p>
                    </div>

                    <div className="info-item">
                        <h3 className="montserrat">Telefono</h3>
                        <p><a className="text-decoration-underline" href="tel:0331074382">0331074382</a></p>
                    </div>

                    <div className="info-item">
                        <h3 className="montserrat">Orari di Apertura</h3>
                        <ul className="orari-list">
                            <li><span>Lunedì:</span> 19:00 – 23:00</li>
                            <li><span>Martedì:</span> 12:00 – 14:00, 19:00 – 23:00</li>
                            <li className="chiuso"><span>Mercoledì:</span> Chiuso</li>
                            <li><span>Giovedì:</span> 12:00 – 14:00, 19:00 – 23:00</li>
                            <li><span>Venerdì:</span> 12:00 – 14:00, 19:00 – 23:00</li>
                            <li><span>Sabato:</span> 12:00 – 14:00, 19:00 – 23:00</li>
                            <li><span>Domenica:</span> 12:00 – 14:00, 19:00 – 23:00</li>
                        </ul>
                    </div>
                </div>

                {/* COLONNA DESTRA: Solo Mappa */}
                <div className="map-box">
                    <iframe
                        title="Google Maps Trattoria La Lupa"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2793.0454378877196!2d8.9723237!3d45.5645396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47869300600f91ab%3A0x671391696b997f8c!2sPiazza%20Italia%2C%2017%2C%2020014%20Nerviano%20MI!5e0!3m2!1sit!2sit!4v1710000000000"
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