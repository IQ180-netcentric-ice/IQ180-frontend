import Image from "next/image";
import React from "react";

const AdBanner = () => {
  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        backgroundColor: "#f0f0f0", // Background color for the banner
        textAlign: "center",
        zIndex: 9999, // Ensure it's above other content
      }}
      className="flex flex-row"
    >
      <Image
        src="/images/CasinoAdBanner.gif" // Replace with your GIF image path
        alt="Ad Banner"
        style={{ maxWidth: "100%", height: "auto" }}
        width={700}
        height={0}
        className="self-center"
      />
      <Image
        src="/images/HuayBanner.gif" // Replace with your GIF image path
        alt="Ad Banner"
        style={{ maxWidth: "100%", height: "auto" }}
        width={700}
        height={0}
        className="self-center"
      />
      <Image
        src="/images/CasinoAd2Banner.gif" // Replace with your GIF image path
        alt="Ad Banner"
        style={{ maxWidth: "100%", height: "auto" }}
        width={550}
        height={0}
        className="self-center"
      />
    </div>
  );
};

export default AdBanner;
