import { useSelector } from "react-redux";
import { Avatar, Text, Flex, Heading } from "@chakra-ui/react";
import Messages from "./Messages";
import SendInput from "./SendInput";
// import OtherUser from "./OtherUser";

const ChatArea = () => {
  const { selectedUser, authUser } = useSelector((store) => store.user);

  // const dispatch = useDispatch();
  return (
    <>
      {selectedUser !== null ? (
        <Flex
          direction="column"
          minWidth={{ base: "100%", md: "550px" }}
          flexGrow={1}
          height="60vh"
        >
          {/* User info section */}
          <Flex
            gap={2}
            align="center"
            bg="gray.800"
            color="white"
            fontWeight="semibold"
            px={2}
            py={2}
            mb={2}
            h="10vh"
          >
            <Avatar
              src={selectedUser?.picture}
              size="md"
              name={selectedUser?.username}
            />
            <Flex direction="column" flex={1} h="10vh" alignContent="center">
              <Text fontWeight="semibold" fontFamily="sans-serif">
                {selectedUser.username}
              </Text>
            </Flex>
          </Flex>
          {/* Messages and Input Section */}
          <Messages />
          <SendInput />
        </Flex>
      ) : (
        <Flex
          minW={{ base: "100%", md: "550px" }} // Responsive min-width
          direction="column"
          justify="center"
          align="center"
          textAlign="center"
          h="60vh"
        >
          <Heading as="h1" size="xl" color="white" fontWeight="bold">
            {authUser?.username}
          </Heading>
          <Heading as="h2" size="lg" color="white" fontWeight="semibold">
            Lets start a conversation
          </Heading>
        </Flex>
      )}
    </>
  );
};

export default ChatArea;
