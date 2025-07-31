import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ArrowRight, Award, GraduationCap, Heart, Phone, MapPin, Clock } from "lucide-react";
import teamImage from "@/assets/team-photo.jpg";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Анна Петрова",
      position: "Ведущий ABA-терапевт",
      experience: "8 лет опыта",
      specialty: "Коррекция поведения, РАС",
      education: "МГУ, психология",
      image: "👩‍⚕️",
      description: "Анна - сертифицированный ABA-терапевт с 8-летним опытом работы с детьми с расстройствами аутистического спектра. Специализируется на коррекции поведения и развитии социальных навыков.",
      tasks: [
        "Коррекция нежелательного поведения",
        "Развитие коммуникативных навыков",
        "Социальная адаптация",
        "Работа с РАС, СДВГ",
        "Программы раннего вмешательства"
      ]
    },
    {
      name: "Елена Сидорова",
      position: "Логопед-дефектолог",
      experience: "12 лет опыта",
      specialty: "Речевые нарушения, ЗРР",
      education: "МПГУ, дефектология",
      image: "👩‍🎓",
      description: "Елена - опытный логопед-дефектолог с 12-летним стажем. Работает с детьми любого возраста, специализируется на коррекции речевых нарушений различной сложности.",
      tasks: [
        "Коррекция звукопроизношения",
        "Развитие связной речи",
        "Работа с заиканием",
        "Преодоление ЗРР, ОНР",
        "Подготовка к школе"
      ]
    },
    {
      name: "Светлана Неверова",
      position: "Детский массажист",
      experience: "14 лет опыта",
      specialty: "Детский массаж, реабилитация",
      education: "Медицинская академия",
      image: "👨‍⚕️",
      description: "В центре «ДубрАВА» принимает детский сертифицированный массажист с медицинским образованием. Светлана Неверова имеет 14-летний опыт работы с детьми от 0+, индивидуальный подход к каждому ребёнку.",
      tasks: [
        "Профилактика различных нарушений",
        "Гипотонус, гипертонус",
        "Привычный поворот головы, кривошея",
        "ДЦП",
        "ЗРР",
        "Восстановление после травм",
        "Дисплазия т/з",
        "Любые нарушения в развитии ребёнка"
      ],
      additionalInfo: "А еще она проводит диагностику здоровья и показывает мамочкам, как делать домашний массаж самостоятельно."
    },
    {
      name: "Ольга Кузнецова",
      position: "Нейропсихолог",
      experience: "10 лет опыта",
      specialty: "Когнитивное развитие, СДВГ",
      education: "МГУ, нейропсихология",
      image: "👩‍🔬",
      description: "Ольга - квалифицированный нейропсихолог с 10-летним опытом. Специализируется на диагностике и коррекции когнитивных нарушений у детей.",
      tasks: [
        "Нейропсихологическая диагностика",
        "Коррекция внимания и памяти",
        "Работа с СДВГ",
        "Развитие исполнительных функций",
        "Подготовка к школьному обучению"
      ]
    }
  ];

  return (
    <section className="section-spacing bg-gradient-to-b from-background to-pastel-blue/20">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-secondary mb-6">
            Наша <span className="text-gradient-pink">команда</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Профессиональные специалисты с многолетним опытом работы с особенными детьми
          </p>
        </div>

        {/* Team Photo */}
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img 
                src={teamImage} 
                alt="Команда центра ДубрАВА" 
                className="w-full max-w-4xl h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating achievement badge */}
            <div className="absolute -top-4 -right-4 bg-bright-pink text-bright-pink-foreground rounded-2xl p-4 shadow-xl floating-animation">
              <Award className="h-8 w-8 mx-auto mb-2" />
              <div className="text-sm font-bold">Лицензированный центр</div>
            </div>
          </div>
        </div>

        {/* Team Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="bg-gradient-to-br from-primary to-bright-pink text-white w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="h-10 w-10" />
            </div>
            <div className="text-3xl font-heading font-bold text-secondary mb-2">15+</div>
            <div className="text-foreground/70">Лет опыта команды</div>
          </div>
          <div className="text-center">
            <div className="bg-gradient-to-br from-bright-pink to-pastel-yellow text-white w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Heart className="h-10 w-10" />
            </div>
            <div className="text-3xl font-heading font-bold text-secondary mb-2">500+</div>
            <div className="text-foreground/70">Детей получили помощь</div>
          </div>
          <div className="text-center">
            <div className="bg-gradient-to-br from-secondary to-primary text-white w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Award className="h-10 w-10" />
            </div>
            <div className="text-3xl font-heading font-bold text-secondary mb-2">8</div>
            <div className="text-foreground/70">Сертифицированных специалистов</div>
          </div>
        </div>

        {/* Team Members */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="card-pastel text-center group hover:scale-105 transition-transform duration-300">
              {/* Avatar */}
              <div className="w-20 h-20 bg-gradient-to-br from-pastel-blue to-pastel-yellow rounded-full flex items-center justify-center mx-auto mb-4 text-4xl group-hover:scale-110 transition-transform duration-300">
                {member.image}
              </div>
              
              {/* Info */}
              <h4 className="text-xl font-heading font-bold text-secondary mb-2">
                {member.name}
              </h4>
              <p className="text-primary font-semibold mb-2">{member.position}</p>
              <p className="text-sm text-foreground/70 mb-3">{member.experience}</p>
              <p className="text-sm text-foreground/60 mb-3">{member.specialty}</p>
              <p className="text-xs text-foreground/50 mb-4">{member.education}</p>
              
              <Dialog>
                <DialogTrigger asChild>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full font-semibold text-xs"
                  >
                    Подробнее
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader className="text-left">
                    <DialogTitle className="text-2xl font-heading font-bold text-secondary mb-4 flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-pastel-blue to-pastel-yellow rounded-full flex items-center justify-center text-3xl">
                        {member.image}
                      </div>
                      <div>
                        <div>{member.name}</div>
                        <div className="text-lg text-primary font-medium">{member.position}</div>
                      </div>
                    </DialogTitle>
                  </DialogHeader>
                  
                  <div className="space-y-6">
                    {/* Experience and Education */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-pastel-blue/20 rounded-2xl p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Clock className="h-5 w-5 text-primary" />
                          <span className="font-semibold text-secondary">Опыт работы</span>
                        </div>
                        <p className="text-foreground/80">{member.experience}</p>
                      </div>
                      <div className="bg-pastel-yellow/20 rounded-2xl p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <GraduationCap className="h-5 w-5 text-primary" />
                          <span className="font-semibold text-secondary">Образование</span>
                        </div>
                        <p className="text-foreground/80">{member.education}</p>
                      </div>
                    </div>

                    {/* Description */}
                    <div>
                      <p className="text-foreground/80 leading-relaxed">{member.description}</p>
                      {member.additionalInfo && (
                        <p className="text-foreground/80 leading-relaxed mt-3">{member.additionalInfo}</p>
                      )}
                    </div>

                    {/* Tasks */}
                    <div>
                      <h4 className="text-lg font-heading font-bold text-secondary mb-4">
                        С какими задачами можно обратиться:
                      </h4>
                      <div className="grid gap-2">
                        {member.tasks.map((task, taskIndex) => (
                          <div key={taskIndex} className="flex items-start gap-3 p-3 bg-background/50 rounded-xl">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-foreground/80">{task}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Contact CTA */}
                    <div className="bg-gradient-to-r from-primary/10 to-bright-pink/10 rounded-2xl p-6 text-center">
                      <h4 className="text-lg font-heading font-bold text-secondary mb-3">
                        Записаться на консультацию
                      </h4>
                      <p className="text-foreground/70 mb-4">
                        Свяжитесь с нами для записи к специалисту
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Button className="btn-primary">
                          <Phone className="mr-2 h-4 w-4" />
                          Позвонить
                        </Button>
                        <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                          <MapPin className="mr-2 h-4 w-4" />
                          WhatsApp
                        </Button>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-gradient-to-r from-secondary/10 to-primary/10 rounded-3xl p-8">
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-secondary mb-4">
            Хотите познакомиться с нашей командой лично?
          </h3>
          <p className="text-lg text-foreground/80 mb-6 max-w-2xl mx-auto">
            Приходите на экскурсию по центру и встретьтесь со специалистами
          </p>
          <Button className="btn-bright-pink text-lg px-8 py-4 h-auto">
            Записаться на экскурсию
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;