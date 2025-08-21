import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Liên Hệ Với Chúng Tôi
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto leading-relaxed">
            Chúng tôi luôn sẵn sàng hỗ trợ bạn 24/7. Hãy liên hệ để được tư vấn tận tình.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="font-heading text-2xl font-bold mb-6">
                Thông tin liên hệ
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-accent/20 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Điện thoại</h4>
                    <p className="opacity-90">Hotline: +84 xxx xxx xxx</p>
                    <p className="opacity-90">Zalo: +84 xxx xxx xxx</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-accent/20 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Email</h4>
                    <p className="opacity-90">info@serenityvalley.com</p>
                    <p className="opacity-90">booking@serenityvalley.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-accent/20 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Địa chỉ</h4>
                    <p className="opacity-90">Thôn Núi Xanh, Xã Tà Nung</p>
                    <p className="opacity-90">Thành phố Đà Lạt, Lâm Đồng</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-accent/20 p-3 rounded-full">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Giờ làm việc</h4>
                    <p className="opacity-90">Lễ tân: 6:00 - 22:00</p>
                    <p className="opacity-90">Hotline: 24/7</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Theo dõi chúng tôi</h4>
              <div className="flex gap-4">
                <Button variant="outline" size="icon" className="border-accent/30 hover:bg-accent/20">
                  <Facebook className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="icon" className="border-accent/30 hover:bg-accent/20">
                  <Instagram className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="icon" className="border-accent/30 hover:bg-accent/20">
                  <MessageCircle className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Map or Additional Info */}
          <div className="space-y-6">
            <Card className="bg-card/10 border-accent/20 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="font-heading text-xl font-bold mb-4 text-accent">
                  Hướng dẫn di chuyển
                </h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <h5 className="font-semibold mb-2">Từ sân bay Liên Khương:</h5>
                    <p className="opacity-90 leading-relaxed">
                      Khoảng cách 35km, thời gian di chuyển 45 phút bằng ô tô. 
                      Chúng tôi có dịch vụ đón sân bay theo yêu cầu.
                    </p>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold mb-2">Từ trung tâm Đà Lạt:</h5>
                    <p className="opacity-90 leading-relaxed">
                      Khoảng cách 15km về hướng Tà Nung. Đi theo đường ĐT725 
                      rẽ trái tại biển báo "Serenity Valley Homestay".
                    </p>
                  </div>

                  <div>
                    <h5 className="font-semibold mb-2">Dịch vụ đưa đón:</h5>
                    <p className="opacity-90 leading-relaxed">
                      Miễn phí đón khách tại trung tâm Đà Lạt. 
                      Đón sân bay có phí, liên hệ để biết chi tiết.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/10 border-accent/20 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="font-heading text-xl font-bold mb-4 text-accent">
                  Địa điểm nổi bật gần đây
                </h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <p className="opacity-90">🏞️ Đồi chè Cầu Đất - 5km</p>
                    <p className="opacity-90">🌸 Vườn hoa Đà Lạt - 12km</p>
                    <p className="opacity-90">🏔️ Núi Langbiang - 8km</p>
                  </div>
                  <div className="space-y-2">
                    <p className="opacity-90">🚡 Cáp treo - 10km</p>
                    <p className="opacity-90">🏛️ Dinh Bảo Đại - 15km</p>
                    <p className="opacity-90">🌊 Hồ Xuân Hương - 15km</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 pt-12 border-t border-accent/20">
          <h3 className="font-heading text-2xl font-bold mb-4">
            Sẵn sàng để đặt phòng?
          </h3>
          <p className="text-lg opacity-90 mb-6 max-w-md mx-auto">
            Liên hệ ngay để nhận tư vấn và ưu đãi đặc biệt
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="outline"
              size="lg"
              className="border-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              onClick={() => window.open('tel:+84xxxxxxxxx')}
            >
              <Phone className="w-5 h-5 mr-2" />
              Gọi ngay
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Đặt phòng online
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;