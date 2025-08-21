import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, Phone, Mail, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    adults: '2',
    children: '0',
    roomType: '',
    specialRequests: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.checkIn || !formData.checkOut) {
      toast({
        title: "Lỗi",
        description: "Vui lòng điền đầy đủ thông tin bắt buộc",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Đặt phòng thành công!",
      description: "Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất để xác nhận đặt phòng."
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      checkIn: '',
      checkOut: '',
      adults: '2',
      children: '0',
      roomType: '',
      specialRequests: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <section id="booking" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
              Đặt Phòng
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Điền thông tin để đặt phòng hoặc liên hệ trực tiếp với chúng tôi. 
              Chúng tôi sẽ phản hồi trong vòng 24 giờ.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Booking Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-medium">
                <CardHeader>
                  <CardTitle className="font-heading text-2xl text-primary">
                    Thông tin đặt phòng
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Họ và tên *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder="Nhập họ và tên"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="example@email.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Số điện thoại *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="0xxx xxx xxx"
                        required
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="checkin">Ngày nhận phòng *</Label>
                        <Input
                          id="checkin"
                          type="date"
                          value={formData.checkIn}
                          onChange={(e) => handleInputChange('checkIn', e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="checkout">Ngày trả phòng *</Label>
                        <Input
                          id="checkout"
                          type="date"
                          value={formData.checkOut}
                          onChange={(e) => handleInputChange('checkOut', e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="adults">Người lớn</Label>
                        <Select value={formData.adults} onValueChange={(value) => handleInputChange('adults', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Chọn số người" />
                          </SelectTrigger>
                          <SelectContent>
                            {[1, 2, 3, 4, 5, 6].map(num => (
                              <SelectItem key={num} value={num.toString()}>{num}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="children">Trẻ em</Label>
                        <Select value={formData.children} onValueChange={(value) => handleInputChange('children', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Chọn số trẻ em" />
                          </SelectTrigger>
                          <SelectContent>
                            {[0, 1, 2, 3, 4].map(num => (
                              <SelectItem key={num} value={num.toString()}>{num}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="roomtype">Loại phòng</Label>
                        <Select value={formData.roomType} onValueChange={(value) => handleInputChange('roomType', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Chọn loại phòng" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="standard">Standard Twin</SelectItem>
                            <SelectItem value="deluxe">Deluxe Mountain View</SelectItem>
                            <SelectItem value="suite">Senior Suite</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="requests">Yêu cầu đặc biệt</Label>
                      <Textarea
                        id="requests"
                        value={formData.specialRequests}
                        onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                        placeholder="Ví dụ: cần giường phụ, yêu cầu tầng cao, đón sân bay..."
                        rows={4}
                      />
                    </div>

                    <Button 
                      type="submit"
                      className="w-full bg-gradient-primary hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-medium text-lg py-6"
                    >
                      Gửi yêu cầu đặt phòng
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="shadow-medium">
                <CardHeader>
                  <CardTitle className="font-heading text-xl text-primary">
                    Thông tin liên hệ
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-accent" />
                    <div>
                      <p className="font-medium">Điện thoại</p>
                      <p className="text-muted-foreground">+84 xxx xxx xxx</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-accent" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">info@serenityvalley.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-accent" />
                    <div>
                      <p className="font-medium">Địa chỉ</p>
                      <p className="text-muted-foreground">Thôn Núi Xanh, Đà Lạt, Lâm Đồng</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-medium">
                <CardContent className="p-6">
                  <div className="text-center space-y-4">
                    <Calendar className="w-12 h-12 text-accent mx-auto" />
                    <h3 className="font-heading text-lg font-bold text-primary">
                      Chính sách đặt phòng
                    </h3>
                    <div className="text-sm text-muted-foreground space-y-2">
                      <p>• Nhận phòng: 14:00</p>
                      <p>• Trả phòng: 12:00</p>
                      <p>• Hủy miễn phí trước 48h</p>
                      <p>• Thanh toán khi nhận phòng</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;