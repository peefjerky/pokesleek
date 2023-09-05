import Spline from "@splinetool/react-spline";
import { Box } from "@chakra-ui/react";

const SplineScene = () => {
  return (
    <Box h={"inherit"} overflow={"hidden"}>
      <Spline scene="https://prod.spline.design/w3IJ7dQixjPMqiLB/scene.splinecode" />
    </Box>
  );
};

export default SplineScene;
