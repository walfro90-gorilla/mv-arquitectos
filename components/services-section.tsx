import { Compass, PencilRuler, Building2, MapPin, FileText } from "lucide-react"

const services = [
  {
    icon: <PencilRuler className="w-8 h-8 text-sage" />,
    title: "Ante proyecto",
    description:
      "Desarrollamos propuestas conceptuales iniciales que establecen las bases para tu proyecto arquitectónico, considerando tus necesidades y visión.",
  },
  {
    icon: <Compass className="w-8 h-8 text-sage" />,
    title: "Proyecto ejecutivo",
    description:
      "Elaboramos documentación técnica detallada y planos constructivos completos para la correcta ejecución de tu proyecto arquitectónico.",
  },
  {
    icon: <MapPin className="w-8 h-8 text-sage" />,
    title: "Catastrales",
    description:
      "Ofrecemos servicios de gestión y regularización catastral, incluyendo levantamientos, deslindes y trámites ante el registro público de la propiedad.",
  },
  {
    icon: <FileText className="w-8 h-8 text-sage" />,
    title: "Gestión de tramitología",
    description:
      "Gestionamos licencias de construcción, permisos menores de construcción y diversos trámites ante dependencias municipales para tu proyecto.",
  },
  {
    icon: <Building2 className="w-8 h-8 text-sage" />,
    title: "Construcciones en general",
    description:
      "Ejecutamos proyectos constructivos de diversa índole, garantizando calidad, cumplimiento de normativas y optimización de recursos.",
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-beige">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl text-dark-green mb-4">Nuestros Servicios</h2>
          <p className="text-dark-green/70 max-w-2xl mx-auto">
            Ofrecemos soluciones arquitectónicas integrales adaptadas a las necesidades específicas de cada cliente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-md shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="font-playfair text-xl text-dark-green mb-3">{service.title}</h3>
              <p className="text-dark-green/70 flex-grow">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
