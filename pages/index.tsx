import React, { useState } from "react";
import Image from "next/image";
import { HERO_BG, FILTERS, PROPERTYLISTINGSAMPLE } from "@/constants";
import Pill from "@/components/common/Pill";

const HomePage: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative w-auto h-[90vh] bg-cover bg-center flex items-center justify-center text-white rounded-[27px]"
        style={{
          backgroundImage: `url(${HERO_BG.src})`,
        }}
      >
        <div className="text-center bg-opacity-40 p-6 rounded-xl">
          <h1 className="text-[94px] md:text-5xl font-bold mb-4">
            Find your favorite <br /> place here!
          </h1>
          <p className="text-[24px] md:text-xl">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-4">Filter by:</h2>
        <div className="flex flex-wrap gap-3">
          {FILTERS.map((filter) => (
            <Pill
              key={filter}
              label={filter}
              selected={selectedFilter === filter}
              onClick={() =>
                setSelectedFilter((prev) => (prev === filter ? null : filter))
              }
            />
          ))}
        </div>
      </section>

      {/* Listing Section */}
      <section className="mx-auto px-4 py-10">
        <h2 className="text-2xl font-semibold mb-6">Featured Listings</h2>
        <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {PROPERTYLISTINGSAMPLE.map((property) => (
            <div
              key={property.name}
              className="rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition"
            >
              <Image
                src={property.image}
                alt={property.name}
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{property.name}</h3>
                <p className="text-gray-700">{property.price}</p>
                <p className="text-yellow-500 mt-1">⭐ {property.rating}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default HomePage;
