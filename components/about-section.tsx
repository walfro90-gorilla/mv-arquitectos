export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-beige">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-[3/4] rounded-md overflow-hidden">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/gorilla-labs-960a2.appspot.com/o/x.jpeg?alt=media&token=46c887dd-fb8e-4ac7-8289-5f0733a61ab1"
                alt="Arquitecto principal de MV Arquitectos"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-sage/20 rounded-md -z-10"></div>
          </div>

          <div>
            <h2 className="font-playfair text-3xl md:text-4xl text-dark-green mb-6">Sobre Nosotros</h2>
            <div className="space-y-4 text-dark-green/80">
              <p>
                Somos estudiantes egresados de arquitectura de la UACJ (Universidad Autónoma de Ciudad Juárez) del
                Instituto de Arquitectura, Diseño y Arte (IADA), realizando nuestro trabajo desde el 2021 en diferentes
                zonas de Ciudad Juárez.
              </p>
              <p>
                Nuestra formación académica combinada con la experiencia práctica nos ha permitido desarrollar proyectos
                arquitectónicos que responden a las necesidades específicas de nuestra comunidad.
              </p>
              <blockquote className="border-l-4 border-sage pl-4 my-6 italic text-sage">
                "Transformamos ideas en estructuras atemporales."
              </blockquote>
              <p>
                Nuestro enfoque se centra en crear espacios funcionales y estéticos que mejoren la calidad de vida de
                los habitantes de Ciudad Juárez, aplicando principios de diseño sostenible y adaptados al contexto
                local.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="text-center">
                <span className="block font-playfair text-3xl text-sage">3+</span>
                <span className="text-dark-green/70 text-sm">Años de experiencia</span>
              </div>
              <div className="text-center">
                <span className="block font-playfair text-3xl text-sage">45+</span>
                <span className="text-dark-green/70 text-sm">Proyectos completados</span>
              </div>
              <div className="text-center">
                <span className="block font-playfair text-3xl text-sage">5</span>
                <span className="text-dark-green/70 text-sm">Zonas de Ciudad Juárez</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
