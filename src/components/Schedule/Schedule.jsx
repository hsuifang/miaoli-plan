import Tag from "./Tag";
import Icon from "./Icon";

const ScheduleItem = ({
  title,
  tags = [],
  content = [],
  startTime,
  endTime,
  icon,
}) => (
  <div className="relative">
    <div className="md:flex items-center">
      <div className="flex items-center space-x-4 md:space-x-2 md:space-x-reverse w-44">
        {/* Icon */}
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow md:order-1">
          <Icon name={icon} />
        </div>
        {/* Time */}
        <div className="flex-grow flex md:flex-col items-center">
          <time className="font-serif font-bold text-xl text-center text-primary ">
            {startTime}
          </time>

          {endTime && (
            <>
              <span className="md:hidden">-</span>
              <time className="font-serif font-bold text-xl text-center text-primary">
                {endTime}
              </time>
            </>
          )}
        </div>
      </div>
      <div className="ml-14 md:ml-2">
        <h3 className="font-mono font-bold text-lg">{title}</h3>
      </div>
    </div>
    <div className="ml-8 sm:ml-14 md:ml-44 flex flex-col md:flex-row md:items-end border-t-2 p-2">
      {content.length > 0 && (
        <ul className="flex-grow bg-white px-4 rounded border-slate-200 ml-5 ">
          {content.map((item) => (
            <li key={item} className="list-disc text-slate-500 tracking-widest">
              {item}
            </li>
          ))}
        </ul>
      )}
      <ul className="flex space-x-2 justify-end md:justify-start">
        {tags.map((tag) => (
          <li
            key={tag}
            className="text-sm bg-yellow-200 text-gray-600 px-2 rounded-full"
          >
            <p>{tag}</p>
          </li>
        ))}
      </ul>
    </div>
  </div>
);
const Schedule = ({ title, lists = [] }) => {
  return (
    <div>
      <div className="sticky top-0 bg-white z-10 border-b border-primary md:border-transparent">
        <h2 className="inline-block font-serif text-4xl py-2 px-2 md:px-0 md:mb-4 bg-gradient-to-b md:pl-4 md:border-l-8 md:border-primary/30 md:border-dashed">
          {title}
        </h2>
      </div>
      <div className="p-2">
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:ml-[9.65rem] md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-slate-300 before:to-transparent">
          {lists.map((list) => (
            <ScheduleItem {...list} key={list.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Schedule;
