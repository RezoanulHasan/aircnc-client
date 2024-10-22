import React, { useState } from "react";
import { useQuery } from "react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const ChatBase = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const { data: stats = {} } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure("/admin-stats");
      return res?.data;
    },
  });

  const handleSend = () => {
    const message = input.trim();
    if (message) {
      const responseMessage = getResponse(message);
      setMessages((prev) => [
        ...prev,
        { text: message, isUser: true },
        { text: responseMessage, isUser: false },
      ]);
      setInput("");
    }
  };

  const getResponse = (message) => {
    switch (message.toLowerCase()) {
      case "revenue":
        return `Current Revenue: $${stats?.revenue}`;
      case "users":
        return `Total Users: ${stats?.users}`;
      case "rooms":
        return `Total Rooms: ${stats?.rooms}`;
      case "bookings":
        return `Total Bookings: ${stats?.booking}`;
      default:
        return "I'm sorry, I didn't understand that. Try asking about revenue, users, rooms, or bookings.";
    }
  };

  return (
    <div className="chat-container w-full p-8 bg-gray-100">
      <h2 className="text-4xl font-bold mb-6 text-gray-700">
        Welcome to the Admin Chat, {user?.displayName}!
      </h2>
      <div className="chat-window h-96 border border-gray-300 rounded-lg p-4 overflow-y-auto mb-4 bg-white">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${
              msg.isUser ? "text-right" : "text-left"
            } mb-2`}
          >
            <p
              className={`inline-block p-2 rounded-lg ${
                msg.isUser ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
            >
              {msg.text}
            </p>
          </div>
        ))}
      </div>
      <div className="input-area flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSend()}
          placeholder="Type your message..."
          className="flex-grow border border-gray-300 rounded-l-lg p-2"
        />
        <button
          onClick={handleSend}
          className="bg-blue-500 text-white rounded-r-lg px-4"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBase;
