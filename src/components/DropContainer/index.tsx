import React, { useState } from "react";
import { Flex, Text, Button, Input } from "@chakra-ui/react";
import { Droppable } from "../Droppable";

export const DropContainer = () => {
  const [showInputTitle, setShowInputTitle] = useState<boolean>(false);
  const [showButtonTitle, setShowButtonTitle] = useState<boolean>(true);
  const [showTitle, setShowTitle] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");

  const handleShow = () => {
    setShowInputTitle(!showInputTitle);
    setShowButtonTitle(!showButtonTitle);
  };

  const handleEnter = (e: any) => {
    if (e.key === "Enter") {
      handleShow();
      setShowTitle(!showTitle);
    }
  };

  return (
    <Flex
      flexDir="column"
      align="center"
      w="250px"
      p="10px"
      h="550px"
      bgColor="#CCC"
      borderRadius="10px"
    >
      {showButtonTitle && (
        <Button
          visibility={showTitle ? "hidden" : "visible"}
          onClick={handleShow}
          color="#fff"
          variant="link"
        >
          Adicionar Título
        </Button>
      )}
      {showInputTitle && (
        <Input
          color="#fff"
          onKeyDown={handleEnter}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          mt="5px"
          w="80%"
          h="40px"
          placeholder="Título"
        />
      )}
      {showTitle && (
        <Flex
          bgColor="#333"
          justify="center"
          w="100%"
          p="6px"
          borderRadius="8px"
          align="flex-start"
        >
          <Text
            color="#fff"
            fontSize="17px"
            letterSpacing="2px"
          >
            {title}
          </Text>
        </Flex>
      )}
      <Droppable />
    </Flex>
  );
};
