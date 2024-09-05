import React, { useState } from "react";
import axios from "axios"; // Para fazer as requisições HTTP
import "./Chatbot.css";
import robotIcon from '../assets/robot-icon.png';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Olá! Como posso ajudar?" },
  ]);
  const [userInput, setUserInput] = useState("");

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const sendMessage = async () => {
    if (!userInput.trim()) return;

    const newMessage = { from: "user", text: userInput };
    setMessages([...messages, newMessage]);

    try {
      const response = await axios.post("http://localhost:5000/api/chatbot", {
        message: userInput,
      });

      const botReply = response.data.reply;

      setMessages((prevMessages) => [
        ...prevMessages,
        { from: "bot", text: botReply },
      ]);
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
    }

    setUserInput("");
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-icon" onClick={toggleChatbot}>
        <img src={robotIcon} alt="Chatbot Icon" />
      </div>

      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <span>Chatbot</span>
            <button onClick={toggleChatbot}>X</button>
          </div>
          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <p key={index} className={msg.from}>
                {msg.text}
              </p>
            ))}
          </div>
          <div className="chatbot-input">
            <input
              type="text"
              value={userInput}
              onChange={handleInputChange}
              placeholder="Digite sua mensagem..."
            />
            <button onClick={sendMessage}>Enviar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
