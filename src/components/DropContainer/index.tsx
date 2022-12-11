import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { Droppable } from "../Droppable";

const data = {
  lanes: [
    {
      id: "lane1",
      title: "Planned Tasks",
      label: "2/2",
      cards: [
        {
          id: "Card1",
          title: "Write Blog",
          description: "Can AI make memes",
          label: "30 mins",
          draggable: false,
        },
        {
          id: "Card2",
          title: "Pay Rent",
          description: "Transfer via NEFT",
          label: "5 mins",
          metadata: { sha: "be312a1" },
        },
      ],
    },
    {
      id: "lane2",
      title: "Completed",
      label: "0/0",
      cards: [],
    },
  ],
};

export const DropContainer = () => {
  return (
    <Flex
      flexDir="column"
      align="center"
      w="300px"
      p="10px"
      h="550px"
      bgColor="#19647E"
      borderRadius="10px"
    >
      <Text textAlign="center" fontWeight="600" color="#fff">
        DropContainer
      </Text>
      <Droppable />
    </Flex>
  );
};
