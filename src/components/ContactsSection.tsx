import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, MapPin, Clock, Mail, Navigation } from "lucide-react";

const ContactsSection = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Телефон",
      content: "+7 (495) 123-45-67",
      subtitle: "Звоните с 9:00 до 21:00",
      color: "from-primary to-primary/80"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      content: "+7 (495) 123-45-67", 
      subtitle: "Быстрые ответы 24/7",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@dubrava-center.ru",
      subtitle: "Отвечаем в течение часа",
      color: "from-bright-pink to-bright-pink/80"
    }
  ];

  const workingHours = [
    { day: "Понедельник - Пятница", time: "9:00 - 21:00" },
    { day: "Суббота", time: "10:00 - 18:00" },
    { day: "Воскресенье", time: "10:00 - 16:00" }
  ];

  return (
    <section className="section-spacing bg-gradient-to-b from-background to-pastel-blue/20">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-secondary mb-6">
            Свяжитесь <span className="text-gradient-pink">с нами</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Мы всегда готовы ответить на ваши вопросы и помочь выбрать лучшую программу для вашего ребенка
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <div key={index} className="card-pastel flex items-center gap-4 hover:shadow-xl transition-all duration-300 group">
                  <div className={`bg-gradient-to-br ${contact.color} text-white w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <contact.icon className="h-8 w-8" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-heading font-bold text-secondary mb-1">
                      {contact.title}
                    </h4>
                    <p className="text-lg font-semibold text-primary mb-1">
                      {contact.content}
                    </p>
                    <p className="text-sm text-foreground/70">
                      {contact.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Address */}
            <div className="card-pastel">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-gradient-to-br from-secondary to-primary text-white w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-8 w-8" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-secondary mb-2">
                    Наш адрес
                  </h4>
                  <p className="text-lg text-foreground/80 mb-2">
                    г. Москва, ул. Примерная, д. 123, корп. 1
                  </p>
                  <p className="text-sm text-foreground/70 mb-4">
                    Метро "Парк Культуры", 5 минут пешком
                  </p>
                  <Button 
                    variant="outline" 
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full font-semibold"
                  >
                    <Navigation className="mr-2 h-4 w-4" />
                    Как добраться
                  </Button>
                </div>
              </div>
            </div>

            {/* Working Hours */}
            <div className="card-pastel">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-pastel-yellow to-bright-pink text-white w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Clock className="h-8 w-8" />
                </div>
                <div className="flex-1">
                  <h4 className="font-heading font-bold text-secondary mb-4">
                    Время работы
                  </h4>
                  <div className="space-y-2">
                    {workingHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-border/30 last:border-b-0">
                        <span className="text-foreground/80">{schedule.day}</span>
                        <span className="font-semibold text-primary">{schedule.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map and CTA */}
          <div className="space-y-8">
            {/* Map Placeholder */}
            <div className="bg-gradient-to-br from-pastel-blue to-pastel-yellow rounded-3xl h-80 flex items-center justify-center text-white/80 font-heading text-xl shadow-xl">
              🗺️ Интерактивная карта
              <br />
              <span className="text-sm opacity-70">Нажмите для открытия в Яндекс.Картах</span>
            </div>

            {/* Quick Contact Form */}
            <div className="card-pastel">
              <h3 className="text-2xl font-heading font-bold text-secondary mb-6 text-center">
                Быстрая связь
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-secondary mb-2">
                    Ваше имя
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-2xl border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="Как к вам обращаться?"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-secondary mb-2">
                    Телефон
                  </label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 rounded-2xl border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-secondary mb-2">
                    Вопрос или комментарий
                  </label>
                  <textarea 
                    rows={3}
                    className="w-full px-4 py-3 rounded-2xl border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Опишите ситуацию или задайте вопрос..."
                  ></textarea>
                </div>
                <Button className="w-full btn-bright-pink text-lg py-4 h-auto">
                  Отправить сообщение
                </Button>
                <p className="text-xs text-foreground/60 text-center">
                  Мы перезвоним вам в течение 30 минут
                </p>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-gradient-to-r from-bright-pink/10 to-primary/10 rounded-3xl p-6 text-center">
              <h4 className="font-heading font-bold text-secondary mb-3">
                Нужна срочная консультация?
              </h4>
              <p className="text-foreground/80 mb-4">
                Звоните прямо сейчас — дежурный специалист ответит на ваши вопросы
              </p>
              <Button className="btn-bright-pink">
                <Phone className="mr-2 h-5 w-5" />
                Позвонить сейчас
              </Button>
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div className="mt-16 text-center">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-heading font-bold text-gradient-pink mb-2">
                &lt; 30 мин
              </div>
              <div className="text-foreground/70 text-sm">Время ответа</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-heading font-bold text-gradient-pink mb-2">
                24/7
              </div>
              <div className="text-foreground/70 text-sm">WhatsApp поддержка</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-heading font-bold text-gradient-pink mb-2">
                5 мин
              </div>
              <div className="text-foreground/70 text-sm">От метро пешком</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-heading font-bold text-gradient-pink mb-2">
                Бесплатно
              </div>
              <div className="text-foreground/70 text-sm">Первая консультация</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;