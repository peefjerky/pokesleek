import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import Cards from "./Cards";
import {
  Box,
  Grid,
  GridItem,
  Button,
  Flex,
  Center,
  Circle,
  IconButton,
  Heading,
  HStack,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";
import SkeletonGrid from "./utils/Skeleton";
import ParallaxTextEffect from "./utils/ParallaxText";
import {
  BsArrowUpRightSquareFill,
  BsFillCartPlusFill,
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from "react-icons/bs";

interface Pokemon {
  name: string;
  url: string;
}

interface PokemonType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

interface PokemonDetails {
  id: number;
  weight: number;
  color: string;
  stats: {
    base_stat: number;
    effort: number;
    stat: {
      name: string;
    };
  }[];
  name: string;
  sprites: {
    front_default: string;
  };
  types: PokemonType[];
}

const glassBackground = {
  transition: "500ms ease-in-out",
  backdropFilter: "blur(12px)",
  background:
    "linear-gradient(180deg, rgba(248, 249, 253, 0.4) 0%, rgba(193, 243, 119, 1) 100%)",
};

const fetchPokemons = async (
  page: number,
  limit: number
): Promise<Pokemon[]> => {
  const offset = (page - 1) * limit;
  const response = await axios.get(
    `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`
  );
  return response.data.results;
};

const fetchPokemonDetails = async (url: string): Promise<PokemonDetails> => {
  const response = await axios.get(url);
  return response.data;
};

function PokemonList() {
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 21; // Number of Pokémon per page

  const {
    data: pokemons,
    isLoading,
    isError,
  } = useQuery<Pokemon[]>(["pokemons", currentPage, limit], () =>
    fetchPokemons(currentPage, limit)
  );

  const [pokemonDetails, setPokemonDetails] = useState<PokemonDetails[]>([]);

  useEffect(() => {
    const fetchDetails = async () => {
      if (pokemons) {
        const details = await Promise.all(
          pokemons.map((pokemon) => fetchPokemonDetails(pokemon.url))
        );
        setPokemonDetails(details);
      }
    };

    fetchDetails();
  }, [pokemons]);
  if (isLoading) {
    return <SkeletonGrid />;
  }

  if (isError) {
    return <div>Error loading data</div>;
  }

  return (
    <Box position={"relative"} mx={{ base: 5, md: "30px", lg: 50 }} mb={40}>
      <Box
        // mx={{ base: -5, md: "-30", lg: -50 }}
        position={"absolute"}
        zIndex={0}
        mx={{ base: -5, md: "-30px", lg: -50 }}
        top={{ base: "-55px", md: "-50px", lg: "-1.8%" }}
        overflow={"hidden"}
        maxW={"100dvw"}
      >
        <ParallaxTextEffect>
          <Center>
            <Heading
              as={"h1"}
              fontSize={{ lg: "96px", md: "64px", base: "64px" }}
              letterSpacing={"-2px"}
              fontWeight={600}
              m={0}
            >
              Search Pokemon
            </Heading>
            <Circle size={"15px"} bg={"brand.main"} mx={"20px"} />
          </Center>
        </ParallaxTextEffect>
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
            sm: "repeat(1,1fr)",
          }}
          gap={{ base: 5, md: 7, lg: 10 }}
          as="header"
          mb={"40px"}
          bg={""}
          height={"max-content"}
        >
          {pokemonDetails.map((pokemon) => (
            <GridItem key={pokemon.id}>
              <Cards pokemon={pokemon} />
            </GridItem>
          ))}
        </Grid>

        <Box>
          {/* //* Prev, Next  buttons */}

          <Center>
            <Box
              width={"fit-content"}
              height={"fit-content"}
              bg="brand.main"
              backgroundPosition={"left"}
              backgroundSize={"100%"}
              mx={"auto"}
              pt={7}
              pb={4}
              px={7}
              borderRadius={"15px"}
              position={"absolute"}
              bottom={{ base: "-40px", md: "-50px", lg: "-60px" }}
              zIndex={13}
            >
              <Box>
                <HStack justify={"space-between"}>
                  <Button
                    leftIcon={<BsFillArrowLeftSquareFill fontSize="20px" />}
                    onClick={() =>
                      setCurrentPage((currentPage) =>
                        Math.max(currentPage - 1, 1)
                      )
                    }
                    isDisabled={currentPage === 1}
                  >
                    Previous
                  </Button>
                  <Button
                    bg="yellow"
                    rightIcon={<BsFillArrowRightSquareFill fontSize="20px" />}
                    onClick={() =>
                      setCurrentPage((currentPage) => currentPage + 1)
                    }
                    disabled={!pokemonDetails || pokemonDetails.length < limit}
                  >
                    Next
                  </Button>
                </HStack>
              </Box>
            </Box>
          </Center>
        </Box>
      </Box>
    </Box>
  );
}

export default PokemonList;
