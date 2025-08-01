import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign } from "lucide-react";

const PricingModal = () => {
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
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="gap-2">
          <DollarSign className="h-4 w-4" />
          Прайс-лист
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-background">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gradient-pink text-center">
            Прайс-лист услуг
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid gap-4 md:grid-cols-2 mt-6">
          {services.map((service, index) => (
            <Card key={index} className="card-pastel border-primary/20">
              <CardHeader className="pb-4">
                <CardTitle className="text-base leading-tight text-foreground">
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
                <div className="text-xl font-bold text-primary mb-2">
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
        
        <div className="text-center mt-6 p-4 bg-muted/50 rounded-lg">
          <p className="text-muted-foreground text-sm">
            Для получения более подробной информации и записи на прием свяжитесь с нами
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PricingModal;