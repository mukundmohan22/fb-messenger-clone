import React, { forwardRef } from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import "./Message.css";

const Message = forwardRef(({ currentUser, message }, ref) => {
  const isUser = currentUser === message.userName;
  return (
    <Card ref={ref} className={`message ${isUser && 'message__user'}`}>
      <CardContent>
        <Typography
          component="p"
          variant="inherit"
          color="inherit" >
          {!isUser && `${message.userName || 'anonymous'} : `}{message.message}
        </Typography>
      </CardContent>
    </Card>
  )
})

export default Message
