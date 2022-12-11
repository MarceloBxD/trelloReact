import React, { useState } from "react";
import { Flex, Button, Input } from "@chakra-ui/react";
import { Droppable } from "../Droppable";
import { EditIcon, CloseIcon, CheckIcon } from "@chakra-ui/icons";
import {
  Editable,
  EditableInput,
  EditablePreview,
  useEditableControls,
  IconButton,
  ButtonGroup,
} from "@chakra-ui/react";
import { useApp } from "../../contexts/ApiContext";

export const DropContainer = () => {
  const {
    showInputTitle,
    setShowInputTitle,
    showButtonTitle,
    setShowButtonTitle,
    showTitle,
    setShowTitle,
    title,
    setTitle,
  }: any = useApp();
  //   const [showInputTitle, setShowInputTitle] = useState<boolean>(false);
  //   const [showButtonTitle, setShowButtonTitle] = useState<boolean>(true);
  //   const [showTitle, setShowTitle] = useState<boolean>(false);
  //   const [title, setTitle] = useState<string>("");

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

  function EditableControls() {
    const {
      isEditing,
      getSubmitButtonProps,
      getCancelButtonProps,
      getEditButtonProps,
    } = useEditableControls();

    return isEditing ? (
      <Flex justify="space-around">
        <ButtonGroup justifyContent="center" alignItems="center">
          <Button
            size="sm"
            rightIcon={<CheckIcon />}
            {...getSubmitButtonProps()}
          />
          <Button
            size="sm"
            rightIcon={<CloseIcon />}
            {...getCancelButtonProps()}
          />
        </ButtonGroup>
      </Flex>
    ) : (
      <Flex w="100%">
        <Flex align="center" justifyContent="space-between">
          <Button
            size="sm"
            rightIcon={<EditIcon />}
            {...getEditButtonProps()}
          />
        </Flex>
      </Flex>
    );
  }

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
          variant="flushed"
          placeholder="Título"
        />
      )}
      {showTitle && (
        <Flex bgColor="#333" w="100%" m="5px" borderRadius="8px">
          <Flex p="5px" w="100%" justify="space-between">
            <Editable
              color="#FFF"
              display="flex"
              w="100%"
              p="5px"
              defaultValue={title}
              isPreviewFocusable={true}
            >
              <EditablePreview />
              <Input as={EditableInput} />
              <EditableControls />
            </Editable>
          </Flex>
        </Flex>
      )}
      <Droppable />
    </Flex>
  );
};
