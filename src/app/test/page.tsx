"use client";
import { useState } from "react";
import Image from "next/image";
import Review from "../components/review";

const page = () => {
  const [showReview, setShowReview] = useState(false);

  return (
    <>
      <button onClick={() => setShowReview(true)}>
        <div className="underline text-[#B6AF1A] m-3">Review our game</div>
      </button>
      <Review showReview={showReview} setShowReview={setShowReview} />
    </>
  );
};

export default page;
