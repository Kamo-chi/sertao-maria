import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './ui/accordion'

export default function AboutUs({ bgClass = 'bg-gray-50', textClass = '' }) {
    return (
        <section id="sobre-nos" className={`${bgClass} py-20 ${textClass}`}>
          <div className="mx-auto px-6 max-w-screen-2xl">
            <h2 className="text-3xl font-bold mb-6">Quem Somos</h2>

            {/* Accordion using shadcn components */}
            <div className="max-w-5xl">
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>O que é o Sertão Maria - Memorial da Mulher Sertaneja?</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <p className="text-justify">
                      O Projeto surge em 2022, a partir das ações do Grupo de Pesquisa Vozes e Memórias do Sertão, vinculado ao OPAS - Observatório de Pesquisa Acadêmica dos Saberes e Fazeres do Sertão, do Instituto Artístico Cultural Sertão Vivo, e se desenvolve no âmbito do mestrado em Artes Cênicas pelo Célia Helena Centro de Arte e Educação, em parceria com a Fundação Escola Itaú Cultural. Possui como objeto de estudo os saberes e fazeres permeados pela oralidade, memória e ancestralidade das mestras de cultura do município de Paripiranga, sertão baiano partindo do entendimento de que a ancestralidade é um conceito que atravessa gerações, conectando o passado ao presente de maneira profunda e simbólica.
                      </p>
                      <p className="text-justify">
                      No contexto das tradições culturais, especialmente em comunidades rurais e sertanejas, ela surge como uma fonte inesgotável de sabedoria e um poderoso instrumento de expressão artística e a valorização do patrimônio imaterial; fortalece a identidade cultural e o pertencimento social, e a ausência de registros sistematizados sobre a cultura viva local, impede sua transmissão às futuras gerações. Assim A criação de um memorial digital permitirá ao povo do território protagonizar o registro e a reverberação de vozes, saberes e fazeres, de sua história oral e simbólica.
                      </p>
                      <p className="text-justify">
                      Um povo que não sente e não vivencia os frutos de suas próprias raízes, não encontra sentido de vida, uma vez que o futuro é o resultado do passado, e esse passado por sua vez, não deve ser cultuado como mera recordação e sim ser usado para o crescimento no presente, vislumbrando sempre o futuro. Nós não precisamos seguir presos às amarras do conservadorismo, ou enclausurados no passado. Mas precisamos ser legítimos, e só as raízes nos dão legitimidade.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>O que é o Vozes e Memórias do Sertão?</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <p className="text-justify">
                      O Vozes e Memórias do Sertão como grupo de pesquisa interdisciplinar surgiu em 2015, como proposta de iniciação Científica e ações de extensão do Centro Universitário AGES, que integrava a comunidade acadêmica ao território, tendo como resultado a criação de um acervo de memórias da história e da cultura local, sendo desvinculado da instituição em 2022.
                      </p>
                      <p className="text-justify">
                      No mesmo período, integrantes do Vozes e Memórias participam da criação do Instituto Sertão Vivo, e o grupo de pesquisa passa a integrar o observatório do instituto, reunindo acadêmicos, pesquisadores e estudantes mestrandos e doutorandos parceiros, vinculados a universidades públicas e privadas com o objetivo de investigar, preservar e valorizar a história, a cultura e as identidades do sertão baiano.
                      </p>
                      <p className="text-justify">
                      O grupo nasce nas entranhas do semiárido baiano, em Paripiranga; cidade interiorana de ancestralidade indígena, que sofre as consequências históricas e socioculturais de um processo colonizador cruel e dizimador dos saberes e da cultura dos Povos Originários.
                      </p>
                      <p className="text-justify">
                      Atua na interface entre pesquisa acadêmica e o desenvolvimento de projetos socioculturais no território, promovendo ações que fortalecem os laços entre universidades, Instituto Sertão Vivo e sociedade, e contribuindo para a democratização do acesso ao conhecimento histórico e cultural, e a reverberação de vozes no território.
                      </p>
                      <p className="text-justify">
                      Em 2025, a parceria do Instituto com a gestão pública, proporciona o desenvolvimento de projetos de pesquisa junto a Secretaria Municipal de Cultura (SECULT), voltados para ações de Educação Patrimonial, inventariação participativa dos bens culturais imateriais do município. Como etapa fundamental para a construção do Plano Municipal de Cultura e a criação de um Centro de Memória e Vivência Cultural no município. Uma proposta de pesquisa-ação de reconhecimento, valorização, reverberação e salvaguarda de práticas, saberes, celebrações, formas de expressão e lugares associados à identidade local.
                      </p>
                      <p className="text-justify">
                      As ações do Vozes e Memória fizeram surgir o Projeto Sertão Maria - Memorial Digital da Mulher Sertaneja, como uma ferramenta de educação Patrimonial e salvaguarda da memória.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>Objetivos</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <p className="text-justify">
                      Desenvolver mecanismos de reconhecimento, mapeamento, registro e fortalecimento e manutenção dos saberes e fazeres ancestrais das mulheres mestres da cultura popular, artesãs e benzedeiras, em comunidades rurais do município de Paripiranga, sertão da Bahia.
                      </p>
                      <p className="text-justify">Objetivos específicos:</p>
                      <p className="text-justify">• Espaços de reconhecimento, fortalecimento da arte e das raízes ancestrais das mulheres rurais, como instrumento de reverberação de vozes e rostos, corpos e pensamentos, saberes e fazeres, em sua grandiosidade, não só na aridez do Sertão, mas onde a tecnologia digital permitir alcance.</p>
                      <p className="text-justify">• Realizar mapeamento de mulheres artistas, mestras da cultura de Paripiranga/BA.</p>
                      <p className="text-justify">• Construção de Memorial Digital da Mulher Sertaneja.</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

              </Accordion>
              </div>
            </div>
          </section>
    )
}