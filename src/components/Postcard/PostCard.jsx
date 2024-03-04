import React from "react";

const PostCard = ({ imgUrl, text }) => {
  return (
    <div className="shadow-md p-3 bg-primary/50 rounded-lg flex flex-col space-y-3">
      <img src={imgUrl} alt="MainImage" className="rounded-lg" />
      <p className="grow text-white rounded-lg grid place-content-center italic font-serif tracking-widest font-semibold">
        {text}
      </p>
    </div>
  );
};

export default PostCard;
