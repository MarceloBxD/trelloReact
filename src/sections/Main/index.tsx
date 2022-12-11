import { Flex, Text } from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import { DropContainer } from "../../components/DropContainer";
import React from "react";

export const Main = () => {
  return (
    <Flex gap="10px" flexDir="column" p="20px">
      <Text m="0 auto" fontWeight="bold" letterSpacing="2px" fontSize="25px">
        Trello
      </Text>
      <DropContainer />
      <EditIcon position="fixed" bottom="20px" right="20px" cursor="pointer" />
    </Flex>
  );
};
