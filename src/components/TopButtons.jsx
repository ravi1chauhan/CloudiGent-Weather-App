import React from "react";

function TopButtons({ setQuery }) {
  const cities = [
    {
      id: 1,
      title: "Mumbai",
    },
    {
      id: 2,
      title: "Pune",
    },
    {
      id: 3,
      title: "Delhi",
    },
    {
      id: 4,
      title: "Gorakhpur",
    },
    {
      id: 5,
      title: "Uttar Pradesh",
    },
  ];

  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-white text-lg font-medium"
          onClick={() => setQuery({ q: city.title })}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default TopButtons;
