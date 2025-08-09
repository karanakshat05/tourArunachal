import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-[#FFFAF0] pt-32 pb-10 overflow-hidden">
      {/* Decorative Wavy Top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-24">
          <path d="M0,0 C300,100 900,0 1200,100 L1200,0 L0,0 Z" fill="#ffffff" />
        </svg>
      </div>

      {/* Footer Content */}
      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
        {/* Logo and Socials */}
        <div>
          <h2 className="text-2xl font-bold text-green-700 mb-4">Travel Arunachal</h2>
          <div className="flex space-x-4 mt-4">
            <Link href="#"><Image src="/assets/facebook.svg" alt="Facebook" width={24} height={24} /></Link>
            
            <Link href="#"><Image src="/assets/instagram.svg" alt="Instagram" width={24} height={24} /></Link>
            <Link href="#"><Image src="/assets/twitter.svg" alt="Twitter" width={24} height={24} /></Link>
            <Link href="#"><Image src="/assets/linkedin.svg" alt="LinkedIn" width={24} height={24} /></Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text- Poppins,sans-serif text-gray-800 text-gray-800 mb-4">Quick Links</h3>
          <ul className="space-y-3 text- Poppins,sans-serif text-gray-800 text-sm">
            <li><Link href="/">Home</Link></li>
            <li><Link href="#top-destinations">Destinations</Link></li>
            <li><Link href="#adventures">Things to Do</Link></li>
            <li><Link href="#hotel-booking">Hotels</Link></li>
            <li><Link href="#transport-booking">Ride & Rome</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold text- Poppins,sans-serif text-gray-800 mb-4">Resources</h3>
          <ul className="space-y-3 text-gray-800 text- Poppins,sans-serif text-sm">
            <li><Link href="#">About Us</Link></li>
            <li><Link href="#">Blog</Link></li>
            <li><Link href="#">Feedback</Link></li>
            <li><Link href="#">Contact Us</Link></li>
          </ul>
        </div>

        {/* Download App */}
       
<div className="flex flex-col space-y-2">
  <h3 className="text-lg text-3xl font-semibold text- Poppins,sans-serif text-gray-800">Download Our App</h3>
  <Image src="/assets/app.png" alt="App Store" width={150} height={45} />
</div>

       
      </div>

      {/* Bottom Footer */}
      <div className="mt-10 text-center text-sm text- Poppins,sans-serif text-gray-800 relative">
        © {new Date().getFullYear()} Travel Arunachal. All rights reserved.
      </div>
    </footer>
  );
}
