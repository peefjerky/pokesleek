import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  Image,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Stack,
  Stat,
  StatLabel,
  HStack,
  StatNumber,
  Progress,
  
  Grid,
  GridItem,
} from "@chakra-ui/react";

interface StatComponentProps {
  name: string;
  sprite: string;
  color: string;
  stats: {
    base_stat: number;
    effort: number;

    stat: {
      name: string;
    };
  }[];
  isOpen: boolean;
  onClose: () => void;
}
const Stats: React.FC<StatComponentProps> = ({
  name,
  stats,
  sprite,
  color,
  isOpen,
  onClose,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size={"2xl"}
      closeOnOverlayClick={true}
      isCentered={true}
      motionPreset="slideInBottom"
    >
      <ModalOverlay bg={`${color}` + 59} backdropFilter="blur(10px)" />
      <ModalContent bg={"white"} borderRadius={"xl"}>
        <ModalHeader fontSize={"2xl"} color={`${color}`}>
          {name.toUpperCase()}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody m={"10px"}>
          <Grid
            gap={5}
            templateColumns={{
              lg: "repeat(2,1fr)",
              sm: "repeat(1,1fr)",
              md: "repeat(2,1fr)",
            }}
            templateRows={{
              lg: "repeat(1,1fr)",
              sm: "repeat(2,1fr)",
              md: "repeat(1,1fr)",
            }}
          >
            <GridItem
              justifyContent={"center"}
              alignItems={"center"}
              my={"auto"}
            >
              <Image
                rounded={"15px"}
                height={"250px"}
                width={"auto"}
                mx={"auto"}
                objectFit={"fill"}
                src={sprite}
              />
            </GridItem>
            <GridItem>
              {" "}
              <Stack spacing={0}>
                {stats.map((stat, index) => (
                  <Stat key={index}>
                    <HStack spacing={5} mb={1}>
                      <StatLabel>
                        {stat.stat.name.toUpperCase()}
                        {" : "}
                      </StatLabel>
                      <StatNumber>{stat.base_stat}</StatNumber>
                    </HStack>
                    <Progress
                      isAnimated={true}
                      value={stat.base_stat}
                      size={"lg"}
                      mb={7}
                      borderRadius={"lg"}
                      colorScheme="yellow"
                    />
                  </Stat>
                ))}
              </Stack>
            </GridItem>
          </Grid>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="yellow" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default Stats;
