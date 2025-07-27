import { Button } from "@/components/ui/button";
import { Star, Quote, Heart } from "lucide-react";

const ReviewsSection = () => {
  const reviews = [
    {
      name: "Марина К.",
      childAge: "Сын, 6 лет",
      rating: 5,
      text: "Огромная благодарность центру ДубрАВА! За полгода занятий наш сын стал намного спокойнее, научился концентрироваться и даже начал говорить предложениями. Специалисты очень внимательные и профессиональные.",
      service: "ABA-терапия",
      avatar: "👩"
    },
    {
      name: "Андрей П.",
      childAge: "Дочь, 4 года",
      rating: 5,
      text: "Пришли с проблемами речи, а ушли с невероятными результатами! Логопед Елена Сидорова - настоящий волшебник. Дочка теперь говорит четко и с удовольствием рассказывает стихи.",
      service: "Логопедия",
      avatar: "👨"
    },
    {
      name: "Светлана М.",
      childAge: "Сын, 8 лет",
      rating: 5,
      text: "Центр помог нам справиться с СДВГ. Комплексный подход: нейрофитнес, мозжечковая стимуляция и работа с психологом дали потрясающие результаты. Сын стал усидчивее и лучше учится в школе.",
      service: "Нейрофитнес",
      avatar: "👩‍🦰"
    },
    {
      name: "Екатерина Л.",
      childAge: "Дочь, 5 лет",
      rating: 5,
      text: "Массаж в центре - это не просто процедура, а настоящая терапия. После курса у дочки улучшился мышечный тонус, она стала более координированной. Михаил - профессионал высочайшего уровня!",
      service: "Массаж",
      avatar: "👩‍🦱"
    }
  ];

  return (
    <section className="section-spacing bg-gradient-to-b from-pastel-blue/20 to-pastel-yellow/20">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-secondary mb-6">
            Отзывы <span className="text-gradient-pink">родителей</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Истории успеха наших маленьких героев и их семей
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {reviews.map((review, index) => (
            <div key={index} className="card-pastel group hover:shadow-2xl transition-all duration-300">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-pastel-blue to-pastel-yellow rounded-full flex items-center justify-center text-2xl">
                    {review.avatar}
                  </div>
                  <div>
                    <div className="font-heading font-bold text-secondary">{review.name}</div>
                    <div className="text-sm text-foreground/70">{review.childAge}</div>
                  </div>
                </div>
                <Quote className="h-8 w-8 text-bright-pink/40" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Service Tag */}
              <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold mb-4">
                {review.service}
              </div>

              {/* Review Text */}
              <p className="text-foreground/80 leading-relaxed italic mb-4">
                "{review.text}"
              </p>

              {/* Heart decoration */}
              <div className="flex justify-end">
                <Heart className="h-5 w-5 text-bright-pink/60 group-hover:text-bright-pink transition-colors duration-300" />
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="text-4xl font-heading font-bold text-gradient-pink mb-2">98%</div>
            <div className="text-foreground/70">Довольных родителей</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-heading font-bold text-gradient-pink mb-2">4.9</div>
            <div className="text-foreground/70">Средняя оценка</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-heading font-bold text-gradient-pink mb-2">150+</div>
            <div className="text-foreground/70">Отзывов</div>
          </div>
        </div>

        {/* Video Testimonials Placeholder */}
        <div className="bg-gradient-to-r from-white/80 to-accent/50 rounded-3xl p-8 mb-12">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-secondary mb-4">
              Видеоотзывы родителей
            </h3>
            <p className="text-lg text-foreground/80 mb-6">
              Смотрите, как родители рассказывают о своем опыте в центре ДубрАВА
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-gradient-to-br from-pastel-blue to-pastel-yellow rounded-2xl h-40 flex items-center justify-center text-white/80 font-heading text-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
                  ▶ Видеоотзыв {i}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-gradient-to-r from-bright-pink/10 to-primary/10 rounded-3xl p-8">
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-secondary mb-4">
            Хотите поделиться своим опытом?
          </h3>
          <p className="text-lg text-foreground/80 mb-6 max-w-2xl mx-auto">
            Мы будем рады услышать вашу историю успеха!
          </p>
          <Button className="btn-bright-pink text-lg px-8 py-4 h-auto mr-4">
            Оставить отзыв
          </Button>
          <Button 
            variant="outline" 
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-4 h-auto rounded-full font-semibold"
          >
            Записать видеоотзыв
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;