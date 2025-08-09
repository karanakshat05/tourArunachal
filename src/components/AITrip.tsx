import Image from "next/image";

export default function AITripPlanner() {
  return (
    <section className="bg-white py-16 px-4" id="ai-planner">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-center mb-16 text-gray-700">
          Need Help Planning?
        </h2>
        <p className="text-lg text-gray-800 mb-12">
          Let our AI recommend your perfect Arunachal trip! Get smart suggestions or build a complete trip plan.
        </p>

        {/* Cards Section */}
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Card 1: Recommendations */}
          <div className="bg-gray-100 text-gray-800 rounded-2xl p-8 flex flex-col items-center 
                          shadow-2xl hover:shadow-2xl transition-shadow duration-500">
            
            {/* Image */}
            <div className="w-80 h-125 rounded-xl overflow-hidden mb-6">
              <Image
                src="/assets/recom.png"
                alt="Smart Recommendations Preview"
                width={500}
                height={800}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text */}
            <div className="w-90 flex flex-col items-center">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Personalized Picks
              </h3>
              <p className="text-gray-800 text-sm mb-6">
                Discover top-rated hotels, restaurants, and must-visit destinations — tailored just for you!
              </p>
              <a
                href="#"
                className="inline-block bg-green-200 hover:bg-green-300 text-gray-800 font-semibold py-2 px-6 rounded-full text-md transition-all duration-300"
              >
                Get Recommendations
              </a>
            </div>
          </div>

          {/* Card 2: AI Trip Builder */}
          <div className="bg-gray-100 text-gray-800 rounded-2xl p-8 flex flex-col items-center 
                          shadow-2xl hover:shadow-2xl transition-shadow duration-500">
            
            {/* Image */}
            <div className="w-80 h-125 rounded-xl overflow-hidden mb-6">
              <Image
                src="/assets/ai.png"
                alt="AI Trip Builder Preview"
                width={500}
                height={800}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text */}
            <div className="w-90 flex flex-col items-center">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Travel Assistant
              </h3>
              <p className="text-gray-800 text-sm mb-6">
              Ask anything about your dream destination, and we&apos;ll crafting the perfect itinerary based on your travel vibes.
              </p>
              <a
                href="#"
                className="inline-block bg-green-200 hover:bg-green-300 text-gray-800 font-semibold py-2 px-6 rounded-full text-md transition-all duration-300"
              >
                Build My Trip
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
