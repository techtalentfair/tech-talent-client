import Image from "next/image";

export default function ImageSection() {
  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center text-center">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/assets/bac.jpeg"
          alt="Event Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
          className="z-0"
        />
        <div className="absolute inset-0 bg-[#A855F7] opacity-40"></div>
      </div>

      <div className="relative z-10 px-6 md:px-12 text-white text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold italic text-yellow-400">
          TECH TALENT <span className="text-white">Events</span>
        </h1>
        <p className="mt-4 md:mt-6 max-w-2xl sm:max-w-3xl text-base sm:text-lg md:text-xl leading-relaxed mx-auto">
          Vivamus semper mi ipsum, vitae finibus mauris commodo non. Mauris nibh orci, 
          efficitur vel ex vitae, lacinia tincidunt metus. Suspendisse interdum fermentum 
          lacus ac sodales. Nulla tincidunt vitae lectus eget aliquam.
        </p>
      </div>
    </section>
  );
}
