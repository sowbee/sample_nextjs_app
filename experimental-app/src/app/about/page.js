"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Destination from "../components/Destination";
export default function AboutPage() {
  const [imageIndex, setImageIndex] = useState(0);
  const images = [
    "/picture1.jpg",
    "/picture2.jpg",
    "/picture3.jpg",
    "/picture4.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative  bg-cover bg-no-repeat bg-center pt-20 h-[400px] flex items-center"
        style={{ backgroundImage: `url(${images[imageIndex]})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-80"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl font-extrabold text-white leading-tight mb-4">
            Discover New Horizons
          </h1>
          <p className="text-lg text-white max-w-3xl mx-auto">
            Embark on a journey like never before with tailored experiences,
            breathtaking destinations, and exceptional service.
          </p>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-gray-2">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2 text-gray-600 text-lg leading-relaxed">
              <h1 className="mb-6 text-4xl font-bold text-center"> About us</h1>
              <p className="mb-6">
                Welcome to our travel agency! We specialize in curating
                unforgettable travel experiences for adventure seekers, culture
                enthusiasts, and leisure travelers alike. With a decade of
                expertise, we ensure every journey is seamless and filled with
                lasting memories.
              </p>
              <p>
                Our mission is to offer the best destinations, competitive
                prices, and personalized planning services. Whether it’s
                exploring hidden gems or indulging in luxury escapes, we’re here
                to turn your travel dreams into reality.
              </p>
            </div>
            <div className="lg:w-1/2">
              <div className="w-full h-80 relative">
                <img
                  src="/bgImage.jpeg" // Path to the static image
                  alt="Static Background Image"
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Destination/>
    </div>
  );
}
