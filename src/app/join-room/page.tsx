"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const [roomNumber, setRoomNumber] = useState("");

  const rooms = [
    { id: "123", owner: "Alice" },
    { id: "456", owner: "Bob" },
    { id: "789", owner: "Charlie" },
  ];

  const handleJoinClick = () => {
    // Handle logic for joining the room
    if (!roomNumber.trim()) {
      alert("Please enter a valid room ID");
      return;
    } else {
      const roomExists = rooms.some((room) => room.id === roomNumber);
      if (roomExists) {
        // Room number exists, navigate to the /game/${roomNumber} route
        router.push(`/game/${roomNumber}`);
      } else {
        alert("Room not found. Please check the room ID.");
      }
      console.log("Joining room:", roomNumber);
    }
  };

  return (
    <>
      <Image
        src="/images/background_iq180.svg"
        fill={true}
        alt="Background Image"
        style={{ zIndex: -1 }}
      />
      <div className="flex flex-col items-center justify-center z-[1] h-[100vh]">
        <div className=" m-[25px] border-solid border-black border-[1px] rounded-lg flex flex-col justify-around items-center bg-[#DCDCDC] w-[500px] h-[300px]">
          <h2
            style={{
              fontWeight: "bold",
              fontSize: 32,
              color: "#737373",
            }}
          >
            Join Room
          </h2>

          <input
            type="text"
            value={roomNumber}
            onChange={(e) => setRoomNumber(e.target.value)}
            placeholder="Room No."
            className="w-[300px] h-[50px] text-black text-center border-solid border-black border-[1px]"
          />
          {/* <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-[300px] h-[50px] text-black text-center border-solid border-black border-[1px]"
          /> */}
          <div className="flex flex-row justify-around w-[250px]">
            <button
              onClick={handleJoinClick}
              className="text-white bg-gray-700 h-[40px] w-[100px] border-transparent border-solid border-[1px] rounded-xl hover:transform hover:-translate-y-1 hover:shadow-md"
            >
              Join
            </button>
            <button
              onClick={() => router.push("/")}
              className="text-white bg-gray-700 h-[40px] w-[100px] border-transparent border-solid border-[1px] rounded-xl hover:transform hover:-translate-y-1 hover:shadow-md"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
