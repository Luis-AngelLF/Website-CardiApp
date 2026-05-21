import { Link } from 'react-router-dom';
import logo from '../images/IconoCardi.png'
function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#184741] to-[#0f2f2b] text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-4">
              <img src={logo} alt="CardiApp Logo" className="h-8" />
              <span className="font-bold text-xl text-[#6CE1D5]">CardiApp</span>
            </div>
            <p className="text-gray-300 text-sm">
              Cuidando tu corazón, transformando vidas. La aplicación para una salud cardiovascular óptima.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-[#7BC64B] mb-4">Navegación</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-gray-300 hover:text-[#6CE1D5] transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-[#6CE1D5] transition-colors">
                  Acerca de
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-[#6CE1D5] transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-[#7BC64B] mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-300 hover:text-[#6CE1D5] transition-colors">
                  Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#6CE1D5] transition-colors">
                  Términos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#6CE1D5] transition-colors">
                  Cookies
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-[#7BC64B] mb-4">Síguenos</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#6CE1D5] text-[#184741] flex items-center justify-center hover:bg-[#7BC64B] transition-colors"
              >
                f
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#6CE1D5] text-[#184741] flex items-center justify-center hover:bg-[#7BC64B] transition-colors"
              >
                𝕏
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#6CE1D5] text-[#184741] flex items-center justify-center hover:bg-[#7BC64B] transition-colors"
              >
                📱
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#6CE1D5]/20 pt-8">
          <p className="text-center text-gray-400 text-sm">
            © 2024 CardiApp. Todos los derechos reservados. Cuidar la salud es nuestra misión.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
