import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook, Linkedin, Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-dark-green text-white py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="mb-6">
              <Image
                src="/logo-mv-arquitectos.png"
                alt="MV Arquitectos Logo"
                width={180}
                height={90}
                className="object-contain invert"
              />
            </div>
            <p className="text-beige/80 mb-6 max-w-md">
              Diseño minimalista para espacios eternos. Transformamos ideas en estructuras atemporales con un enfoque
              sostenible y vanguardista.
            </p>
            <div className="flex space-x-4">
              <Link href="https://instagram.com" className="text-beige hover:text-sage transition-colors duration-200">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://facebook.com" className="text-beige hover:text-sage transition-colors duration-200">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://linkedin.com" className="text-beige hover:text-sage transition-colors duration-200">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-playfair text-xl mb-6">Enlaces</h4>
            <nav className="flex flex-col space-y-3">
              <Link href="#about" className="text-beige/80 hover:text-sage transition-colors duration-200">
                Nosotros
              </Link>
              <Link href="#portfolio" className="text-beige/80 hover:text-sage transition-colors duration-200">
                Portafolio
              </Link>
              <Link href="#services" className="text-beige/80 hover:text-sage transition-colors duration-200">
                Servicios
              </Link>
              <Link href="#contact" className="text-beige/80 hover:text-sage transition-colors duration-200">
                Contacto
              </Link>
              <Link href="#" className="text-beige/80 hover:text-sage transition-colors duration-200">
                Política de Privacidad
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="font-playfair text-xl mb-6">Contacto</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin size={20} className="text-sage mr-3 mt-1 flex-shrink-0" />
                <p className="text-beige/80">
                  Av. Arquitectura 123, Col. Diseño
                  <br />
                  Ciudad de México, 01234
                </p>
              </div>
              <div className="flex items-center">
                <Phone size={20} className="text-sage mr-3 flex-shrink-0" />
                <p className="text-beige/80">+52 (55) 1234 5678</p>
              </div>
              <div className="flex items-center">
                <Mail size={20} className="text-sage mr-3 flex-shrink-0" />
                <p className="text-beige/80">info@mvarquitectos.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-beige/20 mt-12 pt-8 text-center text-beige/60 text-sm">
          <p>&copy; {new Date().getFullYear()} MV Arquitectos. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
