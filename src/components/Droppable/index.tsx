import { Flex, Button, Input } from "@chakra-ui/react";
import { Draggable } from "../Draggable";
import React from "react";
import { AddIcon } from "@chakra-ui/icons";
import { useApp } from "../../contexts/ApiContext";

export const Droppable = () => {
  const { testItems, showInput, setShowInput }: any = useApp();

  return (
    <Flex flexDir="column" w="100%" h="95%" mt="10px">
      <Draggable />
      {showInput && <Input placeholder="valor..." />}
      <Button leftIcon={<AddIcon />} w="100%" opacity="0.6">
        Adicionar um cartão
      </Button>
    </Flex>
  );
};
