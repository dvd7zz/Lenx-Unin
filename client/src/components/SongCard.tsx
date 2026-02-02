import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";
import { useState, useRef, useEffect } from "react";

interface SongCardProps {
  title: string;
  artist: string;
  coverImage: string;
  audioUrl: string;
}

export function SongCard({ title, artist, coverImage, audioUrl }: SongCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(err => {
          console.error("Playback failed:", err);
          setIsPlaying(false);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsPlaying(!isPlaying);
  };

  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      className="bg-card/50 border border-white/5 rounded-xl overflow-hidden group cursor-pointer"
    >
      <div className="h-48 w-full relative overflow-hidden">
        <img 
          src={coverImage} 
          alt={`${title} cover`} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors flex items-center justify-center">
          <motion.button 
            onClick={togglePlay}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileActive={{ scale: 0.9 }}
            className="z-10 w-14 h-14 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center text-white border border-white/20 shadow-xl"
          >
            {isPlaying ? <Pause size={24} fill="currentColor" /> : <Play size={24} fill="currentColor" className="ml-1" />}
          </motion.button>
        </div>
      </div>
      
      <div className="p-4 bg-gradient-to-b from-transparent to-black/20">
        <h3 className="font-bold font-display text-lg truncate text-white group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-sm text-muted-foreground mb-3">{artist}</p>
        
        <audio 
          ref={audioRef} 
          src={audioUrl} 
          onEnded={() => setIsPlaying(false)}
          className="hidden"
        />
        
        <div className="flex items-center gap-2">
           <div className="h-1 flex-1 bg-white/10 rounded-full overflow-hidden">
             {isPlaying && (
               <motion.div 
                 initial={{ width: "0%" }}
                 animate={{ width: "100%" }}
                 transition={{ duration: 30, ease: "linear" }}
                 className="h-full bg-primary"
               />
             )}
           </div>
        </div>
      </div>
    </motion.div>
  );
}
