import "./App.css";
import { Flex, Text } from "@chakra-ui/react";
import { Header } from "./sections/Header";
import { Main } from "./sections/Main";

function App() {
  return (
    <Flex flexDir="column" h="100vh" w="100%">
      <Header />
      <Main />
    </Flex>
  );
}

export default App;
