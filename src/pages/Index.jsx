import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function Index() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (inputValue.trim() !== "") {
      const newMessage = {
        id: messages.length + 1,
        sender: "You",
        content: inputValue,
        timestamp: new Date().toLocaleTimeString(),
      };
      setMessages([...messages, newMessage]);
      setInputValue("");
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col w-full h-full">
      <header className="flex items-center justify-between p-4 border-b">
        <h1 className="text-xl font-semibold">Chat Room</h1>
      </header>
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div key={message.id} className="flex flex-col">
            <span className="font-semibold">{message.sender}</span>
            <span>{message.content}</span>
            <span className="text-xs text-muted-foreground">{message.timestamp}</span>
          </div>
        ))}
      </div>
      <footer className="flex items-center p-4 border-t">
        <Input
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="Type your message..."
          className="flex-1 mr-2"
        />
        <Button onClick={handleSendMessage}>Send</Button>
      </footer>
    </div>
  );
}

export default Index;