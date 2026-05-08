"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle,
  Star,
  Play,
  Zap,
  Shield,
  Users,
  TrendingUp,
  Warehouse,
  ShoppingCart,
  BookOpen,
  Cloud,
  Factory,
  Utensils,
  Wrench,
  Store,
  Truck,
  FileText,
  MessageCircle,
  CalendarCheck,
  RefreshCw,
  Handshake,
  Headset,
  BarChart3,
  Lock,
  Mail,
} from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function GestionProLanding() {
  const [showDemo, setShowDemo] = useState(false)
  const [currentDemoStep, setCurrentDemoStep] = useState(0)

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-16 md:h-24 items-center justify-between px-4 md:px-6">
          <Link href="#" className="flex items-center space-x-3" prefetch={false}>
            <Image src="/logonuevo.png" width={250} height={80} alt="Logo Gestión Pro" className="h-12 md:h-20 w-auto" />
          </Link>

          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link href="#problemas" className="text-gp-neutral-600 hover:text-gp-primary transition-colors">
              Problemas que solucionamos
            </Link>
            <Link href="#como-funciona" className="text-gp-neutral-600 hover:text-gp-primary transition-colors">
              Cómo funciona
            </Link>
            <Link href="#precios" className="text-gp-neutral-600 hover:text-gp-primary transition-colors">
              Precios
            </Link>
          </nav>

          <div className="flex items-center space-x-2">
            <Link
              href="https://wa.me/3416171435?text=¡Hola!%20Me%20interesa%20GestiónPro"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-gp-primary hover:bg-gp-primary-700 text-white px-4 py-2 text-sm font-medium rounded-md transition-colors"
            >
              Escribinos
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-gp-primary-50 via-white to-gp-secondary-50 py-12 md:py-32">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container relative px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="flex flex-col justify-center space-y-5 md:space-y-8 text-center lg:text-left">
                <div className="space-y-4">
                  <h1 className="text-2xl font-bold tracking-tight text-gp-neutral-900 sm:text-3xl md:text-5xl lg:text-7xl uppercase leading-tight">
                    ¿No sabés cuánto ganás en tu ferretería?
                  </h1>
                  <div className="mx-auto max-w-[700px] text-sm md:text-lg text-gp-neutral-600 lg:mx-0 md:text-xl space-y-2">
                    <p className="font-semibold text-gp-primary">
                      Dejá el cuaderno. Controlá ventas, stock y ganancias desde el celular.
                    </p>
                    <p className="text-gp-neutral-900 font-bold">
                      “Si hoy no sabés cuánto ganaste, estás perdiendo plata.”
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <p className="text-sm font-medium text-gp-neutral-500 italic">
                    Mirá cómo sería tu ferretería ordenada en menos de 1 minuto:
                  </p>
                  <div className="flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
                    <Link
                      href="https://wa.me/3416171435?text=¡Hola!%20Quiero%20dejar%20el%20cuaderno%20ahora%20con%20GestiónPro"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center bg-gp-olive hover:bg-gp-olive-700 text-white h-14 md:h-16 w-full sm:w-auto px-5 md:px-8 text-base md:text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    >
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Quiero dejar el cuaderno ahora
                    </Link>
                    <Button
                      onClick={() => setShowDemo(true)}
                      className="bg-gp-accent hover:bg-gp-accent-700 text-white h-14 md:h-16 w-full sm:w-auto px-5 md:px-8 text-base md:text-lg font-semibold rounded-xl transition-all duration-300"
                    >
                      <Play className="mr-2 h-4 w-4" />
                      Ver demo gratis
                    </Button>
                  </div>
                  <p className="text-xs font-bold text-red-600 uppercase tracking-wider">
                    En 1 día ya lo estás usando
                  </p>
                  <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs md:text-sm text-gp-neutral-600">
                    <div className="flex items-center space-x-1">
                      <CheckCircle className="h-4 w-4 text-gp-secondary" />
                      <span>Se usa desde el celular</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <CheckCircle className="h-4 w-4 text-gp-secondary" />
                      <span>Listo en 5 minutos</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <CheckCircle className="h-4 w-4 text-gp-secondary" />
                      <span>Soporte por WhatsApp</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-gp-primary/20 to-gp-secondary/20 rounded-3xl blur-3xl"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white p-2 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                  <Image
                    src="/ferreteria_dashboard_hero.png"
                    width={800}
                    height={600}
                    alt="Dashboard de gestión de inventario para ferreterías"
                    className="w-full h-auto rounded-xl hover:scale-105 transition-transform duration-700"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>




        {/* Beneficios Principales */}
        <section id="problemas" className="py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">
                Basta de líos
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight text-gp-neutral-900 sm:text-4xl md:text-5xl mb-4 uppercase">
                ¿TE PASA ESTO EN TU FERRETERÍA?
              </h2>
              <p className="mx-auto max-w-[800px] text-lg text-gp-neutral-600">
                Sabemos lo que es estar detrás del mostrador. Si te sentís identificado, podemos ayudarte.
              </p>
            </div>

            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-16">
              <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md hover:shadow-xl hover:-translate-y-1 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <CardContent className="p-5 md:p-8 text-center">
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gp-primary-100 group-hover:bg-gp-primary group-hover:text-white transition-all duration-300">
                    <Warehouse className="h-8 w-8 text-gp-primary group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gp-neutral-900 mb-2">Faltantes de stock</h3>
                  <p className="text-gp-neutral-600">¿Te das cuenta que no tenés algo justo cuando el cliente te lo pide?</p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md hover:shadow-xl hover:-translate-y-1 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <CardContent className="p-8 text-center">
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gp-secondary-100 group-hover:bg-gp-secondary group-hover:text-white transition-all duration-300">
                    <TrendingUp className="h-8 w-8 text-gp-secondary group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gp-neutral-900 mb-2">Ganancias ciegas</h3>
                  <p className="text-gp-neutral-600">¿Vendés mucho pero no sabés cuánta plata te quedó realmente al final del día?</p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md hover:shadow-xl hover:-translate-y-1 animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <CardContent className="p-8 text-center">
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gp-accent-100 group-hover:bg-gp-accent group-hover:text-white transition-all duration-300">
                    <RefreshCw className="h-8 w-8 text-gp-accent group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gp-neutral-900 mb-2">Precios desactualizados</h3>
                  <p className="text-gp-neutral-600">¿Con la inflación perdés tiempo y plata remarcando o cobrando mal?</p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md hover:shadow-xl hover:-translate-y-1 animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <CardContent className="p-8 text-center">
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gp-primary-100 group-hover:bg-gp-primary group-hover:text-white transition-all duration-300">
                    <BookOpen className="h-8 w-8 text-gp-primary group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gp-neutral-900 mb-2">Esclavo del papel</h3>
                  <p className="text-gp-neutral-600">¿Tenés todo anotado en cuadernos que son un quilombo de entender?</p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md hover:shadow-xl hover:-translate-y-1 animate-fade-in" style={{ animationDelay: "0.5s" }}>
                <CardContent className="p-8 text-center">
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gp-secondary-100 group-hover:bg-gp-secondary group-hover:text-white transition-all duration-300">
                    <Handshake className="h-8 w-8 text-gp-secondary group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gp-neutral-900 mb-2">Fiados olvidados</h3>
                  <p className="text-gp-neutral-600">¿Perdés plata porque te olvidás quién te debe o no encontrás el papelito?</p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md hover:shadow-xl hover:-translate-y-1 animate-fade-in" style={{ animationDelay: "0.6s" }}>
                <CardContent className="p-8 text-center">
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gp-accent-100 group-hover:bg-gp-accent group-hover:text-white transition-all duration-300">
                    <Lock className="h-8 w-8 text-gp-accent group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gp-neutral-900 mb-2">Atado al mostrador</h3>
                  <p className="text-gp-neutral-600">¿Sentís que si no estás vos el negocio no camina o se pierde mercadería?</p>
                </CardContent>
              </Card>
            </div>

            <div className="flex justify-center">
              <Link
                href="https://wa.me/3416171435?text=¡Hola!%20Quiero%20ordenar%20mi%20ferretería%20con%20GestiónPro"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-gp-olive hover:bg-gp-olive-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                SÍ, QUIERO PONER ORDEN AHORA
              </Link>
            </div>
          </div>
        </section>

        {/* Solución Integral */}
        <section id="como-funciona" className="py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-gp-primary-900 to-gp-accent-700 backdrop-blur-lg px-6 py-16 md:px-16 md:py-24 text-center shadow-2xl">
              {/* Efectos de Fondo */}
              <div className="absolute top-0 left-0 -mt-20 -ml-20 h-96 w-96 rounded-full bg-gp-accent/20 blur-3xl opacity-30 animate-pulse"></div>
              <div className="absolute bottom-0 right-0 -mb-20 -mr-20 h-96 w-96 rounded-full bg-gp-primary/20 blur-3xl opacity-30 animate-pulse delay-700"></div>

              <div className="relative z-10 max-w-4xl mx-auto space-y-10">
                <div className="inline-block animate-fade-in-up">
                  <div className="inline-flex items-center rounded-full bg-white/10 px-6 py-2 backdrop-blur-sm border border-white/10 shadow-lg">
                    <span className="text-sm md:text-base font-bold text-gp-accent-300 tracking-wide uppercase">
                      TOMÁ EL CONTROL DE TU NEGOCIO
                    </span>
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tight uppercase">
                    Una herramienta simple
                  </h3>
                  <p className="text-2xl md:text-3xl text-gp-accent-200 font-bold uppercase">
                    Para vender más y vivir más tranquilo
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 max-w-3xl mx-auto">
                  <p className="text-lg md:text-xl text-white leading-relaxed">
                    Hacé una venta en 2 clicks, controlá tu stock al instante y mirá tus ganancias reales desde el celular.
                    <br className="my-2 block" />
                    <span className="text-gp-accent-200 font-bold uppercase">Sin complicaciones, pensado para el ferretero.</span>
                  </p>
                </div>

                <div className="pt-4">
                  <Link
                    href="https://wa.me/3416171435?text=¡Hola!%20Quiero%20dejar%20el%20cuaderno%20ahora%20con%20GestiónPro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-gp-accent text-white hover:bg-gp-accent-700 h-16 px-10 text-lg font-bold rounded-xl shadow-[0_0_30px_rgba(234,88,12,0.3)] hover:shadow-[0_0_40px_rgba(234,88,12,0.5)] transition-all duration-300 transform hover:scale-105"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    QUIERO EMPEZAR AHORA
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pasos */}
        <section className="py-20 md:py-32 bg-gp-neutral-50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gp-neutral-900 sm:text-4xl md:text-5xl mb-4">
                EMPEZÁ HOY MISMO EN 3 PASOS
              </h2>
              <p className="mx-auto max-w-[800px] text-lg text-gp-neutral-600">
                Es tan fácil que no lo vas a poder creer
              </p>
            </div>

            <div className="grid gap-6 grid-cols-1 sm:grid-cols-3 max-w-4xl mx-auto">
              {[
                {
                  icon: MessageCircle,
                  title: "1. Escribinos por WhatsApp",
                  description: "Nos contás cómo es tu negocio y te sacás todas las dudas en 2 minutos.",
                },
                {
                  icon: RefreshCw,
                  title: "2. Cargamos tus productos",
                  description: "Te ayudamos a pasar toda tu mercadería rápido para que no pierdas tiempo.",
                },
                {
                  icon: Zap,
                  title: "3. Empezás a vender",
                  description: "Ya tenés todo ordenado y empezás a controlar tus ganancias desde el primer día.",
                },
              ].map((paso, index) => (
                <div key={index} className="text-center p-6 animate-fade-in" style={{ animationDelay: `${(index + 1) * 0.1}s` }}>
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gp-accent-100">
                    <paso.icon className="h-8 w-8 text-gp-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-gp-neutral-900 mb-2">{paso.title}</h3>
                  <p className="text-gp-neutral-600 text-sm">{paso.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>



        {/* Precios */}
        <section id="precios" className="py-20 md:py-32 bg-gp-neutral-50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              <Badge className="bg-gp-accent text-white px-4 py-1 mb-4 uppercase text-xs font-bold tracking-widest">
                Inversión Inteligente
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight text-gp-neutral-900 sm:text-4xl md:text-5xl mb-4 uppercase">
                Un precio que se paga solo
              </h2>
              <p className="mx-auto max-w-[800px] text-lg text-gp-neutral-600 font-medium italic">
                Hoy estás perdiendo mucha más plata por el desorden que lo que cuesta esta herramienta.
              </p>
            </div>

            <div className="flex justify-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <Card className="w-full max-w-lg border-4 border-gp-accent shadow-2xl hover:scale-[1.02] transition-transform duration-500 bg-white">
                <CardHeader className="text-center pb-6 pt-10">
                  <div className="mb-4">
                    <Badge className="bg-gp-primary text-white px-6 py-2 text-sm font-bold animate-pulse">
                      ¡LO RECUPERÁS EN LA PRIMERA SEMANA!
                    </Badge>
                  </div>
                  <CardTitle className="text-3xl font-bold text-gp-neutral-900 mb-2 uppercase">Plan Todo Incluido</CardTitle>
                  <p className="text-gp-neutral-600 font-medium italic">Sin vueltas ni costos ocultos</p>
                </CardHeader>
                <CardContent className="px-8 pb-10">
                  <div className="text-center mb-10">
                    <div className="flex flex-col items-center gap-3">
                      {/* Primer mes gratis */}
                      <div className="w-full flex flex-col items-center bg-gp-secondary-50 border-2 border-gp-secondary-300 rounded-3xl px-6 py-4">
                        <span className="text-xs font-black uppercase tracking-widest text-gp-secondary-700 mb-1">🎁 Primer mes</span>
                        <div className="flex items-baseline justify-center">
                          <span className="text-6xl font-black text-gp-secondary">$0</span>
                        </div>
                        <span className="text-sm font-semibold text-gp-secondary-600 mt-1">Completamente gratis</span>
                      </div>
                      {/* Flecha */}
                      <span className="text-gp-neutral-400 font-bold text-lg">↓ luego</span>
                      {/* Precio regular */}
                      <div className="flex items-baseline justify-center bg-gp-accent-50 px-6 py-3 rounded-2xl border-2 border-gp-accent-100">
                        <span className="text-4xl font-black text-gp-accent">$25.000</span>
                        <span className="text-lg text-gp-accent-700 ml-1 font-bold">/mes</span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-5 mb-10">
                    {[
                      { t: "Sabés cuánto ganás por día al instante", d: "Se acabó el 'creo que gané plata'" },
                      { t: "No perdés más stock", d: "Vas a saber qué tenés y qué te falta sin dar vueltas" },
                      { t: "Tenés todo ordenado en el celu", d: "Dejá el cuaderno y buscá todo en un click" },
                      { t: "Vendés más tranquilo", d: "Atendé más rápido y sin errores de precio" },
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-6 w-6 text-gp-olive shrink-0 mt-0.5" />
                        <div>
                          <p className="text-gp-neutral-900 font-bold leading-tight">{feature.t}</p>
                          <p className="text-gp-neutral-500 text-sm italic">{feature.d}</p>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <div className="space-y-4">
                    <div className="p-5 bg-gp-primary-50 rounded-2xl border border-gp-primary-100 italic text-gp-primary-900 text-center text-sm md:text-base font-medium">
                      “Con solo <strong>1 error de stock</strong> o <strong>un precio mal cobrado</strong> ya perdés más plata que el costo mensual de GestiónPro.”
                    </div>

                    <Link
                      href="https://wa.me/3416171435?text=¡Hola!%20Quiero%20aprovechar%20el%20precio%20de%20lanzamiento%20de%20GestiónPro"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center bg-gp-olive hover:bg-gp-olive-700 text-white py-6 text-xl font-black rounded-2xl shadow-[0_10px_20px_rgba(91,137,7,0.3)] hover:shadow-[0_15px_30px_rgba(91,137,7,0.5)] transition-all duration-300 transform hover:scale-105 uppercase tracking-wide"
                    >
                      <MessageCircle className="mr-2 h-6 w-6" />
                      Escribime por WhatsApp
                    </Link>

                    <div className="grid grid-cols-2 gap-2 text-center pt-2">
                      <div className="text-xs font-bold text-gp-neutral-600 bg-gp-neutral-100 py-2 rounded-lg border border-gp-neutral-200">
                        🎁 1er Mes Gratis
                      </div>
                      <div className="text-xs font-bold text-gp-neutral-600 bg-gp-neutral-100 py-2 rounded-lg border border-gp-neutral-200">
                        🤝 Sin contratos raros
                      </div>
                      <div className="col-span-2 text-xs font-bold text-gp-primary-600 bg-gp-primary-50 py-2 rounded-lg border border-gp-primary-100">
                        🚀 Te ayudamos a configurar todo hoy mismo
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Garantías */}
        <section className="py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">
                Tranquilidad
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight text-gp-neutral-900 sm:text-4xl md:text-5xl mb-4">
                NUESTRO COMPROMISO CON VOS
              </h2>
              <p className="mx-auto max-w-[800px] text-lg text-gp-neutral-600">
                Si sabés usar WhatsApp, sabés usar Gestión Pro.
              </p>
            </div>

            <div className="grid gap-6 grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: MessageCircle,
                  title: "Soporte humano",
                  description: "Hablás con personas reales que te ayudan por WhatsApp.",
                },
                { icon: Shield, title: "Tus datos seguros", description: "Toda tu información protegida y siempre disponible." },
                { icon: Headset, title: "Te enseñamos todo", description: "Te explicamos paso a paso cómo usarlo en tu mostrador." },
                {
                  icon: Handshake,
                  title: "Chau complicaciones",
                  description: "Si no te sirve, te vas cuando quieras. Sin contratos raros.",
                },
              ].map((guarantee, index) => (
                <div key={index} className="text-center p-3 md:p-6 animate-fade-in" style={{ animationDelay: `${(index + 1) * 0.1}s` }}>
                  <div className="mb-3 md:mb-4 inline-flex h-12 w-12 md:h-16 md:w-16 items-center justify-center rounded-2xl bg-gp-accent-100">
                    <guarantee.icon className="h-6 w-6 md:h-8 md:w-8 text-gp-accent" />
                  </div>
                  <h3 className="text-sm md:text-lg font-semibold text-gp-neutral-900 mb-1 md:mb-2">{guarantee.title}</h3>
                  <p className="text-gp-neutral-600 text-xs md:text-sm">{guarantee.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 md:py-32 bg-gp-neutral-50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">
                FAQ
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight text-gp-neutral-900 sm:text-4xl md:text-5xl mb-4">
                Preguntas Frecuentes
              </h2>
              <p className="mx-auto max-w-[800px] text-lg text-gp-neutral-600">
                Encuentra respuestas a las dudas más comunes sobre GestiónPro
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
              {[
                {
                  question: "¿Necesito saber mucho de computación para usarlo?",
                  answer:
                    "Para nada. Si sabés mandar un mensaje por WhatsApp, sabés usar GestiónPro. Es súper intuitivo y te enseñamos todo lo que necesités.",
                },
                {
                  question: "¿Puedo usarlo desde mi celular?",
                  answer:
                    "Sí, podés cargar ventas y ver tu stock desde el celu, la tablet o la compu. Solo necesitás conexión a internet.",
                },
                {
                  question: "¿Qué pasa con mi información si dejo de usarlo?",
                  answer:
                    "Tus datos son tuyos. Podés bajarlos cuando quieras. Si decidís no seguir, guardamos todo por 90 días por si te arrepentís.",
                },
                {
                  question: "¿Puedo darles un papel o ticket a mis clientes?",
                  answer:
                    "Sí, podés generar comprobantes de venta y tickets al instante para mandarlos por WhatsApp o imprimirlos.",
                },
                {
                  question: "¿Me ayudan a cargar mis productos?",
                  answer:
                    "¡Claro que sí! No te dejamos solo. Te ayudamos a pasar toda tu mercadería para que empieces con el pie derecho.",
                },
              ].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index + 1}`}>
                  <AccordionTrigger className="text-left text-lg font-semibold text-gp-neutral-900 hover:text-gp-accent">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gp-neutral-700 leading-relaxed">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Testimonios */}
        <section className="py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-16 text-gp-neutral-900 uppercase">Lo que dicen otros ferreteros</h2>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  text: "Antes usaba cuaderno y era un lío. Por fin sé cuánta plata gano por día. Antes era todo a ojo y siempre me faltaba guita.",
                  author: "Jorge G.",
                  biz: "Ferretería El Tornillo",
                },
                {
                  text: "Dejé el papel por Gestión Pro. Cargar los precios nuevos me tomaba horas con la inflación. Ahora lo hago en 10 minutos desde el celu.",
                  author: "Marta R.",
                  biz: "Ferretería Industrial Rosario",
                },
                {
                  text: "Me cansé de perder plata con el cuaderno. Lo que más me sirve es el control de fiados. Ya no me olvido de cobrarle a nadie.",
                  author: "Ricardo P.",
                  biz: "Ferretería San José",
                },
              ].map((testimonio, index) => (
                <Card key={index} className="bg-gp-neutral-50 border-none shadow-sm p-6 italic text-gp-neutral-700">
                  <p className="mb-4">"{testimonio.text}"</p>
                  <div className="not-italic font-bold text-gp-primary">{testimonio.author}</div>
                  <div className="not-italic text-sm text-gp-neutral-500">{testimonio.biz}</div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 md:py-32 bg-gradient-to-r from-gp-primary to-gp-accent text-white">
          <div className="container px-4 md:px-6 text-center">
            <div className="mx-auto max-w-3xl space-y-8">
              <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30 border-gp-accent-300">
                ¡Sumate a las ferreterías que ya ganan tiempo!
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                ¿Listo para poner en orden tu ferretería?
              </h2>
              <p className="text-xl text-white/90 leading-relaxed animate-fade-in" style={{ animationDelay: "0.1s" }}>
                No sigas perdiendo plata por el desorden del cuaderno. 
                <br />
                Escribinos ahora y empezá hoy mismo a laburar mejor.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <Link
                  href="https://wa.me/3416171435?text=¡Hola!%20Quiero%20más%20información%20para%20mi%20ferretería"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-gp-olive hover:bg-gp-olive-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Escribinos por WhatsApp
                </Link>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-white/80 animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <div className="flex items-center space-x-1">
                  <CheckCircle className="h-4 w-4" />
                  <span>Sin tarjeta de crédito</span>
                </div>
                <div className="flex items-center space-x-1">
                  <CheckCircle className="h-4 w-4" />
                  <span>Configuración en 5 min</span>
                </div>
                <div className="flex items-center space-x-1">
                  <CheckCircle className="h-4 w-4" />
                  <span>Soporte incluido</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Demo Modal */}
        {showDemo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
            <div className="relative w-full max-w-7xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col">
              {/* Header del Demo - Fijo */}
              <div className="flex items-center justify-between p-4 md:p-6 border-b bg-gradient-to-r from-gp-primary to-gp-secondary text-white flex-shrink-0">
                <div className="flex items-center space-x-3">
                  <Image src="/logonuevo.png" width={32} height={32} alt="Logo Gestión Pro" className="h-8 w-8" />
                  <h3 className="text-lg md:text-xl font-bold">Mirá lo fácil que es - Gestión Pro</h3>
                </div>
                <button
                  onClick={() => setShowDemo(false)}
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Contenido del Demo - Scrolleable */}
              <div className="flex-1 overflow-y-auto">
                <div className="p-4 md:p-8">
                  <div className="grid gap-6 lg:gap-8 xl:grid-cols-2">
                    {/* Panel de Control */}
                    <div className="space-y-6">
                      <div className="text-center mb-6">
                        <h4 className="text-xl md:text-2xl font-bold text-gp-neutral-900 mb-2">
                          Mirá lo fácil que es manejar tu ferretería
                        </h4>
                        <p className="text-sm md:text-base text-gp-neutral-600 mb-4">
                          Tocá los botones de abajo y comprobá que es simple de verdad.
                        </p>
                        <Badge className="bg-red-600 text-white animate-pulse">
                          En 1 día ya lo estás usando
                        </Badge>
                      </div>

                      <div className="grid gap-3 md:gap-4 sm:grid-cols-2">
                        {[
                          {
                            id: 0,
                            icon: Warehouse,
                            title: "Inventario",
                            description: "Control automático de stock",
                            color: "gp-primary",
                          },
                          {
                            id: 1,
                            icon: ShoppingCart,
                            title: "Ventas",
                            description: "Proceso de venta en 3 clicks",
                            color: "gp-secondary",
                          },
                          {
                            id: 2,
                            icon: FileText,
                            title: "Comprobantes",
                            description: "Tickets automáticos",
                            color: "gp-accent",
                          },
                          {
                            id: 4,
                            icon: Users,
                            title: "Fiados",
                            description: "Control de deudas",
                            color: "gp-secondary",
                          },
                          {
                            id: 3,
                            icon: BarChart3,
                            title: "Reportes",
                            description: "Ganancias al día",
                            color: "gp-primary",
                          },
                        ].map((module) => (
                          <button
                            key={module.id}
                            onClick={() => setCurrentDemoStep(module.id)}
                            className={`p-3 md:p-4 rounded-xl border-2 transition-all duration-300 text-left ${currentDemoStep === module.id
                              ? `border-${module.color} bg-${module.color}-50`
                              : "border-gp-neutral-200 hover:border-gp-neutral-300"
                              }`}
                          >
                            <div className="flex items-center space-x-3">
                              <div className={`p-2 rounded-lg bg-${module.color}-100`}>
                                <module.icon className={`h-4 w-4 md:h-5 md:w-5 text-${module.color}`} />
                              </div>
                              <div>
                                <h5 className="text-sm md:text-base font-semibold text-gp-neutral-900">
                                  {module.title}
                                </h5>
                                <p className="text-xs md:text-sm text-gp-neutral-600">{module.description}</p>
                              </div>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Área de Demostración */}
                    <div className="bg-gp-neutral-50 rounded-xl p-4 md:p-6 min-h-[300px] md:min-h-[400px] flex items-center justify-center">
                      {currentDemoStep === 0 && (
                        <div className="w-full space-y-4 animate-fade-in">
                          <h5 className="text-base md:text-lg font-bold text-gp-neutral-900 mb-4">
                            📦 Gestión de Inventario
                          </h5>
                          <div className="space-y-3">
                            <div className="bg-white p-3 md:p-4 rounded-lg shadow-sm animate-slide-in">
                              <div className="flex items-center justify-between">
                                <span className="text-sm md:text-base font-medium">Martillo Galponero</span>
                                <span className="text-sm md:text-base text-gp-secondary font-bold">Stock: 25</span>
                              </div>
                              <div className="w-full bg-gp-neutral-200 rounded-full h-2 mt-2">
                                <div
                                  className="bg-gp-secondary h-2 rounded-full animate-pulse"
                                  style={{ width: "60%" }}
                                ></div>
                              </div>
                            </div>
                            <div
                              className="bg-white p-3 md:p-4 rounded-lg shadow-sm animate-slide-in"
                              style={{ animationDelay: "0.2s" }}
                            >
                              <div className="flex items-center justify-between">
                                <span className="text-sm md:text-base font-medium">Pintura Látex 20L</span>
                                <span className="text-sm md:text-base text-red-500 font-bold">Stock: 3 ⚠️</span>
                              </div>
                              <div className="w-full bg-gp-neutral-200 rounded-full h-2 mt-2">
                                <div
                                  className="bg-red-500 h-2 rounded-full animate-pulse"
                                  style={{ width: "15%" }}
                                ></div>
                              </div>
                            </div>
                            <div
                              className="bg-gp-primary-50 border border-gp-primary-200 p-3 rounded-lg animate-slide-in"
                              style={{ animationDelay: "0.4s" }}
                            >
                              <p className="text-xs md:text-sm text-gp-primary-800">
                                🔔 <strong>Alerta automática:</strong> Pintura Látex necesita reposición
                              </p>
                            </div>
                          </div>
                        </div>
                      )}

                      {currentDemoStep === 1 && (
                        <div className="w-full space-y-4 animate-fade-in">
                          <h5 className="text-base md:text-lg font-bold text-gp-neutral-900 mb-4">
                            🛒 Proceso de Ventas
                          </h5>
                          <div className="space-y-3">
                            <div className="bg-white p-3 md:p-4 rounded-lg shadow-sm animate-slide-in">
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-sm md:text-base font-medium">1. Seleccionar producto</span>
                                <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-gp-secondary" />
                              </div>
                              <div className="text-xs md:text-sm text-gp-neutral-600">Taladro Percutor - $85.000</div>
                            </div>
                            <div
                              className="bg-white p-3 md:p-4 rounded-lg shadow-sm animate-slide-in"
                              style={{ animationDelay: "0.3s" }}
                            >
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-sm md:text-base font-medium">2. Confirmar cantidad</span>
                                <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-gp-secondary" />
                              </div>
                              <div className="text-xs md:text-sm text-gp-neutral-600">Cantidad: 1 unidad</div>
                            </div>
                            <div
                              className="bg-white p-3 md:p-4 rounded-lg shadow-sm animate-slide-in"
                              style={{ animationDelay: "0.6s" }}
                            >
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-sm md:text-base font-medium">3. Generar ticket</span>
                                <div className="animate-spin h-4 w-4 md:h-5 md:w-5 border-2 border-gp-secondary border-t-transparent rounded-full"></div>
                              </div>
                              <div className="text-xs md:text-sm text-gp-neutral-600">Procesando</div>
                            </div>
                            <div
                              className="bg-gp-secondary-50 border border-gp-secondary-200 p-3 rounded-lg animate-slide-in"
                              style={{ animationDelay: "0.9s" }}
                            >
                              <p className="text-xs md:text-sm text-gp-secondary-800">
                                ✅ <strong>Venta completada:</strong> Total $85.000
                              </p>
                            </div>
                          </div>
                        </div>
                      )}

                      {currentDemoStep === 2 && (
                        <div className="w-full space-y-4 animate-fade-in">
                          <h5 className="text-base md:text-lg font-bold text-gp-neutral-900 mb-4">
                            📄 Emisión de Comprobantes
                          </h5>
                          <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm border animate-slide-in">
                            <div className="text-center mb-4">
                              <div className="inline-flex items-center space-x-2 text-gp-accent">
                                <FileText className="h-5 w-5 md:h-6 md:w-6" />
                                <span className="text-sm md:text-base font-bold">COMPROBANTE #001234</span>
                              </div>
                            </div>
                            <div className="space-y-2 text-xs md:text-sm">
                              <div className="flex justify-between">
                                <span>Cliente:</span>
                                <span className="font-medium">María González</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Fecha:</span>
                                <span className="font-medium">28/08/2025</span>
                              </div>
                              <div className="border-t pt-2 mt-2">
                                <div className="flex justify-between">
                                  <span>Martillo Galponero x1</span>
                                  <span>$15.000</span>
                                </div>
                                <div className="flex justify-between font-bold text-base md:text-lg mt-2">
                                  <span>Total:</span>
                                  <span>$15.000</span>
                                </div>
                              </div>
                            </div>
                            <div className="mt-4 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                              <Button
                                size="sm"
                                className="flex-1 bg-gp-accent hover:bg-gp-accent-700 text-xs md:text-sm"
                              >
                                📧 Enviar por Email
                              </Button>
                              <Button size="sm" variant="outline" className="flex-1 bg-transparent text-xs md:text-sm">
                                📱 WhatsApp
                              </Button>
                            </div>
                          </div>
                        </div>
                      )}

                      {currentDemoStep === 4 && (
                        <div className="w-full space-y-4 animate-fade-in">
                          <h5 className="text-base md:text-lg font-bold text-gp-neutral-900 mb-4">
                            🤝 Control de Fiados (Cuentas Corrientes)
                          </h5>
                          <div className="space-y-3">
                            <div className="bg-white p-3 md:p-4 rounded-lg shadow-sm animate-slide-in">
                              <div className="flex items-center justify-between">
                                <span className="text-sm md:text-base font-medium">Juan Pérez</span>
                                <span className="text-sm md:text-base text-red-600 font-bold">Debe: $12.500</span>
                              </div>
                              <p className="text-xs text-gp-neutral-500 mt-1">Última compra: Hace 3 días</p>
                            </div>
                            <div className="bg-white p-3 md:p-4 rounded-lg shadow-sm animate-slide-in" style={{ animationDelay: "0.2s" }}>
                              <div className="flex items-center justify-between">
                                <span className="text-sm md:text-base font-medium">Taller Los Primos</span>
                                <span className="text-sm md:text-base text-red-600 font-bold">Debe: $45.200</span>
                              </div>
                              <p className="text-xs text-gp-neutral-500 mt-1">Última compra: Hoy</p>
                            </div>
                            <div className="bg-gp-secondary-50 border border-gp-secondary-200 p-3 rounded-lg animate-slide-in" style={{ animationDelay: "0.4s" }}>
                              <p className="text-xs md:text-sm text-gp-secondary-800">
                                ✅ <strong>¡Cobro fácil!</strong> Tocás un botón y le mandás el resumen por WhatsApp.
                              </p>
                            </div>
                          </div>
                        </div>
                      )}

                      {currentDemoStep === 3 && (
                        <div className="w-full space-y-4 animate-fade-in">
                          <h5 className="text-base md:text-lg font-bold text-gp-neutral-900 mb-4">
                            📊 Ganancias al día
                          </h5>
                          <div className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              <div className="bg-white p-3 md:p-4 rounded-lg shadow-sm text-center animate-slide-in">
                                <div className="text-xl md:text-2xl font-bold text-gp-primary">$450K</div>
                                <div className="text-xs md:text-sm text-gp-neutral-600">Ventas del mes</div>
                                <div className="text-xs text-gp-secondary">↗️ +15%</div>
                              </div>
                              <div
                                className="bg-white p-3 md:p-4 rounded-lg shadow-sm text-center animate-slide-in"
                                style={{ animationDelay: "0.2s" }}
                              >
                                <div className="text-xl md:text-2xl font-bold text-gp-secondary">127</div>
                                <div className="text-xs md:text-sm text-gp-neutral-600">Productos vendidos</div>
                                <div className="text-xs text-gp-secondary">↗️ +8%</div>
                              </div>
                            </div>
                            <div
                              className="bg-white p-3 md:p-4 rounded-lg shadow-sm animate-slide-in"
                              style={{ animationDelay: "0.4s" }}
                            >
                              <div className="text-xs md:text-sm font-medium mb-2">Lo que más sale</div>
                              <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                  <span className="text-xs md:text-sm">Tornillos 2"</span>
                                  <div className="flex items-center space-x-2">
                                    <div className="w-16 md:w-20 bg-gp-neutral-200 rounded-full h-2">
                                      <div
                                        className="bg-gp-primary h-2 rounded-full animate-pulse"
                                        style={{ width: "80%" }}
                                      ></div>
                                    </div>
                                    <span className="text-xs">45</span>
                                  </div>
                                </div>
                                <div className="flex items-center justify-between">
                                  <span className="text-xs md:text-sm">Pintura Látex 20L</span>
                                  <div className="flex items-center space-x-2">
                                    <div className="w-16 md:w-20 bg-gp-neutral-200 rounded-full h-2">
                                      <div
                                        className="bg-gp-secondary h-2 rounded-full animate-pulse"
                                        style={{ width: "60%" }}
                                      ></div>
                                    </div>
                                    <span className="text-xs">32</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer del Demo - Fijo */}
              <div className="flex-shrink-0 border-t bg-white p-4 md:p-6">
                <div className="text-center">
                  <p className="text-sm md:text-base text-gp-neutral-600 mb-4">
                    ¿Viste lo simple que es? Empezá hoy mismo en tu negocio.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Link
                      href="https://wa.me/3416171435?text=¡Hola!%20Vi%20la%20demo%20y%20quiero%20empezar%20con%20GestiónPro"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setShowDemo(false)}
                      className="inline-flex items-center justify-center bg-gp-olive hover:bg-gp-olive-700 text-white px-6 py-3 text-sm md:text-base font-medium rounded-md transition-colors"
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      👉 Quiero empezar ahora
                    </Link>
                    <Button variant="outline" onClick={() => setShowDemo(false)} className="text-sm md:text-base">
                      Cerrar
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Floating WhatsApp Button */}
        <Link
          href="https://wa.me/3416171435?text=¡Hola!%20Me%20interesa%20GestiónPro"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-gp-olive text-white shadow-2xl hover:bg-gp-olive-700 hover:scale-110 transition-all duration-300 animate-bounce-subtle"
          aria-label="Contactar por WhatsApp"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-10 w-10 fill-current"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </Link>

        {/* Footer */}
        <footer className="border-t bg-gradient-to-br from-gp-neutral-100 via-gp-neutral-200 to-gp-neutral-300 text-gp-neutral-800">
          <div className="container px-4 md:px-6 py-8 md:py-12">
            <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Image
                    src="/logonuevo.png"
                    width={60}
                    height={60}
                    alt="Logo Gestión Pro"
                    className="h-16 w-auto"
                  />
                </div>
                <p className="text-gp-neutral-600 text-sm leading-relaxed">
                  La herramienta simple para que ferreterías y negocios ordenen sus ventas y stock sin complicaciones.
                </p>
                <div className="text-sm text-gp-neutral-600 space-y-1">
                  <p>gestionpro.pro</p>
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4" />
                    <a href="mailto:gestionproinfo@gmail.com" className="hover:text-gp-primary transition-colors">
                      gestionproinfo@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MessageCircle className="h-4 w-4" />
                    <a href="https://wa.me/3416171435" className="hover:text-gp-primary transition-colors">
                      +54 9 341 617-1435
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-4 text-gp-neutral-900">Producto</h3>
                <ul className="space-y-2 text-sm text-gp-neutral-600 mb-6">
                  <li>
                    <Link href="#como-funciona" className="hover:text-gp-primary transition-colors">
                      Cómo funciona
                    </Link>
                  </li>
                  <li>
                    <Link href="#precios" className="hover:text-gp-primary transition-colors">
                      Precios
                    </Link>
                  </li>
                </ul>

                <h4 className="font-semibold mb-2 text-gp-neutral-900 text-sm">API</h4>
                <p className="text-sm text-gp-neutral-600">
                  Para usar nuestra API en tu propio sistema contacta a{" "}
                  <a href="mailto:gestionproinfo@gmail.com" className="text-gp-primary hover:underline">
                    gestionproinfo@gmail.com
                  </a>
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-4 text-gp-neutral-900">Trabaja con nosotros</h3>
                <p className="text-sm text-gp-neutral-600">
                  ¿Te apasiona la tecnología y querés formar parte de nuestro equipo?
                  <br />
                  <br />
                  Envíanos tu CV y carta de presentación a{" "}
                  <a href="mailto:gestionproinfo@gmail.com?subject=Trabaja%20con%20nosotros" className="text-gp-primary hover:underline">
                    gestionproinfo@gmail.com
                  </a>
                </p>
              </div>
            </div>

            <div className="border-t border-gp-neutral-300 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
              <p className="text-sm text-gp-neutral-600">© 2025 Gestión Pro Todos los derechos reservados</p>
              <div className="flex space-x-6 mt-4 sm:mt-0">
                <Link href="#" className="text-sm text-gp-neutral-600 hover:text-gp-primary transition-colors">
                  Política de Privacidad
                </Link>
                <Link href="#" className="text-sm text-gp-neutral-600 hover:text-gp-primary transition-colors">
                  Términos de Servicio
                </Link>
                <Link href="#" className="text-sm text-gp-neutral-600 hover:text-gp-primary transition-colors">
                  Cookies
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
