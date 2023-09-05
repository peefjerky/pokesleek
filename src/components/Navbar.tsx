import { Box, Button, Flex, Heading, Link } from "@chakra-ui/react";
import { BsGithub } from "react-icons/bs";

const Navbar = () => {
  return (
    <Box
      bg="#FFCB05b3"
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
        <Heading>PokéSleek</Heading>
        <Link href="https://github.com/peefjerky/pokesleek" isExternal>
          <Button
            variant={"outline"}
            colorScheme={"github"}
            leftIcon={<BsGithub />}
            color={"brown"}
            size={{ base: "sm", md: "md", lg: "md" }}
            mr={4}
          >
            Github
          </Button>
        </Link>
      </Flex>
    </Box>
  );
};

export default Navbar;
