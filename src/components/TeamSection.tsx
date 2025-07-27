import { Button } from "@/components/ui/button";
import { ArrowRight, Award, GraduationCap, Heart } from "lucide-react";
import teamImage from "@/assets/team-photo.jpg";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Анна Петрова",
      position: "Ведущий ABA-терапевт",
      experience: "8 лет опыта",
      specialty: "Коррекция поведения, РАС",
      education: "МГУ, психология",
      image: "👩‍⚕️"
    },
    {
      name: "Елена Сидорова",
      position: "Логопед-дефектолог",
      experience: "12 лет опыта",
      specialty: "Речевые нарушения, ЗРР",
      education: "МПГУ, дефектология",
      image: "👩‍🎓"
    },
    {
      name: "Михаил Иванов",
      position: "Специалист по массажу",
      experience: "15 лет опыта",
      specialty: "Детский массаж, реабилитация",
      education: "Медицинская академия",
      image: "👨‍⚕️"
    },
    {
      name: "Ольга Кузнецова",
      position: "Нейропсихолог",
      experience: "10 лет опыта",
      specialty: "Когнитивное развитие, СДВГ",
      education: "МГУ, нейропсихология",
      image: "👩‍🔬"
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
              
              <Button 
                variant="outline" 
                size="sm"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full font-semibold text-xs"
              >
                Подробнее
                <ArrowRight className="ml-1 h-3 w-3" />
              </Button>
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