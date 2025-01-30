import { CheckCircle } from "lucide-react"

export function BonusSection() {
    const bonuses = ["BÔNUS 1 - Acesso ao meu segundo curso: SOFT SKILLS EM ENTREVISTAS", "BÔNUS 2 - MEU LIVRO PARA TE DAR MAIS EXPERIÊNCIA. ENTREVISTAS: DOMINE E CONQUISTE", "BÔNUS 3 - PROJETO FULL STACK PARA TURBINAR AINDA MAIS SEU PORTIFÓLIO"]
  
    return (
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">BÔNUS!</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {bonuses.map((bonus, index) => (
              <div key={index} className="card-gradient p-6 rounded-2xl">
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-[#5CE1E6] mr-4" />
                  <h3 className="text-xl font-bold">{bonus}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }