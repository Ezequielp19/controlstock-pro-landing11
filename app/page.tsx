"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  BarChart3,
  BookOpen,
  CheckCircle,
  FileText,
  Handshake,
  Headset,
  Lock,
  Mail,
  MessageCircle,
  Play,
  RefreshCw,
  Shield,
  ShoppingCart,
  Store,
  Truck,
  TrendingUp,
  Utensils,
  Warehouse,
  Wrench,
  Zap,
  Users,
} from "lucide-react"

const problems = [
  {
    icon: Warehouse,
    title: "Faltantes de stock",
    description: "Te das cuenta de que no tenés un producto justo cuando el cliente te lo pide.",
  },
  {
    icon: TrendingUp,
    title: "Ganancias ciegas",
    description: "Vendés todo el día, pero no sabés cuánta plata te quedó realmente.",
  },
  {
    icon: RefreshCw,
    title: "Precios desactualizados",
    description: "Cobrás mal porque los precios cambian y no llegás a actualizarlos.",
  },
  {
    icon: BookOpen,
    title: "Todo en cuaderno o Excel",
    description: "Tenés ventas, precios y stock repartidos en papeles que después nadie entiende.",
  },
  {
    icon: Handshake,
    title: "Fiados olvidados",
    description: "Perdés plata porque no encontrás quién te debe o cuánto te debe.",
  },
  {
    icon: Lock,
    title: "Dependés de estar vos",
    description: "Si no estás en el negocio, no sabés qué se vendió ni qué falta.",
  },
]

const rubros = [
  {
    icon: Wrench,
    title: "Ferreterías y pinturerías",
    description: "Controlá stock, precios, ventas de mostrador y fiados.",
  },
  {
    icon: Store,
    title: "Bazares y regalerías",
    description: "Ordená productos, precios, caja diaria y mercadería.",
  },
  {
    icon: ShoppingCart,
    title: "Locales de ropa chicos",
    description: "Controlá ventas, productos, stock y ganancias.",
  },
  {
    icon: Utensils,
    title: "Dietéticas y almacenes",
    description: "Registrá ventas, actualizá precios y controlá mercadería.",
  },
  {
    icon: Truck,
    title: "Comercios de barrio",
    description: "Todo ordenado desde el celular, sin sistemas complicados.",
  },
]

const steps = [
  {
    icon: MessageCircle,
    title: "1. Escribinos por WhatsApp",
    description: "Nos contás qué vendés y cómo trabajás.",
  },
  {
    icon: RefreshCw,
    title: "2. Te ayudamos a configurar tu negocio",
    description: "Cargás tus productos, precios y stock de forma simple.",
  },
  {
    icon: Zap,
    title: "3. Empezás a vender más ordenado",
    description: "Registrás ventas, controlás stock y ves tus ganancias.",
  },
]

const faqs = [
  {
    question: "¿Sirve para mi rubro?",
    answer:
      "Si tenés un comercio que vende productos y necesitás controlar ventas, stock, precios o fiados, probablemente te sirve. Te mostramos una demo por WhatsApp y vemos si se adapta a tu negocio.",
  },
  {
    question: "¿Puedo usarlo aunque tenga pocos productos?",
    answer:
      "Sí. Sirve tanto para empezar a ordenar un negocio chico como para controlar mejor uno que ya está funcionando.",
  },
  {
    question: "¿Tengo que cargar todos mis productos solo?",
    answer: "No. Te acompañamos para que empieces de la forma más simple posible.",
  },
  {
    question: "¿Sirve para restaurantes o bares?",
    answer:
      "Puede servir para controlar productos y ventas simples, pero no reemplaza un sistema gastronómico con mesas, comandas o cocina.",
  },
  {
    question: "¿Necesito saber de computación?",
    answer: "No. Si sabés usar WhatsApp, podés usar GestiónPro.",
  },
  {
    question: "¿Tiene soporte?",
    answer: "Sí. Te ayudamos por WhatsApp para que puedas configurarlo y usarlo sin complicarte.",
  },
]

const cases = [
  {
    title: "Cliente real: La Tuerca del Cosito",
    text: "Hoy le ayuda mucho con el control de stock y a ordenar mejor lo que entra y lo que sale.",
  },
  {
    title: "Cliente real: Mini 24 hs",
    text: "Le sirve para generar ventas desde la mini web y recibir pedidos que llegan directo por WhatsApp.",
  },
  {
    title: "También puede ayudarte a vos",
    text: "Si vendés productos todos los días, GestiónPro te ayuda a ordenar stock, ventas, precios, fiados y consultas de clientes.",
  },
]

const demoModules = [
  {
    id: 0,
    icon: Warehouse,
    title: "Inventario",
    description: "Control automático de stock",
  },
  {
    id: 1,
    icon: ShoppingCart,
    title: "Ventas",
    description: "Proceso de venta simple",
  },
  {
    id: 2,
    icon: FileText,
    title: "Comprobantes",
    description: "Tickets listos para enviar",
  },
  {
    id: 3,
    icon: BarChart3,
    title: "Reportes",
    description: "Ganancias al día",
  },
  {
    id: 4,
    icon: Users,
    title: "Fiados",
    description: "Control de deudas",
  },
]

export default function GestionProLanding() {
  const [showDemo, setShowDemo] = useState(false)
  const [currentDemoStep, setCurrentDemoStep] = useState(0)

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between px-4 md:h-24 md:px-6">
          <Link href="#" className="flex items-center space-x-3" prefetch={false}>
            <Image src="/logonuevo.png" width={250} height={80} alt="Logo Gestión Pro" className="h-12 w-auto md:h-20" />
          </Link>

          <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
            <Link href="#problemas" className="text-gp-neutral-600 transition-colors hover:text-gp-primary">
              Problemas que solucionamos
            </Link>
            <Link href="#como-funciona" className="text-gp-neutral-600 transition-colors hover:text-gp-primary">
              Cómo funciona
            </Link>
            <Link href="#precios" className="text-gp-neutral-600 transition-colors hover:text-gp-primary">
              Precios
            </Link>
          </nav>

          <Link
            href="https://wa.me/3416171435?text=¡Hola!%20Me%20interesa%20GestiónPro"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-gp-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gp-primary-700"
          >
            Escribinos
          </Link>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative overflow-hidden bg-gradient-to-br from-gp-primary-50 via-white to-gp-secondary-50 py-12 md:py-32">
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          <div className="container relative px-4 md:px-6">
            <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
              <div className="flex flex-col justify-center space-y-5 text-center md:space-y-8 lg:text-left">
                <div className="space-y-4">
                  <h1 className="text-2xl font-bold uppercase leading-tight tracking-tight text-gp-neutral-900 sm:text-3xl md:text-5xl lg:text-7xl">
                    ¿Tenés un comercio y no sabés cuánto ganás realmente?
                  </h1>
                  <div className="mx-auto max-w-[700px] space-y-2 text-sm text-gp-neutral-600 md:text-lg lg:mx-0 md:text-xl">
                    <p className="font-semibold text-gp-primary">
                      Dejá el cuaderno. Controlá ventas, stock, fiados y ganancias desde el celular.
                    </p>
                    <p className="font-bold text-gp-neutral-900">“Si hoy no sabés cuánto ganaste, estás perdiendo plata.”</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <p className="text-sm font-medium italic text-gp-neutral-500">
                    Mirá cómo sería tu negocio ordenado en menos de 1 minuto:
                  </p>
                  <div className="flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
                    <Link
                      href="https://wa.me/3416171435?text=¡Hola!%20Quiero%20ordenar%20mi%20negocio%20con%20GestiónPro"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-14 w-full items-center justify-center rounded-xl bg-gp-olive px-5 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-gp-olive-700 sm:w-auto md:h-16 md:px-8 md:text-lg"
                    >
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Quiero ordenar mi negocio
                    </Link>
                    <Button
                      onClick={() => setShowDemo(true)}
                      className="h-14 w-full rounded-xl bg-gp-accent px-5 text-base font-semibold text-white transition-all duration-300 hover:bg-gp-accent-700 sm:w-auto md:h-16 md:px-8 md:text-lg"
                    >
                      <Play className="mr-2 h-4 w-4" />
                      Ver demo gratis
                    </Button>
                  </div>
                  <p className="text-xs font-bold uppercase tracking-wider text-red-600">
                    Te ayudamos a empezar sin complicarte
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-gp-neutral-600 md:text-sm lg:justify-start">
                    <div className="flex items-center space-x-1">
                      <CheckCircle className="h-4 w-4 text-gp-secondary" />
                      <span>Se usa desde el celular</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <CheckCircle className="h-4 w-4 text-gp-secondary" />
                      <span>No necesitás ser experto en computación</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <CheckCircle className="h-4 w-4 text-gp-secondary" />
                      <span>Soporte por WhatsApp</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-gp-primary/20 to-gp-secondary/20 blur-3xl" />
                <div className="relative overflow-hidden rounded-2xl bg-white p-2 shadow-2xl">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                    <Image
                      src="/hero-commerce.png"
                      fill
                      sizes="(min-width: 1024px) 42vw, 100vw"
                      alt="Gestión Pro en laptop y celular dentro de un comercio"
                      className="object-cover object-[55%_42%] transition-transform duration-700 hover:scale-[1.08]"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="problemas" className="py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="mb-16 text-center">
              <Badge variant="outline" className="mb-4">
                Basta de líos
              </Badge>
              <h2 className="mb-4 text-3xl font-bold uppercase tracking-tight text-gp-neutral-900 sm:text-4xl md:text-5xl">
                ¿Te pasa esto en tu comercio?
              </h2>
              <p className="mx-auto max-w-[800px] text-lg text-gp-neutral-600">
                Sabemos lo que es estar detrás del mostrador. Si te sentís identificado, podemos ayudarte.
              </p>
            </div>

            <div className="mb-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {problems.map((problem) => (
                <Card
                  key={problem.title}
                  className="group border-0 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <CardContent className="p-5 text-center md:p-8">
                    <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gp-primary-100 transition-all duration-300 group-hover:bg-gp-primary">
                      <problem.icon className="h-8 w-8 text-gp-primary transition-colors duration-300 group-hover:text-white" />
                    </div>
                    <h3 className="mb-2 text-xl font-semibold text-gp-neutral-900">{problem.title}</h3>
                    <p className="text-gp-neutral-600">{problem.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex justify-center">
              <Link
                href="https://wa.me/3416171435?text=¡Hola!%20Quiero%20ordenar%20mi%20negocio%20con%20GestiónPro"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-gp-olive px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-gp-olive-700 hover:shadow-xl"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Sí, quiero poner orden ahora
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="mb-16 text-center">
              <Badge variant="outline" className="mb-4">
                Rubros
              </Badge>
              <h2 className="mb-4 text-3xl font-bold uppercase tracking-tight text-gp-neutral-900 sm:text-4xl md:text-5xl">
                Ideal para comercios que venden productos todos los días
              </h2>
              <p className="mx-auto max-w-[800px] text-lg text-gp-neutral-600">
                Si tu negocio mueve stock, precios y ventas de mostrador, GestiónPro te ayuda a ordenar todo sin complicarte.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-5">
              {rubros.map((rubro) => (
                <Card key={rubro.title} className="border-0 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gp-primary-100">
                      <rubro.icon className="h-8 w-8 text-gp-primary" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-gp-neutral-900">{rubro.title}</h3>
                    <p className="text-sm leading-relaxed text-gp-neutral-600">{rubro.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-20 md:pb-32">
          <div className="container px-4 md:px-6">
            <Card className="overflow-hidden border-0 bg-gradient-to-r from-gp-primary-50 to-gp-secondary-50 shadow-lg">
              <CardContent className="grid gap-8 p-8 md:grid-cols-[1.1fr_0.9fr] md:p-10">
                <div className="space-y-4">
                  <Badge className="w-fit bg-gp-primary text-white">Incluido en el sistema</Badge>
                  <h2 className="text-3xl font-bold tracking-tight text-gp-neutral-900 md:text-4xl">
                    También tenés una mini web lista para vender y mostrar lo que tenés
                  </h2>
                  <p className="text-lg leading-relaxed text-gp-neutral-700">
                    Dentro de GestiónPro ya viene integrada una mini web que se arma con los productos de tu stock y la podés compartir enseguida.
                  </p>
                  <p className="text-gp-neutral-600">
                    Tus clientes ven lo que vendés, eligen productos y te llega el pedido directo por WhatsApp.
                  </p>

                  <div className="grid gap-3 pt-2 sm:grid-cols-2">
                    {[
                      "Se cargan los productos de tu stock",
                      "Tiene categorías para ordenar mejor",
                      "Te da un link para redes sociales",
                      "Te da un link para pasar a clientes",
                      "Tiene carrito de compras",
                      "Los pedidos te llegan a tu WhatsApp",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-2 rounded-xl bg-white/80 p-3 shadow-sm">
                        <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-gp-secondary" />
                        <p className="text-sm font-medium text-gp-neutral-700">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid gap-4">
                  <div className="rounded-2xl bg-white p-5 shadow-sm">
                    <p className="mb-2 font-semibold text-gp-neutral-900">Cómo la usan tus clientes</p>
                    <p className="text-sm leading-relaxed text-gp-neutral-600">
                      Entran desde un link, miran categorías, agregan productos al carrito y te mandan el pedido directo.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-white p-5 shadow-sm">
                    <p className="mb-2 font-semibold text-gp-neutral-900">Cómo la compartís</p>
                    <p className="text-sm leading-relaxed text-gp-neutral-600">
                      La podés poner en Instagram, Facebook, estados de WhatsApp o mandarla directo a cada cliente.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-gp-primary-100 bg-gp-primary-50 p-5 shadow-sm">
                    <p className="mb-2 font-semibold text-gp-primary-900">Lo importante</p>
                    <p className="text-sm leading-relaxed text-gp-primary-800">
                      No necesitás contratar otra web aparte. Ya viene integrada dentro del sistema.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="como-funciona" className="py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gp-primary-900 to-gp-accent-700 px-6 py-16 text-center shadow-2xl md:px-16 md:py-24">
              <div className="absolute left-0 top-0 -ml-20 -mt-20 h-96 w-96 rounded-full bg-gp-accent/20 opacity-30 blur-3xl" />
              <div className="absolute bottom-0 right-0 -mb-20 -mr-20 h-96 w-96 rounded-full bg-gp-primary/20 opacity-30 blur-3xl" />

              <div className="relative z-10 mx-auto max-w-4xl space-y-10">
                <div className="inline-block">
                  <div className="inline-flex items-center rounded-full border border-white/10 bg-white/10 px-6 py-2 shadow-lg backdrop-blur-sm">
                    <span className="text-sm font-bold uppercase tracking-wide text-gp-accent-300 md:text-base">
                      Tomá el control de tu negocio
                    </span>
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-4xl font-bold uppercase tracking-tight text-white md:text-6xl">Una herramienta simple</h3>
                  <p className="text-2xl font-bold uppercase text-gp-accent-200 md:text-3xl">Para vender más y vivir más tranquilo</p>
                </div>

                <div className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                  <p className="text-lg leading-relaxed text-white md:text-xl">
                    Hacé una venta en pocos pasos, controlá tu stock al instante y mirá tus ganancias reales desde el celular.
                    <br className="my-2 block" />
                    <span className="font-bold uppercase text-gp-accent-200">Sin complicaciones, pensado para dueños de comercios.</span>
                  </p>
                </div>

                <div className="pt-4">
                  <Link
                    href="https://wa.me/3416171435?text=¡Hola!%20Quiero%20ordenar%20mi%20negocio%20con%20GestiónPro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-16 items-center justify-center rounded-xl bg-gp-accent px-10 text-lg font-bold text-white shadow-[0_0_30px_rgba(234,88,12,0.3)] transition-all duration-300 hover:scale-105 hover:bg-gp-accent-700 hover:shadow-[0_0_40px_rgba(234,88,12,0.5)]"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    QUIERO EMPEZAR AHORA
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gp-neutral-50 py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-gp-neutral-900 sm:text-4xl md:text-5xl">
                EMPEZÁ HOY MISMO EN 3 PASOS
              </h2>
              <p className="mx-auto max-w-[800px] text-lg text-gp-neutral-600">
                Es tan fácil que no lo vas a poder creer.
              </p>
            </div>

            <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3">
              {steps.map((step) => (
                <div key={step.title} className="p-6 text-center">
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gp-accent-100">
                    <step.icon className="h-8 w-8 text-gp-accent" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-gp-neutral-900">{step.title}</h3>
                  <p className="text-sm text-gp-neutral-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="precios" className="bg-gp-neutral-50 py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="mb-16 text-center">
              <Badge className="mb-4 bg-gp-accent px-4 py-1 text-xs font-bold uppercase tracking-widest text-white">
                Inversión inteligente
              </Badge>
              <h2 className="mb-4 text-3xl font-bold uppercase tracking-tight text-gp-neutral-900 sm:text-4xl md:text-5xl">
                Un precio que se paga solo
              </h2>
              <p className="mx-auto max-w-[800px] text-lg font-medium italic text-gp-neutral-600">
                Con solo evitar un precio mal cobrado, un fiado olvidado o mercadería perdida por desorden, ya podés recuperar más que el costo mensual de GestiónPro.
              </p>
            </div>

            <div className="flex justify-center">
              <Card className="w-full max-w-lg border-4 border-gp-accent bg-white shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
                <CardHeader className="pb-6 pt-10 text-center">
                  <Badge className="mx-auto mb-4 bg-gp-primary px-6 py-2 text-sm font-bold text-white">Primer mes gratis</Badge>
                  <CardTitle className="mb-2 text-3xl font-bold uppercase text-gp-neutral-900">Plan simple para comercios</CardTitle>
                  <p className="font-medium italic text-gp-neutral-600">Sin vueltas ni costos ocultos</p>
                </CardHeader>
                <CardContent className="px-8 pb-10">
                  <div className="mb-10 text-center">
                    <div className="flex flex-col items-center gap-3">
                      <div className="flex w-full flex-col items-center rounded-3xl border-2 border-gp-secondary-300 bg-gp-secondary-50 px-6 py-4">
                        <span className="mb-1 text-xs font-black uppercase tracking-widest text-gp-secondary-700">🎁 Primer mes</span>
                        <span className="text-6xl font-black text-gp-secondary">$0</span>
                        <span className="mt-1 text-sm font-semibold text-gp-secondary-600">Completamente gratis</span>
                      </div>
                      <span className="text-lg font-bold text-gp-neutral-400">↓ luego</span>
                      <div className="flex items-baseline justify-center rounded-2xl border-2 border-gp-accent-100 bg-gp-accent-50 px-6 py-3">
                        <span className="text-4xl font-black text-gp-accent">$25.000</span>
                        <span className="ml-1 text-lg font-bold text-gp-accent-700">/mes</span>
                      </div>
                    </div>
                  </div>

                  <ul className="mb-10 space-y-5">
                    {[
                      { t: "Sabés cuánto ganás por día al instante", d: "Se terminó el 'creo que gané plata'" },
                      { t: "No perdés más stock", d: "Vas a saber qué tenés y qué te falta sin dar vueltas" },
                      { t: "Tenés todo ordenado en el celu", d: "Dejá el cuaderno y buscá todo en un click" },
                      { t: "Vendés más tranquilo", d: "Atendé más rápido y sin errores de precio" },
                    ].map((feature) => (
                      <li key={feature.t} className="flex items-start space-x-3">
                        <CheckCircle className="mt-0.5 h-6 w-6 shrink-0 text-gp-olive" />
                        <div>
                          <p className="font-bold leading-tight text-gp-neutral-900">{feature.t}</p>
                          <p className="text-sm italic text-gp-neutral-500">{feature.d}</p>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <div className="space-y-4">
                    <div className="rounded-2xl border border-gp-primary-100 bg-gp-primary-50 p-5 text-center text-sm font-medium italic text-gp-primary-900 md:text-base">
                      “Con solo <strong>1 error de stock</strong> o <strong>un precio mal cobrado</strong> ya perdés más plata que el costo mensual de GestiónPro.”
                    </div>

                    <Link
                      href="https://wa.me/3416171435?text=¡Hola!%20Quiero%20probar%20GestiónPro%2030%20días%20gratis"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-center rounded-2xl bg-gp-olive py-6 text-xl font-black uppercase tracking-wide text-white shadow-[0_10px_20px_rgba(91,137,7,0.3)] transition-all duration-300 hover:scale-105 hover:bg-gp-olive-700 hover:shadow-[0_15px_30px_rgba(91,137,7,0.5)]"
                    >
                      <MessageCircle className="mr-2 h-6 w-6" />
                      Probar 30 días gratis
                    </Link>

                    <div className="grid grid-cols-2 gap-2 pt-2 text-center">
                      <div className="rounded-lg border border-gp-neutral-200 bg-gp-neutral-100 py-2 text-xs font-bold text-gp-neutral-600">
                        🎁 1er mes gratis
                      </div>
                      <div className="rounded-lg border border-gp-neutral-200 bg-gp-neutral-100 py-2 text-xs font-bold text-gp-neutral-600">
                        🤝 Sin contratos raros
                      </div>
                      <div className="col-span-2 rounded-lg border border-gp-primary-100 bg-gp-primary-50 py-2 text-xs font-bold text-gp-primary-600">
                        🚀 Te ayudamos por WhatsApp para que puedas empezar
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="mb-16 text-center">
              <Badge variant="outline" className="mb-4">
                Tranquilidad
              </Badge>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-gp-neutral-900 sm:text-4xl md:text-5xl">
                Nuestro compromiso con vos
              </h2>
              <p className="mx-auto max-w-[800px] text-lg text-gp-neutral-600">
                Si sabés usar WhatsApp, podés usar GestiónPro.
                <br />
                No necesitás ser experto en computación. GestiónPro está pensado para que puedas ordenar tu negocio de forma simple y con ayuda por WhatsApp.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: MessageCircle, title: "Soporte humano", description: "Hablás con personas reales que te ayudan por WhatsApp." },
                { icon: Shield, title: "Tus datos seguros", description: "Toda tu información protegida y siempre disponible." },
                { icon: Headset, title: "Te enseñamos todo", description: "Te explicamos paso a paso cómo usarlo en tu negocio." },
                { icon: Handshake, title: "Chau complicaciones", description: "Si no te sirve, te vas cuando quieras. Sin contratos raros." },
              ].map((item) => (
                <div key={item.title} className="p-3 text-center md:p-6">
                  <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gp-accent-100 md:mb-4 md:h-16 md:w-16">
                    <item.icon className="h-6 w-6 text-gp-accent md:h-8 md:w-8" />
                  </div>
                  <h3 className="mb-1 text-sm font-semibold text-gp-neutral-900 md:mb-2 md:text-lg">{item.title}</h3>
                  <p className="text-xs text-gp-neutral-600 md:text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gp-neutral-50 py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="mb-16 text-center">
              <Badge variant="outline" className="mb-4">
                FAQ
              </Badge>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-gp-neutral-900 sm:text-4xl md:text-5xl">
                Preguntas frecuentes
              </h2>
              <p className="mx-auto max-w-[800px] text-lg text-gp-neutral-600">
                Encontrá respuestas a las dudas más comunes sobre GestiónPro.
              </p>
            </div>

            <Accordion type="single" collapsible className="mx-auto w-full max-w-3xl">
              {faqs.map((faq, index) => (
                <AccordionItem key={faq.question} value={`item-${index + 1}`}>
                  <AccordionTrigger className="text-left text-lg font-semibold text-gp-neutral-900 hover:text-gp-accent">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="leading-relaxed text-gp-neutral-700">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="mb-16 text-center">
              <Badge variant="outline" className="mb-4">
                Casos reales
              </Badge>
              <h2 className="text-3xl font-bold uppercase text-gp-neutral-900">
                Lo que ya está resolviendo GestiónPro
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {cases.map((item) => (
                <Card key={item.title} className="border-none bg-gp-neutral-50 shadow-sm">
                  <CardHeader>
                    <Badge className="mb-2 w-fit bg-gp-primary text-white">
                      {item.title.includes("Cliente real") ? "Cliente real" : "Caso de uso"}
                    </Badge>
                    <CardTitle className="text-xl text-gp-neutral-900">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-gp-neutral-700">{item.text}</CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-gp-primary to-gp-accent py-20 text-white md:py-32">
          <div className="container px-4 text-center md:px-6">
            <div className="mx-auto max-w-3xl space-y-8">
              <Badge variant="secondary" className="border-gp-accent-300 bg-white/20 text-white hover:bg-white/30">
                Probalo sin complicarte
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">¿Listo para ordenar tu comercio?</h2>
              <p className="text-xl leading-relaxed text-white/90">
                Probá GestiónPro 30 días gratis y empezá a controlar ventas, stock, fiados y ganancias desde el celular.
                <br />
                Te ayudamos por WhatsApp. Sin complicaciones.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Link
                  href="https://wa.me/3416171435?text=¡Hola!%20Quiero%20probar%20GestiónPro%20gratis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl bg-gp-olive px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-gp-olive-700 hover:shadow-xl"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Quiero probarlo gratis
                </Link>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-white/80">
                <div className="flex items-center space-x-1">
                  <CheckCircle className="h-4 w-4" />
                  <span>Primer mes gratis</span>
                </div>
                <div className="flex items-center space-x-1">
                  <CheckCircle className="h-4 w-4" />
                  <span>Te ayudamos por WhatsApp</span>
                </div>
                <div className="flex items-center space-x-1">
                  <CheckCircle className="h-4 w-4" />
                  <span>Soporte incluido</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {showDemo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
            <div className="relative flex max-h-[90vh] w-full max-w-7xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl">
              <div className="flex-shrink-0 border-b bg-gradient-to-r from-gp-primary to-gp-secondary p-4 text-white md:p-6">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center space-x-3">
                    <Image src="/logonuevo.png" width={32} height={32} alt="Logo Gestión Pro" className="h-8 w-8" />
                    <h3 className="text-lg font-bold md:text-xl">Mirá lo fácil que es - Gestión Pro</h3>
                  </div>
                  <button
                    onClick={() => setShowDemo(false)}
                    className="rounded-lg p-2 transition-colors hover:bg-white/20"
                    aria-label="Cerrar demo"
                  >
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto">
                <div className="p-4 md:p-8">
                  <div className="grid gap-6 xl:grid-cols-2 xl:gap-8">
                    <div className="space-y-6">
                      <div className="text-center">
                        <h4 className="mb-2 text-xl font-bold text-gp-neutral-900 md:text-2xl">Mirá lo fácil que es manejar tu negocio</h4>
                        <p className="mb-4 text-sm text-gp-neutral-600 md:text-base">Tocá los botones de abajo y comprobá que es simple de verdad.</p>
                        <Badge className="animate-pulse bg-red-600 text-white">En poco tiempo ya lo estás usando</Badge>
                      </div>

                      <div className="grid gap-3 sm:grid-cols-2 md:gap-4">
                        {demoModules.map((module) => (
                          <button
                            key={module.id}
                            onClick={() => setCurrentDemoStep(module.id)}
                            className={`rounded-xl border-2 p-3 text-left transition-all duration-300 md:p-4 ${
                              currentDemoStep === module.id
                                ? "border-gp-primary bg-gp-primary-50"
                                : "border-gp-neutral-200 hover:border-gp-neutral-300"
                            }`}
                          >
                            <div className="flex items-center space-x-3">
                              <div className="rounded-lg bg-gp-primary-100 p-2">
                                <module.icon className="h-4 w-4 text-gp-primary md:h-5 md:w-5" />
                              </div>
                              <div>
                                <h5 className="text-sm font-semibold text-gp-neutral-900 md:text-base">{module.title}</h5>
                                <p className="text-xs text-gp-neutral-600 md:text-sm">{module.description}</p>
                              </div>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="flex min-h-[300px] items-center justify-center rounded-xl bg-gp-neutral-50 p-4 md:min-h-[400px] md:p-6">
                      {currentDemoStep === 0 && (
                        <div className="w-full space-y-4">
                          <h5 className="mb-4 text-base font-bold text-gp-neutral-900 md:text-lg">📦 Gestión de inventario</h5>
                          <div className="space-y-3">
                            <div className="rounded-lg bg-white p-3 shadow-sm md:p-4">
                              <div className="flex items-center justify-between">
                                <span className="text-sm font-medium md:text-base">Martillo Galponero</span>
                                <span className="text-sm font-bold text-gp-secondary md:text-base">Stock: 25</span>
                              </div>
                              <div className="mt-2 h-2 w-full rounded-full bg-gp-neutral-200">
                                <div className="h-2 rounded-full bg-gp-secondary" style={{ width: "60%" }} />
                              </div>
                            </div>
                            <div className="rounded-lg bg-white p-3 shadow-sm md:p-4">
                              <div className="flex items-center justify-between">
                                <span className="text-sm font-medium md:text-base">Pintura Látex 20L</span>
                                <span className="text-sm font-bold text-red-500 md:text-base">Stock: 3 ⚠️</span>
                              </div>
                              <div className="mt-2 h-2 w-full rounded-full bg-gp-neutral-200">
                                <div className="h-2 rounded-full bg-red-500" style={{ width: "15%" }} />
                              </div>
                            </div>
                            <div className="rounded-lg border border-gp-primary-200 bg-gp-primary-50 p-3">
                              <p className="text-xs text-gp-primary-800 md:text-sm">
                                🔔 <strong>Alerta automático:</strong> Pintura Látex necesita reposición
                              </p>
                            </div>
                          </div>
                        </div>
                      )}

                      {currentDemoStep === 1 && (
                        <div className="w-full space-y-4">
                          <h5 className="mb-4 text-base font-bold text-gp-neutral-900 md:text-lg">🛒 Proceso de ventas</h5>
                          <div className="space-y-3">
                            <div className="rounded-lg bg-white p-3 shadow-sm md:p-4">
                              <div className="mb-2 flex items-center justify-between">
                                <span className="text-sm font-medium md:text-base">1. Seleccionar producto</span>
                                <CheckCircle className="h-4 w-4 text-gp-secondary md:h-5 md:w-5" />
                              </div>
                              <div className="text-xs text-gp-neutral-600 md:text-sm">Taladro Percutor - $85.000</div>
                            </div>
                            <div className="rounded-lg bg-white p-3 shadow-sm md:p-4">
                              <div className="mb-2 flex items-center justify-between">
                                <span className="text-sm font-medium md:text-base">2. Confirmar cantidad</span>
                                <CheckCircle className="h-4 w-4 text-gp-secondary md:h-5 md:w-5" />
                              </div>
                              <div className="text-xs text-gp-neutral-600 md:text-sm">Cantidad: 1 unidad</div>
                            </div>
                            <div className="rounded-lg bg-white p-3 shadow-sm md:p-4">
                              <div className="mb-2 flex items-center justify-between">
                                <span className="text-sm font-medium md:text-base">3. Generar ticket</span>
                                <div className="h-4 w-4 animate-spin rounded-full border-2 border-gp-secondary border-t-transparent md:h-5 md:w-5" />
                              </div>
                              <div className="text-xs text-gp-neutral-600 md:text-sm">Procesando</div>
                            </div>
                            <div className="rounded-lg border border-gp-secondary-200 bg-gp-secondary-50 p-3">
                              <p className="text-xs text-gp-secondary-800 md:text-sm">
                                ✅ <strong>Venta completada:</strong> Total $85.000
                              </p>
                            </div>
                          </div>
                        </div>
                      )}

                      {currentDemoStep === 2 && (
                        <div className="w-full space-y-4">
                          <h5 className="mb-4 text-base font-bold text-gp-neutral-900 md:text-lg">📄 Emisión de comprobantes</h5>
                          <div className="rounded-lg border bg-white p-4 shadow-sm md:p-6">
                            <div className="mb-4 text-center">
                              <div className="inline-flex items-center space-x-2 text-gp-accent">
                                <FileText className="h-5 w-5 md:h-6 md:w-6" />
                                <span className="text-sm font-bold md:text-base">COMPROBANTE #001234</span>
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
                              <div className="mt-2 border-t pt-2">
                                <div className="flex justify-between">
                                  <span>Martillo Galponero x1</span>
                                  <span>$15.000</span>
                                </div>
                                <div className="mt-2 flex justify-between text-base font-bold md:text-lg">
                                  <span>Total:</span>
                                  <span>$15.000</span>
                                </div>
                              </div>
                            </div>
                            <div className="mt-4 flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2">
                              <Button size="sm" className="flex-1 bg-gp-accent text-xs hover:bg-gp-accent-700 md:text-sm">
                                📧 Enviar por Email
                              </Button>
                              <Button size="sm" variant="outline" className="flex-1 bg-transparent text-xs md:text-sm">
                                📱 WhatsApp
                              </Button>
                            </div>
                          </div>
                        </div>
                      )}

                      {currentDemoStep === 3 && (
                        <div className="w-full space-y-4">
                          <h5 className="mb-4 text-base font-bold text-gp-neutral-900 md:text-lg">📊 Ganancias al día</h5>
                          <div className="space-y-4">
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                              <div className="rounded-lg bg-white p-3 text-center shadow-sm md:p-4">
                                <div className="text-xl font-bold text-gp-primary md:text-2xl">$450K</div>
                                <div className="text-xs text-gp-neutral-600 md:text-sm">Ventas del mes</div>
                                <div className="text-xs text-gp-secondary">↗️ +15%</div>
                              </div>
                              <div className="rounded-lg bg-white p-3 text-center shadow-sm md:p-4">
                                <div className="text-xl font-bold text-gp-secondary md:text-2xl">127</div>
                                <div className="text-xs text-gp-neutral-600 md:text-sm">Productos vendidos</div>
                                <div className="text-xs text-gp-secondary">↗️ +8%</div>
                              </div>
                            </div>
                            <div className="rounded-lg bg-white p-3 shadow-sm md:p-4">
                              <div className="mb-2 text-xs font-medium md:text-sm">Lo que más sale</div>
                              <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                  <span className="text-xs md:text-sm">Tornillos 2"</span>
                                  <div className="flex items-center space-x-2">
                                    <div className="h-2 w-16 rounded-full bg-gp-neutral-200 md:w-20">
                                      <div className="h-2 rounded-full bg-gp-primary" style={{ width: "80%" }} />
                                    </div>
                                    <span className="text-xs">45</span>
                                  </div>
                                </div>
                                <div className="flex items-center justify-between">
                                  <span className="text-xs md:text-sm">Pintura Látex 20L</span>
                                  <div className="flex items-center space-x-2">
                                    <div className="h-2 w-16 rounded-full bg-gp-neutral-200 md:w-20">
                                      <div className="h-2 rounded-full bg-gp-secondary" style={{ width: "60%" }} />
                                    </div>
                                    <span className="text-xs">32</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {currentDemoStep === 4 && (
                        <div className="w-full space-y-4">
                          <h5 className="mb-4 text-base font-bold text-gp-neutral-900 md:text-lg">🤝 Control de fiados</h5>
                          <div className="space-y-3">
                            <div className="rounded-lg bg-white p-3 shadow-sm md:p-4">
                              <div className="flex items-center justify-between">
                                <span className="text-sm font-medium md:text-base">Juan Pérez</span>
                                <span className="text-sm font-bold text-red-600 md:text-base">Debe: $12.500</span>
                              </div>
                              <p className="mt-1 text-xs text-gp-neutral-500">Última compra: Hace 3 días</p>
                            </div>
                            <div className="rounded-lg bg-white p-3 shadow-sm md:p-4">
                              <div className="flex items-center justify-between">
                                <span className="text-sm font-medium md:text-base">Taller Los Primos</span>
                                <span className="text-sm font-bold text-red-600 md:text-base">Debe: $45.200</span>
                              </div>
                              <p className="mt-1 text-xs text-gp-neutral-500">Última compra: Hoy</p>
                            </div>
                            <div className="rounded-lg border border-gp-secondary-200 bg-gp-secondary-50 p-3">
                              <p className="text-xs text-gp-secondary-800 md:text-sm">
                                ✅ <strong>¡Cobro fácil!</strong> Tocás un botón y le mandás el resumen por WhatsApp.
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 border-t bg-white p-4 md:p-6">
                <div className="text-center">
                  <p className="mb-4 text-sm text-gp-neutral-600 md:text-base">¿Viste lo simple que es? Empezá hoy mismo en tu negocio.</p>
                  <div className="flex flex-col justify-center gap-3 sm:flex-row">
                    <Link
                      href="https://wa.me/3416171435?text=¡Hola!%20Vi%20la%20demo%20y%20quiero%20empezar%20con%20GestiónPro"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setShowDemo(false)}
                      className="inline-flex items-center justify-center rounded-md bg-gp-olive px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-gp-olive-700 md:text-base"
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Quiero empezar ahora
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

        <Link
          href="https://wa.me/3416171435?text=¡Hola!%20Me%20interesa%20GestiónPro"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-gp-olive text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-gp-olive-700 animate-bounce-subtle"
          aria-label="Contactar por WhatsApp"
        >
          <svg viewBox="0 0 24 24" className="h-10 w-10 fill-current" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </Link>
      </main>

      <footer className="border-t bg-gradient-to-br from-gp-neutral-100 via-gp-neutral-200 to-gp-neutral-300 text-gp-neutral-800">
        <div className="container px-4 py-8 md:px-6 md:py-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Image src="/logonuevo.png" width={60} height={60} alt="Logo Gestión Pro" className="h-16 w-auto" />
              </div>
              <p className="text-sm leading-relaxed text-gp-neutral-600">
                La herramienta simple para que comercios con stock ordenen ventas, precios, fiados y ganancias sin complicaciones.
              </p>
              <div className="space-y-1 text-sm text-gp-neutral-600">
                <p>gestionpro.pro</p>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <a href="mailto:gestionproinfo@gmail.com" className="transition-colors hover:text-gp-primary">
                    gestionproinfo@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <MessageCircle className="h-4 w-4" />
                  <a href="https://wa.me/3416171435" className="transition-colors hover:text-gp-primary">
                    +54 9 341 617-1435
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-4 font-semibold text-gp-neutral-900">Producto</h3>
              <ul className="mb-6 space-y-2 text-sm text-gp-neutral-600">
                <li>
                  <Link href="#como-funciona" className="transition-colors hover:text-gp-primary">
                    Cómo funciona
                  </Link>
                </li>
                <li>
                  <Link href="#precios" className="transition-colors hover:text-gp-primary">
                    Precios
                  </Link>
                </li>
              </ul>

              <h4 className="mb-2 text-sm font-semibold text-gp-neutral-900">API</h4>
              <p className="text-sm text-gp-neutral-600">
                Para usar nuestra API en tu propio sistema contacta a{" "}
                <a href="mailto:gestionproinfo@gmail.com" className="text-gp-primary hover:underline">
                  gestionproinfo@gmail.com
                </a>
              </p>
            </div>

            <div>
              <h3 className="mb-4 font-semibold text-gp-neutral-900">Trabaja con nosotros</h3>
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

          <div className="mt-12 flex flex-col items-center justify-between border-t border-gp-neutral-300 pt-8 sm:flex-row">
            <p className="text-sm text-gp-neutral-600">© 2025 Gestión Pro Todos los derechos reservados</p>
            <div className="mt-4 flex space-x-6 sm:mt-0">
              <Link href="#" className="text-sm text-gp-neutral-600 transition-colors hover:text-gp-primary">
                Política de Privacidad
              </Link>
              <Link href="#" className="text-sm text-gp-neutral-600 transition-colors hover:text-gp-primary">
                Términos de Servicio
              </Link>
              <Link href="#" className="text-sm text-gp-neutral-600 transition-colors hover:text-gp-primary">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
