import { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, Bed, Wifi, Coffee, Mountain, Bath } from 'lucide-react';
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
      description: "Phòng cao cấp với tầm nhìn panoramic ra núi rừng hùng vĩ. Không gian rộng rãi và sang trọng với thiết kế hiện đại pha trộn phong cách truyền thống.",
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
      description: "Phòng tiêu chuẩn ấm cúng phù hợp cho gia đình hoặc nhóm bạn. Thiết kế tối giản nhưng đầy đủ tiện nghi cần thiết.",
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
      description: "Căn suite cao cấp nhất với không gian rộng lớn và sang trọng. Tầm nhìn 360 độ ra núi rừng cùng các tiện nghi đẳng cấp resort.",
      features: ["Luxury", "360° View", "Jacuzzi"]
    }
  ];

  const getAmenityIcon = (amenity: string) => {
    if (amenity.includes('WiFi')) return <Wifi className="w-4 h-4" />;
    if (amenity.includes('View') || amenity.includes('núi')) return <Mountain className="w-4 h-4" />;
    if (amenity.includes('Minibar') || amenity.includes('Tủ lạnh')) return <Coffee className="w-4 h-4" />;
    if (amenity.includes('tắm') || amenity.includes('Jacuzzi')) return <Bath className="w-4 h-4" />;
    return null;
  };

  return (
    <section 
      ref={sectionRef}
      id="rooms" 
      className="py-20 bg-background"
    >
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
            Các Phòng Nghỉ
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Lựa chọn không gian nghỉ ngơi hoàn hảo cho chuyến du lịch của bạn. 
            Mỗi phòng đều được thiết kế với tình yêu và sự chăm sóc tỉ mỉ.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {rooms.map((room, index) => (
            <Card 
              key={room.id}
              className={`group overflow-hidden transform transition-all duration-700 hover:shadow-strong hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={room.image}
                  alt={room.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {room.features.map((feature) => (
                    <Badge key={feature} variant="secondary" className="bg-gradient-primary text-primary-foreground shadow-medium">
                      {feature}
                    </Badge>
                  ))}
                </div>
                <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full">
                  <span className="text-lg font-bold">{room.price}₫</span>
                  <span className="text-sm opacity-80">/đêm</span>
                </div>
              </div>

              <CardHeader className="pb-3">
                <h3 className="font-heading text-2xl font-bold text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                  {room.name}
                </h3>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{room.maxGuests} khách</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bed className="w-4 h-4" />
                    <span>{room.beds}</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {room.description}
                </p>

                <div className="space-y-2">
                  <h4 className="font-semibold text-primary">Tiện nghi:</h4>
                  <div className="grid grid-cols-2 gap-1">
                    {room.amenities.map((amenity) => (
                      <div key={amenity} className="flex items-center gap-2 text-sm text-muted-foreground">
                        {getAmenityIcon(amenity)}
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button 
                  className="w-full bg-gradient-primary hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-medium"
                  onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Đặt phòng ngay
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;