import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";

export function RatingStar({ initialValue, allowHover }) {
  const [rating, setRating] = useState(0);

  const handleRating = (rate) => {
    setRating(rate);
  };

  console.log(rating);

  return (
    <div className="flex">
      <Rating
        onClick={handleRating}
        SVGstyle={{ display: "inline" }}
        initialValue={initialValue}
        allowFraction={true}
        allowHover={allowHover}
      />
    </div>
  );
}