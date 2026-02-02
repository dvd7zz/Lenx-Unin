import { motion } from "framer-motion";
import { type IconType } from "react-icons";

interface SkillCardProps {
  name: string;
  icon: IconType;
  color: string;
  level: number;
}

export function SkillCard({ name, icon: Icon, color, level }: SkillCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      className="glass-card p-6 rounded-2xl group relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110" />
      
      <div className="relative z-10 flex flex-col items-center text-center gap-4">
        <div 
          className="p-4 rounded-full bg-background border border-white/10 shadow-lg"
          style={{ color }}
        >
          <Icon size={40} />
        </div>
        
        <h3 className="text-xl font-bold font-display">{name}</h3>
        
        <div className="w-full h-2 bg-secondary rounded-full overflow-hidden mt-2">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: `${level}%` }}
            transition={{ duration: 1, delay: 0.2 }}
            className="h-full rounded-full"
            style={{ backgroundColor: color }}
          />
        </div>
        <span className="text-xs text-muted-foreground font-mono">{level}% Proficiency</span>
      </div>
    </motion.div>
  );
}
