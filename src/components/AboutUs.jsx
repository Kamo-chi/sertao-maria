import react from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './ui/accordion'

export default function AboutUs() {
    return (
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
    )
}