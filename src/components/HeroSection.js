import React from 'react';
import { motion } from 'framer-motion';
import { Download, CheckCircle2, Users, GraduationCap, BookOpen, School, Star, Award, Settings, Calendar, Heart, Bell, HelpCircle } from 'lucide-react';

const FloatingIcon = ({ icon: Icon, delay, duration, xRange, yRange, size = "w-8 h-8" }) => {
  return (
    <motion.div
      className={`absolute ${size} text-white/20`}
      initial={{ 
        x: Math.random() * xRange,
        y: Math.random() * yRange,
        opacity: 0
      }}
      animate={{
        x: [
          Math.random() * xRange,
          Math.random() * xRange,
          Math.random() * xRange,
          Math.random() * xRange
        ],
        y: [
          Math.random() * yRange,
          Math.random() * yRange,
          Math.random() * yRange,
          Math.random() * yRange
        ],
        opacity: [0, 0.8, 0.6, 0.9, 0],
        rotate: [0, 180, 360]
      }}
      transition={{
        duration: duration,
        delay: delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <Icon className="w-full h-full" />
    </motion.div>
  );
};

const HeroSection = ({ onOpenFaq, onOpenResolution }) => {
  const floatingIcons = [
    { icon: BookOpen, delay: 0, duration: 15, size: "w-12 h-12" },
    { icon: School, delay: 2, duration: 18, size: "w-10 h-10" },
    { icon: Star, delay: 4, duration: 12, size: "w-8 h-8" },
    { icon: Award, delay: 1, duration: 20, size: "w-14 h-14" },
    { icon: Settings, delay: 6, duration: 16, size: "w-6 h-6" },
    { icon: Calendar, delay: 3, duration: 14, size: "w-10 h-10" },
    { icon: Heart, delay: 8, duration: 13, size: "w-8 h-8" },
    { icon: Bell, delay: 5, duration: 17, size: "w-6 h-6" },
    { icon: GraduationCap, delay: 7, duration: 19, size: "w-16 h-16" },
    { icon: Users, delay: 9, duration: 11, size: "w-12 h-12" },
    { icon: BookOpen, delay: 10, duration: 15, size: "w-8 h-8" },
    { icon: School, delay: 12, duration: 18, size: "w-6 h-6" },
    { icon: Star, delay: 14, duration: 12, size: "w-10 h-10" },
    { icon: Award, delay: 11, duration: 20, size: "w-8 h-8" },
    { icon: Settings, delay: 16, duration: 16, size: "w-12 h-12" },
    { icon: Calendar, delay: 13, duration: 14, size: "w-6 h-6" },
    { icon: Heart, delay: 18, duration: 13, size: "w-14 h-14" },
    { icon: Bell, delay: 15, duration: 17, size: "w-8 h-8" }
  ];

  return (
    <section className="animated-gradient min-h-screen flex items-center justify-center py-20 px-4 relative overflow-hidden">
      {/* Floating Educational Icons Background */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingIcons.map((iconData, index) => (
          <FloatingIcon
            key={index}
            icon={iconData.icon}
            delay={iconData.delay}
            duration={iconData.duration}
            xRange={typeof window !== 'undefined' ? window.innerWidth : 1200}
            yRange={typeof window !== 'undefined' ? window.innerHeight : 800}
            size={iconData.size}
          />
        ))}
      </div>

      {/* Additional decorative elements */}
      <motion.div
        className="absolute top-20 left-10 w-4 h-4 bg-white/30 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.8, 0.3]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-32 right-16 w-6 h-6 bg-white/20 rounded-full"
        animate={{
          scale: [1, 2, 1],
          opacity: [0.2, 0.6, 0.2],
          x: [0, 20, 0],
          y: [0, -30, 0]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      <motion.div
        className="absolute top-1/3 right-20 w-3 h-3 bg-white/40 rounded-full"
        animate={{
          scale: [1, 1.8, 1],
          opacity: [0.4, 0.9, 0.4],
          rotate: [0, 360]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      <div className="container mx-auto max-w-6xl text-center text-white relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.div 
            className="inline-block p-6 bg-white/10 backdrop-blur-sm rounded-3xl mb-8 relative"
            animate={{ 
              scale: [1, 1.05, 1],
              rotate: [0, 1, -1, 0]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {/* Custom Team Management Icon */}
            <motion.img
              src="https://utfs.io/f/5BN0V4mlt4NUahe5xnW0AkGCWUovTXrPDmKbYjIptBxJign1"
              alt="Gestión de Equipos Directivos"
              className="w-20 h-20 mx-auto"
              animate={{ 
                scale: [1, 1.1, 1],
                filter: ['brightness(1)', 'brightness(1.2)', 'brightness(1)']
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Small floating icons around main icon */}
            <motion.div
              className="absolute -top-2 -right-2 w-4 h-4 text-white/60"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.3, 1]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Star className="w-full h-full" />
            </motion.div>
            
            <motion.div
              className="absolute -bottom-1 -left-1 w-3 h-3 text-white/50"
              animate={{
                rotate: [360, 0],
                scale: [1, 1.5, 1]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            >
              <BookOpen className="w-full h-full" />
            </motion.div>

            {/* Glowing ring effect around the main icon */}
            <motion.div
              className="absolute inset-0 rounded-3xl border-2 border-white/30"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.7, 0.3]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-6"
          >
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6 relative">
              <GraduationCap className="w-5 h-5" />
              <span className="font-semibold">Postítulo Oficial de la DGE Mendoza</span>
              
              {/* Animated dots around the badge */}
              <motion.div
                className="absolute -top-1 left-4 w-2 h-2 bg-white/60 rounded-full"
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <motion.div
                className="absolute -bottom-1 right-6 w-1.5 h-1.5 bg-white/50 rounded-full"
                animate={{
                  scale: [0, 1.2, 0],
                  opacity: [0, 0.8, 0]
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              />
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Actualización Académica para
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Equipos Directivos
            </span>
          </h1>
          
          <h2 className="text-xl md:text-2xl font-semibold mb-8 text-white/90 max-w-4xl mx-auto">
            Liderazgo, Gestión y Mejora Institucional en Escuelas de Gestión Privada
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mb-12"
        >
          <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-6 mb-8 max-w-4xl mx-auto relative">
            {/* Decorative corner elements */}
            <motion.div
              className="absolute top-2 right-2 w-3 h-3 text-white/40"
              animate={{
                rotate: [0, 180, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Award className="w-full h-full" />
            </motion.div>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-lg font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-green-300" />
                <span>Certificación oficial</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-green-300" />
                <span>200 horas reloj</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-green-300" />
                <span>Validez nacional automática</span>
              </div>
            </div>
            <p className="text-sm text-white/80 mt-4">
              Resolución RESOL-2025-4645-E-GDEMZA-DGE
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.button
            onClick={onOpenResolution}
            className="bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-xl hover:shadow-2xl hover:from-red-600 hover:to-red-700 transition-all duration-300 flex items-center gap-3 group relative overflow-hidden"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Download className="w-5 h-5 group-hover:animate-bounce" />
            Descargar Resolución Oficial
            
            {/* Button glow effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
              animate={{
                x: [-100, 300]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.button>

          <motion.button
            onClick={onOpenFaq}
            className="bg-green-500 text-white px-8 py-4 rounded-2xl font-semibold shadow-xl hover:shadow-2xl hover:bg-green-600 transition-all duration-300 flex items-center gap-3 group relative overflow-hidden"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <HelpCircle className="w-5 h-5 group-hover:animate-pulse" />
            ❓ Preguntas Frecuentes
            
            {/* Button glow effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
              animate={{
                x: [-100, 300]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5
              }}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;