import { Flex } from "@chakra-ui/react";
import { Draggable } from "../Draggable";
import React from "react";

export const Droppable = () => {
  return (
    <Flex w="80%" h="90%" mt="10px" border="1px solid #fff" borderRadius="5px">
      <Draggable />
    </Flex>
  );
};
