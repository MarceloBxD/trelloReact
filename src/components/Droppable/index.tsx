import { Flex, Button } from "@chakra-ui/react";
import { Draggable } from "../Draggable";
import React from "react";

export const Droppable = () => {
  return (
    <Flex flexDir="column" w="100%" h="90%" mt="10px">
      <Draggable />
      <Button w="100%" opacity="0.6">
        Adicionar um cartão
      </Button>
    </Flex>
  );
};
