"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function Page() {
  const [roomNumber, setRoomNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleJoinClick = () => {
    // Handle logic for joining the room
    console.log("Joining room:", roomNumber);
  };

  const handleCancelClick = () => {
    // Handle logic for canceling
    console.log("Cancel clicked");
  };

  return (
    <>
      <Image
        src="/images/background_iq180.svg"
        fill={true}
        alt="Background Image"
        style={{ zIndex: -1 }}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div
          style={{
            backgroundColor: "#dcdcdc",
            border: "1px solid #000",
            padding: "1rem",
            width: "632px",
            height: "334px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            zIndex: 1,
            borderRadius: 15,
          }}
        >
          <h2
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: "bold",
              fontSize: 32,
              color: "#737373",
            }}
          >
            Join Room
          </h2>
          <input
            style={{
              height: "60px", // Set the height to 60
              width: "453px", // Set the width to 453
              backgroundColor: "#ffffff", // Set the background color to #ffffff
              padding: "8px", // Optional: Add padding for better appearance
              border: "1px solid #ccc", // Optional: Add a border for better visibility
              fontFamily: "Inter, sans-serif",

              textAlign: "center",
              fontSize: 32,
            }}
            type="text"
            value={roomNumber}
            onChange={(e) => setRoomNumber(e.target.value)}
            placeholder="Room No."
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            style={{
              height: "60px", // Set the height to 60
              width: "453px", // Set the width to 453
              backgroundColor: "#ffffff", // Set the background color to #ffffff
              padding: "8px", // Optional: Add padding for better appearance
              border: "1px solid #ccc", // Optional: Add a border for better visibility
              fontFamily: "Inter, sans-serif",

              textAlign: "center",
              fontSize: 32,
            }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <button
              style={{
                backgroundColor: "#cbcbcb",
                color: "#ffffff",
                fontWeight: "bold",
                padding: "0.5rem 1rem",
                cursor: "pointer",
                left: "440px",
                top: "90px",
                position: "relative",
                border: "1px solid #ccc",
              }}
              onClick={handleJoinClick}
            >
              Join
            </button>
            <button
              style={{
                backgroundColor: "#cbcbcb",
                color: "#FFFFFF",
                fontWeight: "bold",
                padding: "0.5rem 1rem",
                cursor: "pointer",
                top: "90px",
                left: "450px",
                position: "relative",
                border: "1px solid #ccc",
              }}
              onClick={handleCancelClick}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
