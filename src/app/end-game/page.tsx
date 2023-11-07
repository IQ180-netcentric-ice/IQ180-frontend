"use client";
import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const videoRef = useRef(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [videoPlaybackRate, setVideoPlaybackRate] = useState(1);

  const handleGoBack = () => {
    router.push("/"); // Replace "/" with the actual home page URL
  };

  const handleToggleVideo = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying((prev) => !prev);
    }
  };

  const handleSpeedUp = () => {
    if (videoRef.current) {
      setVideoPlaybackRate((prevRate) => Math.min(prevRate + 0.25, 4));
      videoRef.current.playbackRate = videoPlaybackRate;
    }
  };

  const handleSpeedDown = () => {
    if (videoRef.current) {
      setVideoPlaybackRate((prevRate) => Math.max(prevRate - 0.25, 0.25));
      videoRef.current.playbackRate = videoPlaybackRate;
    }
  };

  return (
    <div className="yoyo">
      <video
        ref={videoRef}
        src="/video/congrat.mp4"
        autoPlay
        loop
        muted
        onClick={handleToggleVideo}
      />
      <div className="yeye">
        <h1>CONGRATULATIONS!!!!!!!!!!</h1>
        <button
          className="mt-[20px] text-black p-[10px] bg-gray-500 hover:transform hover:-translate-y-1 hover:shadow-md rounded-lg"
          onClick={handleGoBack}
        >
          Play Again !!!
        </button>

        <div className="flex flex-row justify-around w-[900px]">
          <button
            className="mt-[20px] text-black p-[10px] bg-red-500 hover:transform hover:-translate-y-1 hover:shadow-md rounded-lg"
            onClick={handleSpeedDown}
          >
            Clap Slower!!!
          </button>
          <button
            className="mt-[20px] text-black p-[10px] bg-orange-500 hover:transform hover:-translate-y-1 hover:shadow-md rounded-lg"
            onClick={handleToggleVideo}
          >
            {isVideoPlaying ? "Stop Clapping" : "Let's Clap"}
          </button>
          <button
            className="mt-[20px] text-black p-[10px] bg-green-500 hover:transform hover:-translate-y-1 hover:shadow-md rounded-lg"
            onClick={handleSpeedUp}
          >
            Clap Faster!!!
          </button>
        </div>
      </div>
    </div>
  );
}
