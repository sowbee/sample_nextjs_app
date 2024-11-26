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
    name: "Harshi",
    rating: 5,
    review: "A truly unforgettable experience! The service was exceptional, and I felt completely taken care of.",
  },
  {
    name: "Ayshu",
    rating: 4,
    review: "Wonderful service! I had a memorable time and will definitely be coming back for more adventures.",
  },
  {
    name: "Arjun",
    rating: 4,
    review: "The trip was well-organized, and the team did a great job. Looking forward to exploring more with them!",
  },
  {
    name: "Vidya",
    rating: 5,
    review: "An absolute delight! Everything from start to finish was perfect, highly recommend to anyone looking for a great trip.",
  },
  {
    name: "Puppy",
    rating: 4,
    review: "Great experience! The trip was smooth, and the staff made sure everything was taken care of. I would definitely travel with them again.",
  },
  {
    name: "Arnold",
    rating: 4,
    review: "The journey was well-planned, and I had a fantastic time. I would definitely look into future trips with them.",
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
