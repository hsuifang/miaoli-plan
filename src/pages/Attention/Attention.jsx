import Avator1 from "@/assets/avator/all.webp";
import Avator2 from "@/assets/avator/girl1.webp";
import Avator3 from "@/assets/avator/girl2.webp";
import Avator4 from "@/assets/avator/boy.webp";
import Gallery from "@/components/Gallery";

const List = [
  {
    desc: "all",
    name: "所有人 (7人)",
    avator: Avator1,
    stuff: ["悠遊卡", "毛巾/牙刷", "拖鞋(去海邊)", "一點點現金"],
  },
  {
    desc: "katia",
    name: "寶貝/ Katia",
    avator: Avator2,
    stuff: ["拍立得", "底片", "野餐墊"],
  },
  {
    desc: "laura",
    name: "荷老師/ Laura",
    avator: Avator3,
    stuff: ["某個好東西 :)"],
  },
  {
    desc: "chris",
    name: "簡大師/ Chris",
    avator: Avator4,
    stuff: ["桌遊", "Bose"],
  },
];

const Attention = () => {
  return (
    <div
      data-testid="attention"
      className="p-3 md:p-0 flex flex-col md:flex-row md:space-x-8"
    >
      <div className="md:w-[60%] order-2 md:order-1 md:max-h-[80vh] md:overflow-y-auto">
        <Gallery />
      </div>
      <div className="md:w-[40%] order-1 md:order-2 shadow-inner p-5 rounded-md bg-gray-50 dark:bg-gray-800 dark:text-white">
        <section className="mb-2 md:mb-3">
          <h3 className="font-serif text-2xl font-bold mb-3 md:mb-0">
            攜帶商品
          </h3>
          <ul className="divide-y divide-gray-300 dark:divide-gray-700">
            {List.map((li) => (
              <li className="py-3 sm:py-4" key={li.desc}>
                <div className="flex space-x-4">
                  <div className="flex-shrink-0">
                    <img
                      className="w-10 h-10 rounded-full"
                      src={li.avator}
                      alt={li.desc}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-lg md:text-md font-bold text-gray-900 truncate dark:text-white">
                      {li.name}
                    </h4>
                    <ul className="ml-6 list-disc">
                      {li.stuff.map((item) => (
                        <li
                          key={item}
                          className="text-md md:text-sm text-gray-500  dark:text-gray-400"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>
        <section
          className="flex p-4 text-md text-gray shadow-inner rounded-lg bg-white dark:bg-gray-800 dark:text-white"
          role="alert"
        >
          <svg
            className="flex-shrink-0 inline w-5 h-5 me-3 mt-[2px] text-primary"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
          <span className="sr-only">Info</span>
          <div>
            <span className="text-2xl font-bold">備註</span>
            <ul className="mt-1.5 list-disc list-inside">
              <li className="text-lg">搭"火車"不要遲到</li>
              <li className="text-lg">請加入記帳連結</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Attention;
