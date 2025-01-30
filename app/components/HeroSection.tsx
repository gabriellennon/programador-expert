import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
    return (
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Aprenda a programar do zero e se torne um<span className="text-gradient"> desenvolvedor profissional em tempo recorde!</span>
              </h1>
              <p className="text-xl mb-8 text-gray-300">
                🚀  Mesmo sem <strong>NENHUMA experiência</strong>, você pode conquistar um salário inicial entre $3.000 e $7.000 mensais na indústria de tecnologia.
              </p>
              <p className="text-xl mb-8 text-gray-300">
                💻 Aprenda as habilidades que as empresas realmente buscam e conquiste sua vaga mais rápido do que imagina!
              </p>
              <Link href="https://pay.kiwify.com.br/J99DAFa" target="_blank" className="button-gradient text-white font-bold py-4 px-8 rounded-full text-lg hover:opacity-90 transition duration-300">
                👉 Sim! Quero começar agora!
              </Link>
            </div>
            {/* <div className="flex-1">
              <div className="relative rounded-[32px] overflow-hidden border-4 border-[#7B66FF]/20">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-29%20at%2022.03.22-n7iMUcwvjoSBmOTdN6OHj96B2GWlzc.png"
                  alt="Students learning programming"
                  width={600}
                  height={400}
                  className="object-cover"
                />
              </div>
            </div> */}
          </div>
        </div>
      </section>
    )
  }