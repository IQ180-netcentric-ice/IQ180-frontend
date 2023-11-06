"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  const handleGoBack = () => {
    router.push("/"); // Replace "/" with the actual home page URL
  };

  return (
    <div className="yoyo">
      <video src="/video/congrat.mp4" autoPlay loop muted />
      <div className="yeye">
        <h1>CONGRATULATIONS!!!!!!!!!!</h1>
        <button
          className="mt-[20px] text-black p-[10px] bg-gray-500 hover:transform hover:-translate-y-1 hover:shadow-md rounded-lg"
          onClick={handleGoBack}
        >
          Go Back to Home
        </button>
      </div>
    </div>
  );
}
