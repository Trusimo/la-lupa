import { Instagram, Facebook } from 'lucide-react'; // Installa con: npm install lucide-react

function Footer() {
    return (
        <footer className="footer-container">
            <div className="footer-socials">
                <a
                    href="https://www.instagram.com/lalupanerviano/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                >
                    <Instagram size={28} />
                </a>
                <a
                    href="https://www.facebook.com/p/La-lupa-61574791467126/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                >
                    <Facebook size={28} />
                </a>
            </div>
            <p className="footer-copy">
                &copy; {new Date().getFullYear()} Trattoria La Lupa - Prenotazioni solo telefoniche al<br></br><a className="text-decoration-underline" href="tel:0331074382">0331074382</a>
            </p>
        </footer>
    );
}

export default Footer;