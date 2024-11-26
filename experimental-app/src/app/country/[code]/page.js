'use client';

import { useParams } from 'next/navigation';
import { useQuery, gql } from '@apollo/client';
import client from '../../../lib/apolloClient';
import { useState, useEffect } from 'react';
import Destination from '@/app/components/Destination';

const GET_COUNTRY_DETAILS = gql`
  query GetCountryDetails($code: ID!) {
    country(code: $code) {
      name
      native
      phone
      languages {
        name
      }
      currency
      continent {
        name
      }
      code
    }
  }
`;

const exploreSections = [
  { title: 'Top Attractions', description: 'Discover the most popular tourist attractions in' },
  { title: 'Local Cuisine', description: 'Taste the unique flavors of traditional dishes from' },
  { title: 'Cultural Insights', description: 'Delve into the rich culture and heritage of' },
  { title: 'Popular Cities', description: 'Explore bustling cities like the capital and other must-see locations in' },
  { title: 'Adventure Activities', description: 'Experience thrilling activities like hiking, diving, and safaris in' },
  { title: 'Local Festivals', description: 'Join the locals in vibrant festivals celebrating the culture and traditions of' },
];

export default function CountryPage() {
  const { code } = useParams();
  const { loading, error, data } = useQuery(GET_COUNTRY_DETAILS, {
    variables: { code },
    skip: !code,
    client,
  });

  const [imageIndex, setImageIndex] = useState(0);
  const images = ['/picture1.jpg', '/picture2.jpg', '/picture3.jpg', '/picture4.jpg'];

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data: {error.message}</p>;
  if (!data || !data.country) return <div>No country found for code: {code}</div>;

  const { 
    name, 
    native, 
    phone, 
    languages, 
    currency, 
    continent, 
  } = data.country;

  return (
    <div
      className="relative pt-20 pb-16 min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/picture5.jpg')",
        backgroundSize: 'cover',
      }}
    >
      {/* Header */}
      <div className="bg-black bg-opacity-50 text-center py-12">
        <h1 className="text-4xl font-bold text-white">{name}</h1>
        <p className="text-lg text-gray-200 mt-4">
  {`Embark on an unforgettable adventure to uncover the beauty and charm of ${name}, a land with the prestigious code ${code}, 
  also known as ${native} in its native tongue. Prepare to dial in as you discover the rich history and culture of this vibrant nation, 
  where the phone code is ${phone}, connecting you to its heart. The official languages spoken in ${name}, including ${languages.map((lang) => lang.name).join(", ")}, 
  weave together a fascinating tapestry that reflects the country's diverse cultural heritage. 
  The currency of ${name}, ${currency}, tells the story of its flourishing economy and dynamic growth. 
  Nestled in the heart of the majestic ${continent.name} continent, ${name} is a stunning blend of natural beauty, modern marvels, and timeless traditions. 
  This remarkable country proudly carries the code ${code}, solidifying its place on the world stage with a unique identity that is as rich as its history.`}
</p>

      </div>

      {/* Explore Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {exploreSections.map((section, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{section.title}</h3>
              <p className="text-gray-600">{section.description} {name}.</p>
            </div>
          ))}
        </div>
      </div>

      {/* Destination Section */}
      <div className="mt-16">
        <Destination />
      </div>
    </div>
  );
}
