import React from "react";
import data from "./schedule.json";
import Schedule from "@/components/Schedule";
import MainImage from "@/assets/main.png";
// import MapImage from "@/components/MapImage";

const Home = () => {
  const info = data.reduce((acc, cur) => {
    if (!acc[cur.date]) {
      acc[cur.date] = [];
    }
    acc[cur.date].push(cur);
    return acc;
  }, {});
  return (
    <div data-testid="home" className="md:flex md:space-x-8">
      {/* image */}
      {/* vertical timeTree */}
      <div className="hidden md:flex  md:w-[40%]">
        <div className="shadow-md p-3 bg-primary/50 rounded-lg flex flex-col space-y-3">
          <img src={MainImage} alt="MainImage" className="rounded-lg" />
          {/* <MapImage /> */}
          <p className="grow text-white rounded-lg grid place-content-center italic font-serif tracking-widest font-semibold">
            Longphant - 媽媽說鼻子長才會漂亮
          </p>
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
