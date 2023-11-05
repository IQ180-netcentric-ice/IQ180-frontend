import { useState } from "react";
import Image from "next/image";

const FlipCard = ({ frontImage, backImage, isFlipped, flipCard }) => {
  return (
    <div
      className="relative w-52 h-52 aspect-w-4 aspect-h-4"
      onClick={flipCard}
    >
      <div
        className={`w-full h-full bg-white rounded-lg shadow-lg transform flip`}
      >
        <div className={`front absolute inset-0 ${isFlipped ? "hidden" : ""}`}>
          <Image
            src={frontImage}
            alt="Front"
            width={1000}
            height={1000}
            // layout="responsive"
            objectFit="cover"
            className="w-full h-full"
          />
        </div>
        <div className={`back absolute inset-0 ${isFlipped ? "" : "hidden"}`}>
          <Image
            src={backImage}
            alt="Back"
            width={250}
            height={250}
            layout="responsive"
            objectFit="cover"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
