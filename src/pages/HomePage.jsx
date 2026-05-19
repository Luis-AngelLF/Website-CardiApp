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
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-[#6CE1D5]/20">
              <div>
                <img src={heart} className="h-10"/>
                <p className="text-gray-400">Seguimiento médico</p>
              </div>
              <div>
                <img src={doctor} className="h-10"/>
                <p className="text-gray-400">Apoyo Médico</p>
              </div>
              <div>
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
              Descubre todo lo que CardiApp puede hacer por tu salud cardiovascular
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gradient-to-br from-[#6CE1D5]/10 to-[#7BC64B]/10 p-8 rounded-lg border border-[#6CE1D5]/30 hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-[#184741] mb-3">
                Monitoreo en Tiempo Real
              </h3>
              <p className="text-gray-700">
                Seguimiento continuo de tu ritmo cardíaco, presión arterial y niveles de oxígeno con datos precisos y actualizados.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gradient-to-br from-[#6CE1D5]/10 to-[#7BC64B]/10 p-8 rounded-lg border border-[#6CE1D5]/30 hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-[#184741] mb-3">
                Metas Personalizadas
              </h3>
              <p className="text-gray-700">
                Establece objetivos de salud adaptados a tu perfil y recibe recomendaciones personalizadas para alcanzarlos.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gradient-to-br from-[#6CE1D5]/10 to-[#7BC64B]/10 p-8 rounded-lg border border-[#6CE1D5]/30 hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-bold text-[#184741] mb-3">
                Asesoría Médica
              </h3>
              <p className="text-gray-700">
                Acceso a profesionales de la salud que responden tus preguntas y ofrecen orientación experta cuando la necesites.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-gradient-to-br from-[#6CE1D5]/10 to-[#7BC64B]/10 p-8 rounded-lg border border-[#6CE1D5]/30 hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-bold text-[#184741] mb-3">
                Comunidad Activa
              </h3>
              <p className="text-gray-700">
                Conecta con otros usuarios, comparte tu progreso y recibe apoyo de una comunidad dedicada al bienestar.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-gradient-to-br from-[#6CE1D5]/10 to-[#7BC64B]/10 p-8 rounded-lg border border-[#6CE1D5]/30 hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl mb-4">🔔</div>
              <h3 className="text-xl font-bold text-[#184741] mb-3">
                Alertas Inteligentes
              </h3>
              <p className="text-gray-700">
                Recibe notificaciones automáticas si detectamos anomalías en tus datos de salud para actuar rápidamente.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-gradient-to-br from-[#6CE1D5]/10 to-[#7BC64B]/10 p-8 rounded-lg border border-[#6CE1D5]/30 hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-[#184741] mb-3">
                Seguridad Garantizada
              </h3>
              <p className="text-gray-700">
                Tus datos están protegidos con encriptación de nivel militar y cumplimos con todas las normas de privacidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#184741]/5 to-[#6CE1D5]/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#184741] mb-6">
                ¿Por qué elegir CardiApp?
              </h2>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-gradient-to-r from-[#6CE1D5] to-[#7BC64B] flex items-center justify-center text-white font-bold">
                    ✓
                  </span>
                  <span className="text-lg text-gray-700">
                    Tecnología de IA para análisis predictivo de salud
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-gradient-to-r from-[#6CE1D5] to-[#7BC64B] flex items-center justify-center text-white font-bold">
                    ✓
                  </span>
                  <span className="text-lg text-gray-700">
                    Integración con dispositivos wearable populares
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-gradient-to-r from-[#6CE1D5] to-[#7BC64B] flex items-center justify-center text-white font-bold">
                    ✓
                  </span>
                  <span className="text-lg text-gray-700">
                    Reportes detallados y descargables
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-gradient-to-r from-[#6CE1D5] to-[#7BC64B] flex items-center justify-center text-white font-bold">
                    ✓
                  </span>
                  <span className="text-lg text-gray-700">
                    Disponible en iOS y Android
                  </span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#6CE1D5] to-[#7BC64B] rounded-2xl blur-2xl opacity-20"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-xl">
                <div className="space-y-6">
                  <div className="h-32 bg-gradient-to-r from-[#6CE1D5] to-[#7BC64B] rounded-lg animate-pulse"></div>
                  <div className="h-24 bg-gradient-to-r from-[#6CE1D5] to-[#7BC64B] rounded-lg animate-pulse"></div>
                </div>
              </div>
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
            <button className="bg-gradient-to-r from-[#6CE1D5] to-[#7BC64B] text-[#184741] px-10 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-[#6CE1D5]/50 transition-all duration-300 transform hover:scale-105">
              Conoce Más de Nosotros
            </button>
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