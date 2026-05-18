import { Link } from 'react-router-dom';

function AboutUs() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#184741] to-[#0f2f2b] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Acerca de <span className="bg-gradient-to-r from-[#6CE1D5] to-[#7BC64B] bg-clip-text text-transparent">CardiApp</span>
          </h1>
          <p className="text-xl text-gray-300">
            Transformando la forma en que las personas cuidan su salud cardiovascular
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-[#184741] mb-4">
                Nuestra Misión
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Empoderar a las personas para que tomen el control de su salud cardiovascular mediante tecnología innovadora, acceso a información médica confiable y una comunidad de apoyo solidaria.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Creemos que la salud del corazón es fundamental para una vida plena, y queremos que cada persona tenga las herramientas necesarias para vivir más años, con más calidad y con más alegría.
              </p>
            </div>

            {/* Vision */}
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-[#184741] mb-4">
                Nuestra Visión
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Ser la plataforma líder global en salud cardiovascular, donde la tecnología y la humanidad se unen para prevenir, detectar y tratar enfermedades del corazón de manera efectiva.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Imaginarmos un mundo donde nadie sufra innecesariamente por falta de información o acceso a monitoreo de su salud, donde la prevención es accesible para todos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#184741]/5 to-[#6CE1D5]/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-[#184741] text-center mb-16">
            Nuestros Valores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Value 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">❤️</div>
              <h3 className="text-xl font-bold text-[#184741] mb-3">Compasión</h3>
              <p className="text-gray-700">
                Entendemos que cuidar la salud puede ser un desafío. Estamos aquí con empatía y apoyo.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-[#184741] mb-3">Precisión</h3>
              <p className="text-gray-700">
                La exactitud en los datos es fundamental. Invertimos en tecnología de punta.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-[#184741] mb-3">Comunidad</h3>
              <p className="text-gray-700">
                Juntos somos más fuertes. Fomentamos conexiones significativas entre usuarios.
              </p>
            </div>

            {/* Value 4 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-[#184741] mb-3">Transparencia</h3>
              <p className="text-gray-700">
                Tu privacidad y seguridad son prioritarios. Somos transparentes en todo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-[#184741] text-center mb-16">
            Nuestro Equipo
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#6CE1D5] to-[#7BC64B] flex items-center justify-center text-5xl">
                👨‍⚕️
              </div>
              <h3 className="text-xl font-bold text-[#184741]">Dr. Carlos Méndez</h3>
              <p className="text-[#7BC64B] font-semibold mb-2">Cardiólogo Fundador</p>
              <p className="text-gray-700">
                20+ años de experiencia en cardiología. Pionero en medicina digital.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#6CE1D5] to-[#7BC64B] flex items-center justify-center text-5xl">
                👩‍💼
              </div>
              <h3 className="text-xl font-bold text-[#184741]">Dra. Ana Rodríguez</h3>
              <p className="text-[#7BC64B] font-semibold mb-2">Directora Médica</p>
              <p className="text-gray-700">
                Experta en salud preventiva y tecnología médica innovadora.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#6CE1D5] to-[#7BC64B] flex items-center justify-center text-5xl">
                👨‍💻
              </div>
              <h3 className="text-xl font-bold text-[#184741]">Ing. Miguel López</h3>
              <p className="text-[#7BC64B] font-semibold mb-2">CTO & Fundador</p>
              <p className="text-gray-700">
                Desarrollador de soluciones tech healthcare con IA integrada.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#184741] to-[#0f2f2b] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-5xl font-bold text-[#7BC64B] mb-2">50K+</p>
              <p className="text-xl text-gray-300">Usuarios Activos</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-[#7BC64B] mb-2">15M+</p>
              <p className="text-xl text-gray-300">Datos Analizados</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-[#7BC64B] mb-2">25K+</p>
              <p className="text-xl text-gray-300">Vidas Mejoradas</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-[#7BC64B] mb-2">4.8★</p>
              <p className="text-xl text-gray-300">Calificación Promedio</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#184741] mb-6">
            ¿Quieres ser parte de nuestra misión?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Únete a miles de personas que ya están cuidando su salud cardiovascular con CardiApp.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-gradient-to-r from-[#6CE1D5] to-[#7BC64B] text-[#184741] px-10 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-[#6CE1D5]/50 transition-all duration-300 transform hover:scale-105">
              Descargar CardiApp
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

export default AboutUs;
