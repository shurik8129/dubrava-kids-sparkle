import { Phone, Calendar, Clipboard, Users, TrendingUp } from "lucide-react";

const HowWeWorkSection = () => {
  const steps = [
    {
      icon: Phone,
      number: "01",
      title: "Заявка или звонок",
      description: "Свяжитесь с нами любым удобным способом: по телефону, через WhatsApp или оставьте заявку на сайте",
      color: "from-primary to-primary/80"
    },
    {
      icon: Calendar,
      number: "02", 
      title: "Первичная консультация",
      description: "Знакомимся с ребенком и семьей, проводим диагностику, обсуждаем цели и задачи",
      color: "from-bright-pink to-bright-pink/80"
    },
    {
      icon: Clipboard,
      number: "03",
      title: "Индивидуальная программа",
      description: "Составляем персональный план развития и коррекции с учетом особенностей ребенка",
      color: "from-secondary to-primary"
    },
    {
      icon: Users,
      number: "04",
      title: "Занятия и поддержка",
      description: "Регулярные занятия со специалистами, постоянная поддержка семьи и рекомендации для дома",
      color: "from-pastel-blue to-primary"
    },
    {
      icon: TrendingUp,
      number: "05",
      title: "Прогресс и обратная связь",
      description: "Отслеживаем динамику развития, корректируем программу, регулярно информируем родителей",
      color: "from-pastel-yellow to-bright-pink"
    }
  ];

  return (
    <section className="section-spacing bg-gradient-to-b from-pastel-yellow/20 to-background">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-secondary mb-6">
            Как мы <span className="text-gradient-pink">работаем</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Пошаговый процесс работы с семьей — от первого звонка до достижения результатов
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection lines for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-bright-pink to-primary transform -translate-y-1/2 z-0"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="text-center group">
                {/* Step Number */}
                <div className="relative mb-6">
                  <div className="bg-white w-20 h-20 rounded-full shadow-lg flex items-center justify-center mx-auto relative z-10 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-heading font-bold text-gradient-pink">
                      {step.number}
                    </span>
                  </div>
                  
                  {/* Icon */}
                  <div className={`absolute top-24 left-1/2 transform -translate-x-1/2 bg-gradient-to-br ${step.color} text-white w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <step.icon className="h-8 w-8" />
                  </div>
                </div>

                {/* Content */}
                <div className="pt-20">
                  <h3 className="text-xl md:text-2xl font-heading font-bold text-secondary mb-4">
                    {step.title}
                  </h3>
                  <p className="text-foreground/80 leading-relaxed text-sm md:text-base">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline for Mobile */}
        <div className="lg:hidden mt-16">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className={`bg-gradient-to-br ${step.color} text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0`}>
                    <step.icon className="h-6 w-6" />
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-0.5 h-16 bg-gradient-to-b from-primary to-bright-pink mt-4"></div>
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <div className="bg-white rounded-2xl p-4 shadow-lg">
                    <h4 className="font-heading font-bold text-secondary mb-2">
                      {step.title}
                    </h4>
                    <p className="text-foreground/80 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Features */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="card-pastel text-center">
            <div className="text-3xl mb-4">⏱️</div>
            <h4 className="text-xl font-heading font-bold text-secondary mb-3">
              Быстрый старт
            </h4>
            <p className="text-foreground/70">
              Начинаем работу в течение 3-5 дней после обращения
            </p>
          </div>
          
          <div className="card-pastel text-center">
            <div className="text-3xl mb-4">🎯</div>
            <h4 className="text-xl font-heading font-bold text-secondary mb-3">
              Индивидуальный подход
            </h4>
            <p className="text-foreground/70">
              Каждая программа создается специально для вашего ребенка
            </p>
          </div>
          
          <div className="card-pastel text-center">
            <div className="text-3xl mb-4">📈</div>
            <h4 className="text-xl font-heading font-bold text-secondary mb-3">
              Постоянный мониторинг
            </h4>
            <p className="text-foreground/70">
              Еженедельные отчеты о прогрессе и корректировка программы
            </p>
          </div>
        </div>

        {/* FAQ Preview */}
        <div className="mt-16 bg-gradient-to-r from-accent/50 to-pastel-blue/30 rounded-3xl p-8">
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-secondary text-center mb-8">
            Часто задаваемые вопросы
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/80 rounded-2xl p-4">
              <h4 className="font-heading font-bold text-secondary mb-2">
                Сколько длится программа?
              </h4>
              <p className="text-foreground/70 text-sm">
                Продолжительность зависит от индивидуальных особенностей ребенка. 
                В среднем первые результаты видны через 1-2 месяца.
              </p>
            </div>
            <div className="bg-white/80 rounded-2xl p-4">
              <h4 className="font-heading font-bold text-secondary mb-2">
                Какова стоимость занятий?
              </h4>
              <p className="text-foreground/70 text-sm">
                Стоимость рассчитывается индивидуально в зависимости от выбранных услуг. 
                Первая консультация — бесплатно.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;