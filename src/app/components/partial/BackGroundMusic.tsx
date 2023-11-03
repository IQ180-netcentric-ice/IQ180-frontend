"use client";
import React, { useEffect, useState } from "react";

const BackgroundMusicPlayer = () => {
  const [audio] = useState(new Audio("/sounds/bgm/chinese-bgm.mp3"));

  useEffect(() => {
    audio.loop = true;
    audio.play().catch((error) => {
      console.error("Error playing audio:", error);
    });
  }, [audio]);

  return null; // This component doesn't render anything, it's just for audio playback.
};

export default BackgroundMusicPlayer;
