'use client';

import { useQuery, gql } from '@apollo/client';
import client from '../lib/apolloClient';
import Header from './components/HeaderData.js';
import Footer from './components/FooterData.js';
import CountryCard from './components/CountriesCard.js';
import Services from './components/Services';
import ContactForm from './components/ContactForm';
import AboutUs from './components/AboutUs';
import ReviewCard from './components/ReviewCard';

const reviews = [
  { name: 'John Doe', rating: 5, review: 'Amazing experience, highly recommended!' },
  { name: 'Jane Smith', rating: 4, review: 'Great service, will visit again!' },
];

const GET_COUNTRIES = gql` 
  query GetCountries {
    countries {
      code
      name
      capital
      currency
      languages {
        name
      }
      continent {
        name
      }
    }
  }
`;

export default function Home() {
  const { loading, error, data } = useQuery(GET_COUNTRIES, { client });

  if (loading) return <p>Loading countries...</p>;
  if (error) return <p>Error fetching data: {error.message}</p>;

  const handleSelectCountry = (country) => {
    alert(`You selected ${country.name}!`);
  };

  return (
    <div className="min-h-screen">
    <Header />
    <main
      className="container mx-auto py-16 h-full bg-cover bg-no-repeat bg-fixed bg-center min-h-screen"
      style={{ backgroundImage: "url('/bgImage.jpeg')" }}
    >
      <Services />
      <h1 className="text-3xl font-bold text-center mb-8 max-w-xl mx-auto bg-white rounded-lg shadow-lg">
        Choose Your Destination
      </h1>
      <div className="relative overflow-hidden">
        <div className="flex animate-scroll space-x-4">
          {data.countries.map((country) => (
            <CountryCard key={country.code} country={country} onSelect={handleSelectCountry} />
          ))}
        </div>
      </div>
      <div id="about-us" className="mt-16">
          <AboutUs />
        </div>
        <div id="contact-form">
          <ContactForm />
        </div>
      <div className="flex flex-wrap justify-center gap-8 mb-16">
        {reviews.map((review, index) => (
          <ReviewCard key={index} review={review} />
        ))}
      </div>
    </main>
    <Footer />
  </div>
  

  );
}
