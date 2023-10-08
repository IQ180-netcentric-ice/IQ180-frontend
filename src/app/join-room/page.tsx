"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function Page() {
  const [roomNumber, setRoomNumber] = useState("");
  const [password, setPassword] = useState("");
  const [playerData, setPlayerData] = useState(null); // Initialize player data as null
  const handleJoinClick = () => {
    // Handle logic for joining the room
    console.log("Joining room:", roomNumber);
    console.log("pass", password);
    // Create a WebSocket connection
    const socket = new WebSocket(`ws://127.0.0.1:8000/ws/game/${roomNumber}/`);

    // Send a join request to the server
    socket.onopen = () => {
      socket.send(JSON.stringify({ type: "join" }));
    };

    // Handle messages from the server
    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.type === "game_data") {
        // Update player data when a message is received
        setPlayerData(data.player_data);
      }
    };

    // Handle errors or closing the connection
    socket.onerror = (error) => {
      console.error("WebSocket error: " + error);
    };

    socket.onclose = (event) => {
      if (event.wasClean) {
        console.log("Connection closed cleanly.");
      } else {
        console.error("Connection interrupted. Code: " + event.code);
      }
    };
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
              color: "black",
              textAlign: "center",
              fontSize: 32,
              left: "430px",
              top: "90px",
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
              color: "black",
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
