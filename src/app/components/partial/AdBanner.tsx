import Image from "next/image";
import React from "react";

const AdBanner = () => {
  return (
    <a
      href="https://www.facebook.com/p/Fourgarage-racing-100054349669435/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100%",
          backgroundColor: "#000000", // Background color for the banner
          textAlign: "center",
          zIndex: 9999, // Ensure it's above other content
        }}
        className="flex flex-row justify-around"
      >
        <Image
          src="/images/four-garage-ad.gif" // Replace with your GIF image path
          alt="Ad Banner"
          style={{ maxWidth: "100%", height: "auto" }}
          width={550}
          height={0}
          className="self-center"
        />
        <Image
          src="/images/four-garage-ad.gif" // Replace with your GIF image path
          alt="Ad Banner"
          style={{ maxWidth: "100%", height: "auto" }}
          width={550}
          height={0}
          className="self-center"
        />
        <Image
          src="/images/four-garage-ad.gif" // Replace with your GIF image path
          alt="Ad Banner"
          style={{ maxWidth: "100%", height: "auto" }}
          width={550}
          height={0}
          className="self-center"
        />
      </div>
    </a>
  );
};

export default AdBanner;
