import { Link } from 'react-router-dom';
import { useState } from 'react';
import CEO from "../images/CEO.png"
import CIO from "../images/CIO.png"
import COO from "../images/COO.png"
import LINKEDIN from "../images/LinkedIn_logo.png"

const teamMembers = [
  {
    id: 1,
    name: "Mauricio Murillo Jiménez",
    role: "CEO & Co-Founder",
    image: CEO,
    LinkedIn: "https://www.linkedin.com/in/mauriciomurilloj/",
    description: "Fisioterapeuta especializado en rehabilitación cardiovascular, salud digital y prescripción de ejercicio terapéutico. Lidera la visión estratégica de CardiApp, conectando la experiencia clínica con la innovación tecnológica para mejorar el acceso, la adherencia y el seguimiento de pacientes en programas de rehabilitación cardiovascular."
  },
  {
    id: 2,
    name: "Dr. Wilson Navarro Cotto",
    role: "COO & Co-Founder",
    image: COO,
    LinkedIn: "https://www.linkedin.com/in/wilsonnavarrocotto/",
    description: "Médico con formación en Gerencia Hospitalaria y experiencia en gestión institucional. Lidera la estrategia administrativa y operativa de CardiApp, asegurando procesos organizados, alianzas estratégicas y una implementación efectiva en clínicas, hospitales y programas de rehabilitación cardiovascular."
  },
  {
    id: 3,
    name: "María Paula Ruiz Araya",
    role: "CTO/CIO & Co-Founder",
    image: CIO,
    LinkedIn: "https://www.linkedin.com/in/mar%C3%ADapaularuizaraya/",
    description: "Ingeniera biomédica en formación, con enfoque en tecnología aplicada a la salud, ciberseguridad y gestión de datos clínicos. Lidera el desarrollo tecnológico de CardiApp, asegurando que la plataforma sea segura, escalable y alineada con reglamentos, estándares nacionales e internacionales y buenas prácticas del sector salud digital."
  }
];

