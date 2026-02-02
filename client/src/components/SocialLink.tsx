import { motion } from "framer-motion";
import { type IconType } from "react-icons";

interface SocialLinkProps {
  icon: IconType;
  label: string;
  href: string;
  color: string;
}

export function SocialLink({ icon: Icon, label, href, color }: SocialLinkProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      whileHover={{ y: -5 }}
      className="flex flex-col items-center gap-3 group"
    >
      <div 
        className="w-16 h-16 rounded-2xl flex items-center justify-center glass-card group-hover:border-primary/50 transition-all duration-300 relative overflow-hidden"
      >
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
          style={{ backgroundColor: color }}
        />
        <Icon size={32} className="text-white group-hover:scale-110 transition-transform duration-300" />
      </div>
      <span className="text-sm font-medium text-muted-foreground group-hover:text-white transition-colors">{label}</span>
    </motion.a>
  );
}
