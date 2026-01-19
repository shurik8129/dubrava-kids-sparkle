import { Link } from "react-router-dom";
import { Brain, MessageCircle, Lightbulb, Users } from "lucide-react";

const directions = [
  {
    title: "Нейрофитнес",
    description: "Упражнения для развития межполушарного взаимодействия и координации",
    icon: Brain,
    link: "/neurofitness",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    title: "Занятия с логопедом",
    description: "Видеоуроки для развития речи и правильного произношения",
    icon: MessageCircle,
    link: "/speech-therapy",
    color: "bg-green-500/10 text-green-600",
  },
  {
    title: "Развивающие занятия",
    description: "Упражнения для моторики, внимания и памяти",
    icon: Lightbulb,
    link: "/development",
    color: "bg-amber-500/10 text-amber-600",
  },
  {
    title: "Для родителей",
    description: "Полезные материалы и рекомендации для занятий дома",
    icon: Users,
    link: "/for-parents",
    color: "bg-purple-500/10 text-purple-600",
  },
];

const VideoDirectionsSection = () => {
  return (
    <section id="videos" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Видеоматериалы
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Бесплатные видеоуроки и упражнения для занятий дома
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {directions.map((direction) => (
            <Link
              key={direction.title}
              to={direction.link}
              className="group bg-card rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-14 h-14 rounded-lg ${direction.color} flex items-center justify-center mb-4`}>
                <direction.icon className="w-7 h-7" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                {direction.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {direction.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoDirectionsSection;
