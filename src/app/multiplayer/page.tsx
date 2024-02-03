"use client";
import { useState, useEffect } from "react";
import { io } from "socket.io-client";
import axios from "axios";

const socket = io("http://localhost:8080");

export default function Page() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getFakeName = async () => {
      const response = await axios.get<{ name: string }>(
        "https://api.namefake.com/random/random"
      );
      const { name } = response.data;
      console.log(name);
    };
    getFakeName();
    socket.on("connection", () => {
      console.log("Connected to server");
      setLoading(false);
    });

    socket.emit("join room", () => {
      console.log("Joined room");
    });
  }, []);

  return (
    <div>
      <h1>Multiplayer</h1>
    </div>
  );
}
