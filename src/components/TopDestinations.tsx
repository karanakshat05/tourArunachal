import Image from "next/image";

const destinations = [
  {
    name: "Tawang",
    image: "/assets/tawang.jpg",
    description: "Tawang is home to India's largest monastery, surrounded by stunning Himalayan beauty and serene lakes.",
    textStyle: "font-serif text-2xl text-teal-800",  
  },
  {
    name: "Ziro Valley",
    image: "/assets/ziro.jpg",
    description: "Ziro Valley offers lush landscapes, pine forests, and is famous for its vibrant music festival and Apatani culture.",
    textStyle: "font-serif text-2xl text-teal-800",  
  },
  {
    name: "Bomdila",
    image: "/assets/bomdila.jpeg",
    description: "A peaceful town with colorful monasteries, apple orchards, and breathtaking views of the snow-capped Himalayas.",
    textStyle: "font-serif text-2xl text-teal-800",  
  },
];

export default function TopDestinations() {
  return (
    <section id="top-destinations" className="py-20 bg-neutral-100">
      <h2 className="text-5xl font-bold text-center mb-16 text-gray-700">
        Where to next?
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
        {destinations.map((dest, index) => (
          <div key={index} className="group w-full h-96 perspective">
            <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180 group-hover:scale-105">
              {/* Front Side */}
              <div className="absolute w-full h-full backface-hidden bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-500 group-hover:scale-105">
                <Image
                  src={dest.image}
                  alt={dest.name}
                  width={500}
                  height={400}
                  className="w-full h-2/3 object-cover"
                />
                <div className="p-4 flex items-center justify-center h-1/3">
                  <h3 className={` ${dest.textStyle} font-bold`}>{dest.name}</h3>
                </div>
              </div>

              {/* Back Side */}
              <div className="absolute w-full h-full backface-hidden bg-green-600 text-white rounded-xl shadow-lg transform rotate-y-180 flex flex-col items-center justify-center p-6">
                <h3 className="text-2xl font-bold mb-4">{dest.name}</h3>
                <p className="text-center text-lg">{dest.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
