import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Brain, Users, MessageSquare, Hand, Stethoscope, Heart } from "lucide-react";

const PricingModal = () => {
  const services = [
    {
      title: "Консультация по запросу старшего инструктора ABA",
      specialist: "Щетинина Я. С.",
      price: "1000 руб.",
      duration: "",
      icon: Brain,
      color: "from-blue-400 to-blue-600"
    },
    {
      title: "ABA терапия с инструктором",
      duration: "1 час",
      price: "1100 руб.",
      note: "Отдельно оплачиваются услуги кураторов/супервизоров!",
      icon: Users,
      color: "from-green-400 to-green-600"
    },
    {
      title: "Занятия с инструктором по мозжечковой стимуляции",
      duration: "1 час",
      price: "900 руб.",
      note: "",
      icon: Brain,
      color: "from-purple-400 to-purple-600"
    },
    {
      title: "Консультация детский психолог/арт/песочная терапия",
      duration: "1 час",
      price: "1100 руб.",
      note: "",
      icon: Heart,
      color: "from-pink-400 to-pink-600"
    },
    {
      title: "Массаж общий",
      duration: "1 час",
      price: "1100 руб.",
      note: "",
      icon: Hand,
      color: "from-orange-400 to-orange-600"
    },
    {
      title: "Консультация логопеда",
      description: "(тестирование по запросу)",
      price: "1000 руб.",
      note: "",
      icon: MessageSquare,
      color: "from-teal-400 to-teal-600"
    },
    {
      title: "Занятие с логопедом/коррекция речи/постановка звуков",
      duration: "1 час / 30 мин",
      price: "1100 руб. / 600 руб.",
      note: "",
      icon: Stethoscope,
      color: "from-indigo-400 to-indigo-600"
    }
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="btn-bright-pink gap-2 hover-scale">
          <DollarSign className="h-5 w-5" />
          Прайс-лист
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-5xl max-h-[85vh] overflow-y-auto bg-gradient-to-br from-background via-pastel-blue/20 to-pastel-yellow/20 border-2 border-primary/30 shadow-2xl">
        <DialogHeader className="pb-6">
          <DialogTitle className="text-3xl font-bold text-gradient-pink text-center mb-2">
            💎 Прайс-лист услуг 💎
          </DialogTitle>
          <p className="text-center text-muted-foreground">
            Профессиональные услуги для развития вашего ребенка
          </p>
        </DialogHeader>
        
        <div className="grid gap-6 md:grid-cols-2 mt-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-5`}></div>
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.color}`}></div>
                
                <CardHeader className="pb-4 relative">
                  <div className="flex items-start gap-3">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${service.color} shadow-lg`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-base leading-tight text-foreground font-semibold">
                        {service.title}
                      </CardTitle>
                      {service.specialist && (
                        <div className="mt-2 px-3 py-1 bg-gradient-to-r from-bright-pink/10 to-primary/10 rounded-full">
                          <p className="text-sm text-bright-pink font-medium">
                            👩‍⚕️ {service.specialist}
                          </p>
                        </div>
                      )}
                      {service.description && (
                        <p className="text-sm text-muted-foreground mt-1">
                          {service.description}
                        </p>
                      )}
                      {service.duration && (
                        <div className="flex items-center gap-1 mt-2">
                          <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-medium">
                            ⏱️ {service.duration}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0 relative">
                  <div className={`text-2xl font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent mb-3 flex items-center gap-2`}>
                    💰 {service.price}
                  </div>
                  {service.note && (
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-400/10 to-red-400/10 rounded-lg"></div>
                      <p className="relative text-xs text-orange-700 bg-orange-50/80 p-3 rounded-lg border border-orange-200/50 shadow-sm">
                        ⚠️ {service.note}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center mt-8 p-6 bg-gradient-to-r from-pastel-blue/30 to-pastel-yellow/30 rounded-2xl border border-primary/20 shadow-lg">
          <div className="text-2xl mb-2">📞</div>
          <p className="text-foreground font-medium mb-1">
            Для получения более подробной информации и записи на прием
          </p>
          <p className="text-bright-pink font-semibold">
            свяжитесь с нами любым удобным способом!
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PricingModal;