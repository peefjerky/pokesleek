import { Box, Button, Flex, Heading } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box
      bg="rgba(193,243,119,0.7)"
      px={4}
      backdropFilter={"blur(12px)"}
      m={"0px 10px 40px 10px"}
      borderRadius={"15px"}
      position={"sticky"}
      top={"15px"}
      zIndex={999}
      py={3}
    >
      <Flex alignItems={"center"} justifyContent={"space-between"}>
        <Heading>Pokédex</Heading>
        <Button
          variant={"solid"}
          colorScheme={"green"}
          
          size={{ base: "sm", md: "md", lg: "md" }}
          mr={4}
        >
          Github
        </Button>
      </Flex>
    </Box>
  );
};

export default Navbar;
