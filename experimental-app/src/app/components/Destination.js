"use client";
import Link from "next/link";

export default function Destination() {
  const images = [
    "/picture1.jpg",
    "/picture2.jpg",
    "/picture3.jpg",
    "/picture4.jpg",
  ];

  return (
    <>
      {/* Destinations Section */}
      <section className="mb-16 p-6 ">
        <div className="container mx-auto">
          <div>
            <h2 className="text-4xl font-bold text-center text-white bg-black bg-opacity-50 mb-12">
              Our Top Destinations
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="bg-cover bg-center h-60 rounded-lg shadow-lg transform hover:scale-105 transition duration-500"
                style={{ backgroundImage: `url(${image})` }}
              ></div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-blue-700 text-white ">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready for Your Next Adventure?
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Contact us today to start planning your dream vacation. Our team of
            experts is here to help you every step of the way!
          </p>
          <Link href="/contact" className="hover:text-gray-400">
            <button className="bg-white text-blue-700 px-8 py-3 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition duration-300">
              Get in Touch
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}
