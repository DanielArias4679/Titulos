import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, BookOpen, School, Settings, Users, Star } from 'lucide-react';

const WhySection = () => {
  const features = [
    {
      icon: CheckCircle2,
      title: "Certificación oficial con validez nacional",
      description: "Reconocimiento automático en todo el territorio argentino"
    },
    {
      icon: BookOpen,
      title: "Plataforma digital y tutorías",
      description: "Acceso 24/7 con acompañamiento personalizado"
    },
    {
      icon: School,
      title: "Dirigido a niveles inicial, primario y secundario",
      description: "Formación integral para todos los niveles educativos"
    },
    {
      icon: Settings,
      title: "Proyecto institucional como trabajo final",
      description: "Aplicación práctica en tu propia institución"
    },
    {
      icon: Users,
      title: "Modalidad combinada (virtual sincrónica + asincrónica)",
      description: "Flexibilidad que se adapta a tu agenda profesional"
    },
    {
      icon: Star,
      title: "Herramientas aplicables y metodologías innovadoras",
      description: "Estrategias actuales para la gestión educativa moderna"
    }
  ];

  return (
    <section className="py-20 px-4" style={{backgroundColor: '#f7f1e3'}}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 bg-orange-100 px-6 py-3 rounded-full mb-6">
            <span className="text-2xl">💡</span>
            <span className="font-semibold text-orange-800">¿Por qué este postítulo?</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Una formación pensada para 
            <span className="block text-orange-600">líderes educativos del presente</span>
          </h2>
          
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Este postítulo está diseñado para fortalecer el rol de conducción en instituciones privadas. 
            Brinda herramientas aplicables, visión estratégica, fundamentos normativos y metodologías innovadoras.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
                whileHover={{ y: -5 }}
              >
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                  animate={{ 
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </motion.div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhySection;