import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, MessageSquare, Hand, Zap, Activity } from "lucide-react";
import servicesImage from "@/assets/services-illustration.jpg";

const ServicesSection = () => {
  const services = [
    {
      icon: Brain,
      title: "ABA-терапия",
      description: "Прикладной анализ поведения для коррекции нежелательного поведения и обучения новым навыкам",
      color: "from-primary to-primary/80",
      features: ["Индивидуальные программы", "Работа с поведением", "Развитие навыков"]
    },
    {
      icon: Activity,
      title: "Мозжечковая стимуляция",
      description: "Специальные упражнения для улучшения координации, равновесия и когнитивных функций",
      color: "from-bright-pink to-bright-pink/80",
      features: ["Улучшение координации", "Развитие баланса", "Когнитивное развитие"]
    },
    {
      icon: Zap,
      title: "Нейрофитнес",
      description: "Комплекс упражнений для развития нервной системы и улучшения работы мозга",
      color: "from-pastel-blue to-primary",
      features: ["Тренировка мозга", "Физическое развитие", "Концентрация внимания"]
    },
    {
      icon: MessageSquare,
      title: "Логопед",
      description: "Коррекция речевых нарушений и развитие коммуникативных навыков",
      color: "from-secondary to-primary",
      features: ["Развитие речи", "Коррекция произношения", "Коммуникативные навыки"]
    },
    {
      icon: Hand,
      title: "Массаж",
      description: "Лечебный и развивающий массаж для улучшения мышечного тонуса и общего состояния",
      color: "from-pastel-yellow to-bright-pink",
      features: ["Расслабление", "Улучшение тонуса", "Сенсорное развитие"]
    }
  ];

  return (
    <section className="section-spacing bg-gradient-to-b from-accent/30 to-background">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-secondary mb-6">
            Наши <span className="text-gradient-pink">услуги</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Комплексный подход к развитию и коррекции с использованием современных методик
          </p>
        </div>

        {/* Services Image */}
        <div className="text-center mb-16">
          <div className="inline-block rounded-3xl overflow-hidden shadow-xl">
            <img 
              src={servicesImage} 
              alt="Услуги центра ДубрАВА" 
              className="w-full max-w-2xl h-auto"
            />
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div key={index} className="card-pastel group hover:shadow-2xl transition-all duration-300">
              {/* Icon */}
              <div className={`bg-gradient-to-br ${service.color} text-white w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="h-8 w-8" />
              </div>
              
              {/* Content */}
              <h3 className="text-2xl font-heading font-bold text-secondary mb-4">
                {service.title}
              </h3>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2 text-sm text-foreground/70">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              {/* CTA */}
              <Button 
                variant="outline" 
                className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full font-semibold group-hover:shadow-lg transition-all duration-300"
              >
                Подробнее
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-bright-pink/10 rounded-3xl p-8">
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-secondary mb-4">
            Не знаете, какая услуга подойдет вашему ребенку?
          </h3>
          <p className="text-lg text-foreground/80 mb-6 max-w-2xl mx-auto">
            Запишитесь на бесплатную консультацию, и наши специалисты помогут подобрать оптимальную программу
          </p>
          <Button className="btn-bright-pink text-lg px-8 py-4 h-auto">
            Записаться на консультацию
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;