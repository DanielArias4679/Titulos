import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Award, Users } from 'lucide-react';

const CertificationSection = ({ onOpenCertification }) => {
  return (
    <section className="py-20 px-4" style={{backgroundColor: '#e8f5e9'}}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 bg-green-100 px-6 py-3 rounded-full mb-6">
            <CheckCircle2 className="w-6 h-6 text-green-600" />
            <span className="font-semibold text-green-800">Confirmación de Certificación</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Confirmá tu inscripción al 
            <span className="block text-green-600">proceso de certificación</span>
          </h2>
          
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed mb-12">
            Si ya fuiste preseleccionado o convocado por tu institución, completá este paso 
            para validar tu inscripción en la cohorte 2025.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-white rounded-3xl p-12 shadow-xl text-center">
            <motion.div 
              className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8"
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Award className="w-12 h-12 text-white" />
            </motion.div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              ¿Listo para certificarte?
            </h3>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              El proceso de certificación es rápido y sencillo. Una vez completado, 
              recibirás toda la información necesaria para comenzar tu formación.
            </p>

            <a
  href="https://forms.gle/bCRSzDYAd1mLcXyc6"
  target="_blank"
  rel="noopener noreferrer"
  className="w-full bg-green-500 text-white py-4 px-6 rounded-xl font-bold text-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
>
  ✅ QUIERO CERTIFICARME
</a>


            <div className="flex items-center justify-center gap-4 mt-8 pt-8 border-t border-gray-200">
              <Users className="w-5 h-5 text-green-500" />
              <span className="text-sm text-gray-500">
                Proceso seguro y confidencial
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationSection;