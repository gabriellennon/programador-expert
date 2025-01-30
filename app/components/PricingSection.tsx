import Image from "next/image";
import GarantiaPNG from '@/app/assets/garantia.png'
import GarantiasPNG from '@/app/assets/garantias.png'
import Link from "next/link";

export function PricingSection() {
    return (
      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">Special Offer</h2>
            <div className="card-gradient p-8 rounded-2xl">
              <p>Super desconto de <span className="text-[#D20000]">R$ 397</span> por apenas:</p>
              <div className="mb-6 mt-2">
                <p className="text-base">12x</p>
                <p className="text-5xl font-bold mb-2 text-[#43cc8f] drop-shadow-[0_0_8px_#20E800]">R$ 15,00</p>
                <p className="text-xl">ou R$ 149,90</p>
              </div>
              <Link href="https://pay.kiwify.com.br/J99DAFa" target="_blank" className="button-gradient text-white font-bold py-4 px-8 rounded-full text-lg hover:opacity-90 transition duration-300 w-full">
                👉 Sim! Eu quero aprender programação e mudar minha vida!
              </Link>
              <div className="mt-6 flex flex-col  gap-2 items-center justify-center">
                <Image
                  src={GarantiaPNG}
                  alt="Money back guarantee"
                  width={140}
                  height={140}
                  className="rounded-full"
                />
                <Image
                  src={GarantiasPNG}
                  alt="Money back guarantee"
                  width={240}
                  height={120}
                  className="rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }