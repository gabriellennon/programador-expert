import { Briefcase, DollarSign, Globe, MapPin } from "lucide-react"

export function BenefitsSection() {
    const benefits = [
      { icon: MapPin, title: "Liberdade Geográfica", description: "Trabalhe em qualquer lugar do mundo" },
      { icon: DollarSign, title: "Salários Atrativos", description: "Salários altos e independência financeira" },
      { icon: Globe, title: "Empregos pelo mundo", description: "Ganhe em dólar e trabalhe no Brasil" },
      { icon: Briefcase, title: "Carreira Valorizada", description: "Alta demanda de mercado, não fique sem vaga" },
    ]
  
    return (
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-3 text-lg">
            <p>
              Não existe área mais promissora e com mais oportunidades do que a área de tecnologia. Saiba que, se você é um profissional de tecnologia ou quer se tornar um, você está em uma das melhores épocas para evoluir na carreira e, também, entrar na área.
            </p>
            <p>
              O grande déficit de profissionais faz com que aqueles que estão preparados, que possuem as habilidades que o mercado está procurando, sejam muito raros e bastante valorizados. A área de tecnologia pode te proporcionar:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="card-gradient p-6 rounded-2xl">
                <benefit.icon className="w-12 h-12 text-[#5CE1E6] mb-4" />
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }