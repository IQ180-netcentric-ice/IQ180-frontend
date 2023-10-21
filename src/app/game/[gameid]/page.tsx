"use client";

import PlayRoom from "@/app/components/multiple/play-room";
import StandbyRoom from "@/app/components/multiple/standby-room";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { w3cwebsocket as W3CWebSocket } from "websocket";

export default function Page() {
  // { params }
  // const gameid = params.gameid;
  // const client = new W3CWebSocket(
  //   "ws://127.0.0.1:8000/ws/game/" + gameid + "/"
  // );
  // const game_data = {
  //   type: "game_data",
  //   player_data: {
  //     player1: {
  //       name: "Men",
  //       point: 53333,
  //       turn: false,
  //     },
  //     player2: {
  //       name: "Kao",
  //       point: 5,
  //       turn: true,
  //     },
  //   },
  // };
  // // WebSocket onopen event handler
  // client.onopen = () => {
  //   console.log("WebSocket connection is open.");
  //   client.send(JSON.stringify(game_data));
  //   // You can send initial messages or perform other actions here
  // };
  // // WebSocket onmessage event handler
  // client.onmessage = (event) => {
  //   const data = event.data;

  //   if (typeof data === "string") {
  //     const message = JSON.parse(data);

  //     if (message.room_group_id) {
  //       console.log("Room Group ID:", message.room_group_id);
  //     }

  //     if (message.player_data) {
  //       const players = message.player_data;
  //       for (const playerKey in players) {
  //         if (players.hasOwnProperty(playerKey)) {
  //           const player = players[playerKey];
  //           console.log(
  //             `Player ${playerKey} - Name: ${player.name}, Points: ${player.point}, Turn: ${player.turn}`
  //           );
  //         }
  //       }
  //     }
  //   } else {
  //     console.log("Received non-string data:", data);
  //   }
  // };

  // // WebSocket onclose event handler
  // client.onclose = (event) => {
  //   if (event.wasClean) {
  //     console.log(
  //       `Connection closed cleanly, code=${event.code}, reason=${event.reason}`
  //     );
  //   } else {
  //     console.error("Connection abruptly closed");
  //   }
  //   // You can attempt to reconnect or handle the close event as needed
  // };

  // // WebSocket onerror event handler
  // client.onerror = (error) => {
  //   console.error("WebSocket error:", error);
  //   // Handle any errors that occur during the connection
  // };
  // // Function to close the WebSocket connection
  // const closeConnection = () => {
  //   client.close();
  // };

  const playerOne = true;

  const time = 6;
  const initialTime = time;

  return (
    <>
      {playerOne && (time > initialTime / 2 ? <PlayRoom /> : <StandbyRoom />)}
      {!playerOne && (time > initialTime / 2 ? <StandbyRoom /> : <PlayRoom />)}
    </>
  );
}
