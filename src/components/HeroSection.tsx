import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-center.jpg";
import PricingModal from "@/components/PricingModal";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-pastel-blue via-pastel-yellow/30 to-background overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-bright-pink/20 rounded-full floating-animation"></div>
      <div className="absolute top-32 right-20 w-16 h-16 bg-primary/20 rounded-full bounce-gentle"></div>
      <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-pastel-yellow/40 rounded-full floating-animation"></div>
      
      <div className="container mx-auto container-padding grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8 text-center lg:text-left">
          {/* Logo placeholder */}
          <div className="inline-block p-4 bg-white rounded-3xl shadow-lg">
            <div className="text-4xl md:text-6xl font-heading font-bold">
              <span className="text-gradient-pink">ДубрАВА</span>
            </div>
            <p className="text-sm md:text-base text-secondary font-medium mt-2">
              ЦЕНТР КОРРЕКЦИИ ПОВЕДЕНИЯ И РЕЧИ
            </p>
          </div>

          <div className="space-y-4">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-secondary leading-tight">
              Помогаем детям быть{" "}
              <span className="text-gradient-pink">счастливыми</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 font-medium">
              С доказательными методами и заботой
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button className="btn-bright-pink text-lg px-8 py-4 h-auto">
              Записаться на консультацию
            </Button>
            <Button 
              variant="outline" 
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-4 h-auto rounded-full font-semibold transition-all duration-300"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp
            </Button>
            <PricingModal />
          </div>

          {/* Contact Info */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg space-y-3">
            <div className="flex items-center justify-center lg:justify-start gap-3 text-secondary">
              <Phone className="h-5 w-5 text-primary" />
              <span className="font-semibold">+7 (xxx) xxx-xx-xx</span>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-3 text-secondary">
              <MapPin className="h-5 w-5 text-primary" />
              <span>г. Москва, ул. Примерная, д. 123</span>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
            <img 
              src={heroImage} 
              alt="Центр ДубрАВА - детская терапия" 
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
          </div>
          
          {/* Floating testimonial card */}
          <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl max-w-xs floating-animation">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-pastel-yellow rounded-full flex items-center justify-center text-2xl">
                😊
              </div>
              <div>
                <div className="text-sm font-semibold text-secondary">"Спасибо за помощь!"</div>
                <div className="text-xs text-foreground/70">Мама Саши, 5 лет</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;