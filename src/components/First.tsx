import { useEffect, useRef, useState } from 'react';

type FirstProps = {
  titolo: string;
  subtitle: string;
}

function First(props: FirstProps) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    });

    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div 
      className={`reveal-section ${isVisible ? 'is-visible' : ''}`} 
      ref={domRef}
    >
      <p className="paragraph montserrat quote-text">
        "{props.titolo}"
      </p>
      <p className="paragraph text-center montserrat">
        {props.subtitle}
      </p>
    </div>
  )
}

export default First