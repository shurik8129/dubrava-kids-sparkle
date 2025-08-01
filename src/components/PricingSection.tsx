import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PricingSection = () => {
  const services = [
    {
      title: "Консультация по запросу старшего инструктора ABA",
      specialist: "Щетинина Я. С.",
      price: "1000 руб.",
      duration: ""
    },
    {
      title: "ABA терапия с инструктором",
      duration: "1 час",
      price: "1100 руб.",
      note: "Отдельно оплачиваются услуги кураторов/супервизоров!"
    },
    {
      title: "Занятия с инструктором по мозжечковой стимуляции",
      duration: "1 час",
      price: "900 руб.",
      note: ""
    },
    {
      title: "Консультация детский психолог/арт/песочная терапия",
      duration: "1 час",
      price: "1100 руб.",
      note: ""
    },
    {
      title: "Массаж общий",
      duration: "1 час",
      price: "1100 руб.",
      note: ""
    },
    {
      title: "Консультация логопеда",
      description: "(тестирование по запросу)",
      price: "1000 руб.",
      note: ""
    },
    {
      title: "Занятие с логопедом/коррекция речи/постановка звуков",
      duration: "1 час / 30 мин",
      price: "1100 руб. / 600 руб.",
      note: ""
    }
  ];

  return (
    <section className="section-spacing bg-gradient-to-b from-background to-muted/30">
      <div className="container-padding max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient-pink mb-4">
            Прайс-лист
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Стоимость наших услуг для комплексной помощи детям
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} className="card-pastel hover:shadow-lg transition-all duration-300 border-primary/20">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg leading-tight text-foreground">
                  {service.title}
                </CardTitle>
                {service.specialist && (
                  <p className="text-sm text-muted-foreground font-medium">
                    {service.specialist}
                  </p>
                )}
                {service.description && (
                  <p className="text-sm text-muted-foreground">
                    {service.description}
                  </p>
                )}
                {service.duration && (
                  <p className="text-sm text-primary font-medium">
                    {service.duration}
                  </p>
                )}
              </CardHeader>
              <CardContent className="pt-0">
                <div className="text-2xl font-bold text-primary mb-2">
                  {service.price}
                </div>
                {service.note && (
                  <p className="text-xs text-orange-600 bg-orange-50 p-2 rounded-lg border border-orange-200">
                    {service.note}
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <p className="text-muted-foreground text-sm">
            Для получения более подробной информации и записи на прием свяжитесь с нами
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;