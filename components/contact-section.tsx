"use client"

import type React from "react"

import { useState } from "react"
import { CustomButton } from "@/components/ui/custom-button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log(formData)
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    })
    // Show success message
    alert("Mensaje enviado con éxito. Nos pondremos en contacto contigo pronto.")
  }

  return (
    <section id="contact" className="py-24 bg-beige relative">
      {/* Subtle geometric pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%233A4C3A' fillOpacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl text-dark-green mb-4">Contacto</h2>
          <p className="text-dark-green/70 max-w-2xl mx-auto">
            Estamos listos para convertir tu visión en realidad. Contáctanos para comenzar tu proyecto.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-md shadow-sm">
            <h3 className="font-playfair text-2xl text-dark-green mb-6">Envíanos un mensaje</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-dark-green mb-1">
                    Nombre completo
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="border-sage/50 focus:border-sage focus:ring-sage"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-dark-green mb-1">
                    Correo electrónico
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border-sage/50 focus:border-sage focus:ring-sage"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-dark-green mb-1">
                    Teléfono
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="border-sage/50 focus:border-sage focus:ring-sage"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-dark-green mb-1">
                    Asunto
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="border-sage/50 focus:border-sage focus:ring-sage"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-dark-green mb-1">
                  Mensaje
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="border-sage/50 focus:border-sage focus:ring-sage"
                />
              </div>
              <CustomButton type="submit" variant="primary" className="w-full">
                Enviar mensaje
              </CustomButton>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <div className="bg-dark-green text-white p-8 rounded-md mb-8">
              <h3 className="font-playfair text-2xl mb-6">Información de contacto</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="text-sage mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium mb-1">Dirección</h4>
                    <p className="text-beige/80">
                      Av. Arquitectura 123, Col. Diseño
                      <br />
                      Ciudad de México, 01234
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="text-sage mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium mb-1">Teléfono</h4>
                    <p className="text-beige/80">+52 (55) 1234 5678</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="text-sage mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium mb-1">Correo electrónico</h4>
                    <p className="text-beige/80">info@mvarquitectos.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="text-sage mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium mb-1">Horario de atención</h4>
                    <p className="text-beige/80">
                      Lunes a Viernes: 9:00 AM - 6:00 PM
                      <br />
                      Sábados: 10:00 AM - 2:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
          </div>
        </div>
      </div>

      {/* Map Placeholder - Full Width */}
      <div className="w-full mt-16 h-96 bg-gray-200">
        <img src="/world-map-vintage.png" alt="Mapa de ubicación" className="w-full h-full object-cover" />
      </div>
    </section>
  )
}
