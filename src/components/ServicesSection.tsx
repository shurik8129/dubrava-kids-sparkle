import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ArrowRight, Brain, MessageSquare, Hand, Zap, Activity } from "lucide-react";
import servicesImage from "@/assets/services-illustration.jpg";

const ServicesSection = () => {
  const services = [
    {
      icon: Brain,
      title: "ABA-терапия",
      description: "Прикладной анализ поведения для коррекции нежелательного поведения и обучения новым навыкам",
      color: "from-primary to-primary/80",
      features: ["Индивидуальные программы", "Работа с поведением", "Развитие навыков"],
      detailedDescription: "АВА – это современный поведенческий подход к работе с детьми с различными нарушениями развития, не только с РАС, но и с любыми другими. Так же мы работаем с детьми без диагноза, поведенческими или иными проблемами.\n\nИспользуем в работе исключительно научные, доказательные подходы!\n\nСуть АВА в том, чтобы увидеть ближайшую зону развития ребенка. Понять, каким навыкам его нужно научить, чтобы...",
      benefits: [
        "Ребенок мог взаимодействовать с родителями",
        "Посещать детский сад, школу, магазин, детскую площадку и т.д.",
        "Был доволен своей жизнью",
        "Мог сообщить, что он хочет, и отказаться от того, чего он не хочет",
        "Ребенок и родители жили максимально качественной жизнью"
      ],
      additionalInfo: "Подходит ли АВА-ТЕРАПИЯ детям без диагноза? Например, с СДВГ или кризисом 3-летнего возраста? Да!\n\nМы работаем с поведением, а поведение есть у любого человека. Когда в центре \"ДубрАВА\" применяем терапию АВА, мы смотрим на поведение, а не на диагноз.\n\nЕсли у ребенка на сегодняшний день нет навыка усидчивости, то мы формируем поведение – сидеть спокойно и выполнять задания.\n\nЭто работа над полезными, важными, функциональными навыками. А не о коррекции или лечении того или иного расстройства."
    },
    {
      icon: Zap,
      title: "Нейрофитнес",
      description: "Комплекс упражнений для развития нервной системы и улучшения работы мозга",
      color: "from-pastel-blue to-primary",
      features: ["Тренировка мозга", "Физическое развитие", "Концентрация внимания"],
      detailedDescription: "Нейрофитнес – это ключ к развитию мозга через специальные упражнения, игры и движения.",
      benefits: [
        "Улучшает фокус и внимание: прощай, рассеянность! Привет, концентрация!",
        "Развивает память и мышление: информация усваивается быстрее и легче",
        "Координация и ловкость: тело и мозг работают в идеальной гармонии",
        "Эмоции под контролем: Учит понимать и регулировать свои чувства"
      ],
      additionalInfo: "А для детей с нейроотличиями (СДВГ, РАС и др.) – это просто спасение!\n\n• Помогает мозгу найти новые пути: компенсирует особенности восприятия и обработки информации\n• Снижает тревожность и гиперактивность: учит мозг \"тормозить\" и успокаиваться\n• Развивает социальные навыки: через интерактивные игры и задания\n• Учит справляться с перегрузкой: укрепляет нервную систему, делая ее более устойчивой\n\nПодарите мозгу вашего ребенка самую лучшую тренировку! Это инвестиция в его счастливое будущее и уверенность в себе."
    },
    {
      icon: Activity,
      title: "Мозжечковая стимуляция",
      description: "Специальные упражнения для улучшения координации, равновесия и когнитивных функций",
      color: "from-bright-pink to-bright-pink/80",
      features: ["Улучшение координации", "Развитие баланса", "Когнитивное развитие"],
      detailedDescription: "Мозжечковая стимуляция - это специальная методика коррекции и развития, направленная на активизацию работы мозжечка.",
      benefits: [
        "Улучшение координации движений",
        "Развитие баланса и равновесия",
        "Повышение концентрации внимания",
        "Улучшение когнитивных функций"
      ],
      additionalInfo: "Мозжечок отвечает не только за равновесие и координацию, но и за многие когнитивные процессы. Стимулируя его работу, мы комплексно воздействуем на развитие ребенка."
    },
    {
      icon: MessageSquare,
      title: "Логопед",
      description: "Коррекция речевых нарушений и развитие коммуникативных навыков",
      color: "from-secondary to-primary",
      features: ["Развитие речи", "Коррекция произношения", "Коммуникативные навыки"],
      detailedDescription: "Логопедическая помощь направлена на коррекцию речевых нарушений и развитие коммуникативных навыков у детей.",
      benefits: [
        "Неправильное произношение звуков, слов и слогов",
        "Изменение темпа речи (ускорение или замедление речи)",
        "Отсутствие речи (запуск речи)",
        "Нарушение последовательности речи",
        "Нарушение письменной речи и чтения"
      ],
      additionalInfo: "Наши логопеды используют современные методики и имеют квалификацию для работы с детьми с различными особенностями развития, включая РАС."
    },
    {
      icon: Hand,
      title: "Массаж",
      description: "Лечебный и развивающий массаж для улучшения мышечного тонуса и общего состояния",
      color: "from-pastel-yellow to-bright-pink",
      features: ["Расслабление", "Улучшение тонуса", "Сенсорное развитие"],
      detailedDescription: "Детский лечебный массаж проводится сертифицированными специалистами с медицинским образованием.",
      benefits: [
        "Профилактика различных нарушений",
        "Коррекция гипотонуса и гипертонуса",
        "Работа с кривошеей и привычным поворотом головы",
        "Помощь при ДЦП и ЗРР",
        "Восстановление после травм"
      ],
      additionalInfo: "Наши массажисты работают с детьми от 0+ лет, имеют индивидуальный подход к каждому ребенку. Также проводится диагностика здоровья и обучение родителей домашнему массажу."
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
              <Dialog>
                <DialogTrigger asChild>
                  <Button 
                    variant="outline" 
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full font-semibold group-hover:shadow-lg transition-all duration-300"
                  >
                    Подробнее
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-heading font-bold text-secondary mb-4 flex items-center gap-3">
                      <div className={`bg-gradient-to-br ${service.color} text-white w-12 h-12 rounded-xl flex items-center justify-center`}>
                        <service.icon className="h-6 w-6" />
                      </div>
                      {service.title}
                    </DialogTitle>
                  </DialogHeader>
                  
                  <div className="space-y-6">
                    <div>
                      <p className="text-foreground/80 leading-relaxed whitespace-pre-line">
                        {service.detailedDescription}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-secondary mb-3">Что это дает:</h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start gap-3 text-foreground/80">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <p className="text-foreground/80 leading-relaxed whitespace-pre-line">
                        {service.additionalInfo}
                      </p>
                    </div>

                    <div className="pt-4 border-t">
                      <Button className="btn-bright-pink w-full">
                        Записаться на консультацию
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
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