import Image from "next/image";

export default function MapSection() {
  return (
    <section id="discover-map" className="bg-gradient-to-b from-teal-50 to-white py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Discover Arunachal Pradesh
        </h2>
        <p className="text-gray-600 mb-10 text-lg">
          A journey through valleys, rivers and mountains.
        </p>

        {/* Map Image */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-4xl h-96 shadow-1xl">
            <Image
              src="/assets/arunachal-pradesh-map.jpg" 
              alt="Map of Arunachal Pradesh"
              fill
              className="object-contain rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
