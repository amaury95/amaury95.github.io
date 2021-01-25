import React, { useState } from "react";
import { Typography } from "@material-ui/core";

interface EmploymentCardProps {
  text: string;
}

const EmploymentCard = ({ text }: EmploymentCardProps) => {
  const [message, setMessage] = useState("");

  const enterHandler = () => setMessage("more details...");
  const leaveHandler = () => setMessage("");

  return (
    <div onMouseEnter={enterHandler} onMouseLeave={leaveHandler}>
      <Typography variant="h4" paragraph>
        <b>{text}</b> {message}
      </Typography>
    </div>
  );
};

export default EmploymentCard;
