"use client";
import { useRouter } from "next/navigation";

export default function CountryCard({ country }) {
  const router = useRouter();

  const handleNavigate = () => {
    router.push(`/country/${country.code}`);
  };

  return (
    <div className="flex-shrink-0 w-full sm:w-[250px] md:w-[300px] lg:w-[350px] h-[220px] sm:h-[200px] md:h-[220px] lg:h-[250px] bg-purple-600 p-4 rounded-lg shadow-lg hover:shadow-xl transition flex flex-col justify-between">
      <div>
        <img
          src={`https://flagcdn.com/w320/${country.code.toLowerCase()}.png`}
          alt={`${country.name} flag`}
          className="w-full h-24 object-cover rounded-md mb-4"
        />
        <h3 className="text-xl font-bold text-white truncate">
          {country.name}
        </h3>
        <p className="text-white truncate">
          We speak{" "}
          <strong>
            {country.languages.map((lang) => lang.name).join(", ")}
          </strong>
          .
        </p>
      </div>
      <button
        onClick={handleNavigate}
        className="mt-auto px-4 py-2 bg-white text-red-600 rounded hover:bg-green-600"
      >
        Way to {`${country.name}`}!
      </button>
    </div>
  );
}
