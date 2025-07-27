import { Heart, Award, Users, Brain } from "lucide-react";
import aboutImage from "@/assets/about-us.jpg";

const AboutSection = () => {
  const features = [
    {
      icon: Brain,
      title: "Доказательные методы",
      description: "Используем научно обоснованные подходы в работе с детьми"
    },
    {
      icon: Heart,
      title: "Индивидуальный подход",
      description: "Каждая программа создается специально для вашего ребенка"
    },
    {
      icon: Users,
      title: "Команда профессионалов",
      description: "Опытные специалисты с профильным образованием"
    },
    {
      icon: Award,
      title: "Высокие результаты",
      description: "Подтвержденная эффективность наших методик"
    }
  ];

  return (
    <section className="section-spacing bg-gradient-to-b from-background to-accent/30">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-secondary mb-6">
            О центре <span className="text-gradient-pink">ДубрАВА</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Мы специализируемся на помощи детям с РАС, СДВГ, ЗПР, ЗРР и просто 
            любим работать с особенными детьми без диагноза
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img 
                src={aboutImage} 
                alt="Занятия в центре ДубрАВА" 
                className="w-full h-[400px] object-cover"
              />
            </div>
            {/* Floating stats */}
            <div className="absolute -top-6 -right-6 bg-bright-pink text-bright-pink-foreground rounded-2xl p-4 shadow-xl floating-animation">
              <div className="text-2xl font-bold">500+</div>
              <div className="text-sm">Довольных семей</div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-secondary">
              Наша миссия — помочь каждому ребенку раскрыть свой потенциал
            </h3>
            <p className="text-lg text-foreground/80 leading-relaxed">
              В центре "ДубрАВА" мы объединяем научный подход с искренней заботой о детях. 
              Наша команда специалистов использует только проверенные методики, адаптируя 
              их под индивидуальные потребности каждого ребенка.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Мы верим, что каждый ребенок уникален и имеет право на счастливое детство 
              и успешное развитие. Именно поэтому мы создали пространство, где дети 
              чувствуют себя комфортно и безопасно.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="card-pastel text-center group hover:scale-105 transition-transform duration-300">
              <div className="bg-gradient-to-br from-primary to-bright-pink text-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="h-8 w-8" />
              </div>
              <h4 className="text-xl font-heading font-bold text-secondary mb-3">
                {feature.title}
              </h4>
              <p className="text-foreground/70 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;