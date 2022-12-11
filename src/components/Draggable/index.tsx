import { Flex, Text, Container } from "@chakra-ui/react";
import React, { useState } from "react";

export const Draggable = () => {
  const testCardItem = [
    { label: "Card 1", id: 1 },
    { label: "Card 2", id: 2 },
    { label: "Card 3", id: 3 },
  ];

  const [testItems, setTestItems] = useState(testCardItem);

  return (
    <Flex h="100%" w="100%" m="0 auto" flexDir="column">
      {testItems.map((item) => {
        return (
          <Flex m="10px" key={item.id}>
            <Container p="10px" textAlign="center" bgColor="#333" color="#fff">
              <Text cursor="pointer" textDecor="underline">
                {item.label}
              </Text>
            </Container>
          </Flex>
        );
      })}
    </Flex>
  );
};
