import React from 'react';
import { motion } from 'framer-motion';
import { Download, Users, BookOpen, Heart } from 'lucide-react';

const StructureSection = ({ onDownloadCurriculum }) => {
  const modules = [
    {
      icon: Users,
      title: "Liderazgo Estratégico",
      description: "Herramientas para la conducción efectiva y toma de decisiones"
    },
    {
      icon: BookOpen,
      title: "Desarrollo Profesional",
      description: "Formación continua y actualización pedagógica del equipo"
    },
    {
      icon: Heart,
      title: "Clima Laboral y Resolución de Conflictos",
      description: "Estrategias para un ambiente educativo saludable"
    }
  ];

  return (
    <section className="py-20 px-4" style={{backgroundColor: '#e1f5fe'}}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 bg-blue-100 px-6 py-3 rounded-full mb-6">
            <span className="text-2xl">🧩</span>
            <span className="font-semibold text-blue-800">Estructura y Contenidos</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Módulos diseñados para 
            <span className="block text-blue-600">transformar tu gestión</span>
          </h2>
          
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed mb-10">
            La propuesta se organiza en 3 ejes temáticos y 12 módulos, más una evaluación final. 
            Cada módulo articula teoría, herramientas prácticas y normativa vigente.
          </p>

          <motion.button
            onClick={onDownloadCurriculum}
            className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl hover:bg-blue-700 transition-all duration-300 flex items-center gap-3 mx-auto group"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Download className="w-5 h-5 group-hover:animate-bounce" />
            Descargar Diseño Curricular
          </motion.button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {modules.map((module, index) => {
            const IconComponent = module.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
                whileHover={{ y: -5 }}
              >
                <motion.div 
                  className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300"
                  animate={{ 
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5
                  }}
                >
                  <IconComponent className="w-10 h-10 text-white" />
                </motion.div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center group-hover:text-blue-600 transition-colors duration-300">
                  {module.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed text-center">
                  {module.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Estructura Completa del Programa
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">3</div>
              <div className="text-gray-700 font-semibold">Ejes Temáticos</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">12</div>
              <div className="text-gray-700 font-semibold">Módulos Integrados</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">200</div>
              <div className="text-gray-700 font-semibold">Horas Reloj</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StructureSection;