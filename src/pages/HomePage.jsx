import { Link } from 'react-router-dom';
import logo from '../images/icono-cardiapp-removebg-preview.png';
import doctor from '../images/doctor-white.png'
import heart from '../images/heart.png'
function HomePage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-[#184741] via-[#0f2f2b] to-[#0a1f1d] text-white flex items-center justify-center px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
                <span className="bg-gradient-to-r from-[#6CE1D5] to-[#7BC64B] bg-clip-text text-transparent">
                  CardiApp
                </span>
                <br />
                Tu Salud Cardiovascular en Tus Manos
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed">
                Monitorea tu corazón, controla tu salud y vive una vida más plena. CardiApp es la aplicación revolucionaria que te ayuda a cuidar tu bienestar cardiovascular con tecnología de punta y una interfaz intuitiva.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-[#6CE1D5] to-[#7BC64B] text-[#184741] px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-[#6CE1D5]/50 transition-all duration-300 transform hover:scale-105"
              >
                Contactenos
              </Link>
              <Link
                to="/about"
                className="bg-transparent border-2 border-[#6CE1D5] text-[#6CE1D5] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#6CE1D5] hover:text-[#184741] transition-all duration-300"
              >
                Más Información
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-[#6CE1D5]/20">
              <div className="flex flex-col items-center">
                <img src={heart} className="h-10"/>
                <p className="text-gray-400">Seguimiento médico</p>
              </div>
              <div className="flex flex-col items-center">
                <img src={doctor} className="h-10"/>
                <p className="text-gray-400">Apoyo Médico</p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-3xl font-bold text-[#7BC64B]">24/7</p>
                <p className="text-gray-400">Monitoreo</p>
              </div>
            </div>
          </div>

          {/* Right Image Placeholder */}
          <div className="py-20 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[White] to-[Black] rounded-full blur-3xl opacity-30"></div>
              <div className="relative w-80 h-80 bg-[White]/95 border-4 rounded-full flex items-center justify-center shadow-2xl">
                <img src={logo} alt="CardiApp Icon" className="w-48 h-48 object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#184741] mb-4">
              Características Principales
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Una plataforma digital para acompañar, monitorear y mejorar la adherencia de los pacientes en programas de rehabilitación cardiovascular.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gradient-to-br from-[#6CE1D5]/10 to-[#7BC64B]/10 p-8 rounded-lg border border-[#6CE1D5]/30 hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-[#184741] mb-3">
                Monitoreo Clínico Remoto
              </h3>
              <p className="text-gray-700">
                Seguimiento continuo de tu ritmo cardíaco, presión arterial y niveles de oxígeno con datos precisos y actualizados.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gradient-to-br from-[#6CE1D5]/10 to-[#7BC64B]/10 p-8 rounded-lg border border-[#6CE1D5]/30 hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-[#184741] mb-3">
                Planes personalizados de rehabilitación
              </h3>
              <p className="text-gray-700">
                Establece objetivos de salud adaptados a tu perfil y recibe recomendaciones personalizadas para alcanzarlos.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gradient-to-br from-[#6CE1D5]/10 to-[#7BC64B]/10 p-8 rounded-lg border border-[#6CE1D5]/30 hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-bold text-[#184741] mb-3">
                Acompañamiento Profesional
              </h3>
              <p className="text-gray-700">
                Acceso a profesionales de la salud que responden tus preguntas y ofrecen orientación experta cuando la necesites.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-gradient-to-br from-[#6CE1D5]/10 to-[#7BC64B]/10 p-8 rounded-lg border border-[#6CE1D5]/30 hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-bold text-[#184741] mb-3">
                Educación para el Autocuidado
              </h3>
              <p className="text-gray-700">
                Conecta con otros usuarios, comparte tu progreso y recibe apoyo de una comunidad dedicada al bienestar.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-gradient-to-br from-[#6CE1D5]/10 to-[#7BC64B]/10 p-8 rounded-lg border border-[#6CE1D5]/30 hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl mb-4">🔔</div>
              <h3 className="text-xl font-bold text-[#184741] mb-3">
                Recordatorios Inteligentes
              </h3>
              <p className="text-gray-700">
                Notificaciones para ejercicio, toma de presión arterial, registro de síntomas, medicamentos y tareas del programa de rehabilitación.              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-gradient-to-br from-[#6CE1D5]/10 to-[#7BC64B]/10 p-8 rounded-lg border border-[#6CE1D5]/30 hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-[#184741] mb-3">
                Seguridad y Datos Clínicos Protegidos
              </h3>
              <p className="text-gray-700">
                Diseñada con enfoque en privacidad, trazabilidad y manejo responsable de la información clínica del paciente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-10 items-start">
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold text-[#184741] leading-tight">
                ¿Por qué elegir CardiApp?
              </h2>
              <p className="max-w-xl text-lg text-[#4d625c]">
                Porque permite extender la rehabilitación cardiovascular más allá de la clínica, conectando al paciente, al profesional y a la institución en un solo ecosistema digital.
              </p>

              <div className="space-y-4">
                <div className="p-5 rounded-xl bg-gradient-to-br from-[#6CE1D5]/10 to-[#7BC64B]/10 border border-[#6CE1D5]/20 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-[#6CE1D5] to-[#7BC64B] text-white font-bold text-lg flex-shrink-0 mt-1">
                      ✓
                    </span>
                    <div>
                      <p className="text-base font-bold text-[#184741] mb-2">Diseñada específicamente para rehabilitación cardiovascular</p>
                      <p className="text-sm text-[#4d625c] leading-relaxed">No es una app genérica de fitness. Está pensada para programas clínicos de seguimiento, educación y ejercicio terapéutico.</p>
                    </div>
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-gradient-to-br from-[#6CE1D5]/10 to-[#7BC64B]/10 border border-[#6CE1D5]/20 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-[#6CE1D5] to-[#7BC64B] text-white font-bold text-lg flex-shrink-0 mt-1">
                      ✓
                    </span>
                    <div>
                      <p className="text-base font-bold text-[#184741] mb-2">Mejora la adherencia del paciente</p>
                      <p className="text-sm text-[#4d625c] leading-relaxed">Ayuda a reducir el abandono mediante recordatorios, seguimiento remoto, educación y acompañamiento continuo.</p>
                    </div>
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-gradient-to-br from-[#6CE1D5]/10 to-[#7BC64B]/10 border border-[#6CE1D5]/20 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-[#6CE1D5] to-[#7BC64B] text-white font-bold text-lg flex-shrink-0 mt-1">
                      ✓
                    </span>
                    <div>
                      <p className="text-base font-bold text-[#184741] mb-2">Facilita el trabajo del profesional de salud</p>
                      <p className="text-sm text-[#4d625c] leading-relaxed">Permite prescribir ejercicio, enviar contenido educativo, revisar avances y organizar el seguimiento del paciente desde una sola plataforma.</p>
                    </div>
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-gradient-to-br from-[#6CE1D5]/10 to-[#7BC64B]/10 border border-[#6CE1D5]/20 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-[#6CE1D5] to-[#7BC64B] text-white font-bold text-lg flex-shrink-0 mt-1">
                      ✓
                    </span>
                    <div>
                      <p className="text-base font-bold text-[#184741] mb-2">Genera datos útiles para clínicas y hospitales</p>
                      <p className="text-sm text-[#4d625c] leading-relaxed">Ofrece indicadores de progreso, adherencia, participación y seguimiento que pueden apoyar mejores decisiones clínicas y operativas.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative rounded-[2rem] bg-[#184741] p-10 shadow-[0_30px_80px_rgba(24,71,65,0.18)]">
              <div className="absolute -left-8 top-8 h-24 w-24 rounded-full bg-[#6CE1D5]/10 blur-3xl"></div>
              <div className="absolute right-8 bottom-8 h-20 w-20 rounded-full bg-[#7BC64B]/10 blur-3xl"></div>
              <div className="relative z-10 space-y-8">
                <h3 className="text-3xl font-bold text-white leading-tight">
                  Funcionalidades Clave
                </h3>

                <div className="grid grid-cols-1 gap-4">
                  <div className="group p-5 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] transition-all duration-300 cursor-default">
                    <p className="text-lg font-bold text-white mb-2 group-hover:text-[#6CE1D5] transition-colors">💊 Prescripción de ejercicio terapéutico</p>
                    <p className="text-sm text-white/80 leading-relaxed">Programas personalizados según diagnóstico, capacidad funcional y evolución del paciente.</p>
                  </div>

                  <div className="group p-5 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] transition-all duration-300 cursor-default">
                    <p className="text-lg font-bold text-white mb-2 group-hover:text-[#7BC64B] transition-colors">📚 Educación estructurada para el paciente</p>
                    <p className="text-sm text-white/80 leading-relaxed">Contenido sobre enfermedad cardiovascular, autocuidado, medicamentos, actividad física y hábitos saludables.</p>
                  </div>

                  <div className="group p-5 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] transition-all duration-300 cursor-default">
                    <p className="text-lg font-bold text-white mb-2 group-hover:text-[#6CE1D5] transition-colors">⌚ Integración con wearables</p>
                    <p className="text-sm text-white/80 leading-relaxed">Seguimiento de datos relevantes como frecuencia cardíaca, pasos y actividad física.</p>
                  </div>

                  <div className="group p-5 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] transition-all duration-300 cursor-default">
                    <p className="text-lg font-bold text-white mb-2 group-hover:text-[#7BC64B] transition-colors">📋 Seguimiento clínico organizado</p>
                    <p className="text-sm text-white/80 leading-relaxed">Registro de síntomas, signos vitales, cumplimiento de tareas y evolución del paciente.</p>
                  </div>

                  <div className="group p-5 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] transition-all duration-300 cursor-default">
                    <p className="text-lg font-bold text-white mb-2 group-hover:text-[#6CE1D5] transition-colors">📊 KPIs de adherencia y progreso</p>
                    <p className="text-sm text-white/80 leading-relaxed">Datos claros para profesionales, clínicas y hospitales sobre participación, continuidad y resultados del programa.</p>
                  </div>

                  <div className="group p-5 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] transition-all duration-300 cursor-default">
                    <p className="text-lg font-bold text-white mb-2 group-hover:text-[#7BC64B] transition-colors">🏅 MVP validado técnicamente</p>
                    <p className="text-sm text-white/80 leading-relaxed">CardiApp cuenta con avances en validación técnica y desarrollo de su modelo como solución de salud digital.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recognitions Section */}
      <section className="relative py-28 px-4 bg-[#0a1f1d] overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#6CE1D5]/5 blur-3xl"></div>
          <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#7BC64B]/5 blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#184741]/40 blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-20">
            <p className="text-[#6CE1D5] text-sm font-semibold uppercase tracking-[0.25em] mb-4">Trayectoria validada</p>
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight max-w-2xl">
              Reconocimientos,{' '}
              <span className="bg-gradient-to-r from-[#6CE1D5] to-[#7BC64B] bg-clip-text text-transparent">
                programas y aliados
              </span>
            </h2>
          </div>

          {/* Featured top row - 2 large cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">

            {/* Card 1 - Falling Walls (featured - has place) */}
            <div className="group relative rounded-3xl bg-gradient-to-br from-[#184741] to-[#0f2f2b] border border-[#6CE1D5]/20 p-10 overflow-hidden hover:border-[#6CE1D5]/50 transition-all duration-500 hover:shadow-[0_0_60px_rgba(108,225,213,0.12)]">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#6CE1D5]/5 rounded-full blur-2xl group-hover:bg-[#6CE1D5]/10 transition-all duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-8">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#6CE1D5] border border-[#6CE1D5]/40 px-4 py-1.5 rounded-full">
                    Reconocimiento
                  </span>
                  <span className="text-7xl font-black text-[#6CE1D5]/10 leading-none select-none group-hover:text-[#6CE1D5]/20 transition-all duration-500">2°</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 leading-snug">
                  Falling Walls Costa Rica 2025
                </h3>
                <p className="text-white/60 text-base leading-relaxed">
                  CardiApp obtuvo el 2.º lugar con una propuesta enfocada en derribar barreras de acceso a la rehabilitación cardiovascular.
                </p>
                <div className="mt-8 h-px bg-gradient-to-r from-[#6CE1D5]/40 to-transparent"></div>
              </div>
            </div>

            {/* Card 2 - INCAE (featured - finalist) */}
            <div className="group relative rounded-3xl bg-gradient-to-br from-[#1a3a2a] to-[#0f2f2b] border border-[#7BC64B]/20 p-10 overflow-hidden hover:border-[#7BC64B]/50 transition-all duration-500 hover:shadow-[0_0_60px_rgba(123,198,75,0.12)]">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#7BC64B]/5 rounded-full blur-2xl group-hover:bg-[#7BC64B]/10 transition-all duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-8">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#7BC64B] border border-[#7BC64B]/40 px-4 py-1.5 rounded-full">
                    Emprendimiento
                  </span>
                  <span className="text-7xl font-black text-[#7BC64B]/10 leading-none select-none group-hover:text-[#7BC64B]/20 transition-all duration-500">★</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 leading-snug">
                  INCAE Entrepreneurship Award 2025
                </h3>
                <p className="text-white/60 text-base leading-relaxed">
                  Proyecto finalista que fortaleció la visión de negocio, la estrategia de crecimiento y la proyección regional de CardiApp.
                </p>
                <div className="mt-8 h-px bg-gradient-to-r from-[#7BC64B]/40 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Bottom row - 3 smaller cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Card 3 - AUGE-UCR */}
            <div className="group relative rounded-2xl bg-white/[0.03] border border-white/10 p-8 overflow-hidden hover:bg-white/[0.07] hover:border-[#6CE1D5]/30 transition-all duration-400">
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#6CE1D5] to-[#7BC64B] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl"></div>
              <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#6CE1D5]/80 mb-6">
                — Aceleración
              </span>
              <h3 className="text-xl font-bold text-white mb-3 leading-snug">AUGE-UCR</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Aceleradora universitaria que ha brindado acompañamiento, mentoría y apoyo para el desarrollo temprano de CardiApp.
              </p>
            </div>

            {/* Card 4 - Technovation */}
            <div className="group relative rounded-2xl bg-white/[0.03] border border-white/10 p-8 overflow-hidden hover:bg-white/[0.07] hover:border-[#6CE1D5]/30 transition-all duration-400">
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#6CE1D5] to-[#7BC64B] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl"></div>
              <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#6CE1D5]/80 mb-6">
                — Innovación
              </span>
              <h3 className="text-xl font-bold text-white mb-3 leading-snug">Technovation</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Programa de innovación y apoyo al emprendimiento que ha fortalecido la propuesta con acompañamiento y respaldo estratégico.
              </p>
            </div>

            {/* Card 5 - Life Center Innovation */}
            <div className="group relative rounded-2xl bg-white/[0.03] border border-white/10 p-8 overflow-hidden hover:bg-white/[0.07] hover:border-[#7BC64B]/30 transition-all duration-400">
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#6CE1D5] to-[#7BC64B] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl"></div>
              <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#7BC64B]/80 mb-6">
                — Validación clínica
              </span>
              <h3 className="text-xl font-bold text-white mb-3 leading-snug">Life Center Innovation</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Espacio de incubación y validación clínica que ha impulsado el desarrollo del MVP en un entorno real de salud.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#184741] to-[#0f2f2b] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Comienza tu Viaje Hacia una Mejor Salud
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Cuida de tu corazón de manera más ágil con CardiApp. ¡Únete hoy!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link className="bg-gradient-to-r from-[#6CE1D5] to-[#7BC64B] text-[#184741] px-10 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-[#6CE1D5]/50 transition-all duration-300 transform hover:scale-105"
            to="/about">
              Conoce Más de Nosotros
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-[#6CE1D5] text-[#6CE1D5] px-10 py-4 rounded-lg font-bold text-lg hover:bg-[#6CE1D5] hover:text-[#184741] transition-all duration-300"
            >
              Contáctanos
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;