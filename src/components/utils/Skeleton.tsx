import React from "react";
import { Box, Grid, GridItem, Skeleton } from "@chakra-ui/react";

const glassBackground = {
  transition: "500ms ease-in-out",
  backdropFilter: "blur(12px)",
  background:
    "linear-gradient(180deg, rgba(248, 249, 253, 0.4) 0%, rgba(193, 243, 119, 1) 100%)",
};
const SkeletonGrid = () => {
  const skeletonData = new Array(6).fill(null); // Create an array of 6 null values

  return (
    <Box position={"relative"} mx={{ base: 5, md: "30px", lg: 50 }}>
      <Box mx={{ base: 5, md: "30px", lg: 50 }} mb={"140px"}>
        <Box
          mx={{ base: -5, md: "-30", lg: -50 }}
          position={"absolute"}
          zIndex={0}
          top={{ base: "-55px", md: "-50px", lg: "-6%" }}
          overflow={"hidden"}
          maxW={"100dvw"}
        >
          {/* <ParallaxTextEffect>
            <Center>
              <Heading
                as={"h1"}
                fontSize={{ lg: "96px", md: "64px", base: "64px" }}
                letterSpacing={"-2px"}
                fontWeight={600}
                m={0}
              >
                Latest Drops
              </Heading>
              <Circle size={"15px"} bg={"brand.main"} mx={"20px"} />
            </Center>
          </ParallaxTextEffect> */}
        </Box>
        <Box
          p={"50px"}
          bg={"brand.background"}
          borderRadius={"15px"}
          sx={glassBackground}
          zIndex={12}
          position={"relative"}
        >
          <Grid
            templateColumns={{
              lg: "repeat(3, 1fr)",
              md: "repeat(2,1fr)",
              sm: "repeate(1,1fr)",
            }}
            gap={{ base: 5, md: 7, lg: 10 }}
            as="header"
            mb={"150px"}
            bg={""}
            height={"max-content"}
          >
            {skeletonData.map((_, index) => (
              <GridItem key={index}>
                <Skeleton h={"530px"} maxW={"330px"} borderRadius={"12px"} />
              </GridItem>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default SkeletonGrid;
