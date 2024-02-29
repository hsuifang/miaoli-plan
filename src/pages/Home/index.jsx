import React from "react";
import data from "./schedule.json";
import Schedule from "@/components/Schedule";
import MapImage from "@/components/MapImage";

const Home = () => {
  const info = data.reduce((acc, cur) => {
    if (!acc[cur.date]) {
      acc[cur.date] = [];
    }
    acc[cur.date].push(cur);
    return acc;
  }, {});
  return (
    <div data-testid="home" className="flex space-x-8">
      {/* image */}
      {/* vertical timeTree */}
      <div className="hidden md:block md:w-[40%]">
        <div className="h-[80vh] bg-slate-300">
          <MapImage />
        </div>
      </div>
      <div className="md:h-[80vh] w-full md:w-[60%] md:overflow-y-auto">
        {Object.entries(info).map(([key, value], index) => (
          <Schedule
            key={key}
            title={`Day ${index + 1}/ ${key}`}
            lists={value}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
