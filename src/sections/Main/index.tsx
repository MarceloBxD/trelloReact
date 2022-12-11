import { Flex, Text } from "@chakra-ui/react";
import { DropContainer } from "../../components/DropContainer";
import React from "react";

export const Main = () => {
  return (
    <Flex gap="10px" align="center" flexDir="column" p="20px">
      <Text fontWeight="bold" letterSpacing="2px" fontSize="25px">
        Trello
      </Text>
      <DropContainer />
    </Flex>
  );
};