function AboutUs() {
  const [selectedMember, setSelectedMember] = useState(null);

  const closeModal = () => setSelectedMember(null);

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
                Transformar el acceso y la adherencia a la rehabilitación cardíaca, mediante una plataforma digital integral que conecta a pacientes y profesionales de la salud 
                en un ecosistema seguro, accesible y personalizado, promoviendo una atención continua, efectiva y centrada en el paciente.
              </p>
            </div>

            {/* Vision */}
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-[#184741] mb-4">
                Nuestra Visión
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Ser la plataforma líder en salud digital cardiovascular en Latinoamérica, 
                reconocida por su impacto en la mejora de la calidad de vida de los pacientes, la eficiencia de los servicios clínicos 
                y la innovación tecnológica en el sector salud.              
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
              <img
                className="w-32 h-32 mx-auto mb-4 rounded-full object-cover shadow-lg border-4 border-[#6CE1D5]/30"
                src={CEO}
                alt="Mauricio Murillo Jiménez"
                style={{ objectPosition: 'center 25%' }}
                onClick={() => setSelectedMember(teamMembers[0])}
              />
                
              <h3 className="text-xl font-bold text-[#184741]">Mauricio Murillo Jiménez</h3>
              <p className="text-[#7BC64B] font-semibold text-lg mb-2">CEO & Co-Founder</p>
              <div className="flex flex-col sm:flex-row justify-center"/>
                <button
                  onClick={() => setSelectedMember(teamMembers[0])}
                  className="inline-block text-[#438C85] font-bold text-base cursor-pointer px-4 py-2 rounded-lg
                  relative transition-all duration-200 hover:text-[#39658C] after:absolute after:bottom-0 
                  after:left-0 after:h-[2px] after:w-0 after:bg-[#39658C] after:transition-all after:duration-300 hover:after:w-full 
                  active:scale-90 active:bg-[#438C85]/15 active:opacity-60"
                  >
                  Conocer Más
                </button>
            </div>

            {/* Team Member 2 */}
            <div className="text-center">
              <img
                className="w-32 h-32 mx-auto mb-4 rounded-full object-cover shadow-lg border-4 border-[#6CE1D5]/30"
                src={COO}
                alt="Dr. Wilson Navarro Cotto"
                onClick={() => setSelectedMember(teamMembers[1])}
                
              />
              
              <h3 className="text-xl font-bold text-[#184741]">Dr. Wilson Navarro Cotto</h3>
              <p className="text-[#7BC64B] font-semibold text-lg mb-2">COO & Co-Founder</p>
              <div className="flex flex-col sm:flex-row justify-center"/>
                <button
                  onClick={() => setSelectedMember(teamMembers[1])}
                  className="inline-block text-[#438C85] font-bold text-base cursor-pointer px-4 py-2 rounded-lg
                  relative transition-all duration-200 hover:text-[#39658C] after:absolute after:bottom-0 
                  after:left-0 after:h-[2px] after:w-0 after:bg-[#39658C] after:transition-all after:duration-300 hover:after:w-full 
                  active:scale-90 active:bg-[#438C85]/15 active:opacity-60"
                  >
                  Conocer Más
                </button>
            </div>

            {/* Team Member 3 */}
            <div className="text-center">
              <img
                className="w-32 h-32 mx-auto mb-4 rounded-full object-cover shadow-lg border-4 border-[#6CE1D5]/30"
                src={CIO}
                alt="María Paula Ruiz Araya"
                onClick={() => setSelectedMember(teamMembers[2])}
              />
              
              <h3 className="text-xl font-bold text-[#184741]">María Paula Ruiz Araya</h3>
              <p className="text-[#7BC64B] font-semibold text-lg mb-2">CTO/CIO & Co-Founder</p>
              <div className="flex flex-col sm:flex-row justify-center"/>
                <button
                  onClick={() => setSelectedMember(teamMembers[2])}
                  className="inline-block text-[#438C85] font-bold text-base cursor-pointer px-4 py-2 rounded-lg
                  relative transition-all duration-200 hover:text-[#39658C] after:absolute after:bottom-0 
                  after:left-0 after:h-[2px] after:w-0 after:bg-[#39658C] after:transition-all after:duration-300 hover:after:w-full 
                  active:scale-90 active:bg-[#438C85]/15 active:opacity-60"
                  >
                  Conocer Más
                </button>
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
            <Link
              to="/contact"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-gradient-to-r from-[#6CE1D5] to-[#7BC64B] text-[#184741] px-10 py-4 rounded-lg 
              font-bold text-lg hover:shadow-2xl hover:shadow-[#6CE1D5]/50 transition-all duration-300 transform hover:scale-105"
            >
              Contáctanos
            </Link>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedMember && (
        <div 
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div 
            className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header with gradient */}
            <div className="bg-gradient-to-r from-[#184741] to-[#0f2f2b] p-8 text-white rounded-t-2xl">
              <div className="flex items-start gap-6">
                <img
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-[#6CE1D5] shadow-lg"
                />
                <div>
                  <h2 className="text-3xl font-bold mb-2">{selectedMember.name}</h2>
                  <p className="text-[#6CE1D5] font-semibold text-lg">{selectedMember.role}</p>
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              <p className="text-gray-700 leading-relaxed text-lg">
                {selectedMember.description}
              </p>
            </div>

            {/* Modal Footer with action buttons */}
            <div className="bg-gray-50 px-8 py-6 flex justify-between items-center rounded-b-2xl border-t border-gray-200">
              {selectedMember.LinkedIn && (
                <a
                  href={selectedMember.LinkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0A66C2] hover:bg-[#084D8F] text-white font-semibold transition-all duration-300 hover:shadow-lg"
                >
                  <img src={LINKEDIN} alt="LinkedIn" className="w-5 h-5" />
                  LinkedIn
                </a>
              )}
              <button
                onClick={closeModal}
                className="cursor-pointer px-6 py-2 rounded-lg font-semibold text-[#184741] bg-gray-200 hover:bg-gray-300 transition-colors duration-300"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AboutUs;
