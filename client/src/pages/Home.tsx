import { Navbar } from "@/components/Navbar";
import { Section } from "@/components/Section";
import { SkillCard } from "@/components/SkillCard";
import { SongCard } from "@/components/SongCard";
import { SocialLink } from "@/components/SocialLink";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

// Icons
import { FaHtml5, FaCss3Alt, FaReact, FaJs, FaInstagram, FaTelegram, FaGithub, FaYoutube } from "react-icons/fa";
import { ArrowRight, Download, Send } from "lucide-react";

export default function Home() {
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  const onSubmit = (data: any) => {
    console.log("Contact form submitted:", data);
    alert("Xabaringiz qabul qilindi! (Bu demo versiya, xabar yuborilmadi)");
  };

  return (
    <div className="bg-background min-h-screen text-foreground">
      <Navbar />

      {/* HERO SECTION */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        {/* Abstract Background Blobs */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[128px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[128px] pointer-events-none" />

        <div className="container mx-auto px-4 z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-sm font-medium mb-6 text-primary tracking-wider">
              FULL STACK DEVELOPER
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold font-display tracking-tight mb-6">
              CREATIVE <br />
              <span className="text-gradient">MINIMALIST</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              I build accessible, pixel-perfect, and performant web experiences. 
              Turning complex problems into simple, beautiful solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <ScrollLink to="contact" smooth={true} duration={500}>
                <Button size="lg" className="h-14 px-8 rounded-full text-base font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all">
                  Contact Me <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </ScrollLink>
              <Button variant="outline" size="lg" className="h-14 px-8 rounded-full text-base font-semibold border-white/10 hover:bg-white/5">
                Download CV <Download className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT ME */}
      <Section id="about" className="bg-secondary/20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-black border border-white/10 relative group">
              {/* Abstract Illustration Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-transparent transition-all duration-500">
                <span className="text-6xl font-display font-bold text-white/5 group-hover:text-white/10 transition-colors select-none">Me.</span>
              </div>
              {/* In a real app, use: <img src={portraitUrl} className="w-full h-full object-cover" /> */}
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary rounded-full blur-2xl opacity-50" />
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 font-display">About Me</h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                I'm a passionate developer based in the digital realm. My journey started with a simple "Hello World" and has evolved into building complex, scalable applications.
              </p>
              <p>
                I believe that good design is as important as good code. I strive to create interfaces that not only look good but feel natural to use. When I'm not coding, you can find me exploring new music genres or contributing to open source.
              </p>
              <div className="pt-6 grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-3xl font-bold text-white mb-1">2+</h4>
                  <span className="text-sm">Years Experience</span>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-white mb-1">15+</h4>
                  <span className="text-sm">Projects Completed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* SKILLS */}
      <Section id="skills">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">My Skills</h2>
          <p className="text-muted-foreground">The tools and technologies I use to bring ideas to life.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <SkillCard name="HTML5" icon={FaHtml5} color="#E34F26" level={95} />
          <SkillCard name="CSS3" icon={FaCss3Alt} color="#1572B6" level={90} />
          <SkillCard name="JavaScript" icon={FaJs} color="#F7DF1E" level={85} />
          <SkillCard name="React" icon={FaReact} color="#61DAFB" level={88} />
        </div>
      </Section>

      {/* BLOG (Static) */}
      <Section id="blog" className="bg-secondary/20">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">Latest Thoughts</h2>
            <p className="text-muted-foreground">Insights on development, design, and technology.</p>
          </div>
          <Button variant="ghost" className="text-primary hover:text-primary/80">View all posts <ArrowRight className="ml-2 w-4 h-4" /></Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "The Future of React Server Components",
              desc: "Exploring how RSC is changing the way we build full-stack applications with Next.js and beyond.",
              date: "Oct 12, 2025",
              tag: "Development"
            },
            {
              title: "Mastering Tailwind CSS v4",
              desc: "A deep dive into the new engine, performance improvements, and how to migrate your existing projects.",
              date: "Sep 28, 2025",
              tag: "CSS"
            },
            {
              title: "Designing for Dark Mode",
              desc: "Best practices for creating comfortable, accessible, and beautiful dark interfaces.",
              date: "Aug 15, 2025",
              tag: "Design"
            }
          ].map((post, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="glass-card p-8 rounded-2xl flex flex-col h-full group cursor-pointer hover:border-primary/30 transition-colors"
            >
              <span className="text-xs font-bold text-primary mb-4 tracking-wider uppercase">{post.tag}</span>
              <h3 className="text-2xl font-bold mb-4 font-display group-hover:text-primary transition-colors">{post.title}</h3>
              <p className="text-muted-foreground mb-8 flex-grow">{post.desc}</p>
              <div className="flex items-center text-sm text-muted-foreground border-t border-white/5 pt-4">
                <span>{post.date}</span>
                <span className="mx-2">•</span>
                <span>5 min read</span>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* PLAYLIST */}
      <Section id="playlist">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">On Repeat</h2>
          <p className="text-muted-foreground">The soundtrack fueling my coding sessions.</p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <SongCard 
            title="Moonlight" 
            artist="XXXTentacion" 
            coverImage="https://upload.wikimedia.org/wikipedia/en/a/ab/Moonlight_%28Official_Single_Cover%29_by_XXXTentacion.png"
            audioUrl="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
          />
          <SongCard 
            title="Cinnamon Girl" 
            artist="Lana Del Rey" 
            coverImage="https://upload.wikimedia.org/wikipedia/en/a/a2/Lana_Del_Rey_-_Norman_Fucking_Rockwell.png"
            audioUrl="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
          />
          <SongCard 
            title="Miss Me" 
            artist="Trefuego" 
            coverImage="https://i.scdn.co/image/ab67616d0000b27376c761e06d995c2763f03b21"
            audioUrl="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
          />
        </div>
      </Section>

      {/* SOCIAL & CONTACT */}
      <Section id="social" className="bg-secondary/20">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Social Links */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 font-display">Connect With Me</h2>
            <p className="text-muted-foreground text-lg mb-12">
              Feel free to reach out on social media or send me a message directly. I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              <SocialLink icon={FaInstagram} label="Instagram" href="https://instagram.com" color="#E1306C" />
              <SocialLink icon={FaTelegram} label="Telegram" href="https://t.me" color="#0088cc" />
              <SocialLink icon={FaGithub} label="GitHub" href="https://github.com" color="#333" />
              <SocialLink icon={FaYoutube} label="YouTube" href="https://youtube.com" color="#FF0000" />
            </div>
          </div>

          {/* Contact Form */}
          <div id="contact" className="bg-background rounded-3xl p-8 border border-white/5 shadow-2xl">
            <h3 className="text-2xl font-bold mb-6 font-display">Send a Message</h3>
            
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-2">
                <Input 
                  {...form.register("name")}
                  placeholder="Your Name" 
                  className="bg-secondary/50 border-white/10 h-12 focus:border-primary/50 transition-colors" 
                />
                {form.formState.errors.name && (
                  <p className="text-destructive text-sm">{form.formState.errors.name.message}</p>
                )}
              </div>
              
              <div className="space-y-2">
                <Input 
                  {...form.register("email")}
                  placeholder="Your Email" 
                  type="email" 
                  className="bg-secondary/50 border-white/10 h-12 focus:border-primary/50 transition-colors" 
                />
                {form.formState.errors.email && (
                  <p className="text-destructive text-sm">{form.formState.errors.email.message}</p>
                )}
              </div>
              
              <div className="space-y-2">
                <Textarea 
                  {...form.register("message")}
                  placeholder="Tell me about your project..." 
                  className="bg-secondary/50 border-white/10 min-h-[150px] focus:border-primary/50 transition-colors resize-none" 
                />
                {form.formState.errors.message && (
                  <p className="text-destructive text-sm">{form.formState.errors.message.message}</p>
                )}
              </div>
              
              <Button 
                type="submit" 
                className="w-full h-12 text-base font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all"
              >
                Send Message
                <Send className="ml-2 w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="py-8 border-t border-white/5 text-center">
        <p className="text-muted-foreground text-sm font-medium">
          © 2026 My Portfolio. Designed & Built with ❤️
        </p>
      </footer>
    </div>
  );
}
