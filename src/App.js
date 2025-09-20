import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, HelpCircle, Mail, MapPin, FileText } from 'lucide-react';
import HeroSection from './components/HeroSection';
import WhySection from './components/WhySection';
import StructureSection from './components/StructureSection';
import CertificationSection from './components/CertificationSection';

const App = () => {
  const [showCertificationModal, setShowCertificationModal] = useState(false);
  const [showFaqModal, setShowFaqModal] = useState(false);

  const faqs = [
    {
      question: "¿Qué es una Actualización Académica Postítulo Docente?",
      answer: "Es un trayecto de formación continua destinado a docentes y equipos directivos que ya cuentan con un título de nivel superior o universitario. Su objetivo es fortalecer las prácticas pedagógicas, actualizar conocimientos y mejorar habilidades profesionales en función de los desafíos actuales del sistema educativo. Este tipo de postítulo está regulado por las normativas del Consejo Federal de Educación (CFE) y otorga valor pedagógico dentro de la carrera docente."
    },
    {
      question: "¿Qué significa que un postítulo tenga valor pedagógico?",
      answer: "Tener valor pedagógico implica que el trayecto formativo contribuye directamente a mejorar la calidad de la enseñanza y el desarrollo profesional del educador. Esto se refleja en la incorporación de nuevas estrategias didácticas, herramientas de evaluación y marcos de reflexión sobre la práctica docente. Además, puede computar para la carrera docente y ser reconocido por las juntas calificadoras de mérito."
    },
    {
      question: "¿En qué se diferencia una actualización académica de otros cursos?",
      answer: "A diferencia de cursos aislados, la Actualización Académica es un trayecto postitulante formal con una carga horaria significativa, módulos integrados y una evaluación final (como el Proyecto de Mejora Institucional). Está diseñado para profundizar y sistematizar saberes específicos, con certificación oficial y validez nacional automática, según lo establece la normativa del CFE y la Dirección General de Escuelas de Mendoza."
    },
    {
      question: "¿Por qué este tipo de postítulo es importante en la carrera docente?",
      answer: "Porque permite a los educadores crecer profesionalmente a lo largo de toda su trayectoria, desarrollando nuevas competencias y fortaleciendo su rol institucional. El CFE define la actualización como uno de los pilares del desarrollo profesional docente continuo, asegurando que cada propuesta responda a necesidades reales del sistema educativo. Este postítulo, en particular, acompaña a los equipos directivos en la conducción estratégica, pedagógica y normativa de sus instituciones."
    }
  ];

  const handleDownloadResolution = () => {
  const path = "/docs/RS-2025-4645-GDEMZA-DGE - DGE- POSTITULO DOCENTE DIRECTIVOS.pdf";
  window.open(encodeURI(path), "_blank", "noopener,noreferrer");
};

  const handleDownloadCurriculum = () => {
    alert('Descargando Diseño Curricular completo...');
  };

  const handleCertification = () => {
    setShowCertificationModal(true);
  };

  const handleOpenFaq = () => {
    setShowFaqModal(true);
  };

  const handleSubmitCertification = (e) => {
    e.preventDefault();
    alert('¡Inscripción enviada exitosamente! Recibirás un email de confirmación.');
    setShowCertificationModal(false);
  };

  return (
    // ⬇️ Contenedor raíz corregido: gradiente al fondo y sin bg blanco
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Fondo global anclado al viewport */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#C73C6B] via-[#D76B5E] to-[#F0B35A]" />

      <HeroSection
        onOpenFaq={handleOpenFaq}
        onOpenResolution={handleDownloadResolution}
      />

      <WhySection />

      <StructureSection onDownloadCurriculum={handleDownloadCurriculum} />

      <CertificationSection onOpenCertification={handleCertification} />

      {/* Sección oscura inferior */}
      <section className="py-20 px-4 text-white" style={{ backgroundColor: '#002744' }}>
        <div className="container mx-auto max-w-6xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
              <span className="text-2xl">🌟</span>
              <span className="font-semibold">Liderar el Futuro Educativo</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Porque liderar una institución hoy,
              <span className="block text-blue-300">requiere formación estratégica</span>
            </h2>

            <p className="text-lg text-white/90 max-w-4xl mx-auto leading-relaxed mb-8">
              Esta actualización académica no solo amplía tus saberes, sino que te posiciona como un líder
              educativo capaz de tomar decisiones éticas, planificadas y sostenibles.
            </p>

            <div className="text-xl font-bold text-blue-300 mb-4">
              Postítulo oficial • Formación continua • Transformación real
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Logo Section */}
            <div className="flex flex-col items-center md:items-start">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative mb-6"
              >
                <div className="relative p-4">
                  {/* Fades laterales (no cubren toda la pantalla) */}
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-transparent to-gray-800 opacity-60 rounded-lg"></div>
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-800 via-transparent to-gray-800 opacity-60 rounded-lg"></div>

                  <motion.img
                    src="https://utfs.io/f/5BN0V4mlt4NU6ctV4NyykRQ0YhJ3SqAxKEeZmfnNTgdsUG7P"
                    alt="Fundación Tomás Alva Edison"
                    className="h-20 w-auto relative z-10"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Glow local */}
                  <div className="absolute -inset-2 bg-gradient-radial from-transparent via-gray-800/40 to-gray-800 opacity-50 rounded-xl blur-sm"></div>
                </div>
              </motion.div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Fundación Tomás Alva Edison</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span>rarias@fundacionedison.org.ar</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span>Mendoza, Argentina</span>
                </div>
              </div>
            </div>

            {/* Useful Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Enlaces Útiles</h4>
              <div className="space-y-4">
                <button
                  onClick={handleDownloadResolution}
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300"
                >
                  <Download className="w-4 h-4" />
                  Descargar Resolución
                </button>
                <button
                  onClick={handleDownloadCurriculum}
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300"
                >
                  <FileText className="w-4 h-4" />
                  Descargar Malla Curricular
                </button>
                <button
                  onClick={handleOpenFaq}
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300"
                >
                  <HelpCircle className="w-4 h-4" />
                  Preguntas Frecuentes
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Fundación Tomás Alva Edison. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Modal Certificación */}
      <AnimatePresence>
        {showCertificationModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowCertificationModal(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Proceso de Certificación</h2>
                <button
                  onClick={() => setShowCertificationModal(false)}
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors duration-300"
                >
                  <X className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              <form onSubmit={handleSubmitCertification} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Nombre Completo</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300"
                      placeholder="tu.email@ejemplo.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Institución Educativa</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300"
                    placeholder="Nombre de tu institución"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Cargo Actual</label>
                  <select
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300"
                  >
                    <option value="">Selecciona tu cargo</option>
                    <option value="director">Director/a</option>
                    <option value="vicedirector">Vicedirector/a</option>
                    <option value="coordinador">Coordinador/a</option>
                    <option value="supervisor">Supervisor/a</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Comentarios (Opcional)</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 resize-none"
                    placeholder="Comparte cualquier información adicional..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white py-4 px-6 rounded-xl font-bold text-lg hover:shadow-lg transition-all duration-300"
                >
                  Enviar Inscripción
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal FAQ */}
      <AnimatePresence>
        {showFaqModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowFaqModal(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <HelpCircle className="w-6 h-6 text-blue-500" />
                  <h2 className="text-2xl font-bold text-gray-900">Preguntas Frecuentes</h2>
                </div>
                <button
                  onClick={() => setShowFaqModal(false)}
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors duration-300"
                >
                  <X className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      {index + 1}. {faq.question}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
