import { Flex, Text, Container } from "@chakra-ui/react";
import React, { useState } from "react";
import { useApp } from "../../contexts/ApiContext";

export const Draggable = () => {
//   const testCardItem = [
//     { label: "Estudar 3 horas", id: 1 },
//     { label: "Ir malhar", id: 2 },
//     { label: "Trabalhar", id: 3 },
//   ];
const {testItems}: any = useApp();

//   const [testItems, setTestItems] = useState(testCardItem);

  return (
    <Flex h="100%" w="100%" m="0 auto" flexDir="column">
      {testItems.map((item: any) => {
        return (
          <Flex m="10px" key={item.id}>
            <Container
              _hover={{ bgColor: "#bbb" }}
              p="10px"
              textAlign="center"
              borderRadius="6px"
              bgColor="#fff"
              cursor="pointer"
              color="#333"
            >
              <Text color="#333" fontSize="15px">
                {item.label}
              </Text>
            </Container>
          </Flex>
        );
      })}
    </Flex>
  );
};
