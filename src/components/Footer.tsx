import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Mail, MapPin, Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-secondary to-secondary/90 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto container-padding py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-6">
            <div>
              <div className="text-3xl font-heading font-bold text-bright-pink mb-2">
                ДубрАВА
              </div>
              <p className="text-sm text-white/80">
                ЦЕНТР КОРРЕКЦИИ ПОВЕДЕНИЯ И РЕЧИ
              </p>
            </div>
            <p className="text-white/70 leading-relaxed">
              Помогаем детям быть счастливыми с доказательными методами и заботой
            </p>
            <div className="flex items-center gap-2 text-bright-pink">
              <Heart className="h-4 w-4" />
              <span className="text-sm">С любовью к каждому ребенку</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-heading font-bold mb-6">Наши услуги</h4>
            <ul className="space-y-3">
              {[
                "ABA-терапия",
                "Мозжечковая стимуляция", 
                "Нейрофитнес",
                "Логопедия",
                "Массаж"
              ].map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-white/70 hover:text-bright-pink transition-colors duration-300 text-sm">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-bold mb-6">Информация</h4>
            <ul className="space-y-3">
              {[
                "О центре",
                "Наша команда",
                "Отзывы родителей",
                "Как мы работаем",
                "Цены"
              ].map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-white/70 hover:text-bright-pink transition-colors duration-300 text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-heading font-bold mb-6">Контакты</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-bright-pink mt-1 flex-shrink-0" />
                <div className="text-sm text-white/70">
                  г. Москва, ул. Примерная, д. 123, корп. 1
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-bright-pink flex-shrink-0" />
                <a href="tel:+74951234567" className="text-sm text-white/70 hover:text-bright-pink transition-colors duration-300">
                  +7 (495) 123-45-67
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-bright-pink flex-shrink-0" />
                <a href="mailto:info@dubrava-center.ru" className="text-sm text-white/70 hover:text-bright-pink transition-colors duration-300">
                  info@dubrava-center.ru
                </a>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-3 mt-6">
              <Button 
                className="w-full bg-bright-pink hover:bg-bright-pink/90 text-white rounded-full font-semibold transition-all duration-300"
                size="sm"
              >
                <Phone className="mr-2 h-4 w-4" />
                Записаться
              </Button>
              <Button 
                variant="outline" 
                className="w-full border-white/30 text-white hover:bg-white/10 rounded-full font-semibold"
                size="sm"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Working Hours Bar */}
      <div className="bg-primary/20 py-4">
        <div className="container mx-auto container-padding">
          <div className="grid md:grid-cols-3 gap-4 text-center md:text-left">
            <div className="text-sm">
              <span className="text-bright-pink font-semibold">Пн-Пт:</span>
              <span className="text-white/70 ml-2">9:00 - 21:00</span>
            </div>
            <div className="text-sm">
              <span className="text-bright-pink font-semibold">Сб:</span>
              <span className="text-white/70 ml-2">10:00 - 18:00</span>
            </div>
            <div className="text-sm">
              <span className="text-bright-pink font-semibold">Вс:</span>
              <span className="text-white/70 ml-2">10:00 - 16:00</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-secondary/50 py-6">
        <div className="container mx-auto container-padding">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-white/60 text-center md:text-left">
              © 2024 Центр "ДубрАВА". Все права защищены.
              <br className="md:hidden" />
              <span className="block md:inline md:ml-4">Лицензия на медицинскую деятельность</span>
            </div>
            
            <div className="flex items-center gap-4">
              <a href="#" className="text-sm text-white/60 hover:text-bright-pink transition-colors duration-300">
                Политика конфиденциальности
              </a>
              <button 
                onClick={scrollToTop}
                className="bg-bright-pink/20 hover:bg-bright-pink/30 text-bright-pink w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Наверх"
              >
                <ArrowUp className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Contact Float */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden">
        <Button 
          className="bg-bright-pink hover:bg-bright-pink/90 text-white w-14 h-14 rounded-full shadow-2xl bounce-gentle"
          aria-label="Связаться"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>
    </footer>
  );
};

export default Footer;