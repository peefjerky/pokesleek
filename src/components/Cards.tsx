import { useEffect, useState } from "react";
import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Divider,
  Text,
  Stack,
  Flex,
  Image,
  Tag,
  VStack,
  Button,
  useDisclosure,
} from "@chakra-ui/react";

import { Reveal } from "./utils/Reveal";
import Stats from "./Stats";

interface PokemonType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface PokemonDetails {
  stats: {
    base_stat: number;
    effort: number;
    stat: {
      name: string;
    };
  }[];
  weight: number;
  id: number;

  name: string;
  sprites: {
    front_default: string;
  };
  types: PokemonType[];
}

interface CardsProps {
  pokemon: PokemonDetails;
}

const Cards: React.FC<CardsProps> = ({ pokemon }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [tagColor, setTagColor] = useState("brand.main");
  useEffect(() => {
    switch (pokemon.types[0].type.name) {
      case "fire":
        setTagColor("#F07F2F");
        break;
      case "grass":
        setTagColor("#78C84F");
        break;
      case "steel":
        setTagColor("#B8B8D0");
        break;
      case "normal":
        setTagColor("#A9A878");
        break;
      case "water":
        setTagColor("#6890F0");
        break;
      case "poison":
        setTagColor("#A040A1");
        break;
      case "electric":
        setTagColor("#F8D030");
        break;
      case "ice":
        setTagColor("#98D8D8");
        break;
      case "fighting":
        setTagColor("#C03027");
        break;
      case "ground":
        setTagColor("#E0C069");
        break;
      case "flying":
        setTagColor("#A890F0");
        break;
      case "rock":
        setTagColor("#B7A038");
        break;
      case "dark":
        setTagColor("#6F5848");
        break;
      case "psychic":
        setTagColor("#F85888");
        break;
      case "ghost":
        setTagColor("#705798");
        break;
      case "bug":
        setTagColor("#A8B821");
        break;
      case "dragon":
        setTagColor("#7038F9");
        break;
      case "fairy":
        setTagColor("#FFA3B1");
        break;
      // Add more cases as needed
      default:
        // Handle the default case here
        break;
    }
  }, []);

  return (
    <Center py={12}>
      <Box
        role={"group"}
        p={6}
        maxW={{ lg: "330px", base: "300px" }}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={`8px 8px 24px -12px ${tagColor}`}
        /*  shadow={"outline"} */
        borderRadius={"15px"}
        pos={"relative"}
        zIndex={1}
        overflow={"hidden"}
        transition={"500ms ease-in-out"}
        _hover={{
          transform: "scale(1.05)",
          boxShadow: `12px 12px 30px -6px ${tagColor}`,
        }}
      >
        <Box
          rounded={"lg"}
          mt={0}
          mx={"auto"}
          pos={"relative"}
          height={"230px"}
          _after={{
            transition: "all .5s ease-in-out",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            backgroundImage: `url(${pokemon.sprites.front_default})`,
            filter: "blur(24px)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            transform: "scale(2)",
            objectFit: "cover",

            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(50px)",
              transform: "scale(3)",
            },
          }}
        >
          <Image
            rounded={"15px"}
            height={230}
            width={"auto"}
            mx={"auto"}
            objectFit={"fill"}
            src={pokemon.sprites.front_default}
          />
        </Box>
        <Stack pt={10} spacing={"20px"}>
          <Tag
            textColor="white"
            bg={`${tagColor}`}
            size={"md"}
            alignSelf={"center"}
            textTransform={"uppercase"}
          >
            {pokemon.types[0].type.name}
          </Tag>
          <Divider />
          <Flex justify={"space-between"} align={"center"} w="100%">
            <Reveal>
              <Heading fontSize={"xl"} alignSelf={"center"} m={0}>
                {pokemon.name.toUpperCase()}
              </Heading>
            </Reveal>
            <VStack align={"flex-end"} gap={0}>
              <Reveal>
                <Text fontSize={"md"} align={"start"} color={"blackAlpha.500"}>
                  Weight: {Math.floor(pokemon.weight * 0.1)} Kgs
                </Text>
                {/*  <Text fontSize={"sm"} align={"start"} color={"blackAlpha.500"}>
                  Stats:
                </Text> */}
              </Reveal>
            </VStack>
          </Flex>
          <Flex alignItems={"center"} justifyContent={"center"}>
            <Reveal>
              <Button fontSize={"xl"} onClick={onOpen}>
                View Stats
                <Stats
                  isOpen={isOpen}
                  onClose={onClose}
                  stats={pokemon.stats}
                  name={pokemon.name}
                  sprite={pokemon.sprites.front_default}
                  color={tagColor}
                ></Stats>
              </Button>
              {/*  {pokemon.stats.map((stat, index) => (
                <div key={index}>
                  <p>
                    {stat.stat.name.toUpperCase()}: {stat.base_stat}
                  </p>
                </div>
              ))} */}
            </Reveal>
          </Flex>
        </Stack>
      </Box>
    </Center>
  );
};

export default Cards;
