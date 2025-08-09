export default function HeroSection() {
    return (
      <section
        className="relative h-[80vh] flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/hero-arunachal.jpeg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50 pt=25"></div>
  
        {/* Content */}
        <div className="relative z-10 p-5">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Discover the Untouched Beauty of Arunachal Pradesh
          </h1>
          <p className="text-white text-lg mb-6">
            Plan your adventure through valleys, monasteries, and hidden trails.
          </p>
          <a
  href="#top-destinations"
  className="bg-gradient-to-r from-green-600 to-teal-600 text-white font-semibold py-3 px-8 rounded-sm text-lg shadow-lg transform hover:scale-105 transition-all duration-300"
>
  Explore Now
</a>

        </div>
      </section>
    );
  }
  