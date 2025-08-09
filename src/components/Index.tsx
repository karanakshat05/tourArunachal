import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white via-blue-50 to-green-50 relative overflow-hidden">
      {/* Main Content */}
      <div className="text-center px-4 z-10">
        <h2 className="text-gray-500 text- Poppins,sans-serif tracking-widest uppercase mb-4">Sign Up Now</h2>
        <h1 className="text-4xl md:text-5xl text- Poppins,sans-serif font-bold text-gray-800 mb-8">
          Start your journey
        </h1>
        <a
  href="#top-destinations"
  className="bg-gradient-to-r from-green-600 to-teal-600 text-white text- Poppins,sans-serif font-semibold py-3 px-8 rounded-sm text-lg shadow-lg transform hover:scale-105 transition-all duration-300"
>
  Sign Up free
</a>

        <p className="text-gray-400 text- Poppins,sans-serif mt-4 mb-2">or download the app</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="block">
            <Image
              src="/assets/appstore.png"
              alt="Download on App Store"
              width={100}
              height={50}
              className="h-5 w-auto"
            />
          </a>
          <a href="#" className="block">
            <Image
              src="/assets/google-play.png"
              alt="Get it on Google Play"
              width={160}
              height={100}
              className="h-12 w-auto"
            />
          </a>
        </div>
        
      </div>

      {/* Decorative SVGs */}
      <div className="absolute bottom-8 left-0 flex items-end space-x-6 px-12 z-0">
  <Image
    src="/assets/travel.svg"
    alt="Travel"
    width={300}    // Bigger size
    height={220}
    className="opacity-60"
  />
</div>

<div className="absolute top-18 right-0 flex items-end space-x-6 px-12 z-0">
  <Image
    src="/assets/mountain.svg"
    alt="Mountain"
    width={300}    // Bigger size
    height={300}
    className="opacity-30"
  />
</div>


      {/* Airplane Animation */}
      <div className="absolute top-12 left-1/2 transform -translate-x-1/2 z-0 animate-pulse">
        <Image
          src="/assets/airplane.svg"
          alt="Airplane"
          width={300}
          height={100}
          className="opacity-50"
        />
      </div>
    </div>
  );
}
