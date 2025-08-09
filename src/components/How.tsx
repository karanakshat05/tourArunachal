import { FaMapMarkedAlt, FaHotel, FaHiking } from "react-icons/fa";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">
          🧭 How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Step 1 */}
          <div className="flex flex-col items-center">
            <div className="bg-green-100 p-6 rounded-full mb-4">
              <FaMapMarkedAlt className="text-green-600 text-5xl" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">
              Choose Destination
            </h3>
            <p className="text-gray-600">
              Explore our curated list of beautiful places in Arunachal Pradesh.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center">
            <div className="bg-green-100 p-6 rounded-full mb-4">
              <FaHotel className="text-green-600 text-5xl" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Book Hotels & Transport
            </h3>
            <p className="text-gray-800">
              Secure your stay and travel easily with a few simple clicks.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center">
            <div className="bg-green-100 p-6 rounded-full mb-4">
              <FaHiking className="text-green-600 text-5xl" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Explore & Enjoy
            </h3>
            <p className="text-gray-800">
              Experience the adventures and hidden gems of Arunachal Pradesh!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
