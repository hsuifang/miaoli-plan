import React from "react";
import View1 from "@/assets/view/1.png";
import View2 from "@/assets/view/2.png";
import View3 from "@/assets/view/3.png";
import View4 from "@/assets/view/4.png";
import View5 from "@/assets/view/5.png";
import View6 from "@/assets/view/6.png";
import View7 from "@/assets/view/7.png";
import View8 from "@/assets/view/8.png";
import View9 from "@/assets/view/9.png";
import View10 from "@/assets/view/10.png";

const images = [
  { src: View1, alt: "view1", rowSpan: "md:row-span-2" },
  { src: View2, alt: "view2", rowSpan: "md:row-span-1" },
  { src: View3, alt: "view3", rowSpan: "md:row-span-1" },
  { src: View4, alt: "view4", rowSpan: "md:row-span-1" },
  { src: View5, alt: "view5", rowSpan: "md:row-span-2" },
  { src: View6, alt: "view6", rowSpan: "md:row-span-1" },
  { src: View7, alt: "view7", rowSpan: "md:row-span-1" },
  { src: View8, alt: "view8", rowSpan: "md:row-span-1" },
  { src: View9, alt: "view9", rowSpan: "md:row-span-1" },
  { src: View10, alt: "view10", rowSpan: "md:row-span-1" },
];

function Gallery() {
  // 3/3/4
  return (
    <div className="grid md:grid-flow-col grid-cols-2 md:grid-rows-4 md:grid-cols-3 gap-4 h-full">
      {images.map(({ src, alt, rowSpan }) => (
        <div className={rowSpan} key={alt}>
          <img
            src={src}
            className="rounded-md object-cover h-full w-full"
            alt={alt}
          />
        </div>
      ))}
    </div>
  );
}

export default Gallery;
