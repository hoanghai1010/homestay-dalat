import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Users, Bed, ChevronRight } from 'lucide-react';
import Autoplay from "embla-carousel-autoplay";
import deluxeRoom from '@/assets/deluxe.jpg';
import standardRoom from '@/assets/standark.jpg';
import suiteRoom from '@/assets/suite.jpg';

const Rooms = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const rooms = [
    {
      id: 1,
      name: "Deluxe Mountain View",
      price: "1,200,000",
      image: deluxeRoom,
      maxGuests: 2,
      beds: "1 giường đôi King",
      amenities: ["WiFi miễn phí", "Điều hòa", "View núi", "Ban công riêng", "Minibar", "Phòng tắm riêng"],
      description: "Phòng cao cấp với tầm nhìn panoramic ra núi rừng hùng vĩ.",
      shortDescription: "Không gian rộng rãi và sang trọng với thiết kế hiện đại.",
      features: ["Premium", "Best View"]
    },
    {
      id: 2,
      name: "Standard Twin",
      price: "800,000",
      image: standardRoom,
      maxGuests: 4,
      beds: "2 giường đôi",
      amenities: ["WiFi miễn phí", "Điều hòa", "View vườn", "Phòng tắm riêng", "Tủ lạnh", "Khu vực nghỉ ngơi"],
      description: "Phòng tiêu chuẩn ấm cúng phù hợp cho gia đình hoặc nhóm bạn.",
      shortDescription: "Thiết kế tối giản nhưng đầy đủ tiện nghi cần thiết.",
      features: ["Family", "Garden View"]
    },
    {
      id: 3,
      name: "Senior Suite",
      price: "1,800,000",
      image: suiteRoom,
      maxGuests: 2,
      beds: "1 giường đôi King + Khu vực nghỉ",
      amenities: ["WiFi miễn phí", "Điều hòa", "Jacuzzi", "View núi 360°", "Bếp nhỏ", "Phòng khách riêng", "Ban công lớn"],
      description: "Căn suite cao cấp nhất với không gian rộng lớn và sang trọng.",
      shortDescription: "Tầm nhìn 360 độ ra núi rừng cùng các tiện nghi đẳng cấp resort.",
      features: ["Luxury", "360° View", "Jacuzzi"]
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="rooms" 
      className="py-16 bg-background"
    >
      <div className="w-full">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
            Các Phòng Nghỉ
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Lựa chọn không gian nghỉ ngơi hoàn hảo cho chuyến du lịch của bạn. 
            Mỗi phòng đều được thiết kế với tình yêu và sự chăm sóc tỉ mỉ.
          </p>
        </div>

        <div className={`w-full transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Carousel 
            className="w-full" 
            opts={{ loop: true, align: "center" }}
            plugins={[
              Autoplay({
                delay: 4000,
              }),
            ]}
          >
            <CarouselContent className="relative">
              {rooms.map((room) => (
                <CarouselItem key={room.id} className="basis-full">
                  <div className="group overflow-hidden transform transition-all duration-700">
                    <div className="relative overflow-hidden h-96 md:h-[500px]">
                      <img 
                        src={room.image}
                        alt={room.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                        {room.features.map((feature) => (
                          <Badge key={feature} variant="secondary" className="bg-gradient-primary text-primary-foreground shadow-medium">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                      
                      {/* Content overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end">
                        <div className="text-white p-6 md:p-8 w-full">
                          <h3 className="font-heading text-3xl md:text-5xl font-bold mb-4">
                            {room.name}
                          </h3>
                          <div className="flex items-center gap-6 text-base mb-6">
                            <div className="flex items-center gap-2">
                              <Users className="w-5 h-5" />
                              <span>{room.maxGuests} khách</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Bed className="w-5 h-5" />
                              <span>{room.beds}</span>
                            </div>
                          </div>
                          <p className="text-lg md:text-xl mb-4 leading-relaxed opacity-90">
                            {room.description}
                          </p>
                          <p className="text-base md:text-lg mb-8 opacity-80">
                            {room.shortDescription}
                          </p>
                          
                          <Button 
                            variant="secondary"
                            className="bg-white/20 text-white border-white/30 hover:bg-white/30 backdrop-blur-sm"
                          >
                            Xem thêm
                            <ChevronRight className="w-4 h-4 ml-2" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 bg-white/20 border-white/30 text-white hover:bg-white/30 backdrop-blur-sm" />
            <CarouselNext className="right-4 bg-white/20 border-white/30 text-white hover:bg-white/30 backdrop-blur-sm" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Rooms;
