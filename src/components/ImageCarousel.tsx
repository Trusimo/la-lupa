import { useState, useEffect } from 'react';

type ImageCarouselProps = {
    images: string[];
    interval?: number;
};

function ImageCarousel({ images, interval = 5000 }: ImageCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (images.length > 1) {
            const timer = setInterval(() => {
                setCurrentIndex((prev) => (prev + 1) % images.length);
            }, interval);
            return () => clearInterval(timer);
        }
    }, [images, interval]);

    return (
        <div className="image-carousel-container">
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
                    <button className="carousel-control prev" onClick={() => setCurrentIndex((currentIndex - 1 + images.length) % images.length)}>‹</button>
                    <button className="carousel-control next" onClick={() => setCurrentIndex((currentIndex + 1) % images.length)}>›</button>

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