"use client";

import { useQuery, gql } from "@apollo/client";
import client from "../lib/apolloClient";
import CountryCard from "./components/CountriesCard";
import Services from "./components/Services";
import ReviewCard from "./components/ReviewCard";
import Destination from "./components/Destination";

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

const reviews = [
  {
    name: "John Doe",
    rating: 5,
    review: "Amazing experience, highly recommended!",
  },
  { name: "Jane Smith", rating: 4, review: "Great service, will visit again!" },
  {
    name: "Arjun",
    rating: 4,
    review: "Good service by them.I would like to travel more places with them",
  },
  {
    name: "John Doe",
    rating: 5,
    review: "Amazing experience, highly recommended!",
  },
  { name: "Jane Smith", rating: 4, review: "Great service, will visit again!" },
  {
    name: "Arjun",
    rating: 4,
    review: "Good service by them.I would like to travel more places with them",
  },
];

export default function Home() {
  const { loading, error, data } = useQuery(GET_COUNTRIES, { client });

  if (loading) return <p>Loading countries...</p>;
  if (error) return <p>Error fetching data: {error.message}</p>;

  return (
    <main
      className="relative w-full bg-cover bg-no-repeat bg-fixed bg-center min-h-screen"
      style={{ backgroundImage: "url('/bgImage.jpeg')" }}
    >
      <div className="container mx-auto px-4 py-16">
        <Services />
        <h1 className="text-4xl font-bold text-center text-white mb-8 max-w-5xl mx-auto bg-black bg-opacity-50 p-6 rounded-lg shadow-lg">
          Choose Your Destination
        </h1>
        <div className="relative overflow-hidden mb-16">
          <div className="flex animate-scroll space-x-4">
            {data.countries.map((country) => (
              <CountryCard key={country.code} country={country} />
            ))}
          </div>
        </div>
        <Destination/>

        <h1 className="text-4xl font-bold text-center mt-10 text-white mb-8 max-w-5xl mx-auto bg-black bg-opacity-50 p-6 rounded-lg shadow-lg">
          Customer Reviews
        </h1>
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          {reviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </div>
      </div>
    </main>
  );
}
