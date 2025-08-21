import { useEffect, useRef, useState } from 'react';

const Welcome = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="welcome" 
      className="py-20 bg-background"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
              Serenity Valley xin chào!
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Chào mừng bạn đến với Serenity Valley - nơi tâm hồn tìm thấy sự bình yên giữa thiên nhiên hùng vĩ. 
              Chúng tôi tự hào mang đến cho bạn những trải nghiệm khó quên trong không gian nghỉ dưỡng tuyệt vời.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;