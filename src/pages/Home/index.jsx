import data from "./schedule.json";
import Schedule from "@/components/Schedule";
import MainImage from "@/assets/main.png";
import PostCard from "@/components/Postcard/PostCard";

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
      <div className="hidden md:flex md:w-[40%] md:h-[80vh] justify-center">
        <PostCard imgUrl={MainImage} text="2024 協尋大狗狗" />
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
