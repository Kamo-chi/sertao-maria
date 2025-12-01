import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Carousel from './components/Carousel'
import Contact from './components/Contact'
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

        <section id="noticias" className="bg-gray-50 py-20">
          <div className="mx-auto px-6 max-w-screen-2xl">
            <h2 className="text-3xl font-bold mb-6">Notícias</h2>
            <p>Depoimentos de clientes podem ser colocados aqui.</p>
          </div>
        </section>

        <section id="premiacoes" className="py-20">
          <div className="mx-auto px-6 max-w-screen-2xl">
            <h2 className="text-3xl font-bold mb-6">Premiações</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            </div>
          </div>
        </section>

        <Contact />

      </main>
      <Footer />
    </div>
  )
}
