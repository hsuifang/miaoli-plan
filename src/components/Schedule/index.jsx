import React from "react";
const ScheduleItem = ({
  title,
  tags = [],
  content = [],
  startTime,
  endTime,
}) => (
  <div className="relative">
    <div className="md:flex items-center">
      <div className="flex items-center space-x-4 md:space-x-2 md:space-x-reverse w-44">
        {/* Icon */}
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow md:order-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
            <path d="M8 0a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8Zm0 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z"></path>
          </svg>
        </div>
        {/* Time */}
        <div className="flex-grow flex md:flex-col items-center">
          <time className="font-serif font-medium text-xl text-center">
            {startTime}
          </time>

          {endTime && (
            <>
              <span className="md:hidden">-</span>
              <time className="font-serif font-medium text-xl text-center">
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
    <div className="ml-14 md:ml-44 flex items-end border-t-2 p-2">
      {content.length > 0 && (
        <ul className="flex-grow bg-white px-4 rounded border-slate-200 ml-5 ">
          {content.map((item) => (
            <li key={item} className="list-disc text-slate-500">
              {item}
            </li>
          ))}
        </ul>
      )}
      <ul className="flex space-x-2">
        {tags.map((tag) => (
          <li
            key={tag}
            className="text-sm italic bg-yellow-200 text-gray-600 rounded px-2"
          >
            #{tag}
          </li>
        ))}
      </ul>
    </div>
  </div>
);
const Schedule = ({ title, lists = [] }) => {
  return (
    <>
      <h2 className="sticky top-0 bg-white z-10 font-serif text-4xl py-2 mb-2 md:mb-4">
        {title}
      </h2>
      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:ml-[9.65rem] md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-slate-300 before:to-transparent">
        {lists.map((list) => (
          <ScheduleItem {...list} key={list.id} />
        ))}
      </div>
    </>
  );
};

export default Schedule;
