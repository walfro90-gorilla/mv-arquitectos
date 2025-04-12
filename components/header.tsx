"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled ? "bg-beige/95 backdrop-blur-sm py-3 shadow-sm" : "bg-transparent py-6",
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <div className="h-10 w-auto relative">
            <Image
              src="/logo-mv-arquitectos.png"
              alt="MV Arquitectos Logo"
              width={50}
              height={40}
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="#about"
            className="text-dark-green hover:text-sage transition-colors duration-200"
            onClick={(e) => {
              e.preventDefault()
              const element = document.getElementById("about")
              if (element) {
                element.scrollIntoView({ behavior: "smooth" })
              }
            }}
          >
            Nosotros
          </Link>
          <Link
            href="#portfolio"
            className="text-dark-green hover:text-sage transition-colors duration-200"
            onClick={(e) => {
              e.preventDefault()
              const element = document.getElementById("portfolio")
              if (element) {
                element.scrollIntoView({ behavior: "smooth" })
              }
            }}
          >
            Portafolio
          </Link>
          <Link
            href="#services"
            className="text-dark-green hover:text-sage transition-colors duration-200"
            onClick={(e) => {
              e.preventDefault()
              const element = document.getElementById("services")
              if (element) {
                element.scrollIntoView({ behavior: "smooth" })
              }
            }}
          >
            Servicios
          </Link>
          <Link
            href="#contact"
            className="text-dark-green hover:text-sage transition-colors duration-200"
            onClick={(e) => {
              e.preventDefault()
              const element = document.getElementById("contact")
              if (element) {
                element.scrollIntoView({ behavior: "smooth" })
              }
            }}
          >
            Contacto
          </Link>
          <Button variant="default" className="bg-sage hover:bg-dark-green text-white transition-colors duration-200">
            Agendar Consulta
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-dark-green focus:outline-none" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 bg-beige z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-300 ease-in-out md:hidden",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="mb-8">
          <Image
            src="/logo-mv-arquitectos.png"
            alt="MV Arquitectos Logo"
            width={150}
            height={75}
            className="object-contain"
          />
        </div>
        <Link
          href="#about"
          className="text-dark-green text-xl font-medium"
          onClick={(e) => {
            e.preventDefault()
            const element = document.getElementById("about")
            if (element) {
              element.scrollIntoView({ behavior: "smooth" })
              toggleMenu()
            }
          }}
        >
          Nosotros
        </Link>
        <Link
          href="#portfolio"
          className="text-dark-green text-xl font-medium"
          onClick={(e) => {
            e.preventDefault()
            const element = document.getElementById("portfolio")
            if (element) {
              element.scrollIntoView({ behavior: "smooth" })
              toggleMenu()
            }
          }}
        >
          Portafolio
        </Link>
        <Link
          href="#services"
          className="text-dark-green text-xl font-medium"
          onClick={(e) => {
            e.preventDefault()
            const element = document.getElementById("services")
            if (element) {
              element.scrollIntoView({ behavior: "smooth" })
              toggleMenu()
            }
          }}
        >
          Servicios
        </Link>
        <Link
          href="#contact"
          className="text-dark-green text-xl font-medium"
          onClick={(e) => {
            e.preventDefault()
            const element = document.getElementById("contact")
            if (element) {
              element.scrollIntoView({ behavior: "smooth" })
              toggleMenu()
            }
          }}
        >
          Contacto
        </Link>
        <Button
          variant="default"
          className="bg-sage hover:bg-dark-green text-white transition-colors duration-200 mt-4"
          onClick={toggleMenu}
        >
          Agendar Consulta
        </Button>
      </div>
    </header>
  )
}
