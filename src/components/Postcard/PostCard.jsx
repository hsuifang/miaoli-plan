import React from "react";

const PostCard = ({ imgUrl, text }) => {
  return (
    <div className="shadow-md p-3 bg-primary/50 rounded-lg grid grid-rows-10 grid-flow-col space-y-3 h-full">
      <div className="relative w-full h-full row-span-9">
        <img
          src={imgUrl}
          alt="MainImage"
          className="rounded-md object-cover h-full w-full"
        />
      </div>
      <p className="grow text-white rounded-lg grid place-content-center italic font-serif tracking-widest font-semibold">
        {text}
      </p>
    </div>
  );
};

export default PostCard;
