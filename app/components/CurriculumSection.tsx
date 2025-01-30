import Link from "next/link"

export function CurriculumSection() {
    const modules = [
      { title: "HTML & CSS", description: "Aprenderemos a base do universo de programação com as tecnologias base mais utilizadas, HTML e CSS, de um jeito super simples e direto." },
      { title: "JavaScript", description: "A linguagem mais popular e aquecida do mundo. Faltam profissionais no mercado com conhecimento nessa linguagem. Aprenderemos ela de forma direta e como o mercado utiliza" },
      { title: "Git & GitHub", description: "Como versionar nosso código e deixar ele acessivel para o mundo e para os recrutadores conseguirem ver que temos o conhecimento." },
      { title: "CSS", description: "Você aprenderá como utilizar essa tecnologia para estilizar seus apps. Como deixá-los mais bonitos e modernos como o mercado pede." },
      { title: "Metodologia Ágil", description: "Nesse módulo sairemos um pouco da parte técnica e aprenderemos algo que os recrutadores perguntam muito, que é sobre as metodologias ágeis de trabalho. Você aprenderá como um time de tecnologia trabalha." },
      { title: "Banco de Dados e Node", description: "Você aprenderá como construir um back-end que será responsável por gaurdar dados importantes dos sistemas e como isso é feito." },
      { title: "React", description: "Nesse módulo você aprenderá essa tecnologia para construir apps web. É uma tecnologia simples que o mercado de programação busca todos os dias por muitos profissionais que saibam ela. E você será um deles!" },
      { title: "Entrevistas e Portifólio", description: "Como se destacar e ser contratado rapidamente, mesmo sem experiência. O passo a passo para mandar bem em entrevistas e garantir sua primeira vaga e como turbinar e compartilhar seu portifólio para consquistar a sua vaga." },
    ]
  
    return (
      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-4 flex flex-col items-center gap-3">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">O que você vai aprender?</h2>
          <div className="max-w-3xl mx-auto">
            {modules.map((module, index) => (
              <div key={index} className="card-gradient p-6 rounded-2xl mb-4">
                <h3 className="text-xl font-bold mb-2">{module.title}</h3>
                <p className="text-gray-400">{module.description}</p>
              </div>
            ))}
          </div>
          <Link href="https://pay.kiwify.com.br/J99DAFa" target="_blank" className="bg-[#00856F] text-white font-bold py-4 px-8 rounded-full text-lg hover:opacity-90 transition duration-300">
            👉 QUERO APRENDER A PROGRAMAR AGORA!
          </Link>
        </div>
      </section>
    )
  }