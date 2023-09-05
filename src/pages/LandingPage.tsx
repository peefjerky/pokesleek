import { Box } from "@chakra-ui/react";
import PokemonList from "../components/PokeList";
import PokeBall from "../components/PokeBall";

const LandingPage = () => {
  return (
    <Box>
      <PokeBall />
      <PokemonList />
    </Box>
  );
};

export default LandingPage;
