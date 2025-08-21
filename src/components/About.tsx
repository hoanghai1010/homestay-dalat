import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Mountain, Coffee, Wifi } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: <Heart className="w-8 h-8 text-accent" />,
      title: "Dịch vụ tận tâm",
      description: "Đội ngũ nhân viên thân thiện, luôn sẵn sàng hỗ trợ 24/7"
    },
    {
      icon: <Mountain className="w-8 h-8 text-accent" />,
      title: "View núi tuyệt đẹp",
      description: "Thức dậy cùng ánh nắng đầu tiên trên đỉnh núi"
    },
    {
      icon: <Coffee className="w-8 h-8 text-accent" />,
      title: "Café & Ẩm thực",
      description: "Thưởng thức những món ăn địa phương đặc sắc"
    },
    {
      icon: <Wifi className="w-8 h-8 text-accent" />,
      title: "Tiện nghi đầy đủ",
      description: "Wifi miễn phí, điều hòa và đầy đủ tiện nghi hiện đại"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="py-20 bg-secondary/30"
    >
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
            Serenity Valley xin chào!
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Nestled in the heart of majestic mountains, Serenity Valley Homestay offers a perfect escape 
            from the bustling city life. Our cozy retreat combines traditional hospitality with modern comfort, 
            creating an unforgettable experience surrounded by nature's tranquility.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h3 className="font-heading text-3xl font-bold text-primary mb-6">
              Câu chuyện của chúng tôi
            </h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Serenity Valley được sinh ra từ tình yêu sâu sắc dành cho vẻ đẹp hoang sơ của núi rừng. 
              Chúng tôi tin rằng mỗi khoảnh khắc nghỉ ngơi đều xứng đáng trở thành một kỷ niệm đẹp.
            </p>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Với kiến trúc hòa hợp cùng thiên nhiên và không gian ấm cúng, nơi đây không chỉ là 
              một homestay mà còn là ngôi nhà thứ hai của bạn giữa lòng núi rừng.
            </p>
            <p className="text-accent font-medium italic">
              "Mời bạn về nhà của chúng tôi - nơi tâm hồn tìm thấy bình yên"
            </p>
          </div>

          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <Card 
                  key={index} 
                  className="group hover:shadow-medium transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
                >
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h4 className="font-semibold text-primary mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;