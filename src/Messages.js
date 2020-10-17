import React from "react";
import "./Message.css";
import { Avatar } from "@material-ui/core";

function Messages() {
  return (
    <div className="message">
      <Avatar />
      <div className="message__info">
        <h4>
          Sonny Sangha
          <span className="message__timestamp">this is a timestamp</span>{" "}
        </h4>
        <p>This is a message</p>
      </div>
    </div>
  );
}

export default Messages;
