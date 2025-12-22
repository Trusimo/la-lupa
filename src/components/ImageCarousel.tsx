import { useState, useEffect, useRef } from 'react';

type ImageCarouselProps = {
    images: string[];
    interval?: number;
};

function ImageCarousel({ images, interval = 5000 }: ImageCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const carouselRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (images.length > 1) {
            const timer = setInterval(() => {
                setCurrentIndex((prev) => (prev + 1) % images.length);
            }, interval);
            return () => clearInterval(timer);
        }
    }, [images, interval]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.2 }
        );

        if (carouselRef.current) {
            observer.observe(carouselRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div 
            ref={carouselRef}
            className={`image-carousel-container reveal-carousel ${isVisible ? 'is-visible' : ''}`}
        >
            <div className="carousel-slide">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Piatto ${index + 1}`}
                        className={`carousel-image ${index === currentIndex ? 'active' : ''}`}
                    />
                ))}
            </div>

            {images.length > 1 && (
                <>
                    <button 
                        className="carousel-control prev" 
                        onClick={() => setCurrentIndex((currentIndex - 1 + images.length) % images.length)}
                    >
                        ‹
                    </button>
                    <button 
                        className="carousel-control next" 
                        onClick={() => setCurrentIndex((currentIndex + 1) % images.length)}
                    >
                        ›
                    </button>

                    <div className="carousel-indicators">
                        {images.map((_, index) => (
                            <span
                                key={index}
                                className={`indicator ${index === currentIndex ? 'active' : ''}`}
                                onClick={() => setCurrentIndex(index)}
                            ></span>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}

export default ImageCarousel;