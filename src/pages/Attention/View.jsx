import View1 from "@/assets/view/1.png";
import View2 from "@/assets/view/2.png";
import View3 from "@/assets/view/3.png";
import View4 from "@/assets/view/4.png";
import View5 from "@/assets/view/5.png";
import View6 from "@/assets/view/6.png";
import View7 from "@/assets/view/7.png";
import View8 from "@/assets/view/8.png";
import View9 from "@/assets/view/9.png";
import View10 from "@/assets/view/9.png";

const View = ({ viewNum }) => {
  const List = {
    1: View1,
    2: View2,
    3: View3,
    4: View4,
    5: View5,
    6: View6,
    7: View7,
    8: View8,
    9: View9,
    10: View10,
  };
  return (
    List[viewNum] && (
      <img class="w-50 h-50 rounded-md" src={List[viewNum]} alt="Neil image" />
    )
  );
};

export default View;
