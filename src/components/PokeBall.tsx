import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Tooltip,
  Button,
  Skeleton,
} from "@chakra-ui/react";
import React, { Suspense } from "react";
const LazySplineScene = React.lazy(() => import("./utils/SplineScene"));
const PokeBall = () => {
  return (
    <Box
      mt={10}
      mb={20}
      mx={10}
      height={{
        lg: "fit-content",
        md: "fit-content",
        sm: "60dvh",
        base: "60dvh",
      }}
      marginBottom={"150px"}
    >
      <Grid
        templateColumns={{
          sm: "repeat(1, 1fr)",
          lg: "repeat(2, 1fr)",
          md: "repeat(2, 1fr)",
        }}
        templateRows={{
          sm: "repeat(2, 1fr)",
          lg: "repeat(1, 1fr)",
          md: "repeat(1, 1fr)",
        }}
        gap={5}
        height={{ lg: "100%", md: "100%", sm: "100%", base: "100%" }}
      >
        <GridItem>
          <Flex
            mx={"auto"}
            h={{ lg: "100%", md: "100%", sm: "30dvh", base: "30dvh" }}
            w={"100%"}
            alignItems="center"
            justifyContent="center"
          >
            {/*  <Spline scene="https://prod.spline.design/tPkqZm7H6mxdhn6F/scene.splinecode" /> */}
            <Suspense fallback={<Skeleton height="100px" />}>
              <LazySplineScene />
            </Suspense>
          </Flex>
        </GridItem>
        <GridItem
          mx={20}
          my={"auto"}
          textAlign={{ sm: "center", md: "start", lg: "start", base: "center" }}
        >
          <Heading
            size={{ lg: "4xl", md: "3xl", sm: "xl", base: "xl" }}
            mr={{ lg: 40, sm: 0, md: 0 }}
          >
            GOTTA CATCH 'EM ALL
          </Heading>
          <Tooltip label="Coming Soon" fontSize="md">
            <Button
              colorScheme={"yellow"}
              variant={"solid"}
              mt={"30px"}
              isDisabled={true}
            >
              Search
            </Button>
          </Tooltip>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default PokeBall;
