import { Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function VideoSection() {
    return (
      <section className="py-20 gradient-bg flex flex-col items-center justify-center gap-4">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
            Descubra como sair do zero e ganhar R$7K por mês em tempo recorde!
          </h2>
          <iframe 
            className="w-full md:min-h-[600px]"
            src="https://www.youtube.com/embed/D3UcXOI6N_M?si=wowOCRejvoyaTHsF&controls=1&rel=0&modestbranding=1&disablekb=1" 
            title="YouTube video player" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
          ></iframe>
          {/* <div className="max-w-4xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden aspect-video">
              <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                <button className="w-20 h-20 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition">
                  <Play className="w-8 h-8 text-white" />
                </button>
              </div>
              <Image
                src="/placeholder.svg"
                alt="Course preview"
                width={1200}
                height={675}
                className="w-full h-full object-cover"
              />
            </div>
          </div> */}
        </div>
        <Link href="https://pay.kiwify.com.br/J99DAFa" target="_blank" className="bg-[#00856F] text-white font-bold py-4 px-8 rounded-full text-lg hover:opacity-90 transition duration-300">
          SIM! QUERO ME INSCREVER AGORA!
        </Link>
      </section>
    )
  }