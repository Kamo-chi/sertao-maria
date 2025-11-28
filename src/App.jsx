import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Carousel from './components/Carousel'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './components/ui/accordion'
import CharactersCarousel from './components/CharactersCarousel'
import characters from './data/characters'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col text-gray-800">
      <Header />
      <main className="flex-grow">
        <section id="hero" className="relative bg-gradient-to-r from-sky-500 to-indigo-600 text-white h-96 md:h-[520px]">
          {/* Title centered at top */}
            <h1
              className="absolute top-6 left-1/2 -translate-x-1/2 z-50 font-extrabold text-white pointer-events-none whitespace-nowrap"
              style={{ fontSize: 'clamp(1.25rem, 4vw, 2.5rem)' }}
            >
              Sertão Maria
            </h1>
          {/* Carousel fills the section */}
          <div className="absolute inset-0">
            <Carousel
              images={[
                { src: 'https://picsum.photos/id/1018/1600/900', alt: 'Paisagem 1' },
                { src: 'https://picsum.photos/id/1025/1600/900', alt: 'Paisagem 2' },
                { src: 'https://picsum.photos/id/1037/1600/900', alt: 'Paisagem 3' },
              ]}
              interval={6000}
            />
          </div>
        </section>

        <section id="sobre-nos" className="bg-gray-50 py-20">
          <div className="mx-auto px-6 max-w-screen-2xl">
            <h2 className="text-3xl font-bold mb-6">Sobre Nós</h2>

            {/* Accordion using shadcn components */}
            <div className="max-w-5xl">
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>Nossa Missão</AccordionTrigger>
                  <AccordionContent>
                    <p>
                      Nossa missão é empoderar mulheres do Sertão por meio de
                      iniciativas culturais, educacionais e de geração de renda.
                      Trabalhamos com comunidades locais para criar oportunidades
                      sustentáveis e preservar tradições.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>Nossa História</AccordionTrigger>
                  <AccordionContent>
                    <p>
                      Fundada por um coletivo de mulheres da região, nossa
                      organização cresceu a partir de pequenos projetos locais
                      para uma rede de apoio que alcança diversas comunidades.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>Como Participar</AccordionTrigger>
                  <AccordionContent>
                    <p>
                      Você pode participar como voluntária, parceira ou apoiando
                      nossos eventos. Entre em contato via formulário ou redes
                      sociais para saber mais.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        <section id="personagens" className="py-12">
          <div className="mx-auto px-6 max-w-screen-2xl">
            <CharactersCarousel cards={characters} />
          </div>
        </section>

        <section id="testimonials" className="bg-gray-50 py-20">
          <div className="mx-auto px-6 max-w-screen-2xl">
            <h2 className="text-3xl font-bold mb-6">Testimonials</h2>
            <p>Depoimentos de clientes podem ser colocados aqui.</p>
          </div>
        </section>

        <section id="pricing" className="py-20">
          <div className="mx-auto px-6 max-w-screen-2xl">
            <h2 className="text-3xl font-bold mb-6">Pricing</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 border rounded">Plano Básico</div>
              <div className="p-6 border rounded">Plano Pro</div>
              <div className="p-6 border rounded">Plano Enterprise</div>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-indigo-600 text-white py-20">
          <div className="mx-auto px-6 max-w-screen-2xl">
            <h2 className="text-3xl font-bold mb-4">Contact</h2>
            <form className="max-w-2xl">
              <label className="block mb-2">
                <span className="text-sm">Nome</span>
                <input className="mt-1 block w-full rounded px-3 py-2 text-gray-800" placeholder="Seu nome" />
              </label>
              <label className="block mb-2">
                <span className="text-sm">Email</span>
                <input className="mt-1 block w-full rounded px-3 py-2 text-gray-800" placeholder="seu@exemplo.com" />
              </label>
              <label className="block mb-4">
                <span className="text-sm">Mensagem</span>
                <textarea className="mt-1 block w-full rounded px-3 py-2 text-gray-800" rows="4" placeholder="Escreva sua mensagem"></textarea>
              </label>
              <button type="submit" className="bg-white text-indigo-700 px-4 py-2 rounded font-semibold">Enviar</button>
            </form>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}
