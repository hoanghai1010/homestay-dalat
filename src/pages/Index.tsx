import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Welcome from '@/components/Welcome';
import About from '@/components/About';
import Rooms from '@/components/Rooms';
import BookingForm from '@/components/BookingForm';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Welcome />
      <Rooms />
      <About />
      <BookingForm />
      <Contact />
    </div>
  );
};

export default Index;
