import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMessages } from "../redux/messageSlice";
import { Box, Input, Button } from "@chakra-ui/react";

const SendInput = () => {
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const { selectedUser } = useSelector((store) => store.user);
  const { messages } = useSelector((store) => store.messages);

  const onSubmitHandler = async (e) => {
    e.preventDefault;

    try {
      const res = await axios.post(
        `http://localhost:8080/api/chats/send/${selectedUser?._id}`,
        { message },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      dispatch(setMessages([...messages, res.data.newMessage]));
    } catch (err) {
      console.log(err);
    }
    setMessage(" ");
  };
  return (
    <Box
      as="form"
      onSubmit={onSubmitHandler}
      display="flex"
      alignItems="center"
    >
      <Input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
        mr={2} // Margin right for spacing between input and button
        variant="outline"
      />
      <Button type="submit" colorScheme="teal">
        Send
      </Button>
    </Box>
  );
};

export default SendInput;
