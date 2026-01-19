import { Play } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  duration: string;
}

const videos: Video[] = [
  {
    id: "1",
    title: "Артикуляционная гимнастика",
    description: "Базовые упражнения для развития речевого аппарата",
    thumbnail: "/placeholder.svg",
    videoUrl: "/videos/speech-1.mp4",
    duration: "8:20",
  },
  {
    id: "2",
    title: "Постановка звуков",
    description: "Упражнения для правильного произношения",
    thumbnail: "/placeholder.svg",
    videoUrl: "/videos/speech-2.mp4",
    duration: "10:15",
  },
  {
    id: "3",
    title: "Дыхательные упражнения",
    description: "Развитие речевого дыхания",
    thumbnail: "/placeholder.svg",
    videoUrl: "/videos/speech-3.mp4",
    duration: "6:00",
  },
];

const SpeechTherapy = () => {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="text-xl font-heading font-bold">
            ← На главную
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Занятия с логопедом
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Видеоуроки для развития речи, артикуляции и правильного произношения
          </p>
        </div>
      </section>

      {/* Videos Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video) => (
              <div
                key={video.id}
                className="group bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedVideo(video)}
              >
                <div className="relative aspect-video bg-muted">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                      <Play className="w-8 h-8 text-primary-foreground ml-1" />
                    </div>
                  </div>
                  <span className="absolute bottom-2 right-2 bg-black/70 text-white text-sm px-2 py-1 rounded">
                    {video.duration}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                    {video.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {video.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {videos.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Видео скоро появятся</p>
            </div>
          )}
        </div>
      </section>

      {/* Video Modal */}
      <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden">
          {selectedVideo && (
            <div>
              <div className="aspect-video bg-black">
                <video
                  src={selectedVideo.videoUrl}
                  controls
                  autoPlay
                  className="w-full h-full"
                >
                  Ваш браузер не поддерживает воспроизведение видео
                </video>
              </div>
              <div className="p-4">
                <h3 className="font-heading font-semibold text-xl mb-2">
                  {selectedVideo.title}
                </h3>
                <p className="text-muted-foreground">
                  {selectedVideo.description}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SpeechTherapy;
