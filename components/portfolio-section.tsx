"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

// Portfolio data
const portfolioItems = [
  {
    id: 1,
    title: "Casa Riviera",
    category: "Residencial",
    image:
      "https://firebasestorage.googleapis.com/v0/b/gorilla-labs-960a2.appspot.com/o/ext1.jpeg?alt=media&token=bbfa3f5e-e1a4-48ad-87a7-39f9ab8d14d1",
  },
  {
    id: 2,
    title: "Torre Cristal",
    category: "Comercial",
    image:
      "https://firebasestorage.googleapis.com/v0/b/gorilla-labs-960a2.appspot.com/o/ext2.jpeg?alt=media&token=d3a272c2-6740-4a6c-847e-e9c7791ec330",
  },
  {
    id: 3,
    title: "Museo Contemporáneo",
    category: "Cultural",
    image: "https://firebasestorage.googleapis.com/v0/b/gorilla-labs-960a2.appspot.com/o/ext3.jpeg?alt=media&token=bbd5fecb-7907-4b59-aecb-ca4c0095bde7",
  },
  {
    id: 4,
    title: "Residencia Bosque",
    category: "Residencial",
    image: "https://firebasestorage.googleapis.com/v0/b/gorilla-labs-960a2.appspot.com/o/int3.jpeg?alt=media&token=90febdab-4893-40a5-be24-ee026f4e0125",
  },
  {
    id: 5,
    title: "Oficinas Verdes",
    category: "Comercial",
    image: "https://firebasestorage.googleapis.com/v0/b/gorilla-labs-960a2.appspot.com/o/int1.jpeg?alt=media&token=759805b9-aa08-433b-8664-a8e622814556",
  },
  {
    id: 6,
    title: "Hotel Mirador",
    category: "Hospitalidad",
    image: "https://firebasestorage.googleapis.com/v0/b/gorilla-labs-960a2.appspot.com/o/int2.jpeg?alt=media&token=07972ff9-c7b6-47ce-94e6-5980c111d190",
  },
  {
    id: 7,
    title: "Casa del Lago",
    category: "Residencial",
    image: "https://firebasestorage.googleapis.com/v0/b/gorilla-labs-960a2.appspot.com/o/const3.jpeg?alt=media&token=ba2c881b-7be9-4fbb-884e-6ed3d0d42e3c",
  },
  {
    id: 8,
    title: "Centro Comercial Élite",
    category: "Comercial",
    image: "https://firebasestorage.googleapis.com/v0/b/gorilla-labs-960a2.appspot.com/o/const1.jpeg?alt=media&token=fed13288-81d7-486e-8a9b-14d04724e066",
  },
  {
    id: 9,
    title: "Biblioteca Municipal",
    category: "Cultural",
    image: "https://firebasestorage.googleapis.com/v0/b/gorilla-labs-960a2.appspot.com/o/const2.jpeg?alt=media&token=bf964496-4eca-4e3d-9d0e-dd4618f56c9a",
  },
]

// Categories
const categories = ["Todos", "Residencial", "Comercial", "Cultural", "Hospitalidad"]

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("Todos")

  const filteredItems =
    activeCategory === "Todos" ? portfolioItems : portfolioItems.filter((item) => item.category === activeCategory)

  return (
    <section id="portfolio" className="py-24 bg-beige/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl text-dark-green mb-4">Nuestro Portafolio</h2>
          <p className="text-dark-green/70 max-w-2xl mx-auto">
            Exploramos la intersección entre funcionalidad, estética y sostenibilidad en cada uno de nuestros proyectos.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-4 py-2 text-sm transition-colors duration-200",
                activeCategory === category ? "text-sage border-b-2 border-sage" : "text-dark-green/60 hover:text-sage",
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <PortfolioCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

// Componente separado para cada tarjeta del portafolio
function PortfolioCard({ item }: { item: (typeof portfolioItems)[0] }) {
  return (
    <div className="relative h-80 rounded-md overflow-hidden bg-dark-green/20 group">
      {/* Método 1: Usando background-image directamente */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${item.image})` }} />

      {/* Método 2: Usando div con imagen como hijo (fallback) */}
      <div className="absolute inset-0 z-0">
        <img src={item.image || "/placeholder.svg"} alt={item.title} className="w-full h-full object-cover" />
      </div>

      {/* Overlay con información */}
      <div className="absolute inset-0 bg-dark-green opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex flex-col justify-end p-6">
        <h3 className="font-playfair text-xl text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          {item.title}
        </h3>
        <p className="text-white/80 text-sm mt-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
          {item.category}
        </p>
      </div>
    </div>
  )
}
