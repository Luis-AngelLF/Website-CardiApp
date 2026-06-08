import { useState } from 'react';
import phone from '../images/phone.png';
import email from '../images/email.png';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to a server
    alert('¡Gracias por tu mensaje! Nos pondremos en contacto pronto.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#184741] to-[#0f2f2b] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Contacto
          </h1>
          <p className="text-xl text-gray-300">
            ¿Tienes preguntas? Nos encantaría saber de ti. Estamos aquí para ayudarte.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Contact Info Cards */}
            {/* Email */}
            <div className="bg-gradient-to-br from-[#6CE1D5]/10 to-[#7BC64B]/10 p-8 rounded-lg border border-[#6CE1D5]/30 text-center">
              <img src={email} className="h-16 mx-auto" alt="Email" />
              <h3 className="text-xl font-bold text-[#184741] mb-2">Email</h3>
              <p className="text-gray-700 mb-2">Contáctanos por correo electrónico</p>
              <a
                href="mailto: Cardiappfounder@gmail.com"
                className="text-[#438C85] font-semibold hover:text-[#7BC64B] transition-colors"
              >
                Cardiappfounder@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div className="bg-gradient-to-br from-[#6CE1D5]/10 to-[#7BC64B]/10 p-8 rounded-lg border border-[#6CE1D5]/30 text-center">
              <img src={phone} className="h-16 mx-auto" alt="Phone" />
              <h3 className="text-xl font-bold text-[#184741] mb-2">Teléfono</h3>
              <p className="text-gray-700 mb-2">Llámanos durante nuestras horas de atención</p>
              <a
                /* href="tel:+34912345678" */
                className="text-[#438C85] font-semibold hover:text-[#7BC64B] transition-colors"
              >
                +506 1234 5678
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-[#6CE1D5]/5 to-[#7BC64B]/5 p-8 rounded-lg border border-[#6CE1D5]/30">
              <h2 className="text-3xl font-bold text-[#184741] mb-8">Envíanos un Mensaje</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-lg font-semibold text-[#184741] mb-2">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-[#6CE1D5] rounded-lg focus:outline-none focus:border-[#7BC64B] transition-colors text-gray-700"
                    placeholder="Juan Pérez"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-lg font-semibold text-[#184741] mb-2">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-[#6CE1D5] rounded-lg focus:outline-none focus:border-[#7BC64B] transition-colors text-gray-700"
                    placeholder="tu@email.com"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-lg font-semibold text-[#184741] mb-2">
                    Asunto
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-[#6CE1D5] rounded-lg focus:outline-none focus:border-[#7BC64B] transition-colors text-gray-700"
                    placeholder="¿En qué podemos ayudarte?"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-lg font-semibold text-[#184741] mb-2">
                    Mensaje
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 border-2 border-[#6CE1D5] rounded-lg focus:outline-none focus:border-[#7BC64B] transition-colors text-gray-700 resize-none"
                    placeholder="Cuéntanos tu pregunta o comentario..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#6CE1D5] to-[#7BC64B] text-[#184741] px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-[#6CE1D5]/50 transition-all duration-300 transform hover:scale-105"
                >
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#184741]/5 to-[#6CE1D5]/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-[#184741] text-center mb-16">
            Preguntas Frecuentes
          </h2>
          <div className="space-y-6">
            {/* FAQ 1 */}
            <div className="bg-white p-6 rounded-lg border border-[#6CE1D5]/30 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-[#184741] mb-3">
                ¿Cuál es el costo de CardiApp?
              </h3>
              <p className="text-gray-700">
                Ofrecemos una versión gratuita con características básicas y planes premium opcionales con más funcionalidades avanzadas. No hay cargos ocultos.
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="bg-white p-6 rounded-lg border border-[#6CE1D5]/30 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-[#184741] mb-3">
                ¿Es seguro compartir mis datos médicos?
              </h3>
              <p className="text-gray-700">
                Sí, utilizamos encriptación de nivel médico y cumplimos con todas las regulaciones de privacidad internacionales como HIPAA y GDPR.
              </p>
            </div>

            {/* FAQ 3 */}
            <div className="bg-white p-6 rounded-lg border border-[#6CE1D5]/30 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-[#184741] mb-3">
                ¿Con qué dispositivos es compatible?
              </h3>
              <p className="text-gray-700">
                CardiApp es compatible con dispositivos wearables populares como Apple Watch, Fitbit, Garmin y muchos más. Funciona en iOS y Android.
              </p>
            </div>

            {/* FAQ 4 */}
            <div className="bg-white p-6 rounded-lg border border-[#6CE1D5]/30 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-[#184741] mb-3">
                ¿Necesito una prescripción médica?
              </h3>
              <p className="text-gray-700">
                No es necesario, pero recomendamos consultar con tu médico antes de usar CardiApp si tienes condiciones cardíacas preexistentes.
              </p>
            </div>
          </div>
        </div>
      </section>

    {/* Agregar aquí información de competencias ganadas */}

    </div>
  );
}

export default ContactUs;
