import { useState } from "react";
import { Play, Brain, MessageCircle, Baby, Heart } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  category: string;
  duration: string;
}

const categories = [
  { id: "all", name: "Все видео", icon: Play },
  { id: "neurofitness", name: "Нейрофитнес", icon: Brain },
  { id: "speech", name: "Логопедия", icon: MessageCircle },
  { id: "development", name: "Развитие", icon: Baby },
  { id: "parents", name: "Для родителей", icon: Heart },
];

// Конфигурация видео — добавляйте свои видео сюда
// Видео файлы размещайте в папке public/videos/
const videos: Video[] = [
  {
    id: "1",
    title: "Упражнения для развития межполушарного взаимодействия",
    description: "Простые упражнения, которые можно выполнять дома для развития координации и внимания",
    thumbnail: "/placeholder.svg",
    videoUrl: "/videos/neurofitness-1.mp4",
    category: "neurofitness",
    duration: "5:30"
  },
  {
    id: "2",
    title: "Артикуляционная гимнастика",
    description: "Базовые упражнения для развития речевого аппарата",
    thumbnail: "/placeholder.svg",
    videoUrl: "/videos/speech-1.mp4",
    category: "speech",
    duration: "7:15"
  },
  {
    id: "3",
    title: "Пальчиковая гимнастика для малышей",
    description: "Развиваем мелкую моторику через игру",
    thumbnail: "/placeholder.svg",
    videoUrl: "/videos/development-1.mp4",
    category: "development",
    duration: "4:45"
  },
  {
    id: "4",
    title: "Дыхательные упражнения",
    description: "Упражнения для развития правильного речевого дыхания",
    thumbnail: "/placeholder.svg",
    videoUrl: "/videos/speech-2.mp4",
    category: "speech",
    duration: "6:00"
  },
  {
    id: "5",
    title: "Нейроигры с мячом",
    description: "Весёлые упражнения для развития координации и внимания",
    thumbnail: "/placeholder.svg",
    videoUrl: "/videos/neurofitness-2.mp4",
    category: "neurofitness",
    duration: "8:20"
  },
  {
    id: "6",
    title: "Советы родителям: как заниматься дома",
    description: "Рекомендации специалистов для эффективных домашних занятий",
    thumbnail: "/placeholder.svg",
    videoUrl: "/videos/parents-1.mp4",
    category: "parents",
    duration: "10:00"
  },
];

const VideoGallerySection = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  const filteredVideos = selectedCategory === "all" 
    ? videos 
    : videos.filter(video => video.category === selectedCategory);

  const getCategoryColor = (categoryId: string) => {
    const colors: Record<string, string> = {
      neurofitness: "from-pastel-purple to-pastel-blue",
      speech: "from-pastel-pink to-pastel-peach",
      development: "from-pastel-green to-pastel-mint",
      parents: "from-pastel-yellow to-pastel-peach",
    };
    return colors[categoryId] || "from-primary to-secondary";
  };

  return (
    <section id="videos" className="section-spacing bg-gradient-to-b from-background to-pastel-mint/20">
      <div className="container-padding">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-pastel-purple/30 text-primary rounded-full text-sm font-medium mb-4">
            🎬 Видеоматериалы
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Полезные <span className="text-gradient-pink">видео</span> для занятий дома
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Упражнения и рекомендации от наших специалистов, которые помогут закрепить 
            результаты занятий в центре
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg scale-105"
                    : "bg-white/80 text-foreground/70 hover:bg-white hover:shadow-md hover:scale-102"
                }`}
              >
                <Icon className="h-4 w-4" />
                {category.name}
              </button>
            );
          })}
        </div>

        {/* Video grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              onClick={() => setSelectedVideo(video)}
            >
              {/* Thumbnail */}
              <div className="relative aspect-video overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${getCategoryColor(video.category)} opacity-80`} />
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Play className="h-8 w-8 text-primary ml-1" fill="currentColor" />
                  </div>
                </div>
                {/* Duration badge */}
                <div className="absolute bottom-3 right-3 bg-black/70 text-white text-sm px-2 py-1 rounded-lg">
                  {video.duration}
                </div>
                {/* Category badge */}
                <div className="absolute top-3 left-3">
                  <span className="bg-white/90 text-primary text-xs font-medium px-3 py-1 rounded-full">
                    {categories.find(c => c.id === video.category)?.name}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-heading font-bold text-lg text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {video.title}
                </h3>
                <p className="text-foreground/60 text-sm line-clamp-2">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {filteredVideos.length === 0 && (
          <div className="text-center py-12">
            <p className="text-foreground/60 text-lg">
              В этой категории пока нет видео. Скоро появятся! 🎬
            </p>
          </div>
        )}

        {/* Video modal */}
        <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
          <DialogContent className="max-w-4xl p-0 overflow-hidden">
            <DialogHeader className="p-6 pb-0">
              <DialogTitle className="font-heading text-xl">
                {selectedVideo?.title}
              </DialogTitle>
            </DialogHeader>
            <div className="p-6">
              {/* Video player */}
              <div className="aspect-video bg-black rounded-xl overflow-hidden mb-4">
                {selectedVideo && (
                  <video 
                    controls 
                    autoPlay
                    className="w-full h-full"
                    src={selectedVideo.videoUrl}
                  >
                    Ваш браузер не поддерживает воспроизведение видео.
                  </video>
                )}
              </div>
              <p className="text-foreground/70">
                {selectedVideo?.description}
              </p>
            </div>
          </DialogContent>
        </Dialog>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-foreground/60 mb-4">
            Хотите узнать больше упражнений для вашего ребёнка?
          </p>
          <a 
            href="#contacts" 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Записаться на консультацию
          </a>
        </div>
      </div>
    </section>
  );
};

export default VideoGallerySection;
