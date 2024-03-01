import beach from "@/assets/icons/beach.png";
import bicycle from "@/assets/icons/bicycle.png";
import cake from "@/assets/icons/cake.png";
import train from "@/assets/icons/train.png";
import house from "@/assets/icons/house.png";
import tample from "@/assets/icons/tample.png";
import tample2 from "@/assets/icons/tample2.png";
import view from "@/assets/icons/view.png";
import seafood from "@/assets/icons/seafood.png";
import railway from "@/assets/icons/railway.png";

const Icon = ({ name }) => {
  const list = {
    beach,
    bicycle,
    cake,
    train,
    tample,
    tample2,
    view,
    seafood,
    house,
    bicycle,
    beach,
    railway,
  };
  return list[name] && <img src={list[name]} alt="icon" />;
};

export default Icon;
