import Image from "next/image"
import { CustomButton } from "@/components/ui/custom-button"

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-beige"
          style={{
            backgroundImage:
              "url('https://firebasestorage.googleapis.com/v0/b/gorilla-labs-960a2.appspot.com/o/banner.jpeg?alt=media&token=206e1a71-041f-4544-834b-1e598cea26dd')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-sage/10"></div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mx-auto w-48 h-48 mb-8">
            <Image
              src="/logo-mv-arquitectos.png"
              alt="MV Arquitectos Logo"
              width={200}
              height={200}
              className="object-contain"
              priority
            />
          </div>
          <p className="text-lg md:text-xl text-dark-green/80 mb-8 max-w-2xl mx-auto">
            Diseño minimalista para espacios eternos
          </p>
          <CustomButton variant="primary" size="lg">
            Explora nuestros proyectos
          </CustomButton>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-dark-green/60 text-sm mb-2">Descubre más</span>
        <div className="w-6 h-10 border-2 border-dark-green/40 rounded-full flex justify-center p-1">
          <div className="w-1.5 h-1.5 bg-dark-green/60 rounded-full animate-bounce mt-1"></div>
        </div>
      </div>
    </section>
  )
}
