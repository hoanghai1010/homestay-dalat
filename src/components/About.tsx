import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Mountain, Coffee } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
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

  const experienceItems = [
    {
      icon: <Mountain className="w-12 h-12 text-white" />,
      title: "View núi tuyệt đẹp",
      description: "Thức dậy cùng ánh nắng đầu tiên trên đỉnh núi, ngắm nhìn những đám mây bồng bềnh trôi qua khung cửa sổ. Không gian yên bình giữa thiên nhiên hoang sơ, nơi mà mọi giác quan đều được thỏa mãn bởi vẻ đẹp nguyên sơ của núi rừng Tây Bắc.",
      detailedDescription: "Từ ban công phòng nghỉ, bạn có thể chiêm ngưỡng toàn cảnh dãy núi Ba Vì hùng vĩ với những đỉnh núi cao vút, những thung lũng xanh mướt và dòng suối trong vắt chảy róc rách. Buổi sáng sớm, ánh nắng vàng óng ái chiếu qua những tán cây, tạo nên những khoảnh khắc thần tiên mà chỉ có thể tìm thấy ở đây.",
      image: "/src/assets/view-nui.jpg"
    },
    {
      icon: <Coffee className="w-12 h-12 text-white" />,
      title: "Cà phê thơm ngon",
      description: "Thưởng thức tách cà phê được pha chế từ những hạt cà phê địa phương thượng hạng, trong không gian yên tĩnh bên sườn đồi mây phủ. Hương vị đậm đà, thơm lừng hòa quyện cùng không khí trong lành của núi rừng.",
      detailedDescription: "Cà phê Serenity Valley được trồng và chăm sóc tỉ mỉ trên những sườn đồi cao 800-1000m so với mặt nước biển. Quy trình rang xay hoàn toàn thủ công, giữ trọn hương vị đặc trưng. Mỗi tách cà phê là một hành trình khám phá hương vị, từ vị đắng nhẹ ban đầu đến hậu vị ngọt ngào kéo dài.",
      image: "/src/assets/quan-cafe.jpg"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % experienceItems.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [experienceItems.length]);

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="py-20 bg-secondary/30"
    >
      <div className="container mx-auto px-4">
      </div>

      <div className="text-center mb-16">
        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="container mx-auto px-4 mb-8">
            <h3 className="font-heading text-4xl md:text-5xl font-bold text-primary">
              Trải nghiệm Serenity Valley
            </h3>
          </div>
          <div className="relative">
            <div className="relative h-screen overflow-hidden">
              {experienceItems.map((item, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                    index === currentIndex 
                      ? 'opacity-100 scale-100' 
                      : 'opacity-0 scale-105'
                  }`}
                >
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                  
                  <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-8 md:p-16 text-white">
                    <div className="max-w-4xl mx-auto space-y-8">
                      <div className="flex flex-col items-center gap-6">
                        <div className="p-4 bg-white/20 rounded-full backdrop-blur-sm">
                          {item.icon}
                        </div>
                        <h4 className="text-4xl md:text-5xl font-bold leading-tight">
                          {item.title}
                        </h4>
                      </div>
                      
                      <div className="space-y-6">
                        <p className="text-xl md:text-2xl leading-relaxed text-white/90">
                          {item.description}
                        </p>
                        
                        <p className="text-lg leading-relaxed text-white/80 max-w-3xl mx-auto">
                          {item.detailedDescription}
                        </p>
                      </div>
                      
                      <div className="pt-4">
                        <Button 
                          variant="outline" 
                          size="lg"
                          className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm text-lg px-8 py-3"
                        >
                          Xem thêm
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {experienceItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-primary scale-125' 
                      : 'bg-muted-foreground/40 hover:bg-muted-foreground/60'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;